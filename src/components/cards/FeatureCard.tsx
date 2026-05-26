import { cn } from '@/lib/utils/cn';
import { Typography } from '@/components/ui/Typography';

interface FeatureCardProps {
  icon: string;
  iconColor?: string;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, iconColor = 'text-f1-red', title, description, className }: FeatureCardProps) {
  return (
    <div className={cn('rounded-xl bg-f1-surface border border-f1-border p-6 flex flex-col gap-3', className)}>
      <span className={cn('material-symbols-rounded text-3xl', iconColor)}>{icon}</span>
      <Typography variant="label" color="white" className="font-semibold">{title}</Typography>
      <Typography variant="body-sm">{description}</Typography>
    </div>
  );
}
