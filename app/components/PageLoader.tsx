"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 2600);
    return () => window.clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center bg-slate-950/55 backdrop-blur-3xl">
      <div className="relative h-24 w-24 animate-loader-fade">
        <Image src="/logo.svg" alt="Hostaria Germoglio" fill className="object-contain" />
      </div>
    </div>
  );
}
