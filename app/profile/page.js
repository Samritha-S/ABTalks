'use client';

import Link from 'next/link';
import BottomNav from '@/components/BottomNav';
import { student } from '@/data/mockData';

export default function ProfilePage() {
  return (
    <div className="page-with-bottom-nav" style={{ background: 'var(--bg-base)' }}>
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
      <div style={{ padding: '40px', maxWidth: '600px' }}>
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
