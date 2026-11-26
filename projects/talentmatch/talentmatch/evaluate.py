"""Évaluation : qualité d'extraction (F1), ranking (nDCG@k) et équité (écart de score entre groupes)."""
import math


def f1(pred: set, gold: set) -> float:
    if not pred and not gold:
        return 1.0
    tp = len(pred & gold)
    return 2 * tp / (len(pred) + len(gold)) if tp else 0.0


def ndcg_at_k(ranked_relevance: list[int], k: int = 5) -> float:
    dcg = sum(r / math.log2(i + 2) for i, r in enumerate(ranked_relevance[:k]))
    ideal = sum(r / math.log2(i + 2) for i, r in enumerate(sorted(ranked_relevance, reverse=True)[:k]))
    return dcg / ideal if ideal else 0.0


def score_gap(scores_by_group: dict[str, list[float]]) -> float:
    """Écart max des scores moyens entre groupes à compétences égales ; doit rester ~0."""
    means = [sum(v) / len(v) for v in scores_by_group.values() if v]
    return max(means) - min(means) if means else 0.0
