import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build — F1 AeroLab',
  description: 'Architecture, tech stack, and development details for the F1 AeroLab full-stack project.',
};

export default function BuildLayout({ children }: { children: React.ReactNode }) {
  return children;
}
