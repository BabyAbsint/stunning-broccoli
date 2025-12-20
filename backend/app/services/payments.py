from datetime import datetime
from typing import Dict

from app.config import get_settings


class PaymentService:
    """
    Simple facade to stripe/adyen flows. Replace with provider SDKs in production.
    """

    def __init__(self):
        self.settings = get_settings()

    def create_intent(self, amount_cents: int, currency: str, provider: str = "stripe") -> Dict:
        intent_id = f"{provider}_intent_{datetime.utcnow().timestamp()}"
        return {
            "id": intent_id,
            "provider": provider,
            "amount_cents": amount_cents,
            "currency": currency,
            "status": "requires_action",
        }

    def process_webhook(self, payload: Dict) -> Dict:
        return {"received": True, "payload": payload}

    def start_kyc(self, user_id: str) -> Dict:
        return {"user_id": user_id, "kyc_url": "https://kyc.example.com/start"}
