import BottomNav from '@/components/BottomNav';
import styles from './page.module.css';

export default function LeaderboardPage() {
  return (
    <div className={`page-with-bottom-nav ${styles.container}`}>
      {/* Header */}
      <div className={styles.header}>
        {/* Constellation Cluster 1: Top-Right of Header */}
        <svg className={`${styles.constel} ${styles.constelHeaderTR}`} viewBox="0 0 160 80" fill="none" aria-hidden="true">
          <circle cx="130" cy="15" r="2.5" fill="#fcd34d" />
          <circle cx="85" cy="25" r="1.8" fill="#ffffff" opacity="0.6" />
          <circle cx="45" cy="50" r="2.2" fill="#fcd34d" opacity="0.8" />
          <circle cx="110" cy="60" r="1.5" fill="#ffffff" opacity="0.4" />
          <line x1="130" y1="15" x2="85" y2="25" stroke="rgba(252,211,77,0.15)" strokeWidth="0.8" />
          <line x1="85" y1="25" x2="45" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
          <line x1="85" y1="25" x2="110" y2="60" stroke="rgba(252,211,77,0.12)" strokeWidth="0.8" />
          <line x1="45" y1="50" x2="110" y2="60" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
        </svg>

        <div className={styles.headerContent}>
          <h1 className={styles.title}>
            Leaderboard
          </h1>
        </div>
      </div>

      {/* Constellation Cluster 2: Middle-Right */}
      <svg className={`${styles.constel} ${styles.constelMidRight}`} viewBox="0 0 140 160" fill="none" aria-hidden="true">
        <circle cx="110" cy="25" r="2.8" fill="#fcd34d" />
        <circle cx="50" cy="40" r="1.8" fill="#ffffff" opacity="0.5" />
        <circle cx="95" cy="85" r="2.2" fill="#fcd34d" opacity="0.75" />
        <circle cx="35" cy="120" r="1.5" fill="#ffffff" opacity="0.4" />
        <circle cx="115" cy="140" r="2.0" fill="#fcd34d" opacity="0.6" />
        <line x1="110" y1="25" x2="50" y2="40" stroke="rgba(252,211,77,0.14)" strokeWidth="0.8" />
        <line x1="50" y1="40" x2="95" y2="85" stroke="rgba(255,255,255,0.09)" strokeWidth="0.8" />
        <line x1="95" y1="85" x2="35" y2="120" stroke="rgba(252,211,77,0.12)" strokeWidth="0.8" />
        <line x1="95" y1="85" x2="115" y2="140" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
        <line x1="35" y1="120" x2="115" y2="140" stroke="rgba(252,211,77,0.1)" strokeWidth="0.8" />
      </svg>

      {/* Constellation Cluster 3: Bottom-Left near bottom of list */}
      <svg className={`${styles.constel} ${styles.constelBottomLeft}`} viewBox="0 0 160 160" fill="none" aria-hidden="true">
        <circle cx="25" cy="135" r="2.8" fill="#fcd34d" />
        <circle cx="75" cy="145" r="1.8" fill="#ffffff" opacity="0.5" />
        <circle cx="130" cy="115" r="2.2" fill="#fcd34d" opacity="0.7" />
        <circle cx="60" cy="75" r="1.5" fill="#ffffff" opacity="0.4" />
        <circle cx="115" cy="45" r="2.0" fill="#fcd34d" opacity="0.6" />
        <circle cx="30" cy="30" r="1.8" fill="#ffffff" opacity="0.35" />
        <line x1="25" y1="135" x2="75" y2="145" stroke="rgba(252,211,77,0.14)" strokeWidth="0.8" />
        <line x1="75" y1="145" x2="130" y2="115" stroke="rgba(255,255,255,0.09)" strokeWidth="0.8" />
        <line x1="25" y1="135" x2="60" y2="75" stroke="rgba(252,211,77,0.12)" strokeWidth="0.8" />
        <line x1="60" y1="75" x2="115" y2="45" stroke="rgba(255,255,255,0.09)" strokeWidth="0.8" />
        <line x1="60" y1="75" x2="30" y2="30" stroke="rgba(252,211,77,0.1)" strokeWidth="0.8" />
        <line x1="130" y1="115" x2="115" y2="45" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      </svg>

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.subtitle}>
          See where you stand among 10,000+ builders.
        </p>

        <div className={`card ${styles.card}`}>
          <div className={styles.trophy}>🏆</div>
          <h2 className={styles.cardTitle}>
            Leaderboard coming soon
          </h2>
          <p className={styles.cardDescription}>
            Keep building your streak. The leaderboard unlocks after Day 7.
          </p>
        </div>
      </div>

      <BottomNav active="leaderboard" />
    </div>
  );
}
