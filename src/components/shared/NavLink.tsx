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
  if (mobile) {
    return (
      <Link
        href={href}
        onClick={onClick}
        aria-current={active ? 'page' : undefined}
        className={cn(
          'flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors',
          active ? 'text-f1-red' : 'text-f1-muted hover:text-f1-white',
        )}
      >
        <span className="material-symbols-rounded text-xl">{icon}</span>
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'text-sm font-medium transition-colors',
        active ? 'text-f1-white' : 'text-f1-muted hover:text-f1-white',
      )}
    >
      {label}
    </Link>
  );
}
