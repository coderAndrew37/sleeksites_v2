import { INDUSTRIES } from "@/data/industries";

export function IndustryPricing() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-12 text-center text-slate-900">
          Tailored for Your{" "}
          <span className="text-blue-600 italic">Industry.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.title}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <h4 className="text-xl font-black text-slate-900 mb-2">
                {ind.title}
              </h4>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                Starting At
              </p>
              <p className="text-3xl font-black text-blue-600 mb-6">
                KES {ind.price}
              </p>
              <ul className="space-y-3">
                {ind.features.map((f) => (
                  <li
                    key={f}
                    className="text-sm text-slate-500 flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
