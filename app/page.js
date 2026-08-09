'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { tracks, testimonials, builderAvatars } from '@/data/mockData';
import styles from './page.module.css';

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setInterval(() => {
      setTestimonialIdx(i => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  }

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
      <section
        className={styles.hero}
        onMouseMove={handleMouseMove}
        style={{
          '--mouse-x': `${mousePos.x}px`,
          '--mouse-y': `${mousePos.y}px`
        }}
      >
        <div className={styles.heroGlow} />
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
        </div>
        <div className={styles.steps}>
          {[
            { num: '01', title: 'Pick your track', desc: 'Choose Full Stack, AI, DSA, or more. Each track has a 30–60 day roadmap.' },
            { num: '02', title: 'Build every day', desc: 'Get a real task each morning. Ship something tangible — no tutorials, no theory.' },
            { num: '03', title: 'Post your proof', desc: 'Commit to GitHub + post on LinkedIn. Your streak is public and searchable.' },
            { num: '04', title: 'Get noticed', desc: 'Recruiters search #ABTalks. Your consistent posts become your portfolio.' },
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

      {/* ── Testimonial ── */}
      <section className={styles.testimonialSection} id="community">
        <div className={styles.testimonialCard} key={testimonialIdx}>
          <div className={styles.testimonialQuote}>"</div>
          <p className={styles.testimonialText}>{current.text}</p>
          <div className={styles.testimonialAuthor}>
            <div className="avatar avatar-sm" style={{ background: current.color, color: '#0c0d10', fontWeight: 700 }}>
              {current.initials}
            </div>
            <div>
              <div className={styles.testimonialName}>{current.name}</div>
              <div className={styles.testimonialTrack}>{current.track}</div>
            </div>
          </div>
        </div>
        <div className={styles.testimonialDots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot2} ${i === testimonialIdx ? styles.dotActive : ''}`}
              onClick={() => setTestimonialIdx(i)}
              id={`testimonial-dot-${i}`}
            />
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaGlow} />
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
