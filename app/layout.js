import './globals.css';
import ClientSecurityProvider from '@/components/ClientSecurityProvider';

export const metadata = {
  title: 'ABTalks — Build in Public. Grow Together.',
  description: 'Pick a track, ship something every day, and build a public streak that recruiters actually see. Join 10,000+ Indian college students on the 60-day coding challenge.',
  keywords: 'coding challenge, Indian students, build in public, streak, GitHub, LinkedIn, ABTalks',
  openGraph: {
    title: 'ABTalks — 60-Day Coding Challenge',
    description: 'Build in public. Get noticed by recruiters.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0c0d10',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <ClientSecurityProvider>
            {children}
          </ClientSecurityProvider>
        </div>
      </body>
    </html>
  );
}

