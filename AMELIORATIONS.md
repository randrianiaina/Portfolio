# Améliorations du portfolio

## Migration vers Next.js

Le portfolio dispose désormais d’une application **Next.js App Router** en TypeScript. Les anciens fichiers HTML/JavaScript sont conservés à titre de référence ; la version Next.js est la version à déployer afin de bénéficier des fonctionnalités à jour, notamment des téléchargements de CV. Les projets, traductions et interfaces React sont séparés dans `app/`; la photo, le CV PDF et la démo Wizi Learn sont servis depuis `public/`.

Pour démarrer en local : `npm install`, puis `npm run dev`. Vérifications : `npm run lint`, `npm run typecheck` et `npm run build`. Le build génère une version statique dans `out/`, à publier comme dossier de site sur Netlify ou un autre hébergeur statique.

## Mise à jour — contenu et présentation

Le portfolio met maintenant en avant une sélection de 14 projets documentés à partir des éléments du dossier `Autres sources` et des projets déjà présentés. Les descriptions privilégient les réalisations et explorations vérifiables, sans détails internes de clients ni statistiques non confirmées. Les filtres regroupent les projets par CRM, web/mobile, data/qualité, infrastructure et IA appliquée.

La page d’accueil a été recentrée sur le lien entre besoins métier et livraison technique. La présentation adopte une palette claire, des titres à empattement, des cartes plus lisibles et une navigation mobile accessible. Une section « Approche » complète le parcours, et les expériences professionnelles ainsi que la génération du CV ATS ont été alignées sur les projets sélectionnés.

Les cartes projet sont traduites en français et en anglais avec leurs filtres. Les contrôles de filtre exposent leur état aux technologies d’assistance, le menu indique son état et peut être fermé avec Échap. Le changement de langue ne dépend plus d’un observateur DOM permanent.

Cette version modernise le portfolio de Herizo Randrianaina tout en conservant sa structure statique et ses interactions existantes.

## Contenu et positionnement

Le profil est désormais présenté autour d’un positionnement clair de **chef de projet IT, développeur back-end et expert ERP/CRM & data**. La première expérience a été reformulée à partir du CV de référence, les statistiques initiales sont fiables même avant le chargement de JavaScript, et l’ancienne section de témoignages a été transformée en principes de collaboration afin d’éviter des citations non sourcées.

## Interface et accessibilité

La feuille de styles adopte une palette bleu nuit/teal, des surfaces plus lisibles, des cartes homogènes, une hiérarchie typographique plus nette, des états de focus clavier et un lien « Aller au contenu principal ». La mise en page responsive a été renforcée pour les petits écrans et les animations respectent désormais la préférence système `prefers-reduced-motion`. Le curseur expérimental a été désactivé pour privilégier une navigation standard et plus robuste.

## Fonctionnalités vérifiées

Le changement de langue français/anglais, le filtrage des projets, l’ouverture et la fermeture des fiches projet, le basculement clair/sombre, le formulaire de contact et les scripts JavaScript ont été vérifiés dans la prévisualisation locale. Les références principales vers les scripts et les assets locaux ont également été contrôlées.

## Téléchargements du CV

Les boutons du CV professionnel et du CV ATS génèrent désormais de vrais PDF en français ou en anglais, selon la langue sélectionnée. Le CV professionnel utilise une mise en page graphique ; la version ATS privilégie une structure simple, à une colonne, facile à analyser par les logiciels de recrutement. Les deux documents incluent les coordonnées, le profil, les compétences, les expériences, une sélection de projets, la formation et les langues. Pendant la génération, les boutons signalent le chargement et se désactivent ; une erreur est annoncée explicitement.

## Assistant IA du portfolio

Un chat bilingue répond aux questions sur les projets, les compétences et le parcours à partir des données du portfolio. Pour une recherche précise, Gemini peut appeler l’outil en lecture seule `search_projects`, qui cherche dans la liste publique des projets et retourne au plus cinq résultats ; aucune autre action ni modification n’est disponible. Les messages sont envoyés à une Netlify Function, qui appelle Gemini avec une clé conservée côté serveur ; aucun historique de conversation n’est persisté. Le widget propose aussi un accès direct à WhatsApp et à l’e-mail. Pour l’activer en production, configurer `GEMINI_API_KEY` dans les variables d’environnement du site Netlify et limiter les quotas de la clé Gemini ; `.env.example` indique le nom de la variable sans contenir de secret. Pour tester le chat en local, utiliser Netlify Dev (`npx netlify dev`) avec `GEMINI_API_KEY` configurée dans l’environnement. Le déploiement Netlify publie `out/` et les fonctions dans `netlify/functions/`.

## Prévisualisation locale

Depuis le dossier du projet, lancer un serveur statique puis ouvrir `http://127.0.0.1:8000/`. Le portfolio ne nécessite pas de compilation : les fichiers HTML, CSS et JavaScript peuvent être déployés directement sur un hébergement statique.


## Version premium — seconde vague

Cette version ajoute un accès **Services** dans la navigation principale, enrichit les trois études de cas mises en avant avec des métadonnées de stack et renforce la lisibilité de la proposition de valeur. La méthodologie est maintenant entièrement traduite en français et en anglais, y compris les quatre principes techniques affichés.

Le SEO technique a été harmonisé sur `https://herizo.netlify.app/` avec canonical, liens `hreflang`, Open Graph, Twitter URL et données structurées Person cohérentes. Les versions d’assets ont été incrémentées afin de limiter les problèmes de cache sur un hébergement statique.

Les vérifications finales ont réussi : syntaxe `app.js`, syntaxe `translations.js`, contrôle des références locales, présence des nouvelles clés et absence d’erreurs dans la console du navigateur lors de la validation.


## Projets ajoutés — version projets mobile et IA

Les projets suivants sont désormais visibles dans la grille, filtrables et ouvrables en fiche détaillée bilingue : **Wizi Learn**, application de quiz multiplateforme avec backend Laravel ou Node.js, interfaces React/Vue et apps Flutter iOS/Android ; **POS Flutter**, application de point de vente et d’inventaire ; **Do Not Disturb**, plateforme Flutter de redirection d’appels pour les entreprises ; et **LingoLive**, application d’apprentissage des langues avec Gemini, Next.js, Express et Supabase.

Chaque fiche présente le challenge, la solution et la stack technique en français et en anglais. Les assets HTML, CSS et JavaScript ont été versionnés en `v7` pour éviter les problèmes de cache.
