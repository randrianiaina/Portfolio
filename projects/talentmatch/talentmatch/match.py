"""Matching explicable offre / candidat : compétences + similarité textuelle + expérience."""
import math
import re
from collections import Counter
from dataclasses import dataclass

from .extract import Profile

WEIGHTS = {"skills": 0.6, "semantic": 0.25, "experience": 0.15}


@dataclass
class Job:
    title: str
    description: str
    required_skills: list[str]
    min_years: int = 0


def _vec(text: str) -> Counter:
    # Les jetons de pseudonymisation ne doivent pas peser : leur nombre trahirait les attributs masqués.
    text = re.sub(r"\[[A-Z]+_\d+\]", " ", text)
    return Counter(w for w in re.findall(r"[a-zà-ÿ0-9.+#]{3,}", text.lower()))


def cosine(a: str, b: str) -> float:
    # shortcut: sac de mots ; brancher un embedding (Bedrock Titan / e5) quand le corpus le justifie.
    va, vb = _vec(a), _vec(b)
    dot = sum(va[k] * vb[k] for k in va)
    norm = math.sqrt(sum(v * v for v in va.values())) * math.sqrt(sum(v * v for v in vb.values()))
    return dot / norm if norm else 0.0


def score(job: Job, profile: Profile, cv_text: str) -> dict:
    required = {s.lower() for s in job.required_skills}
    matched = sorted(required & set(profile.skills))
    parts = {
        "skills": len(matched) / len(required) if required else 1.0,
        "semantic": cosine(job.description, cv_text),
        "experience": min(1.0, profile.years_experience / job.min_years) if job.min_years else 1.0,
    }
    total = sum(WEIGHTS[k] * v for k, v in parts.items())
    return {
        "score": round(total, 3),
        "breakdown": {k: round(v, 3) for k, v in parts.items()},
        "matched_skills": matched,
        "missing_skills": sorted(required - set(matched)),
        # AI Act : le score aide un recruteur humain, il ne rejette jamais seul.
        "decision": "revue_humaine",
        "warnings": profile.warnings,
    }
