# Fiche Technique : Wizi Learn — Migration Hybride & Parité API (Laravel → Node.js/React/Flutter)

## Le Challenge Technique
Migrer une application EdTech existante (backend Laravel monolithique, frontend React) vers une architecture **hybride moderne** intégrant des micro-services **Node.js**, sans interruption de service pour les utilisateurs web (React) et mobile (Flutter). Le défi majeur : garantir une **parité d'endpoints API à 100%** (réponses JSON identiques, codes HTTP, gestion d'erreurs, pagination) entre l'ancien et le nouveau backend pendant la transition.

## Stack Technique
*   **Backend Legacy** : **Laravel 10** (PHP 8.2), Eloquent ORM, Sanctum (auth).
*   **Backend Cible** : **Node.js 20+** (TypeScript), **Fastify** / **Express**, **Prisma ORM** / **Drizzle ORM**, **Zod** (validation).
*   **Frontend Web** : **React 18** (Vite, TypeScript, TanStack Query, Zustand).
*   **Frontend Mobile** : **Flutter 3** (Dart, Riverpod, Dio).
*   **Tests de Parité** : Suite automatisée **Playwright** + scripts **Node.js** (`test_endpoints_final.ps1`) comparant réponses Legacy vs Nouveau sur 200+ endpoints (quiz, parrainage, progression, paiements).
*   **CI/CD** : GitHub Actions / GitLab CI, environnements **Docker Compose** (dev, staging, prod), déploiement Canary.

## Méthodologie de Migration (4 Phases)
1.  **Phase 1 — Strangler Fig & Proxy** : Mise en place d'un **API Gateway** (Kong/Traefik) routant sélectivement vers Laravel ou Node.js. Nouveaux endpoints développés en Node.js, anciens conservés.
2.  **Phase 2 — Parité Fonctionnelle** : Ré-implémentation métier par domaine (Auth, Quiz, User, Billing). Tests de régression quotidiens sur dataset production anonymisé.
3.  **Phase 3 — Bascule Progressive** : Migration du trafic par feature flag (10% → 50% → 100%). Monitoring temps réel (latence, taux d'erreur, drift de schéma).
4.  **Phase 4 — Décommission** : Arrêt des services Laravel, nettoyage base de données, documentation finale (`NODE_MIGRATION_GUIDE.md`, `PARITY_COMPARISON_FINAL.md`).

## Impact Métier
*   **Zéro interruption** : Migration transparente pour 50k+ utilisateurs actifs (web + mobile).
*   **Performance** : Latence API P95 divisée par 2 (Node.js non-bloquant vs PHP-FPM).
*   **Vélocité** : Équipe mobile (Flutter) et web (React) désormais découplée du backend PHP, livraison features accélérée.
*   **Maintenabilité** : Documentation exhaustive, contrats API OpenAPI 3.1, tests de contrat automatisés empêchant toute régression future.