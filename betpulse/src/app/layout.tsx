import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'BetPulse — Sports Betting & Casino Reviews',
    template: '%s | BetPulse',
  },
  description: 'Expert sports betting tips, casino reviews, and exclusive bonuses. Your trusted guide to online gambling.',
  keywords: ['sports betting', 'casino reviews', 'betting tips', 'online casino', 'betting bonuses'],
  openGraph: {
    type: 'website',
    siteName: 'BetPulse',
    images: ['/images/og-default.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@betpulse',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
