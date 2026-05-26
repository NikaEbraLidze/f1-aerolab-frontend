import env from '@/env';
import type { Preset, SimParams } from '@/types/simulation';

const BASE = `${env.NEXT_PUBLIC_API_URL}/presets`;

interface ApiEnvelope<T> {
  success: boolean;
  data: T;
}

async function unwrap<T>(res: Response): Promise<T> {
  const envelope = (await res.json()) as ApiEnvelope<T>;
  return envelope.data;
}

export async function fetchPresets(): Promise<Preset[]> {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error('Failed to fetch presets');
  const data = await unwrap<unknown>(res);
  return Array.isArray(data) ? (data as Preset[]) : [];
}

export async function createPreset(name: string, params: SimParams): Promise<Preset> {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, ...params }),
  });
  if (!res.ok) throw new Error('Failed to create preset');
  return unwrap<Preset>(res);
}

export async function deletePreset(id: string): Promise<void> {
  const res = await fetch(`${BASE}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete preset');
}
