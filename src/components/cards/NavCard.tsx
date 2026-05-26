import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { Typography } from '@/components/ui/Typography';

interface NavCardProps {
  icon: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  disabled?: boolean;
  className?: string;
}

export function NavCard({ icon, title, description, cta, href, disabled = false, className }: NavCardProps) {
  const body = (
    <>
      <span className={cn('material-symbols-rounded text-4xl', disabled ? 'text-f1-muted' : 'text-f1-red')}>
        {icon}
      </span>
      <div className="flex-1">
        <Typography variant="body" color="white" className="font-semibold mb-1">{title}</Typography>
        <Typography variant="body-sm">{description}</Typography>
      </div>
      <Typography variant="caption" color={disabled ? 'muted' : 'red'} className="font-medium">
        {disabled ? cta : `${cta} →`}
      </Typography>
    </>
  );

  const sharedClass = cn(
    'flex flex-col gap-4 rounded-xl bg-f1-surface border border-f1-border p-6 transition-colors',
    !disabled && 'hover:border-f1-red/40',
    disabled && 'opacity-50 cursor-default',
    className,
  );

  if (disabled) {
    return <div className={sharedClass}>{body}</div>;
  }

  return (
    <Link href={href} className={sharedClass}>
      {body}
    </Link>
  );
}
