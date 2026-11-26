"""Dédoublonnage d'un fichier clients CSV : contrôle SIREN, normalisation des raisons sociales,
regroupement des doublons exacts (SIREN) et probables (nom proche + même code postal).

    python dedup.py clients.csv -o clients_dedup.csv
"""
import argparse
import csv
import difflib
import re
import sys
import unicodedata

LEGAL_FORMS = r"\b(sarl|sas|sasu|sa|eurl|sci|snc|ets|etablissements?|societe|ste|cie|et)\b"


def siren_valid(siren: str) -> bool:
    """Clé de Luhn sur 9 chiffres (accepte un SIRET de 14 chiffres : on contrôle ses 9 premiers)."""
    digits = re.sub(r"\D", "", siren or "")[:9]
    if len(digits) != 9:
        return False
    total = 0
    for i, d in enumerate(int(c) for c in reversed(digits)):
        d = d * 2 if i % 2 else d
        total += d - 9 if d > 9 else d
    return total % 10 == 0


def normalize(name: str) -> str:
    s = unicodedata.normalize("NFKD", name or "").encode("ascii", "ignore").decode().lower()
    s = re.sub(r"[^a-z0-9 ]", " ", s)
    return " ".join(re.sub(LEGAL_FORMS, " ", s).split())


def group(rows: list[dict], threshold: float = 0.85) -> list[dict]:
    """Ajoute group_id, siren_ok et match ('siren', 'nom', ou '') à chaque ligne, sans en supprimer."""
    groups: list[dict] = []  # {"id", "siren", "name", "cp"}
    out = []
    for row in rows:
        siren = re.sub(r"\D", "", row.get("siren", ""))[:9]
        ok = siren_valid(siren)
        name, cp = normalize(row.get("nom", "")), (row.get("code_postal") or "").strip()
        found, how = None, ""
        for g in groups:
            if ok and g["siren"] == siren:
                found, how = g, "siren"
                break
            # Pas de rapprochement par nom quand les deux SIREN valides diffèrent : ce sont deux entités.
            if cp and g["cp"] == cp and not (ok and g["siren"]) and name and \
                    difflib.SequenceMatcher(None, name, g["name"]).ratio() >= threshold:
                found, how = g, "nom"
                break
        if not found:
            found = {"id": len(groups) + 1, "siren": siren if ok else "", "name": name, "cp": cp}
            groups.append(found)
        elif ok and not found["siren"]:
            found["siren"] = siren
        out.append({**row, "group_id": found["id"], "siren_ok": "oui" if ok else "non", "match": how})
    return out


def main(argv=None):
    p = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    p.add_argument("input")
    p.add_argument("-o", "--output", default="clients_dedup.csv")
    p.add_argument("--seuil", type=float, default=0.85, help="similarité minimale des noms (0-1)")
    a = p.parse_args(argv)
    with open(a.input, newline="", encoding="utf-8-sig") as f:
        sample = f.read(2048)
        f.seek(0)
        rows = list(csv.DictReader(f, dialect=csv.Sniffer().sniff(sample, ";,")))
    missing = {"nom", "siren", "code_postal"} - set(rows[0] if rows else [])
    if missing:
        sys.exit(f"Colonnes manquantes : {', '.join(sorted(missing))}")
    result = group(rows, a.seuil)
    with open(a.output, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=list(result[0]), delimiter=";")
        w.writeheader()
        w.writerows(result)
    dupes = len(result) - len({r["group_id"] for r in result})
    bad = sum(r["siren_ok"] == "non" for r in result)
    print(f"{len(result)} lignes · {dupes} doublons regroupés · {bad} SIREN invalides -> {a.output}")


if __name__ == "__main__":
    main()
