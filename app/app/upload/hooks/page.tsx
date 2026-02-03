export default function HookVaultPage() {
  const hooks = [
    { id: 1, text: "Most people fail because they ignore this step", score: 88 },
    { id: 2, text: "If you’re still doing this, you’re wasting money", score: 82 },
    { id: 3, text: "This one change doubled our results", score: 91 },
  ];

  return (
    <div className="min-h-screen p-10 bg-zinc-950 text-white">
      <h1 className="text-2xl font-semibold">Hook Vault</h1>

      <p className="text-white/60 mt-2">
        Save and reuse high-performing hooks across campaigns.
      </p>

      <div className="mt-8 space-y-4 max-w-3xl">
        {hooks.map((hook) => (
          <div
            key={hook.id}
            className="bg-white/5 p-5 rounded flex justify-between items-center"
          >
            <p className="text-sm">{hook.text}</p>
            <span className="text-xs text-white/60">Score {hook.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
