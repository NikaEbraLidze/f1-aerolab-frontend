import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Architecture',
  description:
    'Explore the F1 AeroLab full-stack architecture: NestJS API, PostgreSQL, Prisma, Socket.io WebSocket gateway and Next.js frontend with real-time simulation.',
  path: '/build',
});

export default function BuildLayout({ children }: { children: React.ReactNode }) {
  return children;
}
