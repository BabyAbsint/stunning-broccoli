from datetime import datetime
from uuid import uuid4

from fastapi import APIRouter

from app.models import Job
from app.services.queue import process_generation

router = APIRouter(prefix="/jobs", tags=["jobs"])

JOBS: dict[str, Job] = {}


@router.post("")
def enqueue_job(task_type: str, payload: dict):
    job_id = str(uuid4())
    job = Job(id=job_id, task_type=task_type, status="queued", created_at=datetime.utcnow(), payload=payload)
    JOBS[job_id] = job
    process_generation.delay(job_id, payload)
    return {"job_id": job_id, "status": "queued"}


@router.get("/{job_id}", response_model=Job)
def get_job(job_id: str):
    return JOBS[job_id]
