from fastapi import APIRouter
from pydantic import BaseModel
from agent.election_agent import get_response

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
def chat(req: ChatRequest):

    response = get_response(req.message)

    return {
        "response": response
    }
