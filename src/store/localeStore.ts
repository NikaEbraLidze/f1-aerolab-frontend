import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Lang } from '@/types/locale';

interface LocaleState {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      lang: 'en',
      setLang: (lang) => set({ lang }),
    }),
    {
      name: 'f1-aerolab-locale',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ lang: state.lang }),
      skipHydration: true,
    }
  )
);
