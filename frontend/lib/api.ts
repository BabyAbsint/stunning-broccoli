const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000/api";

export async function loginWithEmail(email: string) {
  const res = await fetch(`${API_BASE}/auth/email?email=${encodeURIComponent(email)}`, { method: "POST" });
  return res.json();
}

export async function loginWithOAuth(code: string) {
  const res = await fetch(`${API_BASE}/auth/oauth?code=${encodeURIComponent(code)}`, { method: "POST" });
  return res.json();
}

export async function requestUploadUrl(filename: string) {
  const res = await fetch(`${API_BASE}/posts/upload-url?filename=${encodeURIComponent(filename)}`, { method: "POST" });
  return res.json();
}

export async function createPost(body: any) {
  const res = await fetch(`${API_BASE}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return res.json();
}

export async function listPosts(q?: string, tag?: string) {
  const params = new URLSearchParams();
  if (q) params.append("q", q);
  if (tag) params.append("tag", tag);
  const res = await fetch(`${API_BASE}/posts?${params.toString()}`, { cache: "no-store" });
  return res.json();
}
