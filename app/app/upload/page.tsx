"use client";

import { useState } from "react";

export default function UploadAdPage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function analyzeAd() {
    setLoading(true);
    setResult(null);

    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: input }),
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <div className="min-h-screen p-10 bg-zinc-950 text-white">
      <h1 className="text-2xl font-semibold">Analyze an Ad</h1>

      <p className="text-white/60 mt-2 max-w-xl">
        Paste ad copy, reel script, or short-form content. ScaleForge AI will
        break it down and generate hooks and scripts.
      </p>

      <textarea
        className="w-full max-w-3xl mt-6 p-4 bg-black border border-white/10 rounded text-sm"
        rows={8}
        placeholder="Paste ad or reel content here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={analyzeAd}
        disabled={loading || !input}
        className="mt-6 bg-white text-black px-6 py-3 rounded text-sm font-medium disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Analyze Ad"}
      </button>

      {result && (
        <div className="mt-10 max-w-3xl bg-white/5 p-6 rounded">
          <h2 className="text-lg font-semibold mb-4">AI Analysis</h2>

          <pre className="text-sm text-white/80 whitespace-pre-wrap">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
