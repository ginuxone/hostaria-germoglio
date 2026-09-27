import Gallery from "../../components/Gallery";
import Navigation from "../../components/Navigation";
import { galleryCategories, galleryImages } from "../../../lib/gallery";
import { pageMetadata } from "../../../lib/metadata";
import { whatsappUrl } from "../../../lib/site";
import { getLocale, translations } from "../../../lib/translations";

interface GalleryPageProps {
  params: Promise<{ locale: string }>;
}

export function generateMetadata({ params }: GalleryPageProps) {
  return pageMetadata(params, "gallery");
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocale(localeParam);
  const t = translations[locale];

  return (
    <main className="min-h-screen bg-[#f8f4ef] text-slate-900">
      <Navigation locale={locale} page="gallery" />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">{t.brand.tagline}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{t.gallery.heading}</h1>
          <p className="max-w-3xl mx-auto text-slate-700">{t.gallery.intro}</p>
        </div>

        <Gallery
          items={galleryImages.map(({ alt, ...image }) => ({ ...image, alt: alt[locale] }))}
          categories={[
            { value: "all", label: t.gallery.all },
            ...galleryCategories.map((value) => ({ value, label: t.gallery.categories[value] })),
          ]}
          labels={{ close: t.gallery.close, previous: t.gallery.previous, next: t.gallery.next }}
        />

        <div className="mt-12 flex flex-col items-center gap-4 rounded-[2rem] bg-white p-8 text-center shadow-lg shadow-slate-200/50">
          <p className="text-2xl font-semibold text-slate-900">{t.gallery.cta}</p>
          <a
            href={whatsappUrl(t.contact.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            {t.hero.button}
          </a>
        </div>
      </section>
    </main>
  );
}
