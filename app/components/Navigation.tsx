"use client";

import type { ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Locale, localeLabels, pagePaths, translations } from "../../lib/translations";

interface NavigationProps {
    locale: Locale;
    page: keyof typeof pagePaths;
}

export default function Navigation({ locale, page }: NavigationProps) {
    const nav = translations[locale].nav;
    const router = useRouter();

    const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = event.target.value as Locale;
        router.push(`/${nextLocale}/${pagePaths[page]}`);
    };

    return (
        <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4">
                <Link href={`/${locale}`} className="inline-flex items-center gap-3 text-slate-900">
                    <Image src="/logo.svg" alt="Hostaria Germoglio" width={40} height={40} className="h-10 w-10" />
                    <span className="text-lg font-semibold tracking-tight text-slate-900">
                        {translations[locale].brand.name}
                    </span>
                </Link>

                <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
                    {(Object.keys(pagePaths) as Array<keyof typeof pagePaths>).map((key) => (
                        <Link
                            key={key}
                            href={`/${locale}/${pagePaths[key]}`}
                            className={`transition hover:text-slate-900 ${page === key ? "text-slate-900" : ""}`}
                        >
                            {nav[key]}
                        </Link>
                    ))}
                </nav>

                <select
                    value={locale}
                    onChange={handleLocaleChange}
                    className="rounded-full border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-800 outline-none transition hover:border-slate-300"
                    aria-label="Select language"
                >
                    {(Object.keys(localeLabels) as Locale[]).map((lng) => (
                        <option key={lng} value={lng}>
                            {localeLabels[lng]}
                        </option>
                    ))}
                </select>
            </div>
        </header>
    );
}
