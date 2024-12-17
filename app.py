from fastapi import FastAPI, Request
from pydantic import BaseModel
import openai

app = FastAPI()

# 問題模型
class Question(BaseModel):
    question: str

# OpenAI API設定
openai.api_key = "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"

@app.post("/api/ask")
async def ask(question: Question):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=question.question,
        max_tokens=150
    )
    return {"answer": response.choices[0].text.strip()}
