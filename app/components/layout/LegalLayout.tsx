import { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <main className="bg-slate-50 min-h-screen pt-40 pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Sticky Header Info */}
          <aside className="lg:w-1/3 lg:sticky lg:top-40 h-fit">
            <div className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
              Legal Documentation
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 leading-[0.9]">
              {title}
            </h1>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              {subtitle}
            </p>
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                Last Revision
              </p>
              <p className="text-slate-900 font-black">{lastUpdated}</p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500">
                  Have questions? <br />
                  <a
                    href="mailto:legal@sleeksites.co.ke"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Contact Legal Team
                  </a>
                </p>
              </div>
            </div>
          </aside>

          {/* Right: Content Card */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-white">
              <article
                className="prose prose-slate prose-lg max-w-none 
                prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-8
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:flex prose-h2:items-center prose-h2:gap-4
                prose-li:text-slate-600 prose-strong:text-slate-900"
              >
                {children}
              </article>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
