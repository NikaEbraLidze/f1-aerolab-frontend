'use client';
import { useLocaleStore } from '@/store/localeStore';
import en from '@/lib/locales/en';
import ka from '@/lib/locales/ka';
import type { Locale } from '@/types/locale';

const locales: Record<string, Locale> = { en, ka };

export function useLocale(): Locale {
  const lang = useLocaleStore((s) => s.lang);
  return locales[lang];
}
