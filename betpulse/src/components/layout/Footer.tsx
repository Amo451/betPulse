'use client';
import Link from 'next/link';

const footerLinks = {
  'Betting': [
    { label: 'Sports Betting Tips', href: '/blog' },
    { label: 'Football Betting', href: '/blog?cat=football' },
    { label: 'Basketball Tips', href: '/blog?cat=basketball' },
    { label: 'Tennis Predictions', href: '/blog?cat=tennis' },
  ],
  'Casino': [
    { label: 'Casino Reviews', href: '/casino' },
    { label: 'Slot Reviews', href: '/casino?cat=slots' },
    { label: 'Live Casino', href: '/casino?cat=live' },
    { label: 'Poker Rooms', href: '/casino?cat=poker' },
  ],
  'Bonuses': [
    { label: 'Welcome Bonuses', href: '/promotions' },
    { label: 'Free Spins', href: '/promotions?cat=freespins' },
    { label: 'No Deposit', href: '/promotions?cat=nodeposit' },
    { label: 'VIP Rewards', href: '/promotions?cat=vip' },
  ],
  'Info': [
    { label: 'About Us', href: '/about' },
    { label: 'Responsible Gambling', href: '/responsible-gambling' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      {/* Responsible gambling banner */}
      <div className="rg-banner" style={{ textAlign: 'center', padding: '1rem', fontSize: '0.8125rem', color: '#ef4444' }}>
        ⚠️ <strong>18+ Only.</strong> Gambling can be addictive. Please play responsibly.{' '}
        <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" style={{ color: '#ef4444', fontWeight: 600 }}>
          BeGambleAware.org
        </a>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <div style={{ maxWidth: '360px' }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{
                width: '32px', height: '32px',
                background: 'linear-gradient(135deg, #d97706, #fbbf24)',
                borderRadius: '7px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '1rem', color: '#0a0a0f',
                fontFamily: 'var(--font-display)',
              }}>B</div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#f5f5f0' }}>
                Bet<span style={{ color: '#f59e0b' }}>Pulse</span>
              </span>
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Expert sports betting analysis, honest casino reviews, and exclusive bonuses curated for serious bettors.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              {['Twitter', 'Telegram', 'YouTube'].map(s => (
                <a key={s} href="#" style={{
                  padding: '0.5rem 1rem',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  color: 'var(--text-muted)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {Object.entries(footerLinks).map(([cat, links]) => (
              <div key={cat}>
                <h4 style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '1rem',
                }}>{cat}</h4>
                <ul style={{ listStyle: 'none' }}>
                  {links.map(link => (
                    <li key={link.href} style={{ marginBottom: '0.625rem' }}>
                      <Link href={link.href} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-line" />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
            © {new Date().getFullYear()} BetPulse. All rights reserved. For entertainment purposes.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
            Affiliate disclosure: We may earn commissions from featured operators.
          </p>
        </div>
      </div>

    </footer>
  );
}
