export interface Industry {
  title: string;
  desc: string;
  link: string;
  icon: string;
}

export type Project = {
  _id: string;
  title: string;
  slug: string;
  category: string; // Dereferenced title from projectCategory
  image: string; // URL from mainImage.asset->url
  excerpt?: string;
  technologies?: string[]; // Array of strings from Sanity
  featured: boolean;
  order?: number;
  // Matches the 'theme' object in your Sanity schema
  theme?: {
    accentColor?: string;
    backgroundStyle: "dark" | "light" | "gradient";
    heroOverlayOpacity?: number;
  };
  // Matches the 'results' array in your Sanity schema
  results?: {
    label: string;
    value: string;
  }[];
  // Portable Text content for the detail page
  body?: any[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
  };
};
export interface Service {
  _id: string;
  title: string;
  slug: string;
  desc: string;
  className: string; // We'll map 'bentoSize' to this
  image: string; // URL string from Sanity
  icon: string;
  content: any;
}

// types/index.ts
export interface Industry {
  title: string; // Changed from name to match your component
  price: string;
  features: string[];
  desc: string; // Added for the card description
  link: string; // Added for the Link component
  icon: string; // Added for the emoji/icon
}
