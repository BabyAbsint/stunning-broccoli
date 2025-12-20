from fastapi import APIRouter

from app.services.payments import PaymentService

router = APIRouter(prefix="/payments", tags=["payments"])

service = PaymentService()


@router.post("/intent")
def create_intent(amount_cents: int, currency: str = "usd", provider: str = "stripe"):
    return service.create_intent(amount_cents=amount_cents, currency=currency, provider=provider)


@router.post("/kyc/{user_id}")
def start_kyc(user_id: str):
    return service.start_kyc(user_id)


@router.post("/webhook")
def webhook(payload: dict):
    return service.process_webhook(payload)
