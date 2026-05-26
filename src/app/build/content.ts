type BuildPhaseKey = 'phase1' | 'phase2' | 'phase3';

type BuildFrontendStackKey =
  | 'nextjs'
  | 'react'
  | 'typescript'
  | 'tailwind'
  | 'zustand'
  | 'socketio'
  | 'recharts';

type BuildBackendStackKey =
  | 'nestjs'
  | 'prisma'
  | 'postgresql'
  | 'socketio'
  | 'validation'
  | 'config'
  | 'swagger';

type BuildModuleKey = 'aero' | 'simulation' | 'presets' | 'prisma' | 'health';

type BuildFrontendArchKey = 'appRouter' | 'zustand' | 'hooks' | 'locales' | 'components';

type BuildRestEndpointKey =
  | 'health'
  | 'simulationRun'
  | 'presetsList'
  | 'presetsCreate'
  | 'presetsGet'
  | 'presetsDelete';

type BuildWsEventKey = 'simulateUpdate' | 'simulateResult' | 'simulateError';

type BuildPresetFieldKey =
  | 'id'
  | 'name'
  | 'speed'
  | 'wingAngle'
  | 'weight'
  | 'dragCoefficient'
  | 'createdAt'
  | 'updatedAt';

interface StackItem<T extends string> {
  key: T;
  icon: string;
  iconColor?: string;
}

interface PhaseItem {
  key: BuildPhaseKey;
  icon: string;
  iconColor?: string;
}

export const PHASE_ITEMS: PhaseItem[] = [
  { key: 'phase1', icon: 'rocket_launch', iconColor: 'text-f1-red' },
  { key: 'phase2', icon: 'psychology', iconColor: 'text-downforce' },
  { key: 'phase3', icon: 'hub', iconColor: 'text-grip' },
];

export const FRONTEND_STACK_ITEMS: StackItem<BuildFrontendStackKey>[] = [
  { key: 'nextjs', icon: 'web', iconColor: 'text-f1-white' },
  { key: 'react', icon: 'code', iconColor: 'text-downforce' },
  { key: 'typescript', icon: 'data_object', iconColor: 'text-f1-red' },
  { key: 'tailwind', icon: 'palette', iconColor: 'text-grip' },
  { key: 'zustand', icon: 'storage', iconColor: 'text-drag' },
  { key: 'socketio', icon: 'bolt', iconColor: 'text-f1-red' },
  { key: 'recharts', icon: 'show_chart', iconColor: 'text-downforce' },
];

export const BACKEND_STACK_ITEMS: StackItem<BuildBackendStackKey>[] = [
  { key: 'nestjs', icon: 'dns', iconColor: 'text-f1-red' },
  { key: 'prisma', icon: 'database', iconColor: 'text-downforce' },
  { key: 'postgresql', icon: 'table', iconColor: 'text-grip' },
  { key: 'socketio', icon: 'bolt', iconColor: 'text-drag' },
  { key: 'validation', icon: 'verified', iconColor: 'text-f1-white' },
  { key: 'config', icon: 'settings', iconColor: 'text-f1-muted' },
  { key: 'swagger', icon: 'menu_book', iconColor: 'text-downforce' },
];

export const MODULE_ITEMS: StackItem<BuildModuleKey>[] = [
  { key: 'aero', icon: 'air', iconColor: 'text-downforce' },
  { key: 'simulation', icon: 'speed', iconColor: 'text-f1-red' },
  { key: 'presets', icon: 'bookmarks', iconColor: 'text-drag' },
  { key: 'prisma', icon: 'database', iconColor: 'text-grip' },
  { key: 'health', icon: 'monitor_heart', iconColor: 'text-f1-white' },
];

export const FRONTEND_ARCH_ITEMS: StackItem<BuildFrontendArchKey>[] = [
  { key: 'appRouter', icon: 'route', iconColor: 'text-f1-red' },
  { key: 'zustand', icon: 'storage', iconColor: 'text-drag' },
  { key: 'hooks', icon: 'sync', iconColor: 'text-downforce' },
  { key: 'locales', icon: 'translate', iconColor: 'text-grip' },
  { key: 'components', icon: 'widgets', iconColor: 'text-f1-white' },
];

export const REST_ENDPOINT_KEYS: BuildRestEndpointKey[] = [
  'health',
  'simulationRun',
  'presetsList',
  'presetsCreate',
  'presetsGet',
  'presetsDelete',
];

export const WS_EVENT_KEYS: BuildWsEventKey[] = [
  'simulateUpdate',
  'simulateResult',
  'simulateError',
];

export const PRESET_FIELD_KEYS: BuildPresetFieldKey[] = [
  'id',
  'name',
  'speed',
  'wingAngle',
  'weight',
  'dragCoefficient',
  'createdAt',
  'updatedAt',
];
