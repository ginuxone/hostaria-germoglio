import Link from "next/link";
import { headers } from "next/headers";
import Navigation from "./components/Navigation";
import { localePath } from "../lib/site";
import { getLocale, translations } from "../lib/translations";

export default async function NotFound() {
  const locale = getLocale((await headers()).get("x-locale") ?? undefined);
  const t = translations[locale];

  return (
    <main className="min-h-screen bg-[#f8f4ef] text-slate-900">
      <Navigation locale={locale} />

      <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">404</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{t.notFound.title}</h1>
        <p className="text-lg text-slate-700">{t.notFound.description}</p>
        <Link
          href={localePath(locale, "home")}
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          {t.notFound.button}
        </Link>
      </section>
    </main>
  );
}
