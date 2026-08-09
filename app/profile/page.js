import BottomNav from '@/components/BottomNav';
import { student } from '@/data/mockData';

export default function ProfilePage() {
  return (
    <div className="page-with-bottom-nav" style={{ padding: '2rem 1rem', background: 'var(--bg-base)', minHeight: '100dvh' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800, marginBottom: '1rem' }}>Profile</h1>
      
      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <div className="avatar avatar-lg" style={{ background: '#22c55e', color: '#0c0d10' }}>
          {student.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--text-primary)' }}>{student.name}</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>@{student.username}</p>
        </div>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
          <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Track</span>
          <span style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 500 }}>{student.track}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
          <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>College</span>
          <span style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 500 }}>{student.college}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
          <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>GitHub</span>
          <span style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 500 }}>{student.githubHandle}</span>
        </div>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button className="btn btn-ghost" style={{ width: '100%', color: 'var(--accent-red)' }}>Sign Out</button>
      </div>

      <BottomNav active="profile" />
    </div>
  );
}
