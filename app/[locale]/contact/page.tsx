import Navigation from "../../components/Navigation";
import { getLocale, translations } from "../../../lib/translations";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocale(localeParam);
  const t = translations[locale];

  return (
    <main className="min-h-screen bg-[#f8f4ef] text-slate-900">
      <Navigation locale={locale} page="contact" />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">{t.brand.tagline}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{t.contact.heading}</h1>
          <p className="max-w-3xl mx-auto text-slate-700">{t.contact.description}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/50">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{t.contact.addressLabel}</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-900">{t.contact.address}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{t.contact.phoneLabel}</p>
                  <a href="tel:+393716956239" className="mt-3 block text-lg text-slate-700 transition hover:text-slate-900">
                    {t.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/50">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{t.contact.hoursLabel}</p>
              <dl className="mt-4 divide-y divide-slate-100">
                {t.contact.hours.map((entry) => (
                  <div key={entry.day} className="flex items-baseline justify-between gap-4 py-2 first:pt-0 last:pb-0">
                    <dt className="font-semibold text-slate-900">{entry.day}</dt>
                    <dd className="text-right text-slate-700">
                      {entry.times.length > 0 ? (
                        entry.times.map((time) => <div key={time}>{time}</div>)
                      ) : (
                        <span className="font-semibold text-slate-900">{t.contact.closedLabel}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/50">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{t.contact.mapTitle}</p>
              <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200">
                <iframe
                  title="Hostaria Germoglio map"
                  src="https://maps.google.com/maps?q=Via%20Solferino%2053%2C%20Verdello%2C%20Italy&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-80 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
