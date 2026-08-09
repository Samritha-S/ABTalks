'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const PROTECTED = ['/dashboard', '/day', '/leaderboard', '/profile'];

export default function ClientSecurityProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const isProtected = PROTECTED.some(route => pathname.startsWith(route));

    if (isProtected) {
      const isLoggedIn = localStorage.getItem('abtalks_logged_in');
      if (!isLoggedIn) {
        // Replace so the protected URL doesn't stay in browser history
        router.replace('/login');
        return; // Don't render children while redirecting
      }
    }

    setReady(true);
  }, [pathname, router]);

  // For protected routes: render nothing until auth is confirmed (prevents flash)
  const isProtected = PROTECTED.some(route => pathname.startsWith(route));
  if (isProtected && !ready) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#0c0d10',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          width: 32, height: 32,
          border: '2px solid rgba(252,211,77,0.2)',
          borderTop: '2px solid #fcd34d',
          borderRadius: '50%',
          animation: 'spin 0.7s linear infinite',
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return <>{children}</>;
}
