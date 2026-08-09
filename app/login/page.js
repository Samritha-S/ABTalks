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

// Mock Google accounts for the picker
const GOOGLE_ACCOUNTS = [
  { name: 'Samritha S', email: 'samritha.s1106@gmail.com', initials: 'S', color: '#1a73e8' },
  { name: 'Use another account', email: '', initials: '+', color: '#5f6368' },
];

export default function LoginPage() {
  const router = useRouter();
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState('');
  const [loading,  setLoading]  = useState(false);
  const [googleOpen, setGoogleOpen] = useState(false);

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

        {/* Third scattered mid-left constellation */}
        <svg className={styles.constellation} style={{ top: '40%', left: '10px', width: 150, height: 150, opacity: 0.5 }} viewBox="0 0 150 150" fill="none" aria-hidden="true">
          <circle cx="20" cy="30" r="2" fill="#fcd34d" />
          <circle cx="80" cy="20" r="1.5" fill="#ffffff" opacity="0.5" />
          <circle cx="130" cy="60" r="2" fill="#fcd34d" />
          <circle cx="60" cy="80" r="1.8" fill="#ffffff" opacity="0.6" />
          <circle cx="110" cy="120" r="2" fill="#fcd34d" />
          <line x1="20" y1="30" x2="80" y2="20" stroke="rgba(252,211,77,0.12)" strokeWidth="0.8" />
          <line x1="80" y1="20" x2="130" y2="60" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
          <line x1="80" y1="20" x2="60" y2="80" stroke="rgba(252,211,77,0.1)" strokeWidth="0.8" />
          <line x1="60" y1="80" x2="110" y2="120" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
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

          {/* Google Account Picker Modal */}
          {googleOpen && (
            <div className={styles.googleOverlay} onClick={() => setGoogleOpen(false)}>
              <div className={styles.googlePicker} onClick={e => e.stopPropagation()}>
                {/* Google logo */}
                <div className={styles.pickerHeader}>
                  <svg viewBox="0 0 75 24" width="75" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.9 10.4h-9.1v2.8h6.3c-.3 3.3-3 4.7-6.3 4.7-3.8 0-7-3-7-6.9s3.2-7 7-7c3 0 4.8 1.9 4.8 1.9l2-2s-2.5-2.7-6.9-2.7C23.2 1.2 18.5 6 18.5 12s4.6 10.8 10.5 10.8c5.4 0 9.3-3.7 9.3-9.2 0-.8-.4-3.2-.4-3.2z" fill="#4285F4"/>
                    <path d="M50 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 9.7c-2 0-3.7-1.6-3.7-3.7S48 8.3 50 8.3s3.7 1.6 3.7 3.7-1.7 3.7-3.7 3.7z" fill="#EA4335"/>
                    <path d="M63.5 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 9.7c-2 0-3.7-1.6-3.7-3.7s1.7-3.7 3.7-3.7 3.7 1.6 3.7 3.7-1.7 3.7-3.7 3.7z" fill="#FBBC05"/>
                    <path d="M74.5 6.4H72v-3h-2.3v3H67v2.2h2.7v6.8c0 3 1.6 4 4.4 4 1 0 2.1-.3 2.1-.3V17s-.8.2-1.5.2c-1.4 0-2.2-.6-2.2-2v-6.6h3.9V6.4z" fill="#34A853"/>
                  </svg>
                  <span className={styles.pickerTitle}>Sign in</span>
                  <span className={styles.pickerSub}>to continue to ABTalks</span>
                </div>
                <div className={styles.pickerAccounts}>
                  {GOOGLE_ACCOUNTS.map((acc, i) => (
                    <button
                      key={i}
                      className={styles.pickerAccount}
                      onClick={() => {
                        if (!acc.email) return; // "Use another account" — no action
                        setLoading(true);
                        setGoogleOpen(false);
                        setTimeout(() => {
                          localStorage.setItem('abtalks_logged_in', 'true');
                          router.push('/dashboard');
                        }, 600);
                      }}
                    >
                      <div
                        className={styles.pickerAvatar}
                        style={{ background: acc.color }}
                      >
                        {acc.initials}
                      </div>
                      <div className={styles.pickerAccountInfo}>
                        <div className={styles.pickerName}>{acc.name}</div>
                        {acc.email && <div className={styles.pickerEmail}>{acc.email}</div>}
                      </div>
                    </button>
                  ))}
                </div>
                <div className={styles.pickerFooter}>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                  <span>·</span>
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
                </div>
              </div>
            </div>
          )}

          <div className={styles.socialAuthBox}>
            <button
              onClick={() => setGoogleOpen(true)}
              type="button"
              className={styles.googleBtn}
              disabled={loading}
              id="google-login-btn"
              id="google-login-btn"
            >
              <svg className={styles.googleIcon} viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Continue with Google</span>
            </button>
            <div className={styles.divider}>
              <span className={styles.dividerLine} />
              <span className={styles.dividerText}>or</span>
              <span className={styles.dividerLine} />
            </div>
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
