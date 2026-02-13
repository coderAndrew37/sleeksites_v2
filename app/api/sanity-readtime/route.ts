import { NextResponse } from "next/server";
import { client } from "@/lib/sanity";

const wordsPerMinute = 200;

// ---- TYPES ---------------------------------------------------------

interface SanitySpan {
  _type: "span";
  text: string;
}

interface SanityBlock {
  _type: "block" | string;
  children?: SanitySpan[];
}

interface SanityPostMutation {
  _id: string;
  _type: string;
  body?: SanityBlock[];
}

// --------------------------------------------------------------------

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = (await req.json()) as SanityPostMutation;

    if (body._type !== "post") {
      return NextResponse.json({ ok: true });
    }

    const blocks = body.body ?? [];

    const fullText = blocks
      .map((b: SanityBlock) =>
        b._type === "block"
          ? (b.children?.map((c: SanitySpan) => c.text).join(" ") ?? "")
          : ""
      )
      .join(" ");

    const words = fullText.split(/\s+/).filter(Boolean);

    const readTime = Math.max(1, Math.round(words.length / wordsPerMinute));

    await client.patch(body._id).set({ readTime }).commit();

    return NextResponse.json({ ok: true, readTime });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unknown error";
    console.error(message);

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
