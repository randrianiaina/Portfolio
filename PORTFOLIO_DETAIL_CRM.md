# Fiche Technique : EspoCRM (Instance Principale)

## Le Challenge Technique
La gestion d'un volume croissant de données dans EspoCRM a conduit à des limitations techniques liées à la taille des lignes MySQL ("Row size too large"). Le défi principal a été de maintenir l'intégrité métier tout en procédant à un refactoring architectural (découpage de la table `Account`) sans interrompre les services.

## Stack Technique
*   **Back-end** : PHP 8.x, EspoCRM Framework (Architecture orientée entités).
*   **Infrastructure** : Docker / Docker Compose (Environnement Laragon).
*   **Qualité & Tests** : Suite de tests E2E complète avec **Playwright** et **PHPUnit** pour les tests unitaires/intégration.
*   **Outils de maintien** : Scripts d'automatisation personnalisés pour le nettoyage de cache (`clear_cache.php`), migration de données (SIRET) et maintenance MySQL.

## Impact Métier
*   **Stabilité** : Résolution des erreurs de base de données permettant une croissance continue des données partenaires.
*   **Productivité** : Automatisation totale des processus de relance et d'import, réduisant les tâches manuelles de 80%.
*   **Fiabilité** : Mise en place d'une chaîne CI/CD locale avec tests automatisés garantissant la non-régression à chaque déploiement.

---

# Fiche Technique : Filament CRM (crmfilament)

## Le Challenge Technique
Développer une plateforme CRM moderne et multi-portails (AlloPro, NsConseil) permettant de cloisonner les accès tout en partageant des composants métier transversaux (gestion de documents, workflow d'appels). La difficulté était de concevoir une architecture extensible sous Laravel 12.

## Stack Technique
*   **Framework** : **Laravel 12** avec l'interface d'administration **Filament PHP**.
*   **Frontend** : Vite.js pour la compilation des assets.
*   **Automatisation** : Workflow de génération dynamique de documents Word (.docx) et intégration API téléphoniques (Aircall).
*   **Déploiement** : Docker / Docker Compose pour une isolation totale des environnements (Dev/Prod).

## Impact Métier
*   **Agilité** : Interface utilisateur intuitive via Filament, permettant une adoption rapide par les équipes commerciales.
*   **Scalabilité** : Architecture multi-portails facilitant l'ajout de nouvelles filiales ou entités sans refonte du code.
*   **Workflow** : Automatisation de la génération de documents administratifs, réduisant le temps de traitement des dossiers de plusieurs heures à quelques minutes.
