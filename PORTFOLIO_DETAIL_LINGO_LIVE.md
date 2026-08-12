# Fiche Technique : Lingo Live (App Booster Langues)

## Le Challenge Technique
Concevoir un outil d'apprentissage des langues ultra-léger et réactif ("App Booster") exploitant la puissance de l'IA (Gemini) pour l'entraînement conversationnel et grammatical. Le défi était de privilégier la performance et l'immédiateté en évitant toute persistance lourde en base de données, en misant exclusivement sur la gestion de session (State Management).

## Stack Technique
*   **Framework** : **Next.js** (Architecture Web moderne).
*   **Intelligence Artificielle** : Intégration de l'API **Gemini** (Google) pour le traitement du langage naturel et la génération de contenu pédagogique en temps réel.
*   **Architecture** : "Stateless" — aucune BDD, gestion complète des interactions utilisateur via le state de session pour une expérience utilisateur instantanée.
*   **Outillage** : **Vite** pour le build et la compilation rapide des assets.

## Impact Métier
*   **Fluidité** : Temps de réponse optimisé par l'absence de requêtes BDD, offrant une expérience "Zero-Latency" pour l'apprentissage.
*   **Simplicité** : Application légère et facile à déployer, idéale pour un usage intensif et ponctuel.
*   **Innovation** : Utilisation agile de l'IA pour transformer des interactions simples en exercices linguistiques personnalisés.
