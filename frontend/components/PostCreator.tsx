"use client";

import { useState } from "react";
import { createPost, requestUploadUrl } from "../lib/api";

export default function PostCreator() {
  const [prompt, setPrompt] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [uploadUrl, setUploadUrl] = useState<string | null>(null);

  const handleUploadPrep = async (file?: File | null) => {
    const filename = file?.name ?? "upload.png";
    const result = await requestUploadUrl(filename);
    setUploadUrl(result.upload_url);
    return result;
  };

  const handleSubmit = async () => {
    const parameters = { model_version: "sdxl-stub", media_type: "image" };
    const uploadMeta = await handleUploadPrep(null);
    const res = await createPost({
      prompt,
      parameters,
      upload_url: uploadMeta.upload_url,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      license: "cc-by"
    });
    setStatus(`Post ${res.title} created with model ${res.model_version}`);
  };

  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <label className="text-sm text-gray-300">Prompt</label>
        <textarea
          className="w-full rounded-md bg-gray-900 border border-gray-700 px-3 py-2 text-sm text-white"
          rows={3}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the image/audio to generate..."
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm text-gray-300">Tags (comma-separated)</label>
        <input
          className="w-full rounded-md bg-gray-900 border border-gray-700 px-3 py-2 text-sm text-white"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="fantasy, neon, portrait"
        />
      </div>
      <div className="flex gap-2">
        <button className="button-primary" onClick={handleSubmit}>
          Generate &amp; create
        </button>
        {uploadUrl && (
          <span className="text-xs text-gray-400 self-center">Signed upload ready (expires soon)</span>
        )}
      </div>
      {status && <p className="text-xs text-green-300">{status}</p>}
    </div>
  );
}
