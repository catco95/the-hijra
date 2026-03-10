export default function ChatPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-gray-500">
              The Hijra
            </p>
            <h1 className="text-4xl font-bold tracking-tight">
              Islamic AI Chat
            </h1>
          </div>

          <a
            href="/"
            className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium"
          >
            Back Home
          </a>
        </div>

        <p className="mb-8 max-w-2xl text-gray-600">
          Ask questions and receive source-first Islamic answers with clarity,
          trust, and scholarly respect.
        </p>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-4 min-h-[420px] rounded-2xl bg-gray-50 p-5 text-gray-500">
              Chat responses will appear here.
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4">
              <textarea
                placeholder="Ask an Islamic question..."
                className="min-h-[120px] w-full resize-none rounded-xl border border-gray-200 p-4 outline-none"
              />

              <div className="mt-4 flex justify-end">
                <button className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white">
                  Send
                </button>
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Chat Guidance</h2>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="rounded-2xl bg-gray-50 p-4">
                Ask clear questions for better answers.
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                Future versions will show cited Islamic sources here.
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                Sensitive rulings should still be referred to qualified scholars.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}