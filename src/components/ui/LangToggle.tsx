'use client';
import { useLangToggle } from '@/hooks/useLangToggle';
import { useLocale } from '@/hooks/useLocale';
import { SegmentedToggle } from '@/components/ui/SegmentedToggle';
import type { Lang } from '@/types/locale';

const LANG_OPTIONS: Lang[] = ['en', 'ka'];

export function LangToggle() {
  const { lang, setLang } = useLangToggle();
  const t = useLocale();

  return (
    <SegmentedToggle
      value={lang}
      onChange={setLang}
      groupLabel={t.lang.groupLabel}
      options={LANG_OPTIONS.map((code) => ({
        value: code,
        label: code === 'en' ? t.lang.en : t.lang.ka,
        ariaLabel: code === 'en' ? t.lang.switchToEn : t.lang.switchToKa,
      }))}
    />
  );
}
