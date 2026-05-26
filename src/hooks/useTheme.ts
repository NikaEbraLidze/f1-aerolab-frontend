'use client';
import { useThemeStore } from '@/store/themeStore';
import type { Theme } from '@/types/theme';

export function useTheme(): { theme: Theme; setTheme: (theme: Theme) => void } {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);
  return { theme, setTheme };
}
