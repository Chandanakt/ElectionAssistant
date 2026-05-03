# Election Process Education Assistant

AI-powered assistant that teaches users about election processes interactively.

---
## Built Using Google Antigravity

This project was developed using Google Antigravity along with Gemini AI and Google Cloud technologies to rapidly prototype and build an interactive election education assistant.

# Approach and Logic

The assistant uses Gemini AI to understand user questions related to elections and generate beginner-friendly educational responses.

The workflow:
1. User asks election-related question
2. FastAPI backend processes request
3. Gemini AI generates contextual response
4. React frontend displays interactive output

The system focuses on simplifying election awareness through conversational AI.

# Assumptions

- Users may have limited knowledge about elections
- Internet connection is available
- Gemini API access is configured properly
- The assistant is designed for educational purposes
  
# Features
- AI Chat Assistant
- Election Timeline
- Quiz System
- Beginner Friendly UI
- Gemini AI Integration
- Cloud Run Deployment

# Google Technologies Used
- Gemini API
- Google Cloud Run
- Firebase (optional)

# Tech Stack
- React.js
- FastAPI
- Docker
- Google Cloud Run

# Accessibility
- Responsive UI for mobile devices
- Simple and readable interface
- Beginner-friendly interaction design
- Clear navigation and buttons

# Security
- API keys managed using environment variables
- No sensitive credentials hardcoded
- Backend configured with controlled API access
---

# Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn app:app --reload
```

Backend runs on:

```text
http://localhost:8000
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# Deploy to Google Cloud Run

## Build Docker Image

```bash
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/election-assistant
```

---

## Deploy

```bash
gcloud run deploy election-assistant \
--image gcr.io/YOUR_PROJECT_ID/election-assistant \
--platform managed \
--allow-unauthenticated \
--region asia-south1
```

---

## Testing
Basic API endpoint testing was performed using FastAPI TestClient.


