const logos = ["Google", "Meta", "Amazon", "Netflix", "Stripe", "Airbnb"]; // Replace with your client SVG/Images

const Trustbar = () => {
  return (
    <div className="py-20 border-y border-slate-100 bg-white overflow-hidden">
      <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-[0.2em] mb-10">
        Trusted by brands worldwide
      </p>
      
      <div className="relative flex overflow-hidden">
        {/* The duplicate list creates the infinite illusion */}
        <div className="flex animate-infinite-scroll whitespace-nowrap gap-16 items-center">
          {[...logos, ...logos].map((logo, i) => (
            <span key={i} className="text-3xl font-bold text-slate-300 hover:text-blue-500 transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Trustbar;