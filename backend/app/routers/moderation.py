from datetime import datetime
from uuid import uuid4

from fastapi import APIRouter, HTTPException

from app.models import ModerationReport
from app.services.moderation import ModerationService

router = APIRouter(prefix="/moderation", tags=["moderation"])

service = ModerationService()
REPORTS: list[ModerationReport] = []


@router.post("/check")
def check_media(url: str, media_hash: str | None = None):
    hash_flagged = service.hash_check(media_hash) if media_hash else False
    result = service.classify(url)
    if hash_flagged:
        result["safe"] = False
        result["reason"] = "Hash matched blocklist"
    return result


@router.post("/report", response_model=ModerationReport)
def report_content(post_id: str, reason: str, reporter_id: str):
    report = ModerationReport(
        id=str(uuid4()), post_id=post_id, reason=reason, reporter_id=reporter_id, created_at=datetime.utcnow()
    )
    REPORTS.append(report)
    return report


@router.post("/ban/{user_id}")
def ban_creator(user_id: str):
    if not user_id:
        raise HTTPException(status_code=400, detail="Missing user id")
    return {"user_id": user_id, "banned": True}
