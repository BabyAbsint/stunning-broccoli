from datetime import timedelta
from typing import Tuple

import boto3
from botocore.client import Config

from app.config import get_settings


def get_s3_client():
    settings = get_settings()
    return boto3.client(
        "s3",
        endpoint_url=str(settings.s3_endpoint),
        aws_access_key_id=settings.s3_access_key,
        aws_secret_access_key=settings.s3_secret_key,
        config=Config(signature_version="s3v4"),
        region_name="us-east-1",
    )


def create_signed_urls(key: str, expires: int = 3600) -> Tuple[str, str]:
    """
    Returns (upload_url, download_url) for the given key.
    """
    settings = get_settings()
    client = get_s3_client()
    upload_url = client.generate_presigned_url(
        "put_object",
        Params={"Bucket": settings.s3_bucket, "Key": key},
        ExpiresIn=expires,
    )
    download_url = client.generate_presigned_url(
        "get_object",
        Params={"Bucket": settings.s3_bucket, "Key": key},
        ExpiresIn=expires,
    )
    return upload_url, download_url


def public_cdn_url(key: str) -> str:
    settings = get_settings()
    return f"{settings.cdn_base_url}/{settings.s3_bucket}/{key}"
