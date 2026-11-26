"""RGPD : retire les données directement identifiantes d'un CV avant tout appel LLM ou stockage."""
import re

_PATTERNS = [
    ("EMAIL", re.compile(r"[\w.+-]+@[\w-]+\.[\w.-]+")),
    ("URL", re.compile(r"https?://\S+|(?:www\.|linkedin\.com/)\S+", re.I)),
    ("PHONE", re.compile(r"(?:\+\d{1,3}[\s.-]?)?(?:\(?\d{2,3}\)?[\s.-]?){3,5}\d{2,3}")),
    # Attributs protégés : ne doivent jamais influencer le matching (AI Act, non-discrimination).
    ("AGE", re.compile(r"\b\d{2}\s*ans\b|\bn[ée]e?\s+le\s+[\d/.-]+", re.I)),
    ("STATUS", re.compile(r"\b(mari[ée]e?|c[ée]libataire|divorc[ée]e?|\d+\s+enfants?)\b", re.I)),
]


def pseudonymize(text: str, names: list[str] = ()) -> tuple[str, dict[str, str]]:
    """Renvoie le texte masqué et la table de correspondance (à stocker séparément, chiffrée)."""
    mapping: dict[str, str] = {}

    def mask(kind: str, value: str) -> str:
        for token, original in mapping.items():
            if original == value:
                return token
        token = f"[{kind}_{sum(k.startswith(f'[{kind}_') for k in mapping) + 1}]"
        mapping[token] = value
        return token

    for name in sorted(filter(None, names), key=len, reverse=True):
        text = re.sub(re.escape(name), lambda m: mask("NAME", m.group()), text, flags=re.I)
    for kind, pattern in _PATTERNS:
        text = pattern.sub(lambda m, k=kind: mask(k, m.group()), text)
    return text, mapping
