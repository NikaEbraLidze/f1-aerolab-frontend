'use client';
import { cn } from '@/lib/utils/cn';
import type { ReactNode } from 'react';

export interface SegmentedToggleOption<T extends string> {
  value: T;
  label: ReactNode;
  ariaLabel: string;
}

interface SegmentedToggleProps<T extends string> {
  value: T;
  options: SegmentedToggleOption<T>[];
  onChange: (value: T) => void;
  groupLabel: string;
  className?: string;
  size?: 'sm' | 'md';
}

const sizeStyles = {
  sm: {
    container: 'p-0.5',
    button: 'min-w-[1.625rem] px-1.5 py-0.5 text-[10px]',
    inset: 2,
  },
  md: {
    container: 'p-1',
    button: 'min-w-[2.75rem] px-2.5 py-1.5 text-xs',
    inset: 4,
  },
} as const;

export function SegmentedToggle<T extends string>({
  value,
  options,
  onChange,
  groupLabel,
  className,
  size = 'md',
}: SegmentedToggleProps<T>) {
  const activeIndex = options.findIndex((o) => o.value === value);
  const segmentPercent = 100 / options.length;
  const s = sizeStyles[size];

  return (
    <div
      role="group"
      aria-label={groupLabel}
      className={cn(
        'relative inline-flex items-center rounded-full border border-f1-border bg-f1-surface/80 shadow-inner shadow-black/10',
        s.container,
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute rounded-full bg-f1-red shadow-sm shadow-f1-red/30 transition-all duration-300 ease-out"
        style={{
          top: s.inset,
          bottom: s.inset,
          width: `calc(${segmentPercent}% - ${s.inset}px)`,
          left: activeIndex === 0 ? `${s.inset}px` : `calc(${segmentPercent}% + 0px)`,
        }}
      />
      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={isActive}
            aria-label={option.ariaLabel}
            className={cn(
              'relative z-10 rounded-full font-semibold transition-colors duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-f1-red focus-visible:ring-offset-1 focus-visible:ring-offset-f1-black',
              s.button,
              isActive ? 'text-white' : 'text-f1-muted hover:text-f1-white',
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
