import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About BetPulse',
  description: 'Learn about our team of expert analysts and our mission to provide the most reliable betting intelligence.',
};

const team = [
  { name: 'James Okonkwo', role: 'Head of Sports Analysis', bio: '12 years in professional betting. Former odds compiler at a major UK bookmaker.', emoji: '👨🏽‍💼' },
  { name: 'Sarah Mitchell', role: 'Casino Review Lead', bio: 'iGaming journalist with 8 years reviewing online casinos for major publications.', emoji: '👩🏼‍💻' },
  { name: 'Raj Patel', role: 'Data Analyst', bio: 'Statistical modelling expert building our proprietary prediction algorithms.', emoji: '👨🏽‍🔬' },
  { name: 'Carlos Mendez', role: 'Football Correspondent', bio: 'Former professional footballer turned analyst covering European leagues.', emoji: '⚽' },
];

const values = [
  { icon: '🎯', title: 'Honest Reviews', description: 'We decline partnerships with casinos that don\'t meet our standards. Our ratings are independent.' },
  { icon: '📊', title: 'Data Driven', description: 'Every tip is backed by statistical models and historical data, not gut feeling.' },
  { icon: '🛡️', title: 'Responsible Gambling', description: 'We actively promote responsible gambling and link to support resources on every page.' },
  { icon: '💡', title: 'Always Learning', description: 'Our models are updated weekly with fresh data, keeping our analysis ahead of the market.' },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '72px', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{
        padding: '5rem 1.5rem 4rem',
        background: 'linear-gradient(180deg, var(--surface) 0%, var(--obsidian) 100%)',
        borderBottom: '1px solid var(--border)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <span style={{ color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Since 2020
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 800, marginTop: '0.75rem', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            The Team Behind <span className="text-shimmer">BetPulse</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.0625rem', lineHeight: 1.8 }}>
            We're a team of former bookmakers, casino analysts, and sports journalists united by one goal: giving bettors the edge they deserve with transparent, research-backed content.
          </p>
        </div>
      </div>

      {/* Values */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem' }}>
          Our Principles
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {values.map(v => (
            <div key={v.title} style={{
              padding: '2rem',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '14px',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{v.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.625rem' }}>{v.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '2rem 1.5rem 5rem', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, textAlign: 'center', margin: '3rem 0 2.5rem' }}>
            Meet the Analysts
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {team.map(member => (
              <div key={member.name} style={{
                padding: '2rem',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{member.emoji}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>{member.name}</h3>
                <div style={{ color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>{member.role}</div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>
          Ready to Start Winning?
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
          Browse our latest betting tips and claim exclusive bonuses from our partner operators.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/blog" className="btn-gold">Browse Betting Tips</Link>
          <Link href="/promotions" className="btn-ghost">View Bonuses</Link>
        </div>
      </section>
    </div>
  );
}
