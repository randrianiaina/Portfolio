// Logique pure du tableau de bord KPI : partagée par la page démo et les tests Node.
(function (root) {
  function splitLine(line, sep) {
    const out = [];
    let cur = "", quoted = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') {
        if (quoted && line[i + 1] === '"') { cur += '"'; i++; } else quoted = !quoted;
      } else if (c === sep && !quoted) { out.push(cur.trim()); cur = ""; }
      else cur += c;
    }
    out.push(cur.trim());
    return out;
  }

  // Colonnes attendues : date, region, produit, montant. Séparateur , ou ; détecté.
  function parseSales(text) {
    const lines = text.replace(/^﻿/, "").split(/\r?\n/).filter((l) => l.trim());
    if (!lines.length) return { rows: [], errors: ["Fichier vide"] };
    const sep = (lines[0].match(/;/g) || []).length > (lines[0].match(/,/g) || []).length ? ";" : ",";
    const head = splitLine(lines[0], sep).map((h) => h.toLowerCase());
    const idx = ["date", "region", "produit", "montant"].map((k) => head.indexOf(k));
    if (idx.includes(-1)) return { rows: [], errors: ["En-têtes requis : date, region, produit, montant"] };
    const rows = [], errors = [];
    lines.slice(1).forEach((line, n) => {
      const f = splitLine(line, sep);
      const [date, region, produit, raw] = idx.map((i) => f[i] || "");
      const montant = Number(raw.replace(/\s/g, "").replace(",", "."));
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !region || !Number.isFinite(montant)) {
        errors.push(`Ligne ${n + 2} ignorée : « ${line.slice(0, 60)} »`);
      } else rows.push({ date, region, produit, montant });
    });
    return { rows, errors };
  }

  function kpis(rows) {
    const total = rows.reduce((s, r) => s + r.montant, 0);
    const sum = (key) => rows.reduce((m, r) => ((m[r[key]] = (m[r[key]] || 0) + r.montant), m), {});
    const byRegion = sum("region");
    const byMonth = rows.reduce((m, r) => ((m[r.date.slice(0, 7)] = (m[r.date.slice(0, 7)] || 0) + r.montant), m), {});
    const top = (o) => Object.entries(o).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";
    return {
      total,
      count: rows.length,
      average: rows.length ? total / rows.length : 0,
      topRegion: top(byRegion),
      topProduct: top(sum("produit")),
      byMonth: Object.entries(byMonth).sort(([a], [b]) => a.localeCompare(b)),
    };
  }

  const api = { parseSales, kpis, splitLine };
  if (typeof module !== "undefined") module.exports = api;
  else root.Kpi = api;
})(this);
