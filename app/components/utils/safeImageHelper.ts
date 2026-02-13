import { urlForImage } from "@/lib/sanity";
import { CustomImage } from "../types/blog";

export function safeImageUrl(img: CustomImage | null, w: number, h: number) {
  if (!img) return null;
  return urlForImage(img).width(w).height(h).url();
}
