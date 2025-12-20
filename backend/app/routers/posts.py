from datetime import datetime
from typing import List
from uuid import uuid4

from fastapi import APIRouter, HTTPException

from app.models import CreatePostRequest, Post
from app.services.ai import AIService
from app.services.moderation import ModerationService
from app.services.storage import create_signed_urls, public_cdn_url

router = APIRouter(prefix="/posts", tags=["posts"])

ai_service = AIService()
moderation_service = ModerationService()

POSTS_DB: List[Post] = []


@router.post("", response_model=Post)
def create_post(body: CreatePostRequest):
    image_result = ai_service.generate_image(body.prompt, body.parameters)
    moderation = moderation_service.classify(image_result["url"])
    if not moderation["safe"]:
        raise HTTPException(status_code=400, detail="Content flagged by moderation")
    post = Post(
        id=str(uuid4()),
        title=ai_service.generate_title_and_caption(body.prompt)["title"],
        prompt=body.prompt,
        media_url=image_result["url"],
        media_type=body.parameters.get("media_type", "image"),
        creator_id="demo-user",
        tags=body.tags,
        license=body.license,
        created_at=datetime.utcnow(),
        safe=moderation["safe"],
        model_version=image_result["model_version"],
    )
    POSTS_DB.append(post)
    return post


@router.get("", response_model=List[Post])
def list_posts(q: str | None = None, tag: str | None = None):
    results = POSTS_DB
    if q:
        results = [p for p in results if q.lower() in p.prompt.lower() or q.lower() in p.title.lower()]
    if tag:
        results = [p for p in results if tag in p.tags]
    return results


@router.post("/upload-url")
def upload_url(filename: str):
    key = f"uploads/{uuid4()}-{filename}"
    upload, download = create_signed_urls(key)
    return {"upload_url": upload, "download_url": download, "public_url": public_cdn_url(key)}
