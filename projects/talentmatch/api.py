"""API HTTP (FastAPI) consommée par le front Next.js / Node.  Lancer : uvicorn api:app --reload"""
from fastapi import FastAPI
from pydantic import BaseModel, Field

from talentmatch import Job, analyze

app = FastAPI(title="TalentMatch")


class MatchRequest(BaseModel):
    cv_text: str = Field(max_length=50_000)
    candidate_names: list[str] = []
    job: dict


@app.post("/match")
def match(req: MatchRequest):
    # shortcut: extraction hors ligne ; passer llm=<client Bedrock/SageMaker> en production.
    return analyze(req.cv_text, Job(**req.job), req.candidate_names)
