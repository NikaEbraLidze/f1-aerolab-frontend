'use client';
import { useLangToggle } from '@/hooks/useLangToggle';
import { useLocale } from '@/hooks/useLocale';
import { cn } from '@/lib/utils/cn';
import type { Lang } from '@/types/locale';

const LANG_OPTIONS: Lang[] = ['en', 'ka'];

export function LangToggle() {
  const { lang, setLang } = useLangToggle();
  const t = useLocale();

  const labels: Record<Lang, string> = {
    en: t.lang.en,
    ka: t.lang.ka,
  };

  const ariaLabels: Record<Lang, string> = {
    en: t.lang.switchToEn,
    ka: t.lang.switchToKa,
  };

  const activeIndex = LANG_OPTIONS.indexOf(lang);

  return (
    <div
      role="group"
      aria-label={t.lang.groupLabel}
      className="relative inline-flex items-center rounded-full border border-f1-border bg-f1-surface/80 p-1 shadow-inner shadow-black/20"
    >
      <span
        aria-hidden
        className="absolute top-1 bottom-1 rounded-full bg-f1-red shadow-md shadow-f1-red/40 transition-all duration-300 ease-out"
        style={{
          width: 'calc(50% - 4px)',
          left: activeIndex === 0 ? '4px' : 'calc(50% + 0px)',
        }}
      />
      {LANG_OPTIONS.map((code) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            aria-label={ariaLabels[code]}
            className={cn(
              'relative z-10 min-w-[3rem] rounded-full px-3 py-1.5 text-xs font-mono font-semibold tracking-wide transition-colors duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-f1-red focus-visible:ring-offset-2 focus-visible:ring-offset-f1-black',
              isActive ? 'text-white' : 'text-f1-muted hover:text-f1-white',
            )}
          >
            {labels[code]}
          </button>
        );
      })}
    </div>
  );
}
