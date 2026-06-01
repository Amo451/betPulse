'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/blog', label: 'Betting Tips' },
  { href: '/casino', label: 'Casino Reviews' },
  { href: '/promotions', label: 'Bonuses' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(10, 10, 15, 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <div style={{
              width: '36px', height: '36px',
              background: 'linear-gradient(135deg, #d97706, #fbbf24)',
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: '1.1rem', color: '#0a0a0f',
              fontFamily: 'var(--font-display)',
            }}>B</div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.375rem',
              fontWeight: 800,
              color: '#f5f5f0',
              letterSpacing: '-0.03em',
            }}>
              Bet<span style={{ color: '#f59e0b' }}>Pulse</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '0.5rem 1rem',
                  color: '#8888a0',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  borderRadius: '6px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = '#f5f5f0';
                  (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = '#8888a0';
                  (e.target as HTMLElement).style.background = 'transparent';
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/promotions"
              className="btn-gold"
              style={{ marginLeft: '0.75rem', padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
            >
              🎁 Get Bonus
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: '#f5f5f0',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '1rem 0',
            background: 'rgba(10, 10, 15, 0.98)',
          }}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.875rem 0',
                  color: '#ccccd8',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                {link.label}
              </Link>
            ))}
            <a href="/promotions" className="btn-gold" style={{ marginTop: '1rem', display: 'inline-flex' }}>
              🎁 Get Bonus
            </a>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
