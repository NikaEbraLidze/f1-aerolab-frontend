'use client';
import { useEffect } from 'react';
import { useLocaleStore } from '@/store/localeStore';
import { useThemeStore } from '@/store/themeStore';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    useLocaleStore.persist.rehydrate();
    useThemeStore.persist.rehydrate();
  }, []);
  return <>{children}</>;
}
