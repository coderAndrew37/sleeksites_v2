export default function Loading() {
  return (
    <div className="min-h-screen bg-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Skeleton Header */}
        <div className="w-full max-w-xl h-20 bg-slate-100 animate-pulse rounded-3xl mb-4" />
        <div className="w-48 h-20 bg-slate-50 animate-pulse rounded-3xl mb-20" />

        {/* Skeleton Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 h-[500px] bg-slate-100 animate-pulse rounded-[3rem]" />
          <div className="md:col-span-4 h-[500px] bg-slate-100 animate-pulse rounded-[3rem]" />
          <div className="md:col-span-4 h-[400px] bg-slate-100 animate-pulse rounded-[3rem]" />
          <div className="md:col-span-8 h-[400px] bg-slate-100 animate-pulse rounded-[3rem]" />
        </div>
      </div>
    </div>
  );
}
