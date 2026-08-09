import Link from 'next/link';

export default function LoginPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100dvh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>Welcome Back</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Sign in to continue your streak.</p>
      
      <div className="card" style={{ width: '100%', maxWidth: '350px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <Link href="/dashboard" className="btn btn-primary btn-full">Sign In</Link>
      </div>
      
      <p style={{ marginTop: '2rem', color: 'var(--text-secondary)' }}>
        Don't have an account? <Link href="/register" style={{ color: 'var(--accent-yellow)' }}>Register</Link>
      </p>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/" style={{ color: 'var(--text-muted)' }}>← Back to home</Link>
      </div>
    </div>
  );
}
