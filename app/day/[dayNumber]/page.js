'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { challengeDays, communitySubmissions, student } from '@/data/mockData';
import BottomNav from '@/components/BottomNav';
import styles from './page.module.css';

function isValidUrl(str) {
  try { new URL(str); return true; } catch { return false; }
}

export default function DayPage({ params }) {
  const { dayNumber } = use(params);
  const dayNum = parseInt(dayNumber, 10);
  const day = challengeDays[dayNum] || challengeDays[12];

  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previewLinkedin, setPreviewLinkedin] = useState(false);
  const [liked, setLiked] = useState({});

  const githubValid = isValidUrl(githubUrl) && githubUrl.includes('github.com');
  const linkedinValid = isValidUrl(linkedinUrl) && linkedinUrl.includes('linkedin.com');
  const canSubmit = githubValid && linkedinValid;

  function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  }

  function handleLinkedinChange(e) {
    setLinkedinUrl(e.target.value);
    setPreviewLinkedin(isValidUrl(e.target.value) && e.target.value.includes('linkedin.com'));
  }

  return (
    <div className={`page-with-bottom-nav ${styles.dayPage}`}>
      {/* ── Page Background Constellation Top-Right ── */}
      <svg className={styles.constelPageTR} viewBox="0 0 180 180" fill="none" aria-hidden="true">
        <circle cx="150" cy="30" r="3" fill="#fcd34d" />
        <circle cx="95" cy="20" r="2" fill="#ffffff" opacity="0.6" />
        <circle cx="160" cy="90" r="2.5" fill="#fcd34d" opacity="0.7" />
        <circle cx="80" cy="85" r="1.8" fill="#ffffff" opacity="0.4" />
        <circle cx="120" cy="140" r="2.2" fill="#fcd34d" opacity="0.8" />
        <line x1="150" y1="30" x2="95" y2="20" stroke="rgba(252,211,77,0.15)" strokeWidth="1" />
        <line x1="150" y1="30" x2="160" y2="90" stroke="rgba(252,211,77,0.12)" strokeWidth="1" />
        <line x1="95" y1="20" x2="80" y2="85" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="160" y1="90" x2="120" y2="140" stroke="rgba(252,211,77,0.15)" strokeWidth="1" />
        <line x1="80" y1="85" x2="120" y2="140" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      </svg>

      {/* ── Header ── */}
      <header className={styles.header}>
        <svg className={styles.constelHeaderTR} viewBox="0 0 120 50" fill="none" aria-hidden="true">
          <circle cx="95" cy="15" r="2.5" fill="#fcd34d" />
          <circle cx="60" cy="25" r="1.8" fill="#ffffff" opacity="0.5" />
          <circle cx="110" cy="38" r="2" fill="#fcd34d" opacity="0.7" />
          <line x1="95" y1="15" x2="60" y2="25" stroke="rgba(252,211,77,0.15)" strokeWidth="1" />
          <line x1="95" y1="15" x2="110" y2="38" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        </svg>

        <Link href="/dashboard" className={styles.backBtn} id="back-to-dashboard">
          ← Back
        </Link>
        <div className={styles.dayBadge}>Day {day.dayNumber} / {student.totalDays}</div>
        <div className={styles.headerDiff}>
          <span className={`badge ${day.difficulty === 'Beginner' ? 'badge-green' : day.difficulty === 'Intermediate' ? 'badge-yellow' : 'badge-purple'}`}>
            {day.difficulty}
          </span>
        </div>
      </header>

      <div className={styles.content}>

        {/* ── Task Card ── */}
        <section className={styles.taskSection}>
          {/* Constellation top-right of header/hero area */}
          <svg className={styles.constelHeroTR} viewBox="0 0 160 140" fill="none" aria-hidden="true">
            <circle cx="130" cy="20" r="3" fill="#fcd34d" />
            <circle cx="85" cy="35" r="2" fill="#ffffff" opacity="0.6" />
            <circle cx="140" cy="75" r="2.5" fill="#fcd34d" opacity="0.8" />
            <circle cx="60" cy="70" r="1.8" fill="#ffffff" opacity="0.4" />
            <circle cx="105" cy="110" r="2.5" fill="#fcd34d" />
            <circle cx="30" cy="120" r="1.5" fill="#ffffff" opacity="0.3" />
            <line x1="130" y1="20" x2="85" y2="35" stroke="rgba(252,211,77,0.18)" strokeWidth="1" />
            <line x1="85" y1="35" x2="140" y2="75" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <line x1="85" y1="35" x2="60" y2="70" stroke="rgba(252,211,77,0.15)" strokeWidth="1" />
            <line x1="60" y1="70" x2="105" y2="110" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="140" y1="75" x2="105" y2="110" stroke="rgba(252,211,77,0.18)" strokeWidth="1" />
            <line x1="60" y1="70" x2="30" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          </svg>

          <div className={styles.sectionInner}>
            <div className={styles.taskMeta}>
              <span className="badge badge-subtle">{day.track}</span>
              <span className={styles.timeEst}>⏱ {day.estimatedTime}</span>
            </div>
            <h1 className={styles.taskTitle}>{day.title}</h1>
            <p className={styles.taskDesc}>{day.description}</p>

            <div className={styles.tagRow}>
              {day.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </section>

        {/* ── What to Build ── */}
        <section className={styles.card}>
          <div className={styles.cardLabel}>🔨 WHAT TO BUILD</div>
          <ul className={styles.buildList}>
            {day.whatToBuild.map((item, i) => (
              <li key={i} className={styles.buildItem}>
                <span className={styles.buildCheckbox}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="var(--accent-green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Resources ── */}
        {day.resources.length > 0 && (
          <section className={styles.card}>
            <div className={styles.cardLabel}>📚 RESOURCES</div>
            <div className={styles.resourceList}>
              {day.resources.map((r, i) => (
                <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className={styles.resourceItem} id={`resource-${i}`}>
                  <span className={styles.resourceIcon}>{r.type === 'docs' ? '📄' : '📖'}</span>
                  <span className={styles.resourceLabel}>{r.label}</span>
                  <span className={styles.resourceArrow}>↗</span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* ── Hint ── */}
        <div className={styles.hintCard}>
          <svg className={styles.constelHintTR} viewBox="0 0 120 90" fill="none" aria-hidden="true">
            <circle cx="95" cy="20" r="2.5" fill="#fcd34d" />
            <circle cx="55" cy="35" r="1.8" fill="#ffffff" opacity="0.5" />
            <circle cx="105" cy="65" r="2" fill="#fcd34d" opacity="0.7" />
            <circle cx="30" cy="70" r="1.5" fill="#ffffff" opacity="0.35" />
            <line x1="95" y1="20" x2="55" y2="35" stroke="rgba(252,211,77,0.15)" strokeWidth="1" />
            <line x1="95" y1="20" x2="105" y2="65" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="55" y1="35" x2="30" y2="70" stroke="rgba(252,211,77,0.1)" strokeWidth="1" />
          </svg>
          <div className={styles.hintIcon} style={{ position: 'relative', zIndex: 1 }}>💡</div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className={styles.hintLabel}>Pro tip</div>
            <div className={styles.hintText}>{day.hint}</div>
          </div>
        </div>

        {/* ── Submission ── */}
        {!submitted ? (
          <section className={styles.submissionSection} id="submission-section">
            {/* Constellation bottom-left near submit section */}
            <svg className={styles.constelSubmitBL} viewBox="0 0 160 160" fill="none" aria-hidden="true">
              <circle cx="25" cy="135" r="3" fill="#fcd34d" />
              <circle cx="70" cy="145" r="2" fill="#ffffff" opacity="0.5" />
              <circle cx="15" cy="80" r="2.5" fill="#fcd34d" opacity="0.8" />
              <circle cx="80" cy="95" r="1.8" fill="#ffffff" opacity="0.4" />
              <circle cx="120" cy="130" r="2" fill="#fcd34d" opacity="0.6" />
              <circle cx="50" cy="35" r="2" fill="#ffffff" opacity="0.5" />
              <line x1="25" y1="135" x2="70" y2="145" stroke="rgba(252,211,77,0.18)" strokeWidth="1" />
              <line x1="25" y1="135" x2="15" y2="80" stroke="rgba(252,211,77,0.15)" strokeWidth="1" />
              <line x1="15" y1="80" x2="80" y2="95" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <line x1="70" y1="145" x2="120" y2="130" stroke="rgba(252,211,77,0.12)" strokeWidth="1" />
              <line x1="80" y1="95" x2="120" y2="130" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="15" y1="80" x2="50" y2="35" stroke="rgba(252,211,77,0.12)" strokeWidth="1" />
            </svg>

            <div className={styles.sectionInner}>
              <div className={styles.submissionHeader}>
                <div className={styles.submissionTitle}>Submit your proof</div>
                <div className={styles.submissionSub}>Both links are required to count your streak</div>
              </div>

              <form onSubmit={handleSubmit} className={styles.submissionForm} id="submission-form">
                {/* GitHub */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel} htmlFor="github-input">
                    <span className={styles.fieldIcon}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </span>
                    GitHub commit / repo URL
                  </label>
                  <input
                    id="github-input"
                    type="url"
                    className={`input-field ${githubUrl && (githubValid ? 'valid' : 'error')}`}
                    placeholder="https://github.com/yourusername/your-repo"
                    value={githubUrl}
                    onChange={e => setGithubUrl(e.target.value)}
                  />
                  {githubUrl && !githubValid && (
                    <div className={styles.fieldError}>Must be a valid github.com URL</div>
                  )}
                  {githubValid && (
                    <div className={styles.fieldSuccess}>✓ GitHub link looks good!</div>
                  )}
                </div>

                {/* LinkedIn */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel} htmlFor="linkedin-input">
                    <span className={styles.fieldIcon} style={{color: '#0077b5'}}>in</span>
                    LinkedIn post URL
                  </label>
                  <input
                    id="linkedin-input"
                    type="url"
                    className={`input-field ${linkedinUrl && (linkedinValid ? 'valid' : 'error')}`}
                    placeholder="https://linkedin.com/posts/yourpost"
                    value={linkedinUrl}
                    onChange={handleLinkedinChange}
                  />
                  {linkedinUrl && !linkedinValid && (
                    <div className={styles.fieldError}>Must be a valid linkedin.com URL</div>
                  )}
                  {linkedinValid && (
                    <div className={styles.fieldSuccess}>✓ LinkedIn post linked!</div>
                  )}

                  {/* ── Proof Preview (thoughtful feature) ── */}
                  {previewLinkedin && (
                    <div className={styles.proofPreview} id="proof-preview">
                      <div className={styles.previewLabel}>Preview · How your submission looks</div>
                      <div className={styles.previewCard}>
                        <div className={styles.previewAvatar} style={{ background: '#22c55e' }}>AM</div>
                        <div className={styles.previewContent}>
                          <div className={styles.previewName}>Arjun Mehta · Day {day.dayNumber}</div>
                          <div className={styles.previewTitle}>{day.title}</div>
                          <div className={styles.previewLinks}>
                            <span className={styles.previewLink}>🔗 GitHub</span>
                            <span className={styles.previewLink}>💼 LinkedIn</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  id="submit-proof-btn"
                  className={`btn btn-primary btn-full btn-lg ${styles.submitBtn} ${loading ? styles.submitLoading : ''}`}
                  disabled={!canSubmit || loading}
                >
                  {loading ? (
                    <span className={styles.loadingSpinner} />
                  ) : (
                    '🚀 Submit proof of work'
                  )}
                </button>

                <p className={styles.submissionNote}>
                  Your streak counts the moment you submit. Both links are logged publicly.
                </p>
              </form>
            </div>
          </section>
        ) : (
          /* ── Submitted State ── */
          <section className={styles.submittedSection} id="submitted-state">
            <svg className={styles.constelSubmitBL} viewBox="0 0 160 160" fill="none" aria-hidden="true">
              <circle cx="25" cy="135" r="3" fill="#fcd34d" />
              <circle cx="70" cy="145" r="2" fill="#ffffff" opacity="0.5" />
              <circle cx="15" cy="80" r="2.5" fill="#fcd34d" opacity="0.8" />
              <circle cx="80" cy="95" r="1.8" fill="#ffffff" opacity="0.4" />
              <circle cx="120" cy="130" r="2" fill="#fcd34d" opacity="0.6" />
              <line x1="25" y1="135" x2="70" y2="145" stroke="rgba(252,211,77,0.18)" strokeWidth="1" />
              <line x1="25" y1="135" x2="15" y2="80" stroke="rgba(252,211,77,0.15)" strokeWidth="1" />
              <line x1="15" y1="80" x2="80" y2="95" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <line x1="70" y1="145" x2="120" y2="130" stroke="rgba(252,211,77,0.12)" strokeWidth="1" />
            </svg>
            <div className={styles.sectionInner}>
              <div className={styles.submittedIcon}>✅</div>
              <h2 className={styles.submittedTitle}>Day {day.dayNumber} done!</h2>
              <p className={styles.submittedSub}>Your streak is intact. Keep it going tomorrow.</p>
              <div className={styles.submittedLinks}>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-ghost btn-sm`}>
                  🔗 View GitHub commit
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-ghost btn-sm`}>
                  💼 View LinkedIn post
                </a>
              </div>
              <Link href="/dashboard" className={`btn btn-primary btn-full ${styles.backToDash}`}>
                Back to dashboard →
              </Link>
            </div>
          </section>
        )}

        {/* ── Day Navigation ── */}
        <div className={styles.dayNav}>
          {dayNum > 1 && (
            <Link href={`/day/${dayNum - 1}`} className={styles.dayNavBtn} id="prev-day-btn">
              ← Day {dayNum - 1}
            </Link>
          )}
          <span className={styles.dayNavCenter}>Day {dayNum}</span>
          {dayNum < student.totalDays && (
            <Link href={`/day/${dayNum + 1}`} className={styles.dayNavBtn} id="next-day-btn">
              Day {dayNum + 1} →
            </Link>
          )}
        </div>

        {/* ── Community ── */}
        <section className={styles.communitySection}>
          <svg className={styles.constelCommunityBR} viewBox="0 0 150 150" fill="none" aria-hidden="true">
            <circle cx="125" cy="120" r="3" fill="#fcd34d" />
            <circle cx="80" cy="135" r="2" fill="#ffffff" opacity="0.5" />
            <circle cx="135" cy="65" r="2.5" fill="#fcd34d" opacity="0.8" />
            <circle cx="70" cy="80" r="1.8" fill="#ffffff" opacity="0.4" />
            <circle cx="25" cy="95" r="2" fill="#fcd34d" opacity="0.6" />
            <line x1="125" y1="120" x2="80" y2="135" stroke="rgba(252,211,77,0.15)" strokeWidth="1" />
            <line x1="125" y1="120" x2="135" y2="65" stroke="rgba(252,211,77,0.12)" strokeWidth="1" />
            <line x1="135" y1="65" x2="70" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="70" y1="80" x2="25" y2="95" stroke="rgba(252,211,77,0.1)" strokeWidth="1" />
          </svg>
          <div className={styles.sectionInner}>
            <div className={styles.communityHeader}>
              <div className={styles.sectionLabel}>WHAT OTHERS BUILT TODAY</div>
              <span className={styles.communityCount}>{communitySubmissions.length} submissions</span>
            </div>
            <div className={styles.communityList}>
              {communitySubmissions.map(sub => (
                <div key={sub.id} className={styles.communityCard} id={`community-${sub.id}`}>
                  <div className={styles.communityTop}>
                    <div className="avatar" style={{ background: sub.color, color: '#0c0d10' }}>
                      {sub.initials}
                    </div>
                    <div className={styles.communityInfo}>
                      <div className={styles.communityName}>{sub.name}</div>
                      <div className={styles.communityTime}>{sub.timestamp}</div>
                    </div>
                  </div>
                  <p className={styles.communityDesc}>{sub.description}</p>
                  <div className={styles.communityLinks}>
                    <a href={sub.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.communityLink}>
                      🔗 GitHub
                    </a>
                    <a href={sub.linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.communityLink}>
                      💼 Post
                    </a>
                    <button
                      className={`${styles.likeBtn} ${liked[sub.id] ? styles.likeBtnActive : ''}`}
                      onClick={() => setLiked(l => ({ ...l, [sub.id]: !l[sub.id] }))}
                      id={`like-${sub.id}`}
                    >
                      {liked[sub.id] ? '❤️' : '🤍'} {sub.likes + (liked[sub.id] ? 1 : 0)}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <BottomNav active="none" />
    </div>
  );
}
