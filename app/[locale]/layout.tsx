import { notFound } from "next/navigation";
import { locales } from "../../lib/translations";

// Only the configured locales exist; anything else (e.g. /fr/menu) is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();

  return <>{children}</>;
}
