import Image from "next/image";
import Navigation from "../../components/Navigation";
import { getLocale, translations } from "../../../lib/translations";

interface StaffPageProps {
  params: Promise<{ locale: string }>;
}

export default async function StaffPage({ params }: StaffPageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocale(localeParam);
  const t = translations[locale];

  return (
    <main className="min-h-screen bg-[#f8f4ef] text-slate-900">
      <Navigation locale={locale} page="staff" />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">{t.brand.tagline}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{t.staff.heading}</h1>
          <p className="max-w-3xl mx-auto text-slate-700">{t.staff.intro}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.staff.members.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-slate-200/50"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">{member.role}</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">{member.name}</h2>
                <p className="mt-3 text-slate-600">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
