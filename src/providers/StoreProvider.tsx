'use client';
import { useEffect } from 'react';
import { useLocaleStore } from '@/store/localeStore';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    useLocaleStore.persist.rehydrate();
  }, []);
  return <>{children}</>;
}
