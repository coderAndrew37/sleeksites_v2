import AuditForm from "./AuditForm";

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* HERO */}
        <section className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#c8a96e]">
            Divinar had a world-class Swahili curriculum… but her business was invisible.
          </h1>

          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            No website. No tracking. Zero digital presence.
          </p>

          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            She relied entirely on word-of-mouth—while people were actively searching for her services online and choosing competitors who were already set up.
          </p>

          {/* VIDEO */}
          <div className="text-sm text-gray-500 mb-4">
            Watch what changed:
          </div>

          <div className="aspect-video bg-[#1a1a1a] rounded-lg border border-white/10 flex items-center justify-center mb-10 shadow-2xl">
            <video controls className="w-full h-full rounded-lg">
              <source src="/div-swahili-app.mp4" type="video/mp4" />
            </video>
          </div>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            She didn’t need a “pretty brochure.” She needed a system that consistently brings in customers.
          </p>

          <a
            href="#audit-form"
            className="inline-block bg-[#c8a96e] text-black font-bold py-4 px-10 rounded hover:bg-white transition"
          >
            Get Your Free Audit (Takes 30 Seconds)
          </a>
        </section>

        {/* SYSTEM */}
        <section className="bg-[#1a1a1a] p-10 rounded-xl border border-[#c8a96e]/20 mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#c8a96e]">
            We didn’t just build a website.
          </h2>

          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
            We built a fully-tracked growth system that captures attention, retargets visitors, and converts them into paying customers—automatically.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">Track</div>
              <p className="text-gray-400">Know exactly who visits and what they do</p>
            </div>

            <div>
              <div className="text-2xl font-bold mb-2">Retarget</div>
              <p className="text-gray-400">Bring back visitors who didn’t convert</p>
            </div>

            <div>
              <div className="text-2xl font-bold mb-2">Convert</div>
              <p className="text-gray-400">Turn traffic into real paying customers</p>
            </div>
          </div>
        </section>

        {/* OUTCOME */}
        <section className="mb-24 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#c8a96e]">
            From invisible to international.
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Divinar went from relying on referrals to getting students from across the globe—consistently.
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto">
            The difference wasn’t luck. It was having the right system in place.
          </p>
        </section>

        {/* MIRROR */}
        <section className="mb-24 text-center">
          <h2 className="text-3xl font-bold mb-6">
            If someone searched for what you offer today… would they find you?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Right now, people are actively looking for businesses like yours.
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            If you don’t show up, you don’t exist to them.
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto">
            And every day that stays true—you’re losing opportunities you’ll never even know about.
          </p>
        </section>

        {/* VALUE STACK */}
        <section className="max-w-xl mx-auto mb-12">
          <div className="bg-[#111] p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold mb-4 text-[#c8a96e] text-center">
              What you’ll get in your audit:
            </h3>

            <ul className="text-gray-300 space-y-3 text-sm">
              <li>• Where you&apos;re currently losing potential customers</li>
              <li>• What’s missing from your online presence</li>
              <li>• How competitors are capturing your demand</li>
              <li>• A clear, step-by-step plan to fix it</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section id="audit-form" className="max-w-xl mx-auto border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Ready to build your digital engine?
          </h2>

          <p className="text-gray-400 text-center mb-6">
            Get a free audit. We’ll show you exactly where you’re losing customers—and how to fix it.
          </p>

          <p className="text-xs text-gray-500 text-center mb-8">
            We only take on a limited number of audits each week.
          </p>

          <AuditForm />
        </section>
      </div>
    </main>
  );
}