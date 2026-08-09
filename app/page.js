'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { tracks, testimonials, builderAvatars } from '@/data/mockData';
import styles from './page.module.css';

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [openTrack, setOpenTrack] = useState(null);

  useEffect(() => {
    const t = setInterval(() => {
      setTestimonialIdx(i => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[testimonialIdx];

  return (
    <div className={styles.landing}>
      {/* ── Nav ── */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <span className={styles.logo}>ABTalks</span>
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            id="menu-open-btn"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── Fullscreen Menu Overlay ── */}
      {menuOpen && (
        <div className={styles.menuOverlay} id="nav-overlay">
          <button className={styles.menuClose} onClick={() => setMenuOpen(false)} id="menu-close-btn">✕</button>
          <nav className={styles.menuNav}>
            <a href="#tracks" onClick={() => setMenuOpen(false)}>Tracks</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#community" onClick={() => setMenuOpen(false)}>Community</a>
            <Link href="/login" onClick={() => setMenuOpen(false)} className={`btn btn-primary ${styles.menuCta}`}>
              Start your streak →
            </Link>
          </nav>
        </div>
      )}

      {/* ── Hero ── */}
      <section className={styles.hero}>
        {/* Constellations */}
        <svg className={`${styles.constellation} ${styles.constelLeft}`} viewBox="0 0 200 200" fill="none">
          <circle cx="30" cy="50" r="3" fill="#fcd34d" />
          <circle cx="80" cy="30" r="2.5" fill="#ffffff" opacity="0.6" />
          <circle cx="120" cy="80" r="3" fill="#fcd34d" />
          <circle cx="60" cy="120" r="2.5" fill="#ffffff" opacity="0.8" />
          <circle cx="150" cy="140" r="2" fill="#ffffff" opacity="0.4" />
          <line x1="30" y1="50" x2="80" y2="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="80" y1="30" x2="120" y2="80" stroke="rgba(252,211,77,0.15)" strokeWidth="1" />
          <line x1="120" y1="80" x2="60" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="60" y1="120" x2="30" y2="50" stroke="rgba(252,211,77,0.1)" strokeWidth="1" />
          <line x1="120" y1="80" x2="150" y2="140" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        </svg>

        <svg className={`${styles.constellation} ${styles.constelRight}`} viewBox="0 0 200 200" fill="none">
          <circle cx="160" cy="40" r="2.5" fill="#ffffff" opacity="0.7" />
          <circle cx="110" cy="70" r="3" fill="#fcd34d" />
          <circle cx="140" cy="130" r="2.5" fill="#ffffff" opacity="0.5" />
          <circle cx="70" cy="110" r="3" fill="#fcd34d" />
          <line x1="160" y1="40" x2="110" y2="70" stroke="rgba(252,211,77,0.12)" strokeWidth="1" />
          <line x1="110" y1="70" x2="140" y2="130" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="110" y1="70" x2="70" y2="110" stroke="rgba(252,211,77,0.15)" strokeWidth="1" />
          <line x1="70" y1="110" x2="140" y2="130" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        </svg>

        <div className={styles.heroLabel}>
          <span className={styles.dot} />
          BUILD IN PUBLIC. GROW TOGETHER.
        </div>
        <h1 className={styles.heroHeadline}>
          Code consistently.<br />
          Post publicly.<br />
          <span className={styles.heroAccent}>Get noticed.</span>
        </h1>
        <p className={styles.heroSub}>
          Pick a track, ship something daily, and turn your commits into proof recruiters actually see.
        </p>
        <div className={styles.heroCtas}>
          <Link href="/register" className={`btn btn-primary btn-lg ${styles.ctaPrimary}`} id="hero-start-btn">
            Start your streak
          </Link>
          <a href="#tracks" className={`btn btn-secondary btn-lg`} id="hero-browse-btn">
            Browse tracks
          </a>
        </div>


        {/* Social Proof Strip */}
        <div className={styles.socialProof}>
          <div className={styles.avatarStack}>
            {builderAvatars.map((a, i) => (
              <div
                key={i}
                className={`avatar avatar-sm ${styles.proofAvatar}`}
                style={{ background: a.color, zIndex: builderAvatars.length - i }}
              >
                {a.initials}
              </div>
            ))}
          </div>
          <span className={styles.proofText}>Joined by <strong>10,000+</strong> builders</span>
        </div>
      </section>

      {/* ── Tracks ── */}
      <section className={styles.section} id="tracks">
        <div className={styles.sectionHeader}>
          <span className={`badge badge-subtle`}>TRACKS OPEN NOW</span>
          <h2 className={styles.sectionTitle}>Choose your path</h2>
        </div>
        <div className={styles.tracksList}>
          {[
            {
              id: 'fullstack',
              icon: '</>',
              color: '#22c55e',
              name: '60-Day Full Stack Dev',
              tagline: 'Enrolling now',
              description: 'One real task daily, public streak',
              featured: false,
              duration: '60 days',
              difficulty: 'Beginner → Intermediate',
              commitment: '2–3 hrs/day',
              stack: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
              whatYouBuild: [
                'A personal portfolio with live projects',
                'A REST API with authentication',
                'A full-stack CRUD app deployed to production',
                'A real-time chat application using Socket.io',
              ],
              outcome: 'Walk away with 4 deployed projects, a solid GitHub history, and 60 LinkedIn posts that recruiters can verify.',
            },
            {
              id: 'ai',
              icon: '✦',
              color: '#fcd34d',
              name: '31-Day AI Cohort',
              tagline: 'Featured',
              description: 'RAG, agents and MCP, project by project',
              featured: true,
              duration: '31 days',
              difficulty: 'Intermediate',
              commitment: '2–4 hrs/day',
              stack: ['Python', 'LangChain', 'OpenAI API', 'Pinecone', 'FastAPI', 'Streamlit'],
              whatYouBuild: [
                'A RAG chatbot over your own documents',
                'An AI agent with tool use and memory',
                'A production-ready MCP server',
                'A multi-modal AI app with vision + text',
              ],
              outcome: 'Become confident in building real LLM applications. Portfolio proof that stands out in the AI hiring wave.',
            },
            {
              id: 'dsa',
              icon: '{}',
              color: '#a78bfa',
              name: '45-Day DSA Sprint',
              tagline: 'Starting Sept 1',
              description: 'LeetCode-style problems, daily explanations',
              featured: false,
              duration: '45 days',
              difficulty: 'Beginner → Advanced',
              commitment: '1–2 hrs/day',
              stack: ['Python', 'Java', 'C++', 'Arrays', 'Trees', 'Graphs', 'DP'],
              whatYouBuild: [
                'Solve 100+ handpicked patterns (not random)',
                'A documented problem journal with approaches',
                'Timed mock interviews in the final week',
                'A personal cheat-sheet of key patterns',
              ],
              outcome: 'Interview-ready fundamentals. Solve problems with structure, not luck — and explain your thinking out loud.',
            },
          ].map(track => {
            const isOpen = openTrack === track.id;
            return (
              <div
                key={track.id}
                className={`${styles.trackCard} ${isOpen ? styles.trackCardOpen : ''}`}
                id={`track-${track.id}`}
                onClick={() => setOpenTrack(isOpen ? null : track.id)}
                role="button"
                aria-expanded={isOpen}
              >
                {/* ── Header row ── */}
                <div className={styles.trackHeader}>
                  <div className={styles.trackLeft}>
                    <div className={styles.trackIcon} style={{ background: `${track.color}1a`, color: track.color }}>
                      {track.icon}
                    </div>
                    <div>
                      <div className={styles.trackName}>{track.name}</div>
                      <div className={styles.trackDesc}>{track.description}</div>
                      {track.featured
                        ? <span className="badge badge-yellow" style={{ marginTop: '6px' }}>FEATURED</span>
                        : <span className={styles.trackTagline}>{track.tagline}</span>
                      }
                    </div>
                  </div>
                  <div className={`${styles.trackChevron} ${isOpen ? styles.trackChevronOpen : ''}`} style={{ color: track.color }}>
                    ↓
                  </div>
                </div>

                {/* ── Collapsible content ── */}
                {isOpen && (
                  <div className={styles.trackBody} onClick={e => e.stopPropagation()}>
                    <div className={styles.trackMeta}>
                      <div className={styles.metaPill}>⏱ {track.duration}</div>
                      <div className={styles.metaPill}>📶 {track.difficulty}</div>
                      <div className={styles.metaPill}>🕐 {track.commitment}</div>
                    </div>

                    <div className={styles.trackStack}>
                      {track.stack.map(s => <span key={s} className="tag">{s}</span>)}
                    </div>

                    <div className={styles.trackBuilds}>
                      <div className={styles.trackBuildsLabel}>What you'll build</div>
                      {track.whatYouBuild.map((item, i) => (
                        <div key={i} className={styles.trackBuildItem}>
                          <span className={styles.buildDot} style={{ background: track.color }} />
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className={styles.trackOutcome}>
                      <span className={styles.outcomeIcon}>🎯</span>
                      {track.outcome}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const isLoggedIn = localStorage.getItem('abtalks_logged_in');
                        if (isLoggedIn) {
                          window.location.href = '/dashboard';
                        } else {
                          window.location.href = '/login';
                        }
                      }}
                      className={`btn btn-primary ${styles.trackCta}`}
                      style={{ background: track.color, color: '#060913', width: '100%', border: 'none' }}
                      id={`track-enroll-${track.id}`}
                    >
                      Enroll in this track →
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className={styles.section} id="how-it-works">
        <div className={styles.sectionHeader}>
          <span className="badge badge-subtle">HOW IT WORKS</span>
          <h2 className={styles.sectionTitle}>The challenge, explained</h2>
          <p className={styles.sectionSub}>
            ABTalks runs a 60-day coding challenge for Indian college students. Pick a track, build something every day, and prove it — publicly.
          </p>
        </div>

        {/* Proof types */}
        <div className={styles.proofRow}>
          <div className={styles.proofItem}>
            <div className={styles.proofIcon}>⬡</div>
            <div className={styles.proofLabel}>GitHub commit</div>
            <div className={styles.proofDesc}>Push real code every day. No theory, no tutorials.</div>
          </div>
          <div className={styles.proofDivider}>+</div>
          <div className={styles.proofItem}>
            <div className={styles.proofIcon}>in</div>
            <div className={styles.proofLabel}>LinkedIn post</div>
            <div className={styles.proofDesc}>Share what you built. Recruiters are watching.</div>
          </div>
        </div>

        <div className={styles.steps}>
          {[
            { num: '01', title: 'Pick your track', desc: 'Full Stack, AI, or DSA. Each has a structured 30–60 day roadmap built for college students.' },
            { num: '02', title: 'Build every day', desc: 'Get one focused task each morning. Ship something real — a feature, an API, a model. No fluff.' },
            { num: '03', title: 'Post your proof', desc: 'A GitHub commit + a LinkedIn post. Your streak is public and timestamped.' },
            { num: '04', title: 'Get noticed', desc: 'Recruiters search #ABTalks. Your consistent, visible output becomes a portfolio that talks.' },
          ].map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <div>
                <div className={styles.stepTitle}>{step.title}</div>
                <div className={styles.stepDesc}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials — mobile: rotating card, desktop: infinite marquee ── */}
      <section className={styles.testimonialSection} id="community">
        <div className={styles.sectionHeader}>
          <span className="badge badge-subtle">COMMUNITY</span>
          <h2 className={styles.sectionTitle}>What builders say</h2>
        </div>

        {/* Mobile: single rotating card */}
        <div className={styles.testimonialMobile}>
          <div className={styles.testimonialCard} key={testimonialIdx}>
            <div className={styles.testimonialQuote}>"</div>
            <p className={styles.testimonialText}>{current.text}</p>
            <div className={styles.testimonialAuthor}>
              {current.avatar
                ? <img src={current.avatar} alt={current.name} className={styles.testimonialPfp} />
                : <div className="avatar avatar-sm" style={{ background: current.color, color: '#060913', fontWeight: 700 }}>{current.initials}</div>
              }
              <div>
                <div className={styles.testimonialName}>{current.name}</div>
                <div className={styles.testimonialTrack}>{current.track}</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialDots}>
            {testimonials.slice(0, 5).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot2} ${i === testimonialIdx % 5 ? styles.dotActive : ''}`}
                onClick={() => setTestimonialIdx(i)}
                id={`testimonial-dot-${i}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: infinite marquee of all 20 cards */}
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className={styles.marqueeCard}>
                <p className={styles.marqueeText}>"{t.text}"</p>
                <div className={styles.testimonialAuthor}>
                  {t.avatar
                    ? <img src={t.avatar} alt={t.name} className={styles.testimonialPfp} />
                    : <div className="avatar avatar-sm" style={{ background: t.color, color: '#060913', fontWeight: 700 }}>{t.initials}</div>
                  }
                  <div>
                    <div className={styles.testimonialName}>{t.name}</div>
                    <div className={styles.testimonialTrack}>{t.track}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.finalCta}>
        {/* Left constellation cluster */}
        <svg className={`${styles.constellation} ${styles.constelCtaLeft}`} viewBox="0 0 220 340" fill="none">
          <circle cx="30" cy="40" r="2.5" fill="#fcd34d" />
          <circle cx="90" cy="20" r="1.8" fill="#ffffff" opacity="0.5" />
          <circle cx="150" cy="60" r="2" fill="#ffffff" opacity="0.6" />
          <circle cx="60" cy="110" r="3" fill="#fcd34d" />
          <circle cx="130" cy="140" r="1.8" fill="#ffffff" opacity="0.4" />
          <circle cx="20" cy="180" r="2" fill="#ffffff" opacity="0.7" />
          <circle cx="100" cy="210" r="2.5" fill="#fcd34d" />
          <circle cx="170" cy="190" r="1.5" fill="#ffffff" opacity="0.35" />
          <circle cx="50" cy="270" r="2" fill="#ffffff" opacity="0.5" />
          <circle cx="140" cy="300" r="1.8" fill="#fcd34d" opacity="0.6" />
          <circle cx="190" cy="260" r="1.5" fill="#ffffff" opacity="0.3" />
          <line x1="30" y1="40" x2="90" y2="20" stroke="rgba(252,211,77,0.12)" strokeWidth="0.8" />
          <line x1="90" y1="20" x2="150" y2="60" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
          <line x1="30" y1="40" x2="60" y2="110" stroke="rgba(252,211,77,0.1)" strokeWidth="0.8" />
          <line x1="60" y1="110" x2="130" y2="140" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
          <line x1="20" y1="180" x2="60" y2="110" stroke="rgba(252,211,77,0.12)" strokeWidth="0.8" />
          <line x1="20" y1="180" x2="100" y2="210" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
          <line x1="100" y1="210" x2="170" y2="190" stroke="rgba(252,211,77,0.09)" strokeWidth="0.8" />
          <line x1="50" y1="270" x2="100" y2="210" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
          <line x1="50" y1="270" x2="140" y2="300" stroke="rgba(252,211,77,0.1)" strokeWidth="0.8" />
          <line x1="140" y1="300" x2="190" y2="260" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
        </svg>

        {/* Right constellation cluster */}
        <svg className={`${styles.constellation} ${styles.constelCtaRight}`} viewBox="0 0 220 340" fill="none">
          <circle cx="190" cy="30" r="2.5" fill="#fcd34d" />
          <circle cx="120" cy="50" r="1.8" fill="#ffffff" opacity="0.5" />
          <circle cx="60" cy="20" r="2" fill="#ffffff" opacity="0.4" />
          <circle cx="170" cy="100" r="3" fill="#fcd34d" />
          <circle cx="90" cy="130" r="1.8" fill="#ffffff" opacity="0.5" />
          <circle cx="200" cy="170" r="2" fill="#ffffff" opacity="0.6" />
          <circle cx="130" cy="200" r="2.5" fill="#fcd34d" />
          <circle cx="50" cy="180" r="1.5" fill="#ffffff" opacity="0.35" />
          <circle cx="170" cy="260" r="2" fill="#ffffff" opacity="0.5" />
          <circle cx="80" cy="300" r="1.8" fill="#fcd34d" opacity="0.6" />
          <circle cx="30" cy="260" r="1.5" fill="#ffffff" opacity="0.3" />
          <line x1="190" y1="30" x2="120" y2="50" stroke="rgba(252,211,77,0.12)" strokeWidth="0.8" />
          <line x1="120" y1="50" x2="60" y2="20" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
          <line x1="190" y1="30" x2="170" y2="100" stroke="rgba(252,211,77,0.1)" strokeWidth="0.8" />
          <line x1="170" y1="100" x2="90" y2="130" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
          <line x1="200" y1="170" x2="170" y2="100" stroke="rgba(252,211,77,0.12)" strokeWidth="0.8" />
          <line x1="200" y1="170" x2="130" y2="200" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
          <line x1="130" y1="200" x2="50" y2="180" stroke="rgba(252,211,77,0.09)" strokeWidth="0.8" />
          <line x1="170" y1="260" x2="130" y2="200" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
          <line x1="170" y1="260" x2="80" y2="300" stroke="rgba(252,211,77,0.1)" strokeWidth="0.8" />
          <line x1="80" y1="300" x2="30" y2="260" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
        </svg>

        <h2 className={styles.finalCtaTitle}>Your next 60 days<br />start today.</h2>
        <p className={styles.finalCtaSub}>Free to join. No experience required. Just show up.</p>
        <Link href="/register" className={`btn btn-primary btn-lg btn-full ${styles.finalCtaBtn}`} id="final-cta-btn">
          Start your streak →
        </Link>
        <p className={styles.finalCtaNote}>10,247 builders are already shipping daily</p>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <span className={styles.footerLogo}>ABTalks</span>
        <span className={styles.footerTag}>Built for Indian college students.</span>
        <div className={styles.footerLinks}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}
