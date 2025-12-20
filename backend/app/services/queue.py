from celery import Celery

from app.config import get_settings

settings = get_settings()

celery_app = Celery(
    "creatorhub",
    broker=settings.redis_url,
    backend=settings.redis_url,
)


@celery_app.task
def process_generation(job_id: str, payload: dict) -> dict:
    """
    Simulates async generation (image/audio/text). Replace with long-running tasks.
    """
    return {"job_id": job_id, "status": "completed", "output": payload}
