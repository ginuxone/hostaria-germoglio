import Image from "next/image";
import { socialLinks, vatNumber } from "../../lib/site";
import { type Locale, translations } from "../../lib/translations";

export default function Footer({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <footer className="border-t border-slate-200 bg-white/90 py-6 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-slate-700 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="" width={40} height={40} className="h-10 w-10" />
          <div>
            <p className="font-semibold text-slate-900">{t.brand.name}</p>
            <p className="text-sm text-slate-600">{t.contact.address}</p>
            <p className="text-sm text-slate-600">{t.contact.footer}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:gap-6">
          <span className="text-slate-600">
            {t.contact.vatLabel}: {vatNumber}
          </span>
          <nav aria-label="Social" className="flex flex-wrap items-center gap-4 text-slate-700">
            {socialLinks.map(({ label, href }) =>
              href ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="transition hover:text-slate-900">
                  {label}
                </a>
              ) : null,
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
}
