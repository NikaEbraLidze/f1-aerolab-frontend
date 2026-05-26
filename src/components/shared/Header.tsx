'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from '@/hooks/useLocale';
import { LangToggle } from '@/components/ui/LangToggle';
import { NavLink } from '@/components/shared/NavLink';
import { NAV_ITEMS, isNavActive } from '@/components/shared/navConfig';
import { Typography } from '@/components/ui/Typography';
import { cn } from '@/lib/utils/cn';

export function Header() {
  const t = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const navLabels = {
    home: t.nav.home,
    simulation: t.nav.simulation,
    learn: t.nav.learn,
    build: t.nav.build,
  };

  return (
    <div className="sticky top-0 z-50">
      <header className="h-16 flex items-center gap-6 border-b border-f1-border bg-f1-black/90 backdrop-blur-md px-4 sm:px-6">
        <Link
          href="/"
          className="group shrink-0 rounded-lg px-1 py-0.5 transition-colors hover:opacity-90"
          onClick={close}
        >
          <Typography variant="h4" as="span" className="transition-transform duration-200 group-hover:scale-[1.02]">
            F1 <span className="text-f1-red">Aero</span>Lab
          </Typography>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label={t.nav.mainLabel}
          className="hidden md:flex items-center gap-1 flex-1 rounded-full border border-f1-border/60 bg-f1-surface/40 p-1 max-w-fit"
        >
          {NAV_ITEMS.map(({ href, icon, labelKey }) => (
            <NavLink
              key={href}
              href={href}
              icon={icon}
              label={navLabels[labelKey]}
              active={isNavActive(pathname, href)}
              onClick={close}
            />
          ))}
        </nav>

        <div className="hidden md:block ml-auto">
          <LangToggle />
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          className={cn(
            'md:hidden ml-auto inline-flex items-center justify-center rounded-full border border-f1-border',
            'h-10 w-10 text-f1-muted transition-all duration-200',
            'hover:text-f1-white hover:border-f1-muted hover:bg-f1-surface',
            open && 'border-f1-red/50 bg-f1-surface text-f1-white',
          )}
        >
          <span className="material-symbols-rounded text-2xl transition-transform duration-200">
            {open ? 'close' : 'menu'}
          </span>
        </button>
      </header>

      {/* Mobile menu */}
      {open && (
        <nav
          aria-label={t.nav.mainLabel}
          className="absolute top-full left-0 right-0 md:hidden border-b border-f1-border bg-f1-surface/95 backdrop-blur-md px-4 py-5 flex flex-col gap-2 shadow-lg shadow-black/40"
        >
          {NAV_ITEMS.map(({ href, icon, labelKey }) => (
            <NavLink
              key={href}
              href={href}
              icon={icon}
              label={navLabels[labelKey]}
              active={isNavActive(pathname, href)}
              onClick={close}
              mobile
            />
          ))}
          <div className="pt-4 mt-2 border-t border-f1-border flex justify-center">
            <LangToggle />
          </div>
        </nav>
      )}
    </div>
  );
}
