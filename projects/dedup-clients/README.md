# Dédoublonnage de fichier clients

Outil en ligne de commande (Python, bibliothèque standard uniquement) pour fiabiliser un fichier clients avant import dans un CRM ou un ERP.

- **Contrôle SIREN / SIRET** par la clé de Luhn.
- **Normalisation** des raisons sociales : accents, ponctuation et formes juridiques (SARL, SAS, Ets…) retirés.
- **Regroupement** des doublons exacts (même SIREN) et probables (nom proche + même code postal), sans jamais fusionner deux SIREN valides différents.
- **Aucune ligne supprimée** : chaque ligne reçoit `group_id`, `siren_ok` et `match` (`siren` / `nom`), pour qu'un humain valide la fusion.

```bash
python dedup.py exemple.csv -o clients_dedup.csv      # séparateur , ou ; détecté
python dedup.py exemple.csv --seuil 0.9               # rapprochement par nom plus strict
python -m unittest -v
```

Colonnes requises : `nom`, `siren`, `code_postal` (les autres sont conservées).

Limite : la comparaison est en O(n × groupes), adaptée à quelques dizaines de milliers de lignes ; au-delà, indexer par code postal.
