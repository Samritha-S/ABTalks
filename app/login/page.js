'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

// ── Mock users ──────────────────────────────────────────────
const MOCK_USERS = [
  { email: 'arjun@abtalks.dev',   password: 'build60',    name: 'Arjun Mehta'   },
  { email: 'demo@abtalks.dev',    password: 'demo123',    name: 'Demo User'     },
  { email: 'samritha@abtalks.dev',password: 'abtalks',    name: 'Samritha S'    },
];

export default function LoginPage() {
  const router = useRouter();
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState('');
  const [loading,  setLoading]  = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    setLoading(true);

    setTimeout(() => {
      const user = MOCK_USERS.find(u => u.email === email.toLowerCase() && u.password === password);
      if (user) {
        localStorage.setItem('abtalks_logged_in', 'true');
        router.push('/dashboard');
      } else {
        setError('Incorrect email or password. Try a mock account below.');
        setLoading(false);
      }
    }, 700);
  }

  function fillDemo() {
    setEmail('demo@abtalks.dev');
    setPassword('demo123');
    setError('');
  }

  return (
    <div className={styles.page}>
      {/* Left panel — branding */}
      <div className={styles.leftPanel}>
        {/* Constellation SVGs */}
        <svg className={styles.constellation} style={{ top: '20px', right: '20px', width: 220, height: 220, opacity: 0.7 }} viewBox="0 0 220 220" fill="none" aria-hidden="true">
          <circle cx="160" cy="30" r="3" fill="#fcd34d" />
          <circle cx="100" cy="50" r="2" fill="#ffffff" opacity="0.6" />
          <circle cx="180" cy="90" r="2.5" fill="#fcd34d" opacity="0.8" />
          <circle cx="70" cy="100" r="1.8" fill="#ffffff" opacity="0.5" />
          <circle cx="130" cy="140" r="2.2" fill="#fcd34d" />
          <circle cx="180" cy="170" r="1.5" fill="#ffffff" opacity="0.4" />
          <circle cx="90" cy="180" r="2" fill="#ffffff" opacity="0.6" />
          <line x1="160" y1="30" x2="100" y2="50" stroke="rgba(252,211,77,0.15)" strokeWidth="0.8" />
          <line x1="100" y1="50" x2="180" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
          <line x1="100" y1="50" x2="70" y2="100" stroke="rgba(252,211,77,0.12)" strokeWidth="0.8" />
          <line x1="180" y1="90" x2="130" y2="140" stroke="rgba(252,211,77,0.15)" strokeWidth="0.8" />
          <line x1="130" y1="140" x2="180" y2="170" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
          <line x1="130" y1="140" x2="90" y2="180" stroke="rgba(252,211,77,0.1)" strokeWidth="0.8" />
        </svg>

        <svg className={styles.constellation} style={{ bottom: '20px', left: '20px', width: 190, height: 190, opacity: 0.6 }} viewBox="0 0 190 190" fill="none" aria-hidden="true">
          <circle cx="30" cy="160" r="3" fill="#fcd34d" />
          <circle cx="70" cy="110" r="2.2" fill="#ffffff" opacity="0.7" />
          <circle cx="20" cy="60" r="2" fill="#fcd34d" opacity="0.75" />
          <circle cx="110" cy="140" r="2.5" fill="#fcd34d" />
          <circle cx="130" cy="80" r="1.8" fill="#ffffff" opacity="0.5" />
          <circle cx="160" cy="130" r="1.5" fill="#fcd34d" opacity="0.6" />
          <line x1="30" y1="160" x2="70" y2="110" stroke="rgba(252,211,77,0.15)" strokeWidth="0.8" />
          <line x1="70" y1="110" x2="20" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
          <line x1="70" y1="110" x2="110" y2="140" stroke="rgba(252,211,77,0.15)" strokeWidth="0.8" />
          <line x1="110" y1="140" x2="130" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
          <line x1="110" y1="140" x2="160" y2="130" stroke="rgba(252,211,77,0.12)" strokeWidth="0.8" />
        </svg>

        <Image src="/abtalks-logo.png" alt="AB Talks" width={140} height={46} className={styles.brandLogo} priority />
        <div className={styles.brandQuote}>
          <p className={styles.quoteText}>"60 days. One commit a day. That's all it takes."</p>
          <div className={styles.quoteStats}>
            <div className={styles.stat}><span className={styles.statNum}>10K+</span><span className={styles.statLabel}>builders</span></div>
            <div className={styles.stat}><span className={styles.statNum}>600K+</span><span className={styles.statLabel}>commits</span></div>
            <div className={styles.stat}><span className={styles.statNum}>4 tracks</span><span className={styles.statLabel}>to choose from</span></div>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className={styles.rightPanel}>
        <svg className={styles.constellation} style={{ top: '10px', right: '10px', width: 180, height: 180, opacity: 0.45 }} viewBox="0 0 180 180" fill="none" aria-hidden="true">
          <circle cx="140" cy="20" r="2.5" fill="#fcd34d" />
          <circle cx="90" cy="50" r="1.8" fill="#ffffff" opacity="0.5" />
          <circle cx="150" cy="90" r="2.2" fill="#fcd34d" opacity="0.8" />
          <circle cx="60" cy="110" r="1.5" fill="#ffffff" opacity="0.4" />
          <circle cx="120" cy="140" r="2" fill="#fcd34d" />
          <line x1="140" y1="20" x2="90" y2="50" stroke="rgba(252,211,77,0.12)" strokeWidth="0.8" />
          <line x1="90" y1="50" x2="150" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
          <line x1="150" y1="90" x2="120" y2="140" stroke="rgba(252,211,77,0.14)" strokeWidth="0.8" />
          <line x1="90" y1="50" x2="60" y2="110" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
        </svg>
        <div className={styles.formBox}>
          <div className={styles.formHeader}>
            <h1 className={styles.formTitle}>Welcome back</h1>
            <p className={styles.formSub}>Sign in to continue your streak.</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel} htmlFor="login-email">Email</label>
              <input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                className={`input-field ${error ? 'error' : ''}`}
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel} htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                placeholder="••••••••"
                className={`input-field ${error ? 'error' : ''}`}
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            {error && <p className={styles.errorMsg}>{error}</p>}

            <button
              type="submit"
              className={`btn btn-primary btn-full ${loading ? styles.loading : ''}`}
              disabled={loading}
              id="login-submit-btn"
            >
              {loading ? <span className={styles.spinner} /> : 'Sign In →'}
            </button>
          </form>

          {/* Mock credentials hint */}
          <div className={styles.mockHint}>
            <p className={styles.mockHintLabel}>🔑 Try a mock account</p>
            <div className={styles.mockAccounts}>
              {MOCK_USERS.map(u => (
                <button
                  key={u.email}
                  className={styles.mockChip}
                  onClick={() => { setEmail(u.email); setPassword(u.password); setError(''); }}
                  type="button"
                >
                  {u.name}
                </button>
              ))}
            </div>
          </div>

          <p className={styles.switchLink}>
            Don't have an account?{' '}
            <Link href="/register" className={styles.link}>Register</Link>
          </p>
          <div className={styles.backLink}>
            <Link href="/">← Back to home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
