// Tests des démos en ligne (public/demos). Lancer : node --test projects/demos-tests
const test = require("node:test");
const assert = require("node:assert/strict");
const Kpi = require("../../public/demos/kpi.js");
const W = require("../../public/demos/workflow.js");

test("CSV : séparateur ; détecté, guillemets, virgule décimale, lignes invalides signalées", () => {
  const { rows, errors } = Kpi.parseSales(
    '﻿date;region;produit;montant\n2026-01-01;Nord;"Audit; conseil";1 200,50\nbad;Nord;X;10\n2026-02-01;Sud;Formation;300\n',
  );
  assert.equal(rows.length, 2);
  assert.equal(rows[0].produit, "Audit; conseil");
  assert.equal(rows[0].montant, 1200.5);
  assert.equal(errors.length, 1);
});

test("CSV : en-têtes manquants refusés", () => {
  assert.match(Kpi.parseSales("a,b\n1,2").errors[0], /En-têtes/);
});

test("KPI : total, moyenne, top et mois triés", () => {
  const k = Kpi.kpis([
    { date: "2026-02-01", region: "Sud", produit: "A", montant: 100 },
    { date: "2026-01-05", region: "Nord", produit: "B", montant: 300 },
    { date: "2026-01-20", region: "Sud", produit: "A", montant: 50 },
  ]);
  assert.equal(k.total, 450);
  assert.equal(k.average, 150);
  assert.equal(k.topRegion, "Nord");
  assert.equal(k.topProduct, "B");
  assert.deepEqual(k.byMonth, [["2026-01", 350], ["2026-02", 100]]);
  assert.equal(Kpi.kpis([]).average, 0);
});

test("Workflow : petit montant validé par le manager seul", () => {
  let r = W.create(1, "Écrans", 900, "demandeur");
  r = W.apply(r, "soumettre", "demandeur");
  r = W.apply(r, "valider", "manager");
  assert.equal(r.state, "approuvee");
  r = W.apply(W.apply(r, "commander", "achats"), "receptionner", "demandeur");
  assert.equal(r.state, "recue");
  assert.equal(r.log.length, 5);
});

test("Workflow : au-delà du seuil, la direction doit valider", () => {
  let r = W.apply(W.create(2, "Serveur", W.THRESHOLD + 1, "demandeur"), "soumettre", "demandeur");
  r = W.apply(r, "valider", "manager");
  assert.equal(r.state, "validation_direction");
  assert.throws(() => W.apply(r, "valider", "manager"), /rôle/);
  assert.equal(W.apply(r, "valider", "direction").state, "approuvee");
});

test("Workflow : rôle, motif de refus et saisie contrôlés, demande d'origine intacte", () => {
  const r = W.apply(W.create(3, "PC", 100, "demandeur"), "soumettre", "demandeur");
  assert.throws(() => W.apply(r, "valider", "demandeur"), /rôle/);
  assert.throws(() => W.apply(r, "refuser", "manager", "  "), /motif/);
  assert.throws(() => W.apply(r, "commander", "achats"), /impossible/);
  assert.equal(W.apply(r, "refuser", "manager", "Budget").state, "refusee");
  assert.equal(r.state, "soumise");
  assert.deepEqual(W.allowedActions(r, "manager"), ["valider", "refuser"]);
  assert.throws(() => W.create(4, "", 10, "demandeur"), /Objet/);
  assert.throws(() => W.create(4, "X", -5, "demandeur"), /Montant/);
});

const Rag = require("../../public/demos/rag.js");
const POLICY = `Les salariés peuvent télétravailler jusqu'à trois jours par semaine. Le télétravail n'est pas ouvert pendant la période d'essai.
Une indemnité de 30 euros par mois couvre les frais de connexion.
Toute perte de matériel doit être signalée au service informatique sous 24 heures.`;

test("RAG : tokenisation sans accents ni mots vides", () => {
  assert.deepEqual(Rag.tokenize("Quelle est l'indemnité des salariés ?"), ["indemnite", "salari"]);
});

test("RAG : découpage sans couper les phrases", () => {
  const c = Rag.chunk(POLICY, 10);
  assert.ok(c.length >= 2);
  assert.ok(c.every((x) => /[.!?]$/.test(x.text)));
});

test("RAG : la bonne source est retrouvée et citée", () => {
  const chunks = Rag.chunk(POLICY, 5);
  const r = Rag.answer(chunks, "Quel est le montant de l'indemnité ?");
  assert.match(r.answer[0].sentence, /30 euros/);
  assert.equal(r.citations[0].id, r.answer[0].source);
  assert.match(Rag.answer(chunks, "Que faire en cas de perte de matériel ?").answer[0].sentence, /24 heures/);
});

test("RAG : refuse de répondre hors du document", () => {
  const r = Rag.answer(Rag.chunk(POLICY, 5), "Quel est le salaire de départ ?");
  assert.equal(r.answer, null);
  assert.match(r.reason, /pas de réponse fiable/);
  assert.deepEqual(Rag.search([], "x"), []);
});
