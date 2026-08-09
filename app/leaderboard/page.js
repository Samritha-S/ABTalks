import BottomNav from '@/components/BottomNav';

export default function LeaderboardPage() {
  return (
    <div className="page-with-bottom-nav" style={{ padding: '2rem 1rem', background: 'var(--bg-base)', minHeight: '100dvh' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800, marginBottom: '1rem' }}>Leaderboard</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>See where you stand among 10,000+ builders.</p>
      
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center', padding: '3rem 1rem' }}>
        <div style={{ fontSize: '40px' }}>🏆</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--text-primary)' }}>Leaderboard coming soon</h2>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Keep building your streak. The leaderboard unlocks after Day 7.</p>
      </div>

      <BottomNav active="leaderboard" />
    </div>
  );
}
