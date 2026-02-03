export default function DashboardPage() {
  return (
    <div className="min-h-screen flex bg-zinc-950">
      <aside className="w-64 border-r border-white/10 p-6">
        <h2 className="text-lg font-semibold">ScaleForge AI</h2>

        <nav className="mt-10 space-y-4 text-sm text-white/70">
          <a href="/dashboard">Overview</a>
          <a href="/dashboard/upload">Analyze Ad</a>
          <a href="/dashboard/hooks">Hook Vault</a>
          <a href="/dashboard/reports">Reports</a>
          <a href="/dashboard/settings">Settings</a>
        </nav>
      </aside>

      <main className="flex-1 p-10">
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white/5 p-6 rounded">
            <p className="text-sm text-white/60">Ads analyzed</p>
            <p className="text-2xl font-bold mt-2">128</p>
          </div>

          <div className="bg-white/5 p-6 rounded">
            <p className="text-sm text-white/60">Hooks generated</p>
            <p className="text-2xl font-bold mt-2">512</p>
          </div>

          <div className="bg-white/5 p-6 rounded">
            <p className="text-sm text-white/60">Avg score</p>
            <p className="text-2xl font-bold mt-2">82%</p>
          </div>

          <div className="bg-white/5 p-6 rounded">
            <p className="text-sm text-white/60">Reports saved</p>
            <p className="text-2xl font-bold mt-2">64</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-lg font-semibold mb-4">Recent analyses</h2>

          <div className="bg-white/5 rounded p-6 text-sm text-white/60">
            No analyses yet. Upload an ad to get started.
          </div>
        </div>
      </main>
    </div>
  );
}
