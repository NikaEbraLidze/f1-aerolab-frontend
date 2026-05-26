'use client';
import { useLocale } from '@/hooks/useLocale';
import { cn } from '@/lib/utils/cn';
import type { Preset } from '@/types/simulation';

interface PresetCardProps {
  preset: Preset;
  onLoad: () => void;
  onDelete: () => void;
}

export function PresetCard({ preset, onLoad, onDelete }: PresetCardProps) {
  const t = useLocale();

  return (
    <div className="flex items-center gap-2 rounded-lg border border-f1-border bg-f1-black px-3 py-2 group">
      <button
        onClick={onLoad}
        className="flex-1 text-left text-sm text-f1-muted hover:text-f1-white transition-colors truncate"
      >
        {preset.name}
      </button>
      <button
        onClick={onDelete}
        aria-label={t.presets.delete}
        className={cn(
          'shrink-0 text-f1-muted/40 hover:text-f1-red transition-colors',
          'opacity-0 group-hover:opacity-100',
        )}
      >
        <span className="material-symbols-rounded text-base">delete</span>
      </button>
    </div>
  );
}
