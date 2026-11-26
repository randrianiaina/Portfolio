// Questions-réponses sur documents : découpage, recherche BM25, réponse extractive citée.
// Aucune génération libre : la réponse ne contient que des phrases du document, ou un refus explicite.
(function (root) {
  const STOP = new Set(("le la les un une des du de d l et ou en au aux a à est sont ce cet cette ces qui que quoi " +
    "dont pour par sur dans avec sans pas ne plus il elle ils elles on nous vous je tu se sa son ses leur leurs " +
    "y quel quelle quels quelles comment combien quand est-ce the a an of to in is are and or for on with what how " +
    "when which who does do").split(" "));

  function tokenize(text) {
    return text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
      .split(/[^a-z0-9]+/).filter((w) => w.length > 1 && !STOP.has(w))
      .map((w) => (w.length > 4 ? w.replace(/(es|s|x)$/, "") : w)); // shortcut: pseudo-racinisation, un vrai stemmer si besoin
  }

  function sentences(text) {
    return text.split(/(?<=[.!?])\s+|\n+/).map((s) => s.trim()).filter(Boolean);
  }

  // Passages d'environ `size` mots, sans couper une phrase.
  function chunk(text, size = 60) {
    const out = [];
    let cur = [];
    for (const s of sentences(text)) {
      cur.push(s);
      if (cur.join(" ").split(/\s+/).length >= size) { out.push(cur.join(" ")); cur = []; }
    }
    if (cur.length) out.push(cur.join(" "));
    return out.map((text, i) => ({ id: i + 1, text, tokens: tokenize(text) }));
  }

  function search(chunks, query, k = 3, k1 = 1.5, b = 0.75) {
    const q = [...new Set(tokenize(query))];
    if (!q.length || !chunks.length) return [];
    const avg = chunks.reduce((s, c) => s + c.tokens.length, 0) / chunks.length;
    const df = Object.fromEntries(q.map((t) => [t, chunks.filter((c) => c.tokens.includes(t)).length]));
    return chunks.map((c) => {
      let score = 0;
      for (const t of q) {
        const tf = c.tokens.filter((x) => x === t).length;
        if (!tf) continue;
        const idf = Math.log(1 + (chunks.length - df[t] + 0.5) / (df[t] + 0.5));
        score += idf * (tf * (k1 + 1)) / (tf + k1 * (1 - b + (b * c.tokens.length) / avg));
      }
      return { ...c, score };
    }).filter((c) => c.score > 0).sort((a, b) => b.score - a.score).slice(0, k);
  }

  // Couverture minimale des termes de la question pour répondre ; en dessous, on refuse plutôt que d'inventer.
  function answer(chunks, query, minCoverage = 0.5) {
    const q = [...new Set(tokenize(query))];
    const hits = search(chunks, query);
    const best = [];
    for (const h of hits) {
      for (const s of sentences(h.text)) {
        const st = new Set(tokenize(s));
        const cov = q.filter((t) => st.has(t)).length / (q.length || 1);
        if (cov > 0) best.push({ sentence: s, source: h.id, cov });
      }
    }
    best.sort((a, b) => b.cov - a.cov);
    if (!best.length || best[0].cov < minCoverage) {
      return { answer: null, citations: hits, reason: "Le document ne contient pas de réponse fiable à cette question." };
    }
    const picked = best.filter((x) => x.cov >= minCoverage).slice(0, 2);
    return { answer: picked, citations: hits, coverage: picked[0].cov };
  }

  const api = { tokenize, chunk, search, answer };
  if (typeof module !== "undefined") module.exports = api;
  else root.Rag = api;
})(this);
