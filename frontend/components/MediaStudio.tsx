export default function MediaStudio() {
  return (
    <div className="space-y-8">
      <section className="card space-y-4">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">Unified Media Studio</p>
          <h1 className="text-2xl font-semibold text-white">AI-powered upload &amp; edit workspace</h1>
          <p className="text-sm text-gray-300">
            Upload MP3s, music stems, files, images, and video clips. Combine them in a timeline and
            let the AI editor suggest cuts, mixes, and captions.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-dashed border-indigo-400/60 bg-indigo-500/10 p-4">
            <h2 className="text-sm font-semibold text-white">Audio uploads</h2>
            <p className="text-xs text-gray-300">MP3, WAV, AIFF, FLAC</p>
            <input
              className="mt-3 w-full text-sm text-gray-200 file:mr-3 file:rounded-md file:border-0 file:bg-indigo-500/20 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-indigo-200"
              type="file"
              multiple
              accept="audio/*"
            />
          </div>
          <div className="rounded-lg border border-dashed border-emerald-400/60 bg-emerald-500/10 p-4">
            <h2 className="text-sm font-semibold text-white">Image uploads</h2>
            <p className="text-xs text-gray-300">PNG, JPG, SVG, WebP</p>
            <input
              className="mt-3 w-full text-sm text-gray-200 file:mr-3 file:rounded-md file:border-0 file:bg-emerald-500/20 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-emerald-200"
              type="file"
              multiple
              accept="image/*"
            />
          </div>
          <div className="rounded-lg border border-dashed border-amber-400/60 bg-amber-500/10 p-4">
            <h2 className="text-sm font-semibold text-white">Video uploads</h2>
            <p className="text-xs text-gray-300">MP4, MOV, WebM</p>
            <input
              className="mt-3 w-full text-sm text-gray-200 file:mr-3 file:rounded-md file:border-0 file:bg-amber-500/20 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-amber-200"
              type="file"
              multiple
              accept="video/*"
            />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-gray-700 bg-gray-900/60 p-4">
            <h3 className="text-sm font-semibold text-white">General file vault</h3>
            <p className="text-xs text-gray-300">Docs, stems, project notes, ZIP archives.</p>
            <input
              className="mt-3 w-full text-sm text-gray-200 file:mr-3 file:rounded-md file:border-0 file:bg-gray-700/70 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-gray-200"
              type="file"
              multiple
            />
          </div>
          <div className="rounded-lg border border-gray-700 bg-gray-900/60 p-4">
            <h3 className="text-sm font-semibold text-white">Project details</h3>
            <div className="mt-3 space-y-3">
              <div>
                <label className="text-xs text-gray-300">Project title</label>
                <input
                  className="mt-1 w-full rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-white"
                  placeholder="Midnight Vibes EP"
                />
              </div>
              <div>
                <label className="text-xs text-gray-300">AI editing goal</label>
                <textarea
                  className="mt-1 w-full rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-white"
                  rows={3}
                  placeholder="Blend vocals, add lo-fi texture, generate captions, and sync to video edits."
                />
              </div>
              <button className="button-primary w-full">Start AI session</button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="card space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">AI video + music editor</h2>
            <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs text-indigo-200">
              Live preview
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-[1.6fr_1fr]">
            <div className="space-y-3">
              <div className="aspect-video rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-4">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="text-xs text-gray-400">Video preview</p>
                    <p className="text-sm text-white">Drop a clip to see AI scene detection.</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>00:01:12</span>
                    <span>Scene 4 • Beat aligned</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-gray-700 bg-gray-900/60 p-3">
                <p className="text-xs text-gray-300">Timeline</p>
                <div className="mt-2 space-y-2">
                  <div className="h-3 rounded-full bg-indigo-500/40" />
                  <div className="h-3 rounded-full bg-emerald-500/40" />
                  <div className="h-3 rounded-full bg-amber-500/40" />
                </div>
                <p className="mt-2 text-xs text-gray-400">Drag to reorder layers: Music, Voiceover, Video.</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="rounded-lg border border-gray-700 bg-gray-900/60 p-4">
                <h3 className="text-sm font-semibold text-white">AI suggestions</h3>
                <ul className="mt-3 space-y-2 text-xs text-gray-300">
                  <li>• Auto-duck background music under dialogue.</li>
                  <li>• Generate smooth transitions every 12 beats.</li>
                  <li>• Create 3 caption styles for social formats.</li>
                  <li>• Detect and remove long silences.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-gray-700 bg-gray-900/60 p-4">
                <h3 className="text-sm font-semibold text-white">Export presets</h3>
                <div className="mt-3 space-y-2 text-xs text-gray-300">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-indigo-500" />
                    4K master with stems
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-indigo-500" />
                    Social-ready vertical video
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-indigo-500" />
                    Lossless audio package
                  </label>
                </div>
                <button className="mt-3 w-full rounded-md border border-indigo-500/40 bg-indigo-500/20 px-3 py-2 text-xs font-semibold text-indigo-100">
                  Render with AI
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card space-y-3">
            <h2 className="text-lg font-semibold text-white">Assistant prompt</h2>
            <textarea
              className="w-full rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-white"
              rows={6}
              placeholder="Example: Create a cinematic intro, sync the bass drop to the video zoom, and add soft reverb."
            />
            <button className="button-primary w-full">Ask AI Editor</button>
          </div>
          <div className="card space-y-3">
            <h2 className="text-lg font-semibold text-white">Processing queue</h2>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center justify-between">
                <span>Audio normalization</span>
                <span className="text-emerald-300">Ready</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Scene detection</span>
                <span className="text-amber-300">Running</span>
              </div>
              <div className="flex items-center justify-between">
                <span>AI captions</span>
                <span className="text-gray-400">Queued</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
