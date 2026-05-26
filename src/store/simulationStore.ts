import { create } from 'zustand';
import type { SimParams, SimResult } from '@/types/simulation';
import {
  SPEED_DEFAULT,
  WING_ANGLE_DEFAULT,
  WEIGHT_DEFAULT,
  DRAG_DEFAULT,
} from '@/lib/constants';

interface SimulationState {
  params: SimParams;
  result: SimResult | null;
  isConnected: boolean;
  isLoading: boolean;
  setParams: (partial: Partial<SimParams>) => void;
  setResult: (result: SimResult) => void;
  setConnected: (connected: boolean) => void;
  setLoading: (loading: boolean) => void;
}

export const useSimulationStore = create<SimulationState>()((set) => ({
  params: {
    speed: SPEED_DEFAULT,
    wingAngle: WING_ANGLE_DEFAULT,
    weight: WEIGHT_DEFAULT,
    dragCoefficient: DRAG_DEFAULT,
  },
  result: null,
  isConnected: false,
  isLoading: false,
  setParams: (partial) => set((s) => ({ params: { ...s.params, ...partial } })),
  setResult: (result) => set({ result }),
  setConnected: (isConnected) => set({ isConnected }),
  setLoading: (isLoading) => set({ isLoading }),
}));
