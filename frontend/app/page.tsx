import Link from "next/link";
import AuthPanel from "../components/AuthPanel";
import LaunchPhases from "../components/LaunchPhases";

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="grid md:grid-cols-2 gap-4">
        <div className="card space-y-4">
          <h2 className="text-lg font-semibold text-white">Authenticate</h2>
          <AuthPanel />
        </div>
        <div className="card space-y-2">
          <h2 className="text-lg font-semibold text-white">Quick links</h2>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>
              <Link href="/create" className="text-indigo-300 underline">
                Create a post
              </Link>
            </li>
            <li>
              <Link href="/feed" className="text-indigo-300 underline">
                Public feed &amp; search
              </Link>
            </li>
            <li>Webhook + payments simulated via backend stubs</li>
          </ul>
        </div>
      </section>
      <LaunchPhases />
    </div>
  );
}
