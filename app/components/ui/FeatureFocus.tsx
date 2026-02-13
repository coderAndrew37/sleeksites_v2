export default function FeatureFocus() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-bold tracking-tighter leading-[1.1]">
            Websites that act like <br /> <span className="text-blue-600">your best salesperson.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            We don't just "design." We engineer digital environments where every pixel 
            is placed to drive user action, using the same tech stack as the world's 
            top 1% of tech companies.
          </p>
          <ul className="mt-8 space-y-4 font-medium text-slate-700">
            <li className="flex items-center gap-3">✅ Lightning fast PageSpeed scores (95+)</li>
            <li className="flex items-center gap-3">✅ SEO-first semantic architecture</li>
            <li className="flex items-center gap-3">✅ Integrated Lead-Gen workflows</li>
          </ul>
        </div>
        
        {/* The "Banger" visual: A floating browser mockup */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-100/50 rounded-[3rem] blur-2xl group-hover:bg-blue-200/50 transition-all" />
          <div className="relative aspect-video bg-slate-100 rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">
             {/* Replace with your best project screenshot */}
             <div className="absolute top-0 w-full h-8 bg-slate-200 flex items-center px-4 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
             </div>
             <div className="p-8 pt-12 text-slate-400 font-mono text-xs">
                // High-performance code rendering...
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}