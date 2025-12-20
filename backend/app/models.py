from datetime import datetime
from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, HttpUrl


class AuthProvider(str, Enum):
    email = "email"
    oauth = "oauth"


class User(BaseModel):
    id: str
    email: str
    display_name: str
    provider: AuthProvider
    banned: bool = False
    kyc_verified: bool = False


class MediaType(str, Enum):
    image = "image"
    audio = "audio"
    video = "video"


class Post(BaseModel):
    id: str
    title: str
    prompt: str
    media_url: HttpUrl
    media_type: MediaType
    creator_id: str
    tags: List[str] = []
    license: str = "cc-by"
    created_at: datetime
    safe: bool = True
    model_version: Optional[str] = None


class CreatePostRequest(BaseModel):
    prompt: str
    parameters: dict
    upload_url: Optional[HttpUrl]
    tags: List[str] = []
    license: str = "cc-by"


class PaymentIntent(BaseModel):
    id: str
    provider: str
    amount_cents: int
    currency: str
    status: str
    creator_id: Optional[str]


class Job(BaseModel):
    id: str
    task_type: str
    status: str
    created_at: datetime
    payload: dict


class ModerationReport(BaseModel):
    id: str
    post_id: str
    reason: str
    reporter_id: str
    created_at: datetime
