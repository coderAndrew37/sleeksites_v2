import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/lib/sanity";

export const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }

      return (
        <div className="my-8">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden">
            <Image
              src={urlForImage(value).width(1200).height(600).url()}
              alt={value.alt || "Blog post image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              placeholder="blur"
              blurDataURL={urlForImage(value)
                .width(20)
                .height(20)
                .blur(10)
                .url()}
            />
          </div>
          {value.caption && (
            <p className="text-center text-gray-600 text-sm mt-2">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    code: ({ value }: any) => {
      if (!value?.code) {
        return null;
      }

      return (
        <div className="my-6">
          {value.filename && (
            <div className="bg-gray-800 text-gray-200 px-4 py-2 rounded-t-lg text-sm font-mono border-b border-gray-700">
              {value.filename}
            </div>
          )}
          <pre
            className={`bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto ${
              value.filename ? "rounded-t-none" : ""
            }`}
          >
            <code className={`language-${value.language} block`}>
              {value.code}
            </code>
          </pre>
        </div>
      );
    },
    quiz: ({ value }: any) => {
      // This will be handled by the QuizComponent in the blog page
      return null;
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-12 mb-6 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children, value }: any) => (
      <h2
        id={value?._key}
        className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
      >
        {children}
      </h2>
    ),
    h3: ({ children, value }: any) => (
      <h3
        id={value?._key}
        className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24"
      >
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-3">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg text-gray-700 leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-600 pl-6 py-2 my-6 bg-blue-50 rounded-r-xl">
        <p className="text-xl text-gray-700 italic">{children}</p>
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const { href, blank } = value;
      return (
        <a
          href={href}
          target={blank ? "_blank" : "_self"}
          rel={blank ? "noopener noreferrer" : ""}
          className="text-blue-600 hover:text-blue-800 underline transition-colors"
        >
          {children}
        </a>
      );
    },
    internalLink: ({ children, value }: any) => {
      const reference = value?.reference;
      if (!reference) return children;

      let href = "";
      let as = "";

      if (reference._type === "post") {
        href = "/blog/[slug]";
        as = `/blog/${reference.slug?.current}`;
      } else if (reference._type === "page") {
        href = `/${reference.slug?.current}`;
      }

      if (!href) return children;

      return (
        <Link
          href={href}
          as={as}
          className="text-blue-600 hover:text-blue-800 underline transition-colors"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }: any) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-gray-700">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-lg text-gray-700 leading-relaxed pl-2">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="text-lg text-gray-700 leading-relaxed pl-2">{children}</li>
    ),
  },
};
