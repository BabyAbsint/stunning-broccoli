# ExGlitch (stunning-broccoli)

This repo contains a minimal scaffolding for a creator-focused platform with:

- **Next.js frontend** with OAuth/email auth UI, post creation, and public feed.
- **FastAPI backend** covering auth, posts, payments/KYC, jobs/queue, moderation, and storage.
- **Queue + AI stubs** (Celery + Redis, SDXL/TTS/LLM placeholders).
- **S3-compatible media handling** with signed URLs and CDN base support.
- **Launch strategy** UI block (friends & family → waitlist → open beta).

## Getting started

```bash
# Backend
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload

# Frontend
cd frontend
npm install
npm run dev
```

Configure environment via `.env` files if needed. Default CORS allows `http://localhost:3000`.
