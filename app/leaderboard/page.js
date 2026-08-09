import BottomNav from '@/components/BottomNav';

export default function LeaderboardPage() {
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
          Leaderboard
        </h1>
      </div>

      {/* Content */}
      <div style={{ padding: '40px', maxWidth: '800px' }}>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '16px' }}>
          See where you stand among 10,000+ builders.
        </p>

        <div className="card" style={{ textAlign: 'center', padding: '64px 32px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏆</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
            Leaderboard coming soon
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '360px', margin: '0 auto' }}>
            Keep building your streak. The leaderboard unlocks after Day 7.
          </p>
        </div>
      </div>

      <BottomNav active="leaderboard" />
    </div>
  );
}
