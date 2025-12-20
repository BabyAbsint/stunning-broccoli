const phases = [
  { title: "Friends & family", description: "Invite-only access with manual approvals." },
  { title: "Waitlist", description: "Gradual rollout with payment + KYC gating." },
  { title: "Open beta", description: "Public feed with reporting/moderation rails." }
];

export default function LaunchPhases() {
  return (
    <section className="card">
      <h2 className="text-lg font-semibold text-white mb-3">Launch plan</h2>
      <div className="grid md:grid-cols-3 gap-3">
        {phases.map((phase) => (
          <div key={phase.title} className="p-3 rounded-lg bg-gray-900 border border-gray-800">
            <p className="text-indigo-300 font-semibold">{phase.title}</p>
            <p className="text-sm text-gray-300">{phase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
