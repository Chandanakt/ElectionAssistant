# Election Process Education Assistant

AI-powered assistant that teaches users about election processes interactively.

---

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
- Responsive UI
- Beginner-friendly interface

# Security
- Environment variables for API keys

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
## Security
API keys are stored using environment variables and are never hardcoded.

## Testing
Basic API endpoint testing was performed using FastAPI TestClient.


