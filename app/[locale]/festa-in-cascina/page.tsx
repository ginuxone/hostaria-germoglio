import Image from "next/image";
import Navigation from "../../components/Navigation";
import { type FestaEdition, festaEditions, formatEditionDate } from "../../../lib/festa";
import { pageMetadata } from "../../../lib/metadata";
import { whatsappUrl } from "../../../lib/site";
import { type Locale, getLocale, translations } from "../../../lib/translations";

interface FestaPageProps {
  params: Promise<{ locale: string }>;
}

export function generateMetadata({ params }: FestaPageProps) {
  return pageMetadata(params, "festa");
}

function EditionPhotos({ edition, locale }: { edition: FestaEdition; locale: Locale }) {
  if (edition.photos.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {edition.photos.map((photo) => (
        <div key={photo.src} className="relative aspect-square overflow-hidden rounded-2xl">
          <Image
            src={photo.src}
            alt={photo.alt[locale]}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 33vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
}

export default async function FestaPage({ params }: FestaPageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocale(localeParam);
  const t = translations[locale];
  const [featured, ...past] = festaEditions;
  const editionLabel = (year: number) => t.festa.edition.replace("{year}", String(year));

  return (
    <main className="min-h-screen bg-[#f8f4ef] text-slate-900">
      <Navigation locale={locale} page="festa" />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">{t.brand.tagline}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{t.festa.heading}</h1>
          <p className="max-w-3xl mx-auto text-slate-700">{t.festa.intro}</p>
        </div>

        {featured && (
          <article className="grid gap-8 rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/50 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <p className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
                {editionLabel(featured.year)}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                {formatEditionDate(featured, locale) ?? t.festa.dateTba}
              </h2>
              {featured.time && <p className="text-lg text-slate-600">{featured.time[locale]}</p>}
              <p className="text-slate-700">{featured.description[locale]}</p>
              <a
                href={whatsappUrl(t.festa.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                {t.festa.cta}
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">{t.festa.programHeading}</h3>
              <ul className="grid gap-3">
                {featured.highlights[locale].map((item) => (
                  <li key={item} className="rounded-3xl border border-slate-200 px-5 py-4 text-sm font-semibold text-slate-900">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {featured.photos.length > 0 && (
              <div className="space-y-4 lg:col-span-2">
                <h3 className="text-xl font-semibold text-slate-900">{t.festa.photosHeading}</h3>
                <EditionPhotos edition={featured} locale={locale} />
              </div>
            )}
          </article>
        )}

        {past.length > 0 && (
          <div className="mt-12 space-y-6">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-900">{t.festa.pastHeading}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {past.map((edition) => (
                <article key={edition.year} className="space-y-4 rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/40">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
                    {editionLabel(edition.year)}
                  </p>
                  {edition.start && (
                    <p className="text-lg font-semibold text-slate-900">{formatEditionDate(edition, locale)}</p>
                  )}
                  <p className="text-slate-600">{edition.description[locale]}</p>
                  <EditionPhotos edition={edition} locale={locale} />
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
