import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TypeScript Guide | Learn TypeScript with Next.js",
    template: "%s | TypeScript Guide",
  },
  description:
    "Comprehensive guide to TypeScript definitions, best practices, and why to use TypeScript in Next.js applications. Learn with interactive examples and code comparisons.",
  keywords: [
    "TypeScript",
    "Next.js",
    "React",
    "TypeScript definitions",
    "TypeScript tutorial",
    "TypeScript examples",
    "web development",
    "type safety",
  ],
  authors: [{ name: "TypeScript Guide" }],
  creator: "TypeScript Guide",
  publisher: "TypeScript Guide",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://typescript-guide.com",
    siteName: "TypeScript Guide",
    title: "TypeScript Guide | Learn TypeScript with Next.js",
    description:
      "Comprehensive guide to TypeScript definitions, best practices, and why to use TypeScript in Next.js applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TypeScript Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TypeScript Guide | Learn TypeScript with Next.js",
    description:
      "Comprehensive guide to TypeScript definitions, best practices, and why to use TypeScript in Next.js applications.",
    images: ["/og-image.png"],
  },
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
  verification: {
    // Add your verification codes here if needed
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
