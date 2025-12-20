"use client";

import { useEffect, useState } from "react";
import { listPosts } from "../lib/api";

type Post = {
  id: string;
  title: string;
  prompt: string;
  media_url: string;
  license: string;
  tags: string[];
  model_version?: string;
};

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    listPosts().then(setPosts);
  }, []);

  const handleSearch = async () => {
    const results = await listPosts(query, tag);
    setPosts(results);
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search prompt or title"
          className="flex-1 rounded-md bg-gray-900 border border-gray-700 px-3 py-2 text-sm text-white"
        />
        <input
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Filter tag"
          className="w-40 rounded-md bg-gray-900 border border-gray-700 px-3 py-2 text-sm text-white"
        />
        <button className="button-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {posts.map((post) => (
          <div key={post.id} className="card space-y-2">
            <p className="text-indigo-200 font-semibold">{post.title}</p>
            <p className="text-sm text-gray-300 line-clamp-2">{post.prompt}</p>
            <div className="text-xs text-gray-400 flex gap-2">
              <span>License: {post.license}</span>
              {post.model_version && <span>Model: {post.model_version}</span>}
            </div>
            <div className="flex flex-wrap gap-1">
              {post.tags.map((t) => (
                <span key={t} className="text-xs bg-gray-800 text-gray-200 px-2 py-1 rounded-full">
                  #{t}
                </span>
              ))}
            </div>
          </div>
        ))}
        {posts.length === 0 && <p className="text-gray-400">No posts yet.</p>}
      </div>
    </div>
  );
}
