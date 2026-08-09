'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './BottomNav.module.css';

const navItems = [
  {
    id: 'home',
    label: 'Home',
    href: '/dashboard',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: 'today',
    label: 'Today',
    href: '/day/12',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    id: 'leaderboard',
    label: 'Leaders',
    href: '/leaderboard',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    id: 'profile',
    label: 'Profile',
    href: '/profile',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
];

export default function BottomNav({ active }) {
  const pathname = usePathname();

  return (
    <nav className={styles.bottomNav} id="bottom-nav" role="navigation" aria-label="Main navigation">
      {navItems.map(item => {
        const isActive = active === item.id || (item.href === pathname && active === undefined);
        return (
          <Link
            key={item.id}
            href={item.href}
            className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
            id={`nav-${item.id}`}
          >
            <span className={styles.navIcon}>{item.icon}</span>
            <span className={styles.navLabel}>{item.label}</span>
            {isActive && <span className={styles.navIndicator} />}
          </Link>
        );
      })}
    </nav>
  );
}
