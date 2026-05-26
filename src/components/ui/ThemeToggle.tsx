'use client';
import { useTheme } from '@/hooks/useTheme';
import { useLocale } from '@/hooks/useLocale';
import { SegmentedToggle } from '@/components/ui/SegmentedToggle';
import type { Theme } from '@/types/theme';

const THEME_OPTIONS: Theme[] = ['dark', 'light'];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const t = useLocale();

  return (
    <SegmentedToggle
      value={theme}
      onChange={setTheme}
      groupLabel={t.theme.groupLabel}
      size="sm"
      options={THEME_OPTIONS.map((mode) => ({
        value: mode,
        label: (
          <span className="material-symbols-rounded text-[14px] leading-none">
            {mode === 'dark' ? 'dark_mode' : 'light_mode'}
          </span>
        ),
        ariaLabel: mode === 'dark' ? t.theme.switchToDark : t.theme.switchToLight,
      }))}
    />
  );
}
