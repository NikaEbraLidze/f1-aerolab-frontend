'use client';
import { useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';

function applyTheme(theme: string) {
  document.documentElement.setAttribute('data-theme', theme);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    return useThemeStore.persist.onFinishHydration(() => {
      applyTheme(useThemeStore.getState().theme);
    });
  }, []);

  return <>{children}</>;
}
