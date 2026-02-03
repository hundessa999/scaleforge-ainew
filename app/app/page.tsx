import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center px-8 py-6 border-b border-white/10">
        <h1 className="text-xl font-semibold">ScaleForge AI</h1>
        <nav className="space-x-6 text-sm">
          <Link href="/pricing">Pricing</Link>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/signup" className="bg-white text-black px-4 py-2 rounded">
            Get Started
          </Link>
        </nav>
      </header>

      <section className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-5xl font-bold max-w-3xl">
          Turn any ad or reel into high-performing hooks in minutes
        </h2>

        <p className="mt-6 text-lg text-white/70 max-w-2xl">
          AI-powered ad analysis for short-form content.
        </p>

        <div className="mt-10 flex gap-4">
          <Link href="/dashboard" className="bg-white text-black px-6 py-3 rounded">
            View Dashboard
          </Link>
          <Link href="/auth/signup" className="border border-white/20 px-6 py-3 rounded">
            Analyze an Ad
          </Link>
        </div>
      </section>
    </main>
  );
}
