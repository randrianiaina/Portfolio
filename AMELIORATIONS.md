# Améliorations du portfolio

Cette version modernise le portfolio de Herizo Randrianaina tout en conservant sa structure statique et ses interactions existantes.

## Contenu et positionnement

Le profil est désormais présenté autour d’un positionnement clair de **chef de projet IT, développeur back-end et expert ERP/CRM & data**. La première expérience a été reformulée à partir du CV de référence, les statistiques initiales sont fiables même avant le chargement de JavaScript, et l’ancienne section de témoignages a été transformée en principes de collaboration afin d’éviter des citations non sourcées.

## Interface et accessibilité

La feuille de styles adopte une palette bleu nuit/teal, des surfaces plus lisibles, des cartes homogènes, une hiérarchie typographique plus nette, des états de focus clavier et un lien « Aller au contenu principal ». La mise en page responsive a été renforcée pour les petits écrans et les animations respectent désormais la préférence système `prefers-reduced-motion`. Le curseur expérimental a été désactivé pour privilégier une navigation standard et plus robuste.

## Fonctionnalités vérifiées

Le changement de langue français/anglais, le filtrage des projets, l’ouverture et la fermeture des fiches projet, le basculement clair/sombre, le formulaire de contact et les scripts JavaScript ont été vérifiés dans la prévisualisation locale. Les références principales vers les scripts et les assets locaux ont également été contrôlées.

## Prévisualisation locale

Depuis le dossier du projet, lancer un serveur statique puis ouvrir `http://127.0.0.1:8000/`. Le portfolio ne nécessite pas de compilation : les fichiers HTML, CSS et JavaScript peuvent être déployés directement sur un hébergement statique.


## Version premium — seconde vague

Cette version ajoute un accès **Services** dans la navigation principale, enrichit les trois études de cas mises en avant avec des métadonnées de stack et renforce la lisibilité de la proposition de valeur. La méthodologie est maintenant entièrement traduite en français et en anglais, y compris les quatre principes techniques affichés.

Le SEO technique a été harmonisé sur `https://herizo.netlify.app/` avec canonical, liens `hreflang`, Open Graph, Twitter URL et données structurées Person cohérentes. Les versions d’assets ont été incrémentées afin de limiter les problèmes de cache sur un hébergement statique.

Les vérifications finales ont réussi : syntaxe `app.js`, syntaxe `translations.js`, contrôle des références locales, présence des nouvelles clés et absence d’erreurs dans la console du navigateur lors de la validation.


## Projets ajoutés — version projets mobile et IA

Les projets suivants sont désormais visibles dans la grille, filtrables et ouvrables en fiche détaillée bilingue : **Wizi Learn**, application de quiz multiplateforme avec backend Laravel ou Node.js, interfaces React/Vue et apps Flutter iOS/Android ; **POS Flutter**, application de point de vente et d’inventaire ; **Do Not Disturb**, plateforme Flutter de redirection d’appels pour les entreprises ; et **LingoLive**, application d’apprentissage des langues avec Gemini, Next.js, Express et Supabase.

Chaque fiche présente le challenge, la solution et la stack technique en français et en anglais. Les assets HTML, CSS et JavaScript ont été versionnés en `v7` pour éviter les problèmes de cache.
