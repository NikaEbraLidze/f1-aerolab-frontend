'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from '@/hooks/useLocale';
import { LangToggle } from '@/components/ui/LangToggle';
import { Typography } from '@/components/ui/Typography';
import { cn } from '@/lib/utils/cn';

export function Header() {
  const t = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="sticky top-0 z-50">
      <header className="h-14 flex items-center gap-8 border-b border-f1-border bg-f1-black/80 backdrop-blur-sm px-6">
        <Link href="/" className="shrink-0" onClick={close}>
          <Typography variant="h4" as="span">
            F1 <span className="text-f1-red">Aero</span>Lab
          </Typography>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 flex-1">
          <Link
            href="/simulation"
            className={cn(
              'text-sm transition-colors',
              pathname === '/simulation'
                ? 'text-f1-white font-medium'
                : 'text-f1-muted hover:text-f1-white',
            )}
          >
            {t.nav.simulation}
          </Link>
          <Link
            href="/learn"
            className={cn(
              'text-sm transition-colors',
              pathname === '/learn'
                ? 'text-f1-white font-medium'
                : 'text-f1-muted hover:text-f1-white',
            )}
          >
            {t.nav.learn}
          </Link>
          <Link
            href="/build"
            className={cn(
              'text-sm transition-colors',
              pathname === '/build'
                ? 'text-f1-white font-medium'
                : 'text-f1-muted hover:text-f1-white',
            )}
          >
            {t.nav.build}
          </Link>
        </nav>

        {/* Desktop lang toggle */}
        <div className="hidden md:block">
          <LangToggle />
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden ml-auto text-f1-muted hover:text-f1-white transition-colors"
        >
          <span className="material-symbols-rounded text-2xl">
            {open ? 'close' : 'menu'}
          </span>
        </button>
      </header>

      {/* Mobile menu panel — absolute so it overlays content instead of pushing it */}
      {open && (
        <nav className="absolute top-full left-0 right-0 md:hidden border-b border-f1-border bg-f1-surface/95 backdrop-blur-sm px-6 py-5 flex flex-col gap-4">
          <Link
            href="/simulation"
            onClick={close}
            className={cn(
              'text-sm transition-colors',
              pathname === '/simulation'
                ? 'text-f1-white font-medium'
                : 'text-f1-muted hover:text-f1-white',
            )}
          >
            {t.nav.simulation}
          </Link>
          <Link
            href="/learn"
            onClick={close}
            className={cn(
              'text-sm transition-colors',
              pathname === '/learn'
                ? 'text-f1-white font-medium'
                : 'text-f1-muted hover:text-f1-white',
            )}
          >
            {t.nav.learn}
          </Link>
          <Link
            href="/build"
            onClick={close}
            className={cn(
              'text-sm transition-colors',
              pathname === '/build'
                ? 'text-f1-white font-medium'
                : 'text-f1-muted hover:text-f1-white',
            )}
          >
            {t.nav.build}
          </Link>
          <div className="pt-3 border-t border-f1-border">
            <LangToggle />
          </div>
        </nav>
      )}
    </div>
  );
}
