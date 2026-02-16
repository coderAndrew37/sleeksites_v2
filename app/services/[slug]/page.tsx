import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";

// Define the GROQ query
const serviceQuery = groq`*[_type == "service" && slug.current == $slug][0]{
  title,
  description,
  features,
  process,
  "iconUrl": icon.asset->url
}`;

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await client.fetch(serviceQuery, { slug: params.slug });

  if (!service) return notFound();

  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
            {service.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {service.features?.map((feature: string, i: number) => (
            <div
              key={i}
              className="p-8 border border-slate-100 rounded-[2rem] bg-slate-50"
            >
              <h3 className="text-2xl font-bold mb-4">{feature}</h3>
              <p className="text-slate-500">
                Expertly delivered solutions tailored for growth.
              </p>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="border-t border-slate-200 pt-20">
          <h2 className="text-4xl font-bold mb-12 italic tracking-tight">
            How we work.
          </h2>
          <div className="space-y-12">
            {service.process?.map((p: any, i: number) => (
              <div key={i} className="flex gap-8 items-start">
                <span className="text-blue-600 font-mono text-xl font-bold">
                  0{i + 1}
                </span>
                <div>
                  <h4 className="text-2xl font-bold mb-2">{p.step}</h4>
                  <p className="text-slate-600">{p.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
