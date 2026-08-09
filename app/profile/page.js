'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { student } from '@/data/mockData';
import styles from './page.module.css';
import BottomNav from '@/components/BottomNav';

const LOGO = '/logo.png';

function ConstellationHero() {
  return (
    <svg className={styles.constellation} style={{ top: 0, right: 0, width: 340, height: 260, opacity: 0.55 }}
      viewBox="0 0 340 260" fill="none" aria-hidden="true">
      <circle cx="290" cy="28"  r="3"   fill="#fcd34d" />
      <circle cx="240" cy="70"  r="2"   fill="#ffffff" opacity="0.5" />
      <circle cx="320" cy="90"  r="2.5" fill="#fcd34d" opacity="0.7" />
      <circle cx="200" cy="120" r="1.8" fill="#ffffff" opacity="0.4" />
      <circle cx="270" cy="150" r="2.2" fill="#fcd34d" />
      <circle cx="310" cy="190" r="1.5" fill="#ffffff" opacity="0.35" />
      <circle cx="180" cy="200" r="2"   fill="#fcd34d" opacity="0.6" />
      <circle cx="250" cy="230" r="1.5" fill="#ffffff" opacity="0.3" />
      <line x1="290" y1="28"  x2="240" y2="70"  stroke="rgba(252,211,77,0.15)" strokeWidth="0.8" />
      <line x1="240" y1="70"  x2="320" y2="90"  stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <line x1="240" y1="70"  x2="200" y2="120" stroke="rgba(252,211,77,0.12)" strokeWidth="0.8" />
      <line x1="320" y1="90"  x2="270" y2="150" stroke="rgba(252,211,77,0.15)" strokeWidth="0.8" />
      <line x1="270" y1="150" x2="310" y2="190" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      <line x1="270" y1="150" x2="180" y2="200" stroke="rgba(252,211,77,0.12)" strokeWidth="0.8" />
      <line x1="200" y1="120" x2="180" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1="180" y1="200" x2="250" y2="230" stroke="rgba(252,211,77,0.1)"  strokeWidth="0.8" />
    </svg>
  );
}

function ConstellationLeft() {
  return (
    <svg className={styles.constellation} style={{ bottom: 200, left: 260, width: 200, height: 200, opacity: 0.4 }}
      viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <circle cx="40"  cy="160" r="2.5" fill="#fcd34d" />
      <circle cx="90"  cy="110" r="2"   fill="#ffffff" opacity="0.6" />
      <circle cx="30"  cy="60"  r="1.8" fill="#fcd34d" opacity="0.7" />
      <circle cx="140" cy="140" r="2.2" fill="#fcd34d" />
      <circle cx="160" cy="80"  r="1.5" fill="#ffffff" opacity="0.5" />
      <circle cx="120" cy="30"  r="2"   fill="#fcd34d" opacity="0.6" />
      <line x1="40"  y1="160" x2="90"  y2="110" stroke="rgba(252,211,77,0.15)" strokeWidth="0.8" />
      <line x1="90"  y1="110" x2="30"  y2="60"  stroke="rgba(255,255,255,0.1)"  strokeWidth="0.8" />
      <line x1="90"  y1="110" x2="140" y2="140" stroke="rgba(252,211,77,0.15)" strokeWidth="0.8" />
      <line x1="140" y1="140" x2="160" y2="80"  stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <line x1="160" y1="80"  x2="120" y2="30"  stroke="rgba(252,211,77,0.12)" strokeWidth="0.8" />
      <line x1="30"  y1="60"  x2="120" y2="30"  stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
    </svg>
  );
}

function ConstellationRight() {
  return (
    <svg className={styles.constellation} style={{ bottom: 80, right: 40, width: 180, height: 180, opacity: 0.35 }}
      viewBox="0 0 180 180" fill="none" aria-hidden="true">
      <circle cx="140" cy="30"  r="2.5" fill="#fcd34d" />
      <circle cx="80"  cy="60"  r="1.8" fill="#ffffff" opacity="0.5" />
      <circle cx="150" cy="100" r="2"   fill="#fcd34d" opacity="0.7" />
      <circle cx="50"  cy="120" r="2"   fill="#fcd34d" />
      <circle cx="110" cy="155" r="1.5" fill="#ffffff" opacity="0.4" />
      <line x1="140" y1="30"  x2="80"  y2="60"  stroke="rgba(252,211,77,0.14)" strokeWidth="0.8" />
      <line x1="80"  y1="60"  x2="150" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <line x1="150" y1="100" x2="50"  y2="120" stroke="rgba(252,211,77,0.12)" strokeWidth="0.8" />
      <line x1="50"  y1="120" x2="110" y2="155" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
    </svg>
  );
}

