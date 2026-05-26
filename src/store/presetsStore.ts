import { create } from 'zustand';
import type { Preset } from '@/types/simulation';

interface PresetsState {
  presets: Preset[];
  isLoading: boolean;
  setPresets: (presets: Preset[]) => void;
  addPreset: (preset: Preset) => void;
  removePreset: (id: string) => void;
  setLoading: (loading: boolean) => void;
}

export const usePresetsStore = create<PresetsState>()((set) => ({
  presets: [],
  isLoading: false,
  setPresets: (presets) => set({ presets }),
  addPreset: (preset) => set((s) => ({ presets: [preset, ...s.presets] })),
  removePreset: (id) => set((s) => ({ presets: s.presets.filter((p) => p.id !== id) })),
  setLoading: (isLoading) => set({ isLoading }),
}));
