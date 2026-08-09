'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { student, challengeDays } from '@/data/mockData';
import BottomNav from '@/components/BottomNav';
import styles from './page.module.css';

// ── Shared constellation SVG ──────────────────────────────────
function Constellation({ className, viewBox, stars, lines }) {
  return (
    <svg className={`${styles.constel} ${className || ''}`} viewBox={viewBox} fill="none" aria-hidden="true">
      {lines.map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="rgba(252,211,77,0.10)" strokeWidth="0.8" />
      ))}
      {stars.map(([cx,cy,r,yellow], i) => (
        <circle key={i} cx={cx} cy={cy} r={r}
          fill={yellow ? '#fcd34d' : '#ffffff'}
          opacity={yellow ? 1 : 0.45} />
      ))}
    </svg>
  );
}

// Animated streak counter
function AnimatedNumber({ value }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) { setDisplay(end); return; }
    const step = Math.ceil(end / 20);
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setDisplay(start);
      if (start >= end) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, [value]);
  return <>{display}</>;
}

// Circular progress ring
function ProgressRing({ pct, size = 100, stroke = 8 }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <svg width={size} height={size} className={styles.progressSvg}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
      <circle
        cx={size/2} cy={size/2} r={r}
        fill="none"
        stroke="var(--accent-yellow)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size/2} ${size/2})`}
        style={{ transition: 'stroke-dashoffset 1s ease' }}
      />
    </svg>
  );
}

