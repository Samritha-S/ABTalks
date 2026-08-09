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
