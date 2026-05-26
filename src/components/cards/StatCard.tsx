import { cn } from '@/lib/utils/cn';
import { Typography } from '@/components/ui/Typography';

type StatColor = 'default' | 'downforce' | 'drag' | 'grip';

interface StatCardProps {
  label: string;
  value: number | null;
  unit?: string;
  color?: StatColor;
  decimals?: number;
  className?: string;
}

const valueColorClasses: Record<StatColor, string> = {
  default:   'text-f1-white',
  downforce: 'text-downforce',
  drag:      'text-drag',
  grip:      'text-grip',
};

export function StatCard({ label, value, unit, color = 'default', decimals, className }: StatCardProps) {
  const display =
    value === null
      ? '—'
      : decimals !== undefined
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString();

  return (
    <div className={cn('rounded-xl bg-f1-surface border border-f1-border p-4 flex flex-col gap-1', className)}>
      <Typography variant="caption">{label}</Typography>
      <div className={cn('font-mono text-2xl font-bold', valueColorClasses[color])}>
        {display}
        {unit && value !== null && (
          <span className="text-sm font-normal text-f1-muted ml-1">{unit}</span>
        )}
      </div>
    </div>
  );
}
