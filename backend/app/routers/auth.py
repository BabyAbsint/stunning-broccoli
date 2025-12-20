from datetime import datetime
from uuid import uuid4

from fastapi import APIRouter, Depends, Header, HTTPException

from app.config import Settings, get_settings
from app.models import AuthProvider, User

router = APIRouter(prefix="/auth", tags=["auth"])


def mock_user(provider: AuthProvider, email: str) -> User:
    return User(
        id=str(uuid4()),
        email=email,
        display_name=email.split("@")[0],
        provider=provider,
        banned=False,
        kyc_verified=False,
    )


@router.post("/email")
def email_magic_link(email: str, settings: Settings = Depends(get_settings)):
    # In production, send a real email magic link
    return {"sent": True, "to": email, "from": settings.email_sender}


@router.post("/oauth")
def oauth_callback(code: str):
    if not code:
        raise HTTPException(status_code=400, detail="Missing OAuth code")
    return {"token": f"oauth-token-{code}", "user": mock_user(AuthProvider.oauth, "demo@user.dev")}


@router.get("/me")
def current_user(authorization: str | None = Header(None)):
    if not authorization:
        raise HTTPException(status_code=401, detail="Missing token")
    return mock_user(AuthProvider.email, "demo@user.dev")


@router.post("/ban/{user_id}")
def ban_user(user_id: str):
    return {"user_id": user_id, "banned_at": datetime.utcnow()}
