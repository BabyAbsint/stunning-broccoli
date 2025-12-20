import "../styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "ExGlitch",
  description: "AI-powered creator studio"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-5xl mx-auto py-10 px-4 space-y-6">
          <header className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">ExGlitch</div>
            <div className="text-sm text-gray-300">Friends &amp; Family → Waitlist → Open beta</div>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