export default function ProfilePage() {
  const router = useRouter();
  const initials = student.name.split(' ').map(n => n[0]).join('');

  // Preference toggles
  const [pushNotifs, setPushNotifs]   = useState(true);
  const [newsletter, setNewsletter]   = useState(true);
  const [weeklyDigest, setWeekly]     = useState(false);
  const [streakAlerts, setStreak]     = useState(true);
  const [showPhone, setShowPhone]     = useState(false);

  function handleSignOut() {
    localStorage.removeItem('abtalks_logged_in');
    router.push('/');
  }

  return (
    <div className={styles.page}>

      {/* ── Sidebar ── */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarLogo}>
          <Image src={LOGO} alt="AB Talks" width={110} height={36} style={{ objectFit: 'contain' }} />
        </div>

        <nav className={styles.navList}>
          <Link href="/dashboard" className={styles.navItem}>
            <span className={styles.navIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </span>
            Home
          </Link>
          <Link href="/day/12" className={styles.navItem}>
            <span className={styles.navIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </span>
            Today
          </Link>
          <Link href="/leaderboard" className={styles.navItem}>
            <span className={styles.navIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </span>
            Leaderboard
          </Link>
          <Link href="/profile" className={`${styles.navItem} ${styles.navItemActive}`}>
            <span className={styles.navIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </span>
            Profile
          </Link>
        </nav>

        <div className={styles.navDivider} />
        <button className={styles.signOutBtn} onClick={handleSignOut} id="sidebar-signout">
          <span className={styles.navIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
          </span>
          Sign Out
        </button>
      </aside>

      {/* ── Main ── */}
      <main className={styles.main}>

        {/* Hero Card */}
        <div className={styles.heroCard}>
          <div className={styles.heroBg} />
          <ConstellationHero />

          <div className={styles.heroContent}>
            <div className={styles.avatar}>
              {initials}
              <div className={styles.avatarRing} />
            </div>
            <div className={styles.heroInfo}>
              <div className={styles.heroName}>{student.name}</div>
              <div className={styles.heroHandle}>@{student.username} · {student.college}</div>
              <div className={styles.heroBadges}>
                <span className={styles.badgeGreen}>🏆 {student.track}</span>
                <span className={styles.badgeYellow}>🔥 Day {student.currentDay}</span>
                <span className={styles.badgePurple}>⭐ Rank #{student.rank}</span>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <div className={`${styles.statValue} ${styles.statValueYellow}`}>{student.currentStreak}</div>
              <div className={styles.statLabel}>Day Streak</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>{student.githubCommits}</div>
              <div className={styles.statLabel}>Commits</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>{student.linkedinPosts}</div>
              <div className={styles.statLabel}>Posts</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>{student.percentile}%</div>
              <div className={styles.statLabel}>Percentile</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>{student.bestStreak}</div>
              <div className={styles.statLabel}>Best Streak</div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className={styles.content}>
          <ConstellationLeft />
          <ConstellationRight />

          {/* ── Personal Info ── */}
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionHeaderIcon}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <span className={styles.sectionTitle}>Personal Info</span>
            </div>
            <div>
              <div className={styles.infoRow}>
                <div className={styles.infoRowIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className={styles.infoRowContent}>
                  <div className={styles.infoRowLabel}>Full Name</div>
                  <div className={styles.infoRowValue}>{student.name}</div>
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.infoRowIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className={styles.infoRowContent}>
                  <div className={styles.infoRowLabel}>Email</div>
                  <div className={styles.infoRowValue}>arjun@abtalks.dev</div>
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.infoRowIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14 19.79 19.79 0 0 1 1.61 5.46 2 2 0 0 1 3.58 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6.06 6.06l1.47-1.47a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className={styles.infoRowContent}>
                  <div className={styles.infoRowLabel}>Phone</div>
                  <div className={styles.infoRowValue}>{showPhone ? '+91 98765 43210' : '••••••••••'}&nbsp;
                    <button onClick={() => setShowPhone(v => !v)}
                      style={{ background: 'none', border: 'none', color: '#fcd34d', fontSize: '11px', cursor: 'pointer', padding: 0 }}>
                      {showPhone ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.infoRowIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <div className={styles.infoRowContent}>
                  <div className={styles.infoRowLabel}>College</div>
                  <div className={styles.infoRowValue}>{student.college}</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Links ── */}
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionHeaderIcon}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </div>
              <span className={styles.sectionTitle}>Links & Track</span>
            </div>
            <div>
              <div className={styles.infoRow}>
                <div className={styles.infoRowIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.03-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div className={styles.infoRowContent}>
                  <div className={styles.infoRowLabel}>GitHub</div>
                  <a href={`https://github.com/${student.githubHandle}`} target="_blank" rel="noopener noreferrer" className={`${styles.infoRowValue} ${styles.infoRowLink}`}>
                    @{student.githubHandle}
                  </a>
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.infoRowIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className={styles.infoRowContent}>
                  <div className={styles.infoRowLabel}>LinkedIn</div>
                  <a href={`https://linkedin.com/in/${student.linkedinHandle}`} target="_blank" rel="noopener noreferrer" className={`${styles.infoRowValue} ${styles.infoRowLink}`}>
                    @{student.linkedinHandle}
                  </a>
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.infoRowIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <div className={styles.infoRowContent}>
                  <div className={styles.infoRowLabel}>Active Track</div>
                  <div className={styles.infoRowValue}>{student.track}</div>
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.infoRowIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <div className={styles.infoRowContent}>
                  <div className={styles.infoRowLabel}>Started On</div>
                  <div className={styles.infoRowValue}>July 28, 2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Notifications ── */}
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionHeaderIcon}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
              </div>
              <span className={styles.sectionTitle}>Notifications</span>
            </div>
            <div>
              <div className={styles.toggleRow}>
                <div className={styles.toggleInfo}>
                  <div className={styles.toggleLabel}>Push Notifications</div>
                  <div className={styles.toggleDesc}>Daily reminders and streak alerts</div>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" checked={pushNotifs} onChange={e => setPushNotifs(e.target.checked)} />
                  <span className={styles.toggleTrack} />
                </label>
              </div>
              <div className={styles.toggleRow}>
                <div className={styles.toggleInfo}>
                  <div className={styles.toggleLabel}>Streak Alerts</div>
                  <div className={styles.toggleDesc}>Get warned before your streak breaks</div>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" checked={streakAlerts} onChange={e => setStreak(e.target.checked)} />
                  <span className={styles.toggleTrack} />
                </label>
              </div>
              <div className={styles.toggleRow}>
                <div className={styles.toggleInfo}>
                  <div className={styles.toggleLabel}>Community Likes</div>
                  <div className={styles.toggleDesc}>When someone likes your submission</div>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" defaultChecked={false} />
                  <span className={styles.toggleTrack} />
                </label>
              </div>
            </div>
          </div>

          {/* ── Email Preferences ── */}
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionHeaderIcon}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <span className={styles.sectionTitle}>Email Preferences</span>
            </div>
            <div>
              <div className={styles.toggleRow}>
                <div className={styles.toggleInfo}>
                  <div className={styles.toggleLabel}>Newsletter</div>
                  <div className={styles.toggleDesc}>ABTalks tips, stories &amp; announcements</div>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" checked={newsletter} onChange={e => setNewsletter(e.target.checked)} />
                  <span className={styles.toggleTrack} />
                </label>
              </div>
              <div className={styles.toggleRow}>
                <div className={styles.toggleInfo}>
                  <div className={styles.toggleLabel}>Weekly Digest</div>
                  <div className={styles.toggleDesc}>Your progress summary every Monday</div>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" checked={weeklyDigest} onChange={e => setWeekly(e.target.checked)} />
                  <span className={styles.toggleTrack} />
                </label>
              </div>
              <div className={styles.toggleRow}>
                <div className={styles.toggleInfo}>
                  <div className={styles.toggleLabel}>Leaderboard Updates</div>
                  <div className={styles.toggleDesc}>When your rank changes significantly</div>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.toggleTrack} />
                </label>
              </div>
            </div>
          </div>

          {/* ── Achievements (full width) ── */}
          <div className={`${styles.sectionCard} ${styles.wide}`}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionHeaderIcon}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <span className={styles.sectionTitle}>Achievements</span>
            </div>
            <div className={styles.achieveGrid}>
              {student.achievements.map(a => (
                <div key={a.id} className={`${styles.achieveItem} ${!a.earned ? styles.achieveItemLocked : ''}`}
                  title={a.description}>
                  <div className={styles.achieveEmoji}>{a.icon}</div>
                  <div className={styles.achieveLabel}>{a.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Mobile bottom nav */}
      <BottomNav active="profile" />
    </div>
  );
}
