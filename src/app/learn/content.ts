import type { FormulaColor } from '@/components/cards/FormulaCard';

type LearnFormulaKey =
  | 'speedConversion'
  | 'liftCoefficient'
  | 'downforce'
  | 'drag'
  | 'lift'
  | 'efficiency'
  | 'grip'
  | 'weightTransfer';

type LearnParameterKey = 'speed' | 'wingAngle' | 'weight' | 'dragCoefficient';

type LearnOutputKey =
  | 'downforce'
  | 'drag'
  | 'lift'
  | 'aeroEfficiency'
  | 'grip'
  | 'weightTransfer';

type LearnConstantKey = 'rho' | 'area' | 'gravity' | 'wheelbase' | 'cgHeight' | 'brakingAccel';

interface ParameterItem {
  key: LearnParameterKey;
  icon: string;
  iconColor?: string;
}

interface OutputItem {
  key: LearnOutputKey;
  icon: string;
  iconColor?: string;
}

interface FormulaItem {
  key: LearnFormulaKey;
  color?: FormulaColor;
}

export const PARAMETER_ITEMS: ParameterItem[] = [
  { key: 'speed', icon: 'speed', iconColor: 'text-f1-red' },
  { key: 'wingAngle', icon: 'air', iconColor: 'text-downforce' },
  { key: 'weight', icon: 'scale', iconColor: 'text-grip' },
  { key: 'dragCoefficient', icon: 'waves', iconColor: 'text-drag' },
];

export const FORMULA_ITEMS: FormulaItem[] = [
  { key: 'speedConversion' },
  { key: 'liftCoefficient' },
  { key: 'downforce', color: 'downforce' },
  { key: 'drag', color: 'drag' },
  { key: 'lift' },
  { key: 'efficiency' },
  { key: 'grip', color: 'grip' },
  { key: 'weightTransfer' },
];

export const OUTPUT_ITEMS: OutputItem[] = [
  { key: 'downforce', icon: 'arrow_downward', iconColor: 'text-downforce' },
  { key: 'drag', icon: 'trending_flat', iconColor: 'text-drag' },
  { key: 'lift', icon: 'arrow_upward' },
  { key: 'aeroEfficiency', icon: 'balance' },
  { key: 'grip', icon: 'tire_repair', iconColor: 'text-grip' },
  { key: 'weightTransfer', icon: 'swap_horiz' },
];

export const CONSTANT_KEYS: LearnConstantKey[] = [
  'rho',
  'area',
  'gravity',
  'wheelbase',
  'cgHeight',
  'brakingAccel',
];
