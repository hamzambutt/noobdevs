import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoobDevs Studio | Software & AI Development",
  description:
    "We build robust web and Android applications backed by scalable systems. Specializing in AI integrations, data engineering, and modern mobile experiences.",
  keywords: "Software Development, AI Integration, Web Development, Android Development, Python, Kotlin, Tech Studio",
  openGraph: {
    type: "website",
    url: "https://noobdevs.studio/",
    title: "NoobDevs Studio | Software & AI Development",
    description: "We build robust web and Android applications backed by scalable systems.",
    images: [{
      url: "https://noobdevs.studio/assets/og-image.png",
    }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "NoobDevs Studio",
              "image": "https://noobdevs.studio/assets/logo.png",
              "url": "https://noobdevs.studio/",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rawalpindi",
                "addressRegion": "Punjab",
                "addressCountry": "PK"
              },
              "description": "A software development studio specializing in web, Android, and AI/ML system integrations.",
              "sameAs": [
                "https://github.com/hamzambutt/noobdevs",
                "https://www.linkedin.com/company/noobdevs"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full bg-white font-sans text-slate-900">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
