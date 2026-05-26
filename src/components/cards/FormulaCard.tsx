import { cn } from '@/lib/utils/cn';
import { Typography } from '@/components/ui/Typography';

export type FormulaColor = 'default' | 'downforce' | 'drag' | 'grip';

interface FormulaCardProps {
  title: string;
  formula: string;
  variables: string;
  explanation: string;
  color?: FormulaColor;
  className?: string;
}

const formulaColorClasses: Record<FormulaColor, string> = {
  default:   'text-f1-white',
  downforce: 'text-downforce',
  drag:      'text-drag',
  grip:      'text-grip',
};

export function FormulaCard({
  title,
  formula,
  variables,
  explanation,
  color = 'default',
  className,
}: FormulaCardProps) {
  return (
    <div className={cn('rounded-xl bg-f1-surface border border-f1-border p-6 flex flex-col gap-3', className)}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="mono" size="lg" className={formulaColorClasses[color]}>
        {formula}
      </Typography>
      <Typography variant="caption">{variables}</Typography>
      <Typography variant="body-sm">{explanation}</Typography>
    </div>
  );
}
