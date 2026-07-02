import Link from "next/link";
import Navigation from "../components/Navigation";
import { getLocale, translations } from "../../lib/translations";

interface LocalePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocale(localeParam);
  const t = translations[locale];

  return (
    <main
      className="min-h-screen text-slate-900"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#f8f4ef',
      }}
    >
      <Navigation locale={locale} page="home" />

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
            {t.brand.tagline}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            {t.hero.title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-700">{t.hero.description}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              {t.hero.button}
            </Link>
            <Link
              href={`/${locale}/menu`}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
            >
              {t.nav.menu}
            </Link>
          </div>
        </div>

        <div className="space-y-5 rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/50">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">{t.about.heading}</h2>
            <p className="text-slate-700">{t.about.description}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {t.specialties.items.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 px-5 py-4">
                <p className="text-sm font-semibold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/40">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{t.nav.contact}</p>
            <p className="mt-4 text-lg font-semibold text-slate-900">{t.contact.address}</p>
            <a href="tel:+393716956239" className="mt-2 block text-slate-600 transition hover:text-slate-900">
              {t.contact.phone}
            </a>
          </article>
          <article className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/40">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{t.nav.staff}</p>
            <p className="mt-4 text-lg font-semibold text-slate-900">{t.staff.heading}</p>
            <p className="mt-2 text-slate-600">{t.staff.intro}</p>
          </article>
          <article className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/40">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{t.nav.menu}</p>
            <p className="mt-4 text-lg font-semibold text-slate-900">{t.menu.heading}</p>
            <p className="mt-2 text-slate-600">{t.hero.description}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
