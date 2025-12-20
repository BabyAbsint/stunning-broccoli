from typing import Dict


class ModerationService:
    """
    Lightweight moderation stub with NSFW/violence scoring and hash checks.
    Replace with providers like Hive, AWS Rekognition, or custom classifiers.
    """

    def classify(self, media_url: str) -> Dict:
        return {"nsfw_score": 0.01, "violence_score": 0.01, "safe": True}

    def hash_check(self, media_hash: str) -> bool:
        # In production, compare against a shared blocklist (e.g., PhotoDNA).
        return False
