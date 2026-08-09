import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100dvh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>Join ABTalks</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Start your 60-day challenge.</p>
      
      <div className="card" style={{ width: '100%', maxWidth: '350px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="text" placeholder="Full Name" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <Link href="/dashboard" className="btn btn-primary btn-full">Create Account</Link>
      </div>
      
      <p style={{ marginTop: '2rem', color: 'var(--text-secondary)' }}>
        Already have an account? <Link href="/login" style={{ color: 'var(--accent-yellow)' }}>Log in</Link>
      </p>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/" style={{ color: 'var(--text-muted)' }}>← Back to home</Link>
      </div>
    </div>
  );
}
