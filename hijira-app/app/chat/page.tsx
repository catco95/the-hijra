export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-500">
            Islamic AI Platform
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl">
            The Hijra
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-600">
            Source-first Islamic AI with clarity, trust, and scholarly respect.
            Built to help users ask, learn, and explore with a cleaner Islamic
            knowledge experience.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/chat"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white"
            >
              Enter Hijra
            </a>

            <a
              href="/chat"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-black"
            >
              Explore Chat
            </a>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-5">
              <h2 className="mb-2 text-sm font-semibold">Source First</h2>
              <p className="text-sm text-gray-600">
                Built around trusted Islamic knowledge, not random guesswork.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5">
              <h2 className="mb-2 text-sm font-semibold">Clear and Simple</h2>
              <p className="text-sm text-gray-600">
                Designed for clean reading, easy questions, and focused learning.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5">
              <h2 className="mb-2 text-sm font-semibold">Built to Grow</h2>
              <p className="text-sm text-gray-600">
                Ready for chat, sources, research tools, and future scholar review.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}