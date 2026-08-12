# Fiche Technique : Système de Collecte Pappers (pappers-collect)

## Le Challenge Technique
Le besoin était d'automatiser l'enrichissement de données massives sur les entreprises françaises à partir de l'API Pappers, tout en respectant les quotas et en garantissant une intégrité parfaite des données pour la prospection commerciale. Le défi était de construire un pipeline robuste capable de gérer le scraping (scripts Python), la persistance des données et la surveillance en temps réel (dashboard).

## Stack Technique
*   **Langages** : Python (scripts de collecte) & Node.js (API/Dashboard).
*   **Automatisation** : Pipeline Dockerisé pour le scraping récurrent et la mise à jour des bases.
*   **Monitoring** : Dashboard dédié pour le suivi des taux de collecte et des alertes sur les quotas API.
*   **Persistance** : Gestion de fichiers CSV/SQL avec processus de sauvegarde automatisés.

## Impact Métier
*   **Précision** : Enrichissement automatique des leads garantissant des informations à jour (SIRET, gérance, effectifs).
*   **Gain de temps** : Suppression de la saisie manuelle d'informations entreprises dans le CRM.
*   **Veille** : Détection automatique des changements de situation légale des prospects grâce au monitoring.

---

# Fiche Technique : AIQuizGenius

## Le Challenge Technique
Concevoir une application SaaS interactive capable de générer dynamiquement des quiz complexes à partir de prompts utilisateur, en utilisant des modèles de langage. Le défi était de garantir une expérience utilisateur fluide tout en assurant la persistance des données quiz dans une base SQL légère.

## Stack Technique
*   **Frameworks** : Vite.js, React, TypeScript.
*   **Base de Données** : **Drizzle ORM** avec SQLite pour une rapidité d'exécution optimale.
*   **Styling** : Tailwind CSS pour une interface responsive et moderne.
*   **Logique IA** : Intégration de modèles via API avec gestion de state pour le rendu dynamique des questions.

## Impact Métier
*   **Engagement** : Outil d'engagement client rapide, générant des quiz personnalisés en quelques secondes.
*   **Performance** : Architecture "Serverless-ready" permettant une montée en charge rapide et un temps de réponse minimal.
*   **Modulaire** : Système hautement configurable pour adapter le style des quiz aux besoins marketing.
