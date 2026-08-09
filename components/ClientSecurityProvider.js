'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function ClientSecurityProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const protectedRoutes = ['/dashboard', '/day', '/leaderboard', '/profile'];
    const isProtected = protectedRoutes.some(route => pathname.startsWith(route));

    if (isProtected) {
      const isLoggedIn = localStorage.getItem('abtalks_logged_in');
      if (!isLoggedIn) {
        router.replace('/login');
      }
    }
  }, [pathname, router]);

  return <>{children}</>;
}
