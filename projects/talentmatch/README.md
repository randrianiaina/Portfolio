# TalentMatch — matching CV / offre responsable

Pipeline IA de recrutement pensé pour un usage **à haut risque (AI Act)** : chaque étape protège le candidat avant d'optimiser le score.

```
CV brut ─► pseudonymisation ─► extraction structurée (LLM) ─► garde-fous ─► score explicable ─► revue humaine
            RGPD + attributs      Mistral LoRA / Bedrock       injection,       compétences,
            protégés masqués      schéma JSON + repli          hallucinations   sémantique, expérience
```

## Ce que fait chaque module

| Module | Rôle |
|---|---|
| `talentmatch/pseudonymize.py` | Masque nom, e-mail, téléphone, URL, mais aussi âge, situation familiale. La table de correspondance reste côté client, jamais envoyée au LLM. |
| `talentmatch/extract.py` | Extraction en JSON strict par un LLM injectable (client Mistral, Bedrock, endpoint SageMaker). Repli déterministe si la sortie est invalide. |
| `talentmatch/guardrails.py` | Détecte les injections de prompt cachées dans les CV (« ignore previous instructions… ») et retire les compétences absentes du texte source (hallucinations). |
| `talentmatch/match.py` | Score pondéré et **explicable** : compétences trouvées / manquantes, similarité, expérience. La décision est toujours `revue_humaine`. |
| `talentmatch/evaluate.py` | F1 d'extraction, nDCG@k de ranking, écart de score entre groupes (équité). |
| `train/finetune_lora.py` | Fine-tuning LoRA (PEFT) de Mistral-7B sur des CV annotés et pseudonymisés, utilisable comme entrypoint SageMaker. |
| `api.py` | Endpoint FastAPI `POST /match` pour le front Next.js / Node. |

## Lancer

```bash
python -m unittest -v          # aucun package requis
pip install -r requirements.txt
uvicorn api:app --reload
```

```bash
curl -X POST localhost:8000/match -H "Content-Type: application/json" -d '{
  "cv_text": "Ingénieur ML, 5 ans d'\''expérience. Python, PyTorch, AWS SageMaker.",
  "job": {"title": "ML Engineer", "description": "LLM en production", "required_skills": ["python","pytorch","bedrock"], "min_years": 4}
}'
```

## Test d'équité qui a servi

`test_protected_attributes_do_not_change_score` remplace « 29 ans, marié » par « 52 ans, divorcée, 3 enfants » et exige un score identique. Il a d'abord échoué : le **nombre** de jetons de masquage faisait varier la similarité. Le correctif (ignorer ces jetons dans le vectoriseur) est dans `match.py`.

## Déploiement AWS (cible)

- Entraînement : job SageMaker avec `train/finetune_lora.py`, données pseudonymisées dans S3 (chiffrement KMS, IAM au moindre privilège).
- Inférence : adaptateur LoRA sur endpoint SageMaker, ou modèle Mistral via Bedrock ; injecté dans `extract(text, llm=...)`.
- Suivi : métriques `evaluate.py` sur un jeu de test figé à chaque version de modèle, alerte si l'écart d'équité dépasse un seuil.

## Limites connues

- La similarité est un sac de mots ; à remplacer par des embeddings (Titan, e5) sur un vrai corpus.
- La détection d'injection repose sur des motifs ; à compléter par un classifieur.
- Les noms de candidats doivent être fournis pour être masqués (pas de NER intégrée).
