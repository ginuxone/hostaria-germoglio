import Navigation from "../../components/Navigation";
import { getLocale, translations } from "../../../lib/translations";

interface MenuPageProps {
  params: Promise<{ locale: string }>;
}

export default async function MenuPage({ params }: MenuPageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocale(localeParam);
  const t = translations[locale];

  return (
    <main className="min-h-screen bg-[#f8f4ef] text-slate-900">
      <Navigation locale={locale} page="menu" />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">{t.brand.tagline}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{t.menu.heading}</h1>
          <p className="max-w-3xl mx-auto text-slate-700">{t.about.description}</p>
        </div>

        <div className="space-y-10">
          {t.menu.sections.map((section) => (
            <div key={section.title} className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/50">
              <h2 className="mb-6 text-2xl font-semibold text-slate-900">{section.title}</h2>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.name} className="grid gap-3 border-b border-slate-200 pb-4 last:border-0 last:pb-0 sm:grid-cols-[1fr_auto] sm:items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                      <p className="mt-1 text-slate-600">{item.description}</p>
                    </div>
                    <p className="text-sm font-semibold text-slate-900">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
