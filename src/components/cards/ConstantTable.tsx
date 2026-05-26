import { cn } from '@/lib/utils/cn';
import { Typography } from '@/components/ui/Typography';

export interface ConstantRow {
  symbol: string;
  value: string;
  unit: string;
  description: string;
}

interface ConstantTableProps {
  rows: ConstantRow[];
  className?: string;
}

export function ConstantTable({ rows, className }: ConstantTableProps) {
  return (
    <div className={cn('rounded-xl bg-f1-surface border border-f1-border overflow-hidden', className)}>
      <div className="divide-y divide-f1-border">
        {rows.map((row) => (
          <div
            key={row.symbol}
            className="grid grid-cols-[auto_1fr] sm:grid-cols-[6rem_5rem_4rem_1fr] gap-x-4 gap-y-1 px-6 py-4 items-baseline"
          >
            <Typography variant="mono" color="red" className="font-semibold">
              {row.symbol}
            </Typography>
            <Typography variant="mono" className="font-semibold sm:col-start-auto">
              {row.value}
            </Typography>
            <Typography variant="caption" className="sm:col-start-auto">
              {row.unit}
            </Typography>
            <Typography variant="body-sm" className="col-span-2 sm:col-span-1 sm:col-start-auto">
              {row.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
