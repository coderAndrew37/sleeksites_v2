import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sleeksites.co.ke"),
  title: {
    default: "SleekSites | Engineering High-Performance Digital Systems",
    template: "%s | SleekSites",
  },
  description:
    "Bespoke web architecture, performance-led design, and business automation for firms that demand excellence. Transform your digital presence into a revenue-generating asset.",
  keywords: [
    "Web Design Kenya",
    "Business Automation",
    "Enterprise Software Development",
    "SleekSites",
    "Digital Transformation Agency",
  ],
  authors: [{ name: "SleekSites Team", url: "https://www.sleeksites.co.ke" }],
  creator: "SleekSites",
  publisher: "SleekSites",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://www.sleeksites.co.ke",
    siteName: "SleekSites",
    title: "SleekSites | Digital Systems for Modern Firms",
    description:
      "We build digital infrastructure that works as hard as you do. High-performance websites and automation.",
    images: [
      {
        url: "/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "SleekSites Agency Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SleekSites | Digital Systems",
    description: "High-performance websites and business automation.",
    images: ["/og-main.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SleekSites",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    url: "https://www.sleeksites.co.ke",
    logo: "https://www.sleeksites.co.ke/logo.png",
    image: "https://www.sleeksites.co.ke/og-main.jpg",
    description:
      "Premium digital agency specializing in high-performance websites and business automation.",
    sameAs: [
      "https://linkedin.com/company/sleeksites",
      "https://twitter.com/sleeksites",
    ],
    priceRange: "$$$",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        {children}
        <Toaster richColors closeButton position="top-right" />
      </body>
    </html>
  );
}
