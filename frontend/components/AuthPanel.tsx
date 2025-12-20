"use client";

import { useState } from "react";
import { loginWithEmail, loginWithOAuth } from "../lib/api";

export default function AuthPanel() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleEmail = async () => {
    const res = await loginWithEmail(email);
    setStatus(res.sent ? `Magic link sent to ${email}` : "Failed to send");
  };

  const handleOAuth = async () => {
    const res = await loginWithOAuth("demo-code");
    setStatus(`OAuth token issued for ${res.user.email}`);
  };

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <label className="block text-sm text-gray-300">Email sign-in</label>
        <div className="flex gap-2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-md bg-gray-900 border border-gray-700 px-3 py-2 text-sm text-white"
            placeholder="you@example.com"
          />
          <button className="button-primary" onClick={handleEmail}>
            Send link
          </button>
        </div>
      </div>
      <div>
        <button className="button-primary" onClick={handleOAuth}>
          Continue with OAuth
        </button>
      </div>
      {status && <p className="text-xs text-green-300">{status}</p>}
    </div>
  );
}
