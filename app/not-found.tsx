import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="text-center">
        <span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase">
          Error 404
        </span>
        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mt-4 mb-8">
          Lost in <br /> space.
        </h1>
        <p className="text-slate-400 max-w-md mx-auto mb-12 text-lg">
          The page or project you're looking for has moved or doesn't exist.
          Let's get you back to civilization.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          <ArrowLeft size={20} />
          Return Home
        </Link>
      </div>

      {/* Aesthetic Background Effect */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
