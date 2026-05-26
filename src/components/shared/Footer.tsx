'use client';
import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';
import { Typography } from '@/components/ui/Typography';

export function Footer() {
  const t = useLocale();

  return (
    <footer className="border-t border-f1-border px-6 py-8">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <Link href="/">
            <Typography variant="label" color="white" className="font-semibold">
              F1 <span className="text-f1-red">Aero</span>Lab
            </Typography>
          </Link>
          <Typography variant="caption">{t.footer.tagline}</Typography>
        </div>

        <Typography variant="caption">{t.footer.copyright}</Typography>
      </div>
    </footer>
  );
}
