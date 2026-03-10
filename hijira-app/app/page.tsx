export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
          Islamic AI Platform
        </p>

        <h1 className="text-5xl font-bold tracking-tight mb-6">
          The Hijra
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Source-first Islamic AI with clarity, trust, and scholarly respect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/chat"
            className="rounded-full bg-black text-white px-6 py-3 text-sm font-medium"
          >
            Enter Hijra
          </a>

          <a
            href="#"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium"
          >
            View Vision
          </a>
        </div>
      </div>
    </main>
  );
}