'use client';
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { LangToggle } from "@/components/ui/LangToggle";

export default function Home() {
  const t = useLocale();

  return (
    <main className="relative flex flex-1 flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="absolute top-4 right-6">
        <LangToggle />
      </div>

      <div className="mb-4 text-xs font-mono tracking-[0.3em] text-f1-muted uppercase">
        {t.home.tagline}
      </div>

      <h1 className="text-5xl font-bold tracking-tight text-f1-white mb-2">
        F1 <span className="text-f1-red">Aero</span>Lab
      </h1>

      <p className="mt-4 max-w-md text-f1-muted text-base leading-relaxed">
        {t.home.description}
      </p>

      <Link
        href="/simulation"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-f1-red px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-f1-red-dark"
      >
        {t.home.cta}
      </Link>
    </main>
  );
}
