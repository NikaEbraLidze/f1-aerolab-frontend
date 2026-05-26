import { cn } from '@/lib/utils/cn';
import { Typography } from '@/components/ui/Typography';

export interface EndpointRow {
  badge: string;
  label: string;
  description: string;
}

interface EndpointTableProps {
  rows: EndpointRow[];
  className?: string;
}

export function EndpointTable({ rows, className }: EndpointTableProps) {
  return (
    <div className={cn('rounded-xl bg-f1-surface border border-f1-border overflow-hidden', className)}>
      <div className="divide-y divide-f1-border">
        {rows.map((row) => (
          <div
            key={`${row.badge}-${row.label}`}
            className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-x-4 gap-y-2 px-6 py-4 items-start"
          >
            <div className="flex flex-col gap-1 sm:gap-0">
              <Typography variant="mono" color="red" className="text-xs font-semibold uppercase">
                {row.badge}
              </Typography>
              <Typography variant="mono" size="sm" className="break-all">
                {row.label}
              </Typography>
            </div>
            <Typography variant="body-sm">{row.description}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
