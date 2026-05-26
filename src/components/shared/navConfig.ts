export const NAV_ITEMS = [
  { href: '/', icon: 'home', labelKey: 'home' as const },
  { href: '/simulation', icon: 'speed', labelKey: 'simulation' as const },
  { href: '/learn', icon: 'school', labelKey: 'learn' as const },
  { href: '/build', icon: 'architecture', labelKey: 'build' as const },
] as const;

export type NavLabelKey = (typeof NAV_ITEMS)[number]['labelKey'];

export function isNavActive(pathname: string, href: string): boolean {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}
