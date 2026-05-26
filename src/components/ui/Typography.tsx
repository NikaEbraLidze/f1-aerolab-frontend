import { cn } from '@/lib/utils/cn';
import type { ElementType, ReactNode } from 'react';

type Variant = 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-sm' | 'caption' | 'label' | 'tagline' | 'mono';
type Color = 'white' | 'muted' | 'red' | 'downforce' | 'drag' | 'grip';
type Size = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';

interface TypographyProps {
  variant?: Variant;
  as?: ElementType;
  color?: Color;
  size?: Size;
  className?: string;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  display:   'text-5xl font-bold tracking-tight text-f1-white',
  h1:        'text-4xl font-bold tracking-tight text-f1-white',
  h2:        'text-3xl font-bold tracking-tight text-f1-white',
  h3:        'text-2xl font-semibold tracking-tight text-f1-white',
  h4:        'text-xl font-semibold text-f1-white',
  body:      'text-base text-f1-muted leading-relaxed',
  'body-sm': 'text-sm text-f1-muted leading-relaxed',
  caption:   'text-xs text-f1-muted',
  label:     'text-sm font-medium text-f1-muted',
  tagline:   'text-xs font-mono tracking-[0.3em] text-f1-muted uppercase',
  mono:      'font-mono text-f1-white',
};

const defaultElements: Record<Variant, ElementType> = {
  display:   'h1',
  h1:        'h1',
  h2:        'h2',
  h3:        'h3',
  h4:        'h4',
  body:      'p',
  'body-sm': 'p',
  caption:   'span',
  label:     'span',
  tagline:   'span',
  mono:      'span',
};

const colorClasses: Record<Color, string> = {
  white:     'text-f1-white',
  muted:     'text-f1-muted',
  red:       'text-f1-red',
  downforce: 'text-downforce',
  drag:      'text-drag',
  grip:      'text-grip',
};

const sizeClasses: Record<Size, string> = {
  xs:   'text-xs',
  sm:   'text-sm',
  base: 'text-base',
  lg:   'text-lg',
  xl:   'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
};

export function Typography({ variant = 'body', as, color, size, className, children }: TypographyProps) {
  const Tag = as ?? defaultElements[variant];
  return (
    <Tag className={cn(
      variantClasses[variant],
      color && colorClasses[color],
      size && sizeClasses[size],
      className,
    )}>
      {children}
    </Tag>
  );
}
