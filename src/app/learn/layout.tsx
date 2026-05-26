import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learn — F1 AeroLab',
  description: 'Documentation on F1 AeroLab aerodynamic formulas, physics constants, and output metrics.',
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
