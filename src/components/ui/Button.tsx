import { cn } from '@/lib/utils/cn';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

type ButtonOwnProps<T extends ElementType> = {
  variant?: Variant;
  size?: Size;
  as?: T;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
};

type ButtonProps<T extends ElementType = 'button'> =
  ButtonOwnProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;

const variantClasses: Record<Variant, string> = {
  primary: 'bg-f1-red text-white font-semibold hover:bg-f1-red-dark',
  ghost:   'border border-f1-border text-f1-muted hover:text-f1-white hover:border-f1-white/20',
  outline: 'border border-f1-red text-f1-red hover:bg-f1-red hover:text-white',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-1.5 text-xs',
  md: 'px-8 py-3 text-sm',
  lg: 'px-10 py-4 text-base',
};

export function Button<T extends ElementType = 'button'>({
  variant = 'primary',
  size = 'md',
  as,
  className,
  children,
  disabled,
  ...rest
}: ButtonProps<T>) {
  const Tag = (as ?? 'button') as ElementType;
  const isNativeButton = !as || as === 'button';

  return (
    <Tag
      {...rest}
      {...(isNativeButton && { disabled })}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-f1-red focus-visible:ring-offset-2 focus-visible:ring-offset-f1-black',
        variantClasses[variant],
        sizeClasses[size],
        disabled && 'opacity-40 cursor-not-allowed pointer-events-none',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
