import env from '@/env';

export const SITE_NAME = 'F1 AeroLab';
export const SITE_URL = env.NEXT_PUBLIC_SITE_URL;
export const DEFAULT_TITLE = 'F1 AeroLab | Formula 1 Aerodynamics Simulator';
export const TITLE_TEMPLATE = '%s | F1 AeroLab';

export const KEYWORDS = [
  'F1 aerodynamics',
  'Formula 1 simulator',
  'downforce',
  'drag coefficient',
  'aerodynamics playground',
  'WebSocket simulation',
  'wing angle',
  'grip',
  'aero efficiency',
] as const;
