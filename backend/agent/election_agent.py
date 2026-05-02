import os
import google.generativeai as genai
from dotenv import load_dotenv
from agent.prompts import SYSTEM_PROMPT

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def get_response(user_message):

    prompt = f"""
    {SYSTEM_PROMPT}

    User Question:
    {user_message}
    """

    response = model.generate_content(prompt)

    return response.text
