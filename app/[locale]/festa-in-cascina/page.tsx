import Image from "next/image";
import Navigation from "../../components/Navigation";
import {
  type FestaEdition,
  type FestaPhoto,
  festaEditions,
  formatEditionDate,
  formatProgramDay,
} from "../../../lib/festa";
import { pageMetadata } from "../../../lib/metadata";
import { whatsappUrl } from "../../../lib/site";
import { type Locale, getLocale, translations } from "../../../lib/translations";

interface FestaPageProps {
  params: Promise<{ locale: string }>;
}

export function generateMetadata({ params }: FestaPageProps) {
  return pageMetadata(params, "festa");
}

interface EditionProps {
  edition: FestaEdition;
  locale: Locale;
}

// Edition number and free entry, shown as small pills under the date.
function EditionTags({ edition, locale }: EditionProps) {
  const t = translations[locale].festa;
  const tags = [
    edition.number ? t.editionNumber.replace("{n}", String(edition.number)) : null,
    edition.freeEntry ? t.freeEntry : null,
  ].filter((tag): tag is string => tag !== null);
  if (tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
          {tag}
        </span>
      ))}
    </div>
  );
}

function EditionProgram({ edition, locale }: EditionProps) {
  if (!edition.program?.length) return null;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {edition.program.map((day) => (
        <div key={day.date} className="space-y-3">
          <h4 className="font-semibold text-amber-700">{formatProgramDay(day.date, locale)}</h4>
          <ul className="space-y-3 text-sm">
            {day.items.map((item) => (
              <li key={`${item.time}-${item.activity.it}`} className="space-y-0.5">
                <p className="font-semibold tabular-nums text-slate-900">{item.time}</p>
                <p className="text-slate-600">{item.activity[locale]}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// Links to the full-size file so the small print stays readable.
function Flyer({ flyer, locale, sizes }: { flyer: FestaPhoto; locale: Locale; sizes: string }) {
  return (
    <a href={flyer.src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-2xl border border-slate-200">
      <Image src={flyer.src} alt={flyer.alt[locale]} width={flyer.width} height={flyer.height} sizes={sizes} className="h-auto w-full" />
    </a>
  );
}

function EditionPhotos({ edition, locale }: EditionProps) {
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
              <EditionTags edition={featured} locale={locale} />
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

            {(featured.program || featured.flyer) && (
              <div className="grid gap-8 md:grid-cols-[1fr_16rem] lg:col-span-2">
                {featured.program && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-900">{t.festa.scheduleHeading}</h3>
                    <EditionProgram edition={featured} locale={locale} />
                  </div>
                )}
                {featured.flyer && (
                  <div className="space-y-4 md:col-start-2">
                    <h3 className="text-xl font-semibold text-slate-900">{t.festa.flyer}</h3>
                    <div className="max-w-64">
                      <Flyer flyer={featured.flyer} locale={locale} sizes="256px" />
                    </div>
                  </div>
                )}
              </div>
            )}

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
            {past.map((edition) => (
              <article
                key={edition.year}
                className="grid gap-8 rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/40 md:grid-cols-[1fr_16rem]"
              >
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
                    {editionLabel(edition.year)}
                  </p>
                  {edition.start && (
                    <p className="text-2xl font-semibold text-slate-900">{formatEditionDate(edition, locale)}</p>
                  )}
                  <EditionTags edition={edition} locale={locale} />
                  <p className="text-slate-600">{edition.description[locale]}</p>
                  {edition.program && (
                    <details className="rounded-2xl border border-slate-200 px-5 py-4">
                      <summary className="cursor-pointer font-semibold text-slate-900">{t.festa.scheduleHeading}</summary>
                      <div className="mt-4">
                        <EditionProgram edition={edition} locale={locale} />
                      </div>
                    </details>
                  )}
                </div>
                {edition.flyer && (
                  <div className="max-w-64">
                    <Flyer flyer={edition.flyer} locale={locale} sizes="256px" />
                  </div>
                )}
                {edition.photos.length > 0 && (
                  <div className="md:col-span-2">
                    <EditionPhotos edition={edition} locale={locale} />
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
