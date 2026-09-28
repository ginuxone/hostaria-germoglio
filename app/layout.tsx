import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import Footer from "./components/Footer";
import { shareImage, siteUrl } from "../lib/site";
import { getLocale, translations } from "../lib/translations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// The proxy forwards the locale from the URL; it defaults to "it".
async function requestLocale() {
  return getLocale((await headers()).get("x-locale") ?? undefined);
}

export async function generateMetadata(): Promise<Metadata> {
  const t = translations[await requestLocale()];

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t.brand.name,
      template: `%s | ${t.brand.name}`,
    },
    description: t.meta.home,
    openGraph: {
      type: "website",
      siteName: t.brand.name,
      images: [{ ...shareImage, alt: t.meta.imageAlt }],
    },
    twitter: { card: "summary_large_image", images: [shareImage.url] },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await requestLocale();

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f8f4ef] text-slate-900">
        {children}
        <Footer locale={lang} />
      </body>
    </html>
  );
}
