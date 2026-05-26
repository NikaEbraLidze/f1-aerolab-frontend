'use client';
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { LangToggle } from "@/components/ui/LangToggle";
import { Typography } from "@/components/ui/Typography";

export default function Home() {
  const t = useLocale();

  return (
    <main className="relative flex flex-1 flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="absolute top-4 right-6">
        <LangToggle />
      </div>

      <Typography variant="tagline" as="div" className="mb-4">
        {t.home.tagline}
      </Typography>

      <Typography variant="display" className="mb-2">
        F1 <span className="text-f1-red">Aero</span>Lab
      </Typography>

      <Typography variant="body" className="mt-4 max-w-md">
        {t.home.description}
      </Typography>

      <Link
        href="/simulation"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-f1-red px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-f1-red-dark"
      >
        {t.home.cta}
      </Link>
    </main>
  );
}
