'use client';
import { useLangToggle } from '@/hooks/useLangToggle';

export function LangToggle() {
  const { lang, setLang } = useLangToggle();

  return (
    <div className="flex items-center gap-2 text-sm font-mono">
      <button
        onClick={() => setLang('en')}
        className={lang === 'en' ? 'text-f1-red font-semibold' : 'text-f1-muted hover:text-f1-white transition-colors'}
      >
        EN
      </button>
      <span className="text-f1-border select-none">/</span>
      <button
        onClick={() => setLang('ka')}
        className={lang === 'ka' ? 'text-f1-red font-semibold' : 'text-f1-muted hover:text-f1-white transition-colors'}
      >
        KA
      </button>
    </div>
  );
}
