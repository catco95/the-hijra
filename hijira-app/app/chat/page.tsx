export default function ChatPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
            The Hijra
          </p>

          <h1 className="mb-3 text-4xl font-bold tracking-tight">
            Islamic AI Chat
          </h1>

          <p className="max-w-2xl text-gray-600">
            Ask questions and receive source-first Islamic answers with clarity,
            trust, and scholarly respect.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="min-h-[300px] rounded-xl bg-gray-50 p-4 text-gray-500">
            Chat responses will appear here.
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
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
    </main>
  );
}