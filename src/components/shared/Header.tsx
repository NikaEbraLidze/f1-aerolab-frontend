'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from '@/hooks/useLocale';
import { LangToggle } from '@/components/ui/LangToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { NavLink } from '@/components/shared/NavLink';
import { NAV_ITEMS, isNavActive } from '@/components/shared/navConfig';
import { Typography } from '@/components/ui/Typography';

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
      <header className="h-14 flex items-center border-b border-f1-border bg-f1-black/90 backdrop-blur-md px-4 sm:px-6">
        <Link href="/" className="shrink-0" onClick={close}>
          <Typography variant="h4" as="span">
            F1 <span className="text-f1-red">Aero</span>Lab
          </Typography>
        </Link>

        {/* Desktop — nav + toggles on the right */}
        <div className="hidden md:flex ml-auto items-center gap-8">
          <nav aria-label={t.nav.mainLabel} className="flex items-center gap-6">
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
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LangToggle />
          </div>
        </div>

        {/* Mobile — burger only */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          className="md:hidden ml-auto text-f1-muted hover:text-f1-white transition-colors"
        >
          <span className="material-symbols-rounded text-2xl">
            {open ? 'close' : 'menu'}
          </span>
        </button>
      </header>

      {open && (
        <nav
          aria-label={t.nav.mainLabel}
          className="absolute top-full left-0 right-0 md:hidden border-b border-f1-border bg-f1-surface backdrop-blur-md px-4 py-4 flex flex-col"
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
          <div className="mt-4 pt-4 border-t border-f1-border flex items-center justify-center gap-2">
            <ThemeToggle />
            <LangToggle />
          </div>
        </nav>
      )}
    </div>
  );
}
