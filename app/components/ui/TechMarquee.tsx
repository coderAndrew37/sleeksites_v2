export function TechMarquee() {
  const stack = [
    "Next.js",
    "Sanity",
    "PostgreSQL",
    "Tailwind",
    "M-Pesa API",
    "AWS",
    "Framer Motion",
    "TypeScript",
  ];
  return (
    <div className="py-10 bg-slate-950 border-y border-white/5 overflow-hidden flex whitespace-nowrap">
      <div className="flex animate-marquee gap-12 items-center">
        {[...stack, ...stack].map((t, i) => (
          <span
            key={i}
            className="text-white/20 text-4xl font-black uppercase tracking-tighter"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
