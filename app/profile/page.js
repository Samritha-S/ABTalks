'use client';

import Link from 'next/link';
import BottomNav from '@/components/BottomNav';
import { student } from '@/data/mockData';

export default function ProfilePage() {
  return (
    <div className="page-with-bottom-nav" style={{ background: 'var(--bg-base)', position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* ── Background Constellations ── */}
      <svg
        style={{ position: 'absolute', top: '10px', right: '10px', width: 220, height: 220, pointerEvents: 'none', zIndex: 0, opacity: 0.65 }}
        viewBox="0 0 220 220"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="170" cy="30" r="3" fill="#fcd34d" />
        <circle cx="120" cy="60" r="2" fill="#ffffff" opacity="0.6" />
        <circle cx="190" cy="100" r="2.5" fill="#fcd34d" opacity="0.8" />
        <circle cx="80" cy="110" r="1.8" fill="#ffffff" opacity="0.5" />
        <circle cx="140" cy="150" r="2.2" fill="#fcd34d" />
        <circle cx="190" cy="180" r="1.5" fill="#ffffff" opacity="0.4" />
        <circle cx="100" cy="190" r="2" fill="#ffffff" opacity="0.6" />
        <line x1="170" y1="30" x2="120" y2="60" stroke="rgba(252,211,77,0.15)" strokeWidth="0.8" />
        <line x1="120" y1="60" x2="190" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
        <line x1="120" y1="60" x2="80" y2="110" stroke="rgba(252,211,77,0.12)" strokeWidth="0.8" />
        <line x1="190" y1="100" x2="140" y2="150" stroke="rgba(252,211,77,0.15)" strokeWidth="0.8" />
        <line x1="140" y1="150" x2="190" y2="180" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
        <line x1="140" y1="150" x2="100" y2="190" stroke="rgba(252,211,77,0.1)" strokeWidth="0.8" />
        <line x1="80" y1="110" x2="100" y2="190" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      </svg>

      <svg
        style={{ position: 'absolute', bottom: '90px', left: '10px', width: 200, height: 200, pointerEvents: 'none', zIndex: 0, opacity: 0.6 }}
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="30" cy="170" r="3" fill="#fcd34d" />
        <circle cx="70" cy="120" r="2.2" fill="#ffffff" opacity="0.7" />
        <circle cx="20" cy="70" r="2" fill="#fcd34d" opacity="0.75" />
        <circle cx="110" cy="150" r="2.5" fill="#fcd34d" />
        <circle cx="130" cy="90" r="1.8" fill="#ffffff" opacity="0.5" />
        <circle cx="170" cy="140" r="1.5" fill="#fcd34d" opacity="0.6" />
        <line x1="30" y1="170" x2="70" y2="120" stroke="rgba(252,211,77,0.15)" strokeWidth="0.8" />
        <line x1="70" y1="120" x2="20" y2="70" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
        <line x1="70" y1="120" x2="110" y2="150" stroke="rgba(252,211,77,0.15)" strokeWidth="0.8" />
        <line x1="110" y1="150" x2="130" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
        <line x1="110" y1="150" x2="170" y2="140" stroke="rgba(252,211,77,0.12)" strokeWidth="0.8" />
        <line x1="20" y1="70" x2="130" y2="90" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      </svg>

      {/* Header */}
      <div style={{
        padding: '20px 40px',
        position: 'sticky',
        top: 0,
        background: 'rgba(15,23,42,0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-subtle)',
        zIndex: 30,
      }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em' }}>
          Profile
        </h1>
      </div>

      {/* Content */}
      <div style={{ padding: '40px', maxWidth: '600px', position: 'relative', zIndex: 1 }}>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', padding: '24px' }}>
          <div className="avatar avatar-lg" style={{ background: '#22c55e', color: '#0c0d10' }}>
            {student.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--text-primary)', fontWeight: 700 }}>{student.name}</h2>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>@{student.username}</p>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '24px', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>Track</span>
            <span style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 600 }}>{student.track}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>College</span>
            <span style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 600 }}>{student.college}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.25rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>GitHub</span>
            <span style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 600 }}>@{student.githubHandle}</span>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => {
              localStorage.removeItem('abtalks_logged_in');
              window.location.href = '/';
            }}
            className="btn btn-ghost"
            style={{ width: '100%', color: 'var(--accent-red)', padding: '14px', display: 'flex', justifyContent: 'center' }}
          >
            Sign Out
          </button>
        </div>
      </div>

      <BottomNav active="profile" />
    </div>
  );
}

