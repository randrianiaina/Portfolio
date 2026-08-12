# Fiche Technique : Analyse des Besoins — Outil Collaboratif de Cadrage & Spécification (Node.js / Vue.js)

## Le Challenge Technique
Les équipes produit et métiers perdent du temps et de la cohérence dans la phase de cadrage : comptes-rendus d'ateliers dispersés, spécifications obsolètes dès le début du dev, traçabilité inexistante entre besoins métier et tickets techniques. L'objectif : créer un **outil unique, collaboratif et temps réel** couvrant tout le cycle : ateliers → processus BPMN → user stories → critères d'acceptation → matrice de traçabilité → export.

## Stack Technique
*   **Backend** : **Node.js 20+** (TypeScript), **Fastify**, **Socket.io** (WebSockets temps réel), **Prisma ORM** (PostgreSQL).
*   **Frontend** : **Vue 3** (Composition API, `<script setup>`), **Pinia** (state), **Vue Router**, **Tailwind CSS**.
*   **Modélisation BPMN** : **bpmn-js** (diagrammes interactifs, édition drag-and-drop, validation XML).
*   **Temps Réel** : **Socket.io** pour curseurs partagés, présence utilisateurs, notifications instantanées, résolution de conflits (OT/CRDT simplifié).
*   **Export** : **Markdown-it** + **pdfkit** / **Puppeteer** pour génération PDF professionnelle (cahier des charges, spécifications).
*   **Auth** : **NextAuth.js** / **Lucia** (magic links, SSO entreprise OIDC/SAML).

## Fonctionnalités Clés
1.  **Espaces Projets** : Multi-projets, multi-équipes, gestion des droits (Product Owner, Business Analyst, Dev, Stakeholder).
2.  **Ateliers de Cadrage** : Timer intégré, prise de notes collaborative, vote MoSCoW en direct, export compte-rendu.
3.  **Cartographie BPMN Interactive** : Création/modification diagrammes processus (AS-IS / TO-BE), swimlanes, annotations, liens vers user stories.
4.  **Backlog & User Stories** : Épics → Features → Stories, critères d'acceptation Gherkin (Given/When/Then), estimation Planning Poker intégrée.
5.  **Matrice de Traçabilité Auto** : Liaison bidirectionnelle Besoin ↔ User Story ↔ Cas de Test ↔ Code (via tags Git/GitHub), rapport d'impact changement.
6.  **Export Universel** : Markdown (Git/GitHub), PDF (cahier des charges), Excel (backlog), JSON (import Jira/Linear/ClickUp).

## Impact Métier
*   **Réduction cycle cadrage** : -40% temps passé en réunions grâce à la préparation asynchrone et l'outil guidé.
*   **Alignement garanti** : 100% des user stories tracées vers un besoin métier validé, 0 "orphan stories" en sprint.
*   **Adoption** : Interface intuitive type Notion/Linear, adoption spontanée par les Business Analysts et PO sans formation.
*   **Réutilisabilité** : Bibliothèque de patterns BPMN et user stories réutilisables entre projets (ERP, CRM, E-commerce, SaaS).