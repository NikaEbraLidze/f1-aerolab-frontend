import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Simulation',
  description:
    'Live F1 aerodynamics simulator with real-time sliders for wing angle, speed, weight and drag. View downforce, drag, grip charts and save car setup presets.',
  path: '/simulation',
});

export default function SimulationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
