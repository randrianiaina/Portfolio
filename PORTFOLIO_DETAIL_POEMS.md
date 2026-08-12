# Fiche Technique : POEMS — Plateforme Nationale d'Admissions (Ministère de l'Enseignement Supérieur)

## Le Challenge Technique
Concevoir et maintenir la plateforme nationale **POEMS** (Parcours, Orientation, Études, Mobilité, Suivi) pour le Ministère de l'Enseignement Supérieur et de la Recherche français. La plateforme gère le cycle complet de vie étudiante : candidatures (Parcoursup), inscriptions administratives, notes, diplômes, mobilité internationale et équivalences pour l'ensemble des établissements d'enseignement supérieur français.

## Stack Technique
*   **Backend** : **Java 17+**, **Spring Boot 3**, architecture modulaire multi-contextes.
*   **Données** : **PostgreSQL** (partitionnement, indexation avancée), **Redis** (cache distribué, sessions).
*   **Sécurité & Identité** : **Keycloak** (SSO, OIDC, SAML), gestion fine des rôles (étudiant, gestionnaire scolarité, administrateur ministère), conformité **RGPD** (chiffrement au repos, pseudonymisation, droit à l'oubli).
*   **Infrastructure** : **Docker**, **Kubernetes** (EKS/GKE), Helm charts, déploiement Blue/Green, observabilité **Prometheus/Grafana/Loki**.
*   **Interopérabilité** : API REST standardisées, connecteurs SI existants (SISE, APOGEE, COCKTAIL), format d'échange **JSON-LD** / **CSV normés**.

## Impact Métier
*   **Volume** : Support de **2+ millions d'étudiants** et **3500+ formations** en pic de charge (phase Parcoursup).
*   **Conformité** : Audit ANSSI réussi, conformité **RGPD** et **RGAA** (accessibilité) certifiée.
*   **Disponibilité** : SLA 99.9% atteint grâce à l'architecture résiliente multi-AZ et tests de chaos engineering.
*   **Modernisation** : Remplacement progressif des systèmes legacy (APOGEE, SISE) par une plateforme unifiée, maintenable et évolutive.