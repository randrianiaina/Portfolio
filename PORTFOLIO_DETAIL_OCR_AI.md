# Fiche Technique : OCR avec IA — Pipeline Multi-Moteurs + LLM pour Extraction Structurée (Python / FastAPI)

## Le Challenge Technique
Automatiser l'extraction de données métier depuis documents hétérogènes (factures PDF/scannées, contrats juridiques, formulaires administratifs, reçus, cartes d'identité) avec une **précision > 95%** sur champs critiques (montants, dates, numéros SIRET, TVA, parties signataires). Solution : pipeline OCR **ensemble** (multi-moteurs) + **LLM pour correction contextuelle et extraction d'entités**.

## Stack Technique
*   **Orchestration** : **Python 3.11+**, **FastAPI** (async, OpenAPI auto), **Celery** + **Redis** (file d'attente distribuée, retry, priority queues), **Flower** (monitoring workers).
*   **Moteurs OCR (Ensemble)** :
    *   **Tesseract 5** (open source, bon sur texte propre, 100+ langues).
    *   **PaddleOCR** (SOTA open source, excellente détection layout/tableaux, support chinois/arabe).
    *   **Google Cloud Vision API / AWS Textract** (fallback cloud, haute dispo, handwriting).
*   **Post-Traitement LLM** : **OpenAI GPT-4o / Anthropic Claude 3.5 Sonnet** (via API) ou **LLaMA 3.1 70B** (auto-hébergé vLLM/TGI) pour :
    *   Correction erreurs OCR (contexte métier : "SIRET" vs "SIREN", montants avec séparateurs).
    *   Extraction entités nommées (NER) structurée : JSON Schema strict (facture: émetteur, destinataire, lignes, totaux, TVA).
    *   Classification document (facture, contrat, bon de commande, CV, pièce identité).
*   **Stockage** : **MinIO / S3** (documents source + résultats), **PostgreSQL** (métadonnées, résultats structurés, index full-text).
*   **API Async** : `POST /ocr/process` → `202 Accepted` + `job_id`, webhook `POST /webhook/ocr-done` ou polling `GET /ocr/result/:job_id`.
*   **Observabilité** : **Langfuse / LangSmith** (traces LLM, coûts, latence, qualité), **Prometheus/Grafana** (infra).

## Pipeline de Traitement
```mermaid
graph LR
    A[Upload PDF/Image] --> B[Pré-traitement: rotation, déskew, denoise, binarisation]
    B --> C[Détection Layout (PaddleOCR/YOLO): zones texte, tableaux, images]
    C --> D[OCR Parallèle: Tesseract + PaddleOCR + Vision API]
    D --> E[Fusion & Vote Majoritaire par mot/ligne]
    E --> F[LLM Correction Contextuelle + Extraction Entités JSON Schema]
    F --> G[Validation Règles Métier: TVA cohérente, SIRET valide, totaux]
    G --> H[Stockage Résultat + Webhook Callback]
```

## Impact Métier
*   **Automatisation comptable** : 85% des factures fournisseurs traitées sans intervention humaine (vs 15% avant).
*   **Conformité** : Extraction SIRET/SIREN validée API INSEE, TVA vérifiée (VIES), archivage légal (horodatage, hash SHA-256).
*   **Coût / Page** : ~0.008€/page (auto-hébergé LLaMA) vs 0.015–0.05€/page (API cloud pur).
*   **Extensibilité** : Nouveau type document = nouveau prompt LLM + schéma JSON (0 code Python), déployable en minutes.