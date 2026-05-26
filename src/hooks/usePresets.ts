'use client';
import { useEffect } from 'react';
import { usePresetsStore } from '@/store/presetsStore';
import { useSimulationStore } from '@/store/simulationStore';
import { fetchPresets, createPreset, deletePreset } from '@/lib/api/presets';
import type { Preset, SimParams } from '@/types/simulation';

export function usePresets() {
  const { presets, isLoading, setPresets, addPreset, removePreset, setLoading } = usePresetsStore();
  const setParams = useSimulationStore((s) => s.setParams);

  useEffect(() => {
    setLoading(true);
    fetchPresets()
      .then(setPresets)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  async function save(name: string, params: SimParams): Promise<void> {
    const preset = await createPreset(name, params);
    addPreset(preset);
  }

  async function remove(id: string): Promise<void> {
    await deletePreset(id);
    removePreset(id);
  }

  function load(preset: Preset): void {
    const { speed, wingAngle, weight, dragCoefficient } = preset;
    setParams({ speed, wingAngle, weight, dragCoefficient });
  }

  return { presets, isLoading, save, remove, load };
}
