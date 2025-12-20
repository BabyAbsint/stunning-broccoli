from functools import lru_cache
from pydantic import BaseSettings, Field, AnyUrl


class Settings(BaseSettings):
    app_name: str = "ExGlitch"
    api_prefix: str = "/api"
    frontend_url: AnyUrl = Field("http://localhost:3000", description="Allowed frontend origin")
    redis_url: str = "redis://localhost:6379/0"

    s3_endpoint: AnyUrl = Field("http://localhost:9000", description="S3-compatible endpoint")
    s3_bucket: str = "exglitch-media"
    s3_access_key: str = "minioadmin"
    s3_secret_key: str = "minioadmin"
    cdn_base_url: AnyUrl = Field("http://localhost:9000", description="CDN or bucket public base")

    oauth_client_id: str = "demo-client-id"
    oauth_client_secret: str = "demo-client-secret"
    email_sender: str = "no-reply@creatorhub.local"

    stripe_secret_key: str = "sk_test_placeholder"
    adyen_api_key: str = "adyen_api_key_placeholder"
    webhook_secret: str = "webhook_secret_placeholder"

    class Config:
        env_file = ".env"
        case_sensitive = False


@lru_cache
def get_settings() -> Settings:
    return Settings()
