'use client';
import { useLocaleStore } from '@/store/localeStore';
import type { Lang } from '@/types/locale';

export function useLangToggle(): { lang: Lang; setLang: (lang: Lang) => void } {
  const lang = useLocaleStore((s) => s.lang);
  const setLang = useLocaleStore((s) => s.setLang);
  return { lang, setLang };
}
