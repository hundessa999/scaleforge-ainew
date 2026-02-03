export default function ReportsPage() {
  const reports = [
    { id: 1, title: "TikTok Ad – Fitness Offer", date: "2026-01-12", score: 84 },
    { id: 2, title: "Instagram Reel – SaaS Tool", date: "2026-01-14", score: 79 },
  ];

  return (
    <div className="min-h-screen p-10 bg-zinc-950 text-white">
      <h1 className="text-2xl font-semibold">Reports</h1>

      <p className="text-white/60 mt-2">View past ad analyses and performance insights.</p>

      <div className="mt-8 max-w-4xl bg-white/5 rounded overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/10">
            <tr>
              <th className="text-left p-4">Ad</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Score</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r) => (
              <tr key={r.id} className="border-t border-white/10">
                <td className="p-4">{r.title}</td>
                <td className="p-4 text-white/60">{r.date}</td>
                <td className="p-4">{r.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