export default function DashboardPage() {
  const s = student;
  const today = challengeDays[s.currentDay];
  const pct = Math.round((s.currentDay / s.totalDays) * 100);
  const isFirstDay = s.isFirstDay;
  const missedYesterday = s.missedYesterday;

  return (
    <div className={`page-with-bottom-nav ${styles.dashboard}`}>

      {/* ── Top Bar ── */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <div className="avatar avatar-lg" style={{ background: '#22c55e', color: '#0c0d10' }}>
            {s.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className={styles.greeting}>Good evening 👋</div>
            <div className={styles.userName}>{s.name}</div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <span className={`badge badge-green`}>{s.track}</span>
          <button className={styles.notifBtn} id="notif-btn" aria-label="Notifications">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </button>
        </div>
      </header>

      <div className={styles.content}>

        {/* ── Col A (left on desktop) ── */}
        <div className={styles.colA}>

          {/* Missed Day Warning */}
          {missedYesterday && (
            <div className={styles.warningBanner} id="missed-day-banner">
              <div className={styles.warningIcon}>⚠️</div>
              <div>
                <div className={styles.warningTitle}>You missed yesterday</div>
                <div className={styles.warningDesc}>Your streak has reset. Start fresh today!</div>
              </div>
            </div>
          )}

          {/* First Day State */}
          {isFirstDay && (
            <div className={styles.firstDayCard} id="first-day-card">
              <div className={styles.firstDayEmoji}>🚀</div>
              <div className={styles.firstDayTitle}>Day 1 starts today!</div>
              <p className={styles.firstDayDesc}>You're about to join 10,000+ builders. Complete today's task to start your streak.</p>
            </div>
          )}

          {/* ── Streak Card ── */}
          {!isFirstDay && (
            <div className={styles.streakCard} id="streak-card">
              {/* constellation top-right */}
              <Constellation
                className={styles.constelStreakTR}
                viewBox="0 0 140 100"
                stars={[[110,15,2.5,true],[75,30,1.8,false],[130,50,2,false],[55,60,1.5,true],[100,75,1.8,false]]}
                lines={[[110,15,75,30],[75,30,130,50],[75,30,55,60],[55,60,100,75]]}
              />
              <div className={styles.streakMain}>
                <div className={styles.streakFire}>🔥</div>
                <div className={styles.streakNumber}>
                  <AnimatedNumber value={missedYesterday ? 0 : s.currentStreak} />
                </div>
                <div className={styles.streakLabel}>
                  {missedYesterday ? 'Start fresh' : 'day streak'}
                </div>
              </div>
              <div className={styles.streakDivider} />
              <div className={styles.streakStats}>
                <div className={styles.streakStat}>
                  <div className={styles.streakStatValue}>⚡ {s.bestStreak}</div>
                  <div className={styles.streakStatLabel}>Best streak</div>
                </div>
                <div className={styles.streakStat}>
                  <div className={styles.streakStatValue}>📝 {s.githubCommits}</div>
                  <div className={styles.streakStatLabel}>Commits</div>
                </div>
                <div className={styles.streakStat}>
                  <div className={styles.streakStatValue}>💼 {s.linkedinPosts}</div>
                  <div className={styles.streakStatLabel}>Posts</div>
                </div>
              </div>
            </div>
          )}

          {/* ── Today's Task ── */}
          <div className={styles.todaySection}>
            <div className={styles.sectionLabel}>TODAY · DAY {s.currentDay}</div>
            <Link href={`/day/${s.currentDay}`} className={styles.todayCard} id="today-task-card">
              <div className={styles.todayCardTop}>
                <div className={styles.todayCardBadges}>
                  <span className="badge badge-yellow">{today.track}</span>
                  <span className="badge badge-subtle">{today.difficulty}</span>
                </div>
                <div className={styles.todayArrow}>→</div>
              </div>
              <div className={styles.todayTitle}>{today.title}</div>
              <div className={styles.todaySubtitle}>{today.subtitle}</div>
              <div className={styles.todayMeta}>
                <span>⏱ {today.estimatedTime}</span>
                <span className={styles.todayTags}>
                  {today.tags.slice(0,2).map(t => <span key={t} className="tag">{t}</span>)}
                </span>
              </div>
              <div className={`btn btn-primary ${styles.startBtn}`} id="start-today-btn">
                Start building →
              </div>
            </Link>
          </div>

          {/* ── Progress ── */}
          <div className={styles.progressSection}>
            <div className={styles.sectionLabel}>CHALLENGE PROGRESS</div>
            <div className={styles.progressCard} id="progress-card">
              <div className={styles.progressRingWrap}>
                <ProgressRing pct={pct} size={100} stroke={9} />
                <div className={styles.progressCenter}>
                  <div className={styles.progressPct}>{pct}%</div>
                  <div className={styles.progressDays}>{s.currentDay}/{s.totalDays}</div>
                </div>
              </div>
              <div className={styles.progressInfo}>
                <div className={styles.progressTitle}>
                  {s.totalDays - s.currentDay} days to go
                </div>
                <div className={styles.progressSub}>
                  You've completed <strong>{s.currentDay} days</strong> of the challenge
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarFill} style={{ width: `${pct}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* ── Leaderboard Standing ── */}
          <div className={styles.standingSection}>
            <div className={styles.sectionLabel}>YOUR STANDING</div>
            <div className={styles.standingCard} id="standing-card">
              {/* constellation bottom-right */}
              <Constellation
                className={styles.constelStandingBR}
                viewBox="0 0 120 90"
                stars={[[100,75,2.5,true],[65,55,1.8,false],[110,35,2,false],[45,40,1.5,true],[80,20,1.8,false]]}
                lines={[[100,75,65,55],[65,55,110,35],[65,55,45,40],[45,40,80,20]]}
              />
              <div className={styles.standingRank}>
                <div className={styles.rankBadge}>#{s.rank}</div>
                <div className={styles.rankLabel}>out of {s.totalParticipants.toLocaleString()}</div>
              </div>
              <div className={styles.standingBar}>
                <div className={styles.standingBarFill} style={{ width: `${s.percentile}%` }} />
              </div>
              <div className={styles.standingDesc}>
                Top <strong>{(100 - s.percentile).toFixed(1)}%</strong> of all builders 🎉
              </div>
            </div>
          </div>

        </div>{/* end colA */}

        {/* ── Col B (right on desktop) ── */}
        <div className={styles.colB}>

          {/* ── Week Calendar ── */}
          <div className={styles.weekSection}>
            <div className={styles.sectionLabel}>THIS WEEK</div>
            <div className={styles.weekGrid} id="week-grid">
              {s.weekProgress.map((d, i) => (
                <div key={i} className={styles.weekDay}>
                  <div className={styles.weekDayLabel}>{d.day}</div>
                  <div className={`${styles.weekDot} ${
                    d.status === 'completed' ? styles.weekDotDone :
                    d.status === 'missed' ? styles.weekDotMissed :
                    styles.weekDotToday
                  }`}>
                    {d.status === 'completed' ? '✓' : d.status === 'missed' ? '✕' : d.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── 60-Day Activity Grid ── */}
          <div className={styles.gridSection}>
            <div className={styles.sectionLabel}>STREAK ACTIVITY GRID</div>
            <div className={styles.gridCard} id="activity-grid-card">
              <div className={styles.gridLegend}>
                <span className={styles.legendText}>Day 1</span>
                <span className={styles.legendText}>Day 60</span>
              </div>
              <div className={styles.activityGrid}>
                {Array.from({ length: s.totalDays }).map((_, idx) => {
                  const dayNum = idx + 1;
                  const isCompleted = dayNum < s.currentDay;
                  const isToday = dayNum === s.currentDay;
                  let opacity = 0.15;
                  if (isCompleted) {
                    const densities = [0.4, 0.6, 0.8, 1.0];
                    opacity = densities[(idx * 3) % densities.length];
                  }
                  return (
                    <div
                      key={idx}
                      className={`${styles.gridCell} ${
                        isCompleted ? styles.cellCompleted :
                        isToday ? styles.cellToday :
                        styles.cellLocked
                      }`}
                      style={isCompleted ? { opacity } : {}}
                      title={`Day ${dayNum}: ${isCompleted ? 'Completed' : isToday ? 'Active Today' : 'Locked'}`}
                    />
                  );
                })}
              </div>
              <div className={styles.gridFooter}>
                <span>Less</span>
                <div className={styles.footerScale}>
                  <div className={`${styles.gridCell} ${styles.cellLocked}`} />
                  <div className={`${styles.gridCell} ${styles.cellCompleted}`} style={{ opacity: 0.4 }} />
                  <div className={`${styles.gridCell} ${styles.cellCompleted}`} style={{ opacity: 0.7 }} />
                  <div className={`${styles.gridCell} ${styles.cellCompleted}`} style={{ opacity: 1.0 }} />
                </div>
                <span>More</span>
              </div>
            </div>
          </div>

          {/* ── Achievements ── */}
          <div className={styles.achieveSection}>
            <div className={styles.sectionLabel}>ACHIEVEMENTS</div>
            <div className={styles.badgeGrid} id="achievements-grid">
              {s.achievements.map(a => (
                <div
                  key={a.id}
                  className={`${styles.badgeItem} ${!a.earned ? styles.badgeLocked : ''}`}
                  title={a.description}
                >
                  <div className={styles.badgeIcon}>{a.earned ? a.icon : '🔒'}</div>
                  <div className={styles.badgeName}>{a.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>{/* end colB */}

      </div>

      <BottomNav active="home" />
    </div>
  );
}
