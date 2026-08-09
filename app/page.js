'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { tracks, testimonials, builderAvatars } from '@/data/mockData';
import styles from './page.module.css';

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

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
        </div>
        <div className={styles.tracksList}>
          {tracks.map(track => (
            <Link href="/dashboard" key={track.id} className={styles.trackCard} id={`track-${track.id}`}>
              <div className={styles.trackLeft}>
                <div className={styles.trackIcon} style={{ background: `${track.color}1a`, color: track.color }}>
                  {track.icon}
                </div>
                <div>
                  <div className={styles.trackName}>{track.name}</div>
                  <div className={styles.trackDesc}>{track.description}</div>
                  {track.featured && <span className="badge badge-yellow" style={{marginTop: '6px'}}>Featured</span>}
                  {!track.featured && <span className={styles.trackTagline}>{track.tagline}</span>}
                </div>
              </div>
              <div className={styles.trackArrow} style={{ color: track.color }}>↗</div>
            </Link>
          ))}
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
