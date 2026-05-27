import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Learn',
  description:
    'Learn F1 aerodynamics in plain language. Explore downforce and drag formulas, physics constants, input parameters and simulation output metrics used by AeroLab.',
  path: '/learn',
});

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
