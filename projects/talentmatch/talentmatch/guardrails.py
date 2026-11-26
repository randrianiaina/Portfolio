"""Garde-fous : injection de prompt cachée dans les CV et hallucinations d'extraction."""
import re

_INJECTION = re.compile(
    r"ignore (all |the )?(previous|above) instructions|ignore les instructions|"
    r"you are now|tu es maintenant|system prompt|rate this (cv|candidate) (as )?(10|highly)|"
    r"note ce (cv|candidat)|<\s*/?\s*(system|assistant)\s*>",
    re.I,
)


def detect_prompt_injection(text: str) -> list[str]:
    return [m.group() for m in _INJECTION.finditer(text)]


def ungrounded_skills(skills: list[str], source: str) -> list[str]:
    """Compétences renvoyées par le LLM mais absentes du CV source = hallucinations probables."""
    low = source.lower()
    return [s for s in skills if s.lower() not in low]
