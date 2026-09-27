"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { GalleryCategory } from "../../lib/gallery";

export interface GalleryItem {
  src: string;
  width: number;
  height: number;
  category: GalleryCategory;
  alt: string;
}

interface GalleryProps {
  items: GalleryItem[];
  categories: { value: GalleryCategory | "all"; label: string }[];
  labels: { close: string; previous: string; next: string };
}

export default function Gallery({ items, categories, labels }: GalleryProps) {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visible = filter === "all" ? items : items.filter((item) => item.category === filter);
  const current = openIndex === null ? null : visible[openIndex];

  // Keep the native <dialog> (focus trap, Esc to close) in sync with state.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (openIndex !== null && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (openIndex === null && dialog.open) {
      dialog.close();
    }
  }, [openIndex]);

  const step = (delta: number) =>
    setOpenIndex((index) => (index === null ? null : (index + delta + visible.length) % visible.length));

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              filter === value
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:text-slate-900"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visible.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group mb-4 block w-full cursor-zoom-in overflow-hidden rounded-3xl bg-slate-200 shadow-lg shadow-slate-200/50 break-inside-avoid focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={current?.alt}
        onClose={() => {
          document.documentElement.style.overflow = "";
          setOpenIndex(null);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpenIndex(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") step(-1);
          if (event.key === "ArrowRight") step(1);
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-slate-950 p-0 text-white backdrop:bg-slate-950"
      >
        {current && openIndex !== null && (
          <div
            className="flex h-full flex-col"
            onClick={(event) => {
              if (event.target === event.currentTarget) setOpenIndex(null);
            }}
          >
            <div className="flex items-center justify-between px-4 py-3 text-sm text-slate-300">
              <span>
                {openIndex + 1} / {visible.length}
              </span>
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                aria-label={labels.close}
                className="flex h-11 w-11 items-center justify-center rounded-full text-3xl leading-none transition hover:bg-white/10"
              >
                ×
              </button>
            </div>

            <div className="relative min-h-0 flex-1">
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label={labels.previous}
                className="absolute top-1/2 left-2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-3xl leading-none transition hover:bg-black/60"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label={labels.next}
                className="absolute top-1/2 right-2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-3xl leading-none transition hover:bg-black/60"
              >
                ›
              </button>
            </div>

            <p className="px-4 py-4 text-center text-base text-slate-200">{current.alt}</p>
          </div>
        )}
      </dialog>
    </>
  );
}
