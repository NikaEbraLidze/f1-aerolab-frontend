import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

interface NavLinkProps {
  href: string;
  icon: string;
  label: string;
  active: boolean;
  onClick?: () => void;
  mobile?: boolean;
}

export function NavLink({ href, icon, label, active, onClick, mobile = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'group inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200',
        mobile ? 'w-full px-4 py-3 text-base' : 'px-3.5 py-2 text-sm',
        active
          ? 'bg-f1-red text-white shadow-md shadow-f1-red/30'
          : 'text-f1-muted hover:text-f1-white hover:bg-f1-surface/80 border border-transparent hover:border-f1-border',
      )}
    >
      <span
        className={cn(
          'material-symbols-rounded transition-colors',
          mobile ? 'text-xl' : 'text-lg',
          active ? 'text-white' : 'text-f1-muted group-hover:text-f1-white',
        )}
      >
        {icon}
      </span>
      {label}
    </Link>
  );
}
