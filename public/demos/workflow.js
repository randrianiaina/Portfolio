// Moteur de workflow de demande d'achat : états, rôles autorisés, seuil de validation, journal d'audit.
(function (root) {
  const THRESHOLD = 5000; // au-delà, la direction doit valider après le manager

  // état -> action -> { to, roles, when? }
  const FLOW = {
    brouillon: { soumettre: { to: "soumise", roles: ["demandeur"] } },
    soumise: {
      valider: { to: (r) => (r.amount > THRESHOLD ? "validation_direction" : "approuvee"), roles: ["manager"] },
      refuser: { to: "refusee", roles: ["manager"], needsComment: true },
    },
    validation_direction: {
      valider: { to: "approuvee", roles: ["direction"] },
      refuser: { to: "refusee", roles: ["direction"], needsComment: true },
    },
    approuvee: { commander: { to: "commandee", roles: ["achats"] } },
    commandee: { receptionner: { to: "recue", roles: ["demandeur", "achats"] } },
    refusee: {},
    recue: {},
  };

  function create(id, title, amount, by) {
    if (!title || !title.trim()) throw new Error("Objet requis");
    if (!Number.isFinite(amount) || amount <= 0) throw new Error("Montant invalide");
    return { id, title: title.trim(), amount, state: "brouillon", log: [{ at: new Date().toISOString(), by, action: "créer", to: "brouillon" }] };
  }

  function allowedActions(request, role) {
    return Object.entries(FLOW[request.state]).filter(([, t]) => t.roles.includes(role)).map(([a]) => a);
  }

  // Ne modifie jamais la demande d'origine : renvoie une nouvelle version (historique fiable).
  function apply(request, action, role, comment = "") {
    const t = FLOW[request.state][action];
    if (!t) throw new Error(`Action « ${action} » impossible depuis « ${request.state} »`);
    if (!t.roles.includes(role)) throw new Error(`Le rôle « ${role} » ne peut pas « ${action} »`);
    if (t.needsComment && !comment.trim()) throw new Error("Un motif de refus est obligatoire");
    const to = typeof t.to === "function" ? t.to(request) : t.to;
    const entry = { at: new Date().toISOString(), by: role, action, to, comment: comment.trim() || undefined };
    return { ...request, state: to, log: [...request.log, entry] };
  }

  const api = { THRESHOLD, FLOW, create, allowedActions, apply };
  if (typeof module !== "undefined") module.exports = api;
  else root.Workflow = api;
})(this);
