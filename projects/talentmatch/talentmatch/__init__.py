from .extract import Profile, extract
from .match import Job, score
from .pseudonymize import pseudonymize


def analyze(cv_text: str, job: Job, names: list[str] = (), llm=None) -> dict:
    """Pipeline complet : pseudonymisation -> extraction -> garde-fous -> score explicable."""
    clean, _mapping = pseudonymize(cv_text, names)  # la table reste côté client, jamais envoyée au LLM
    profile = extract(clean, llm)
    return score(job, profile, clean)


__all__ = ["Job", "Profile", "analyze", "extract", "pseudonymize", "score"]
