import { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';
import { PostCard } from '@/components/blog/PostCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Casino Reviews',
  description: 'Honest, in-depth casino and sportsbook reviews with ratings for bonuses, games, and payouts.',
};

const topPicks = [
  { name: 'Bet365', description: 'The world\'s largest online sportsbook with competitive odds.', rating: 5, bonus: '100% up to $200', badge: 'Editor\'s Choice', badgeColor: '#f59e0b', games: '1,200+', payout: '97.5%' },
  { name: 'DraftKings Casino', description: 'Top-tier US casino with an excellent mobile app experience.', rating: 5, bonus: 'Bet $5 Get $200', badge: 'Best in US', badgeColor: '#3b82f6', games: '900+', payout: '96.8%' },
  { name: '888 Casino', description: 'Long-established brand with no-deposit bonuses and diverse slots.', rating: 4, bonus: '£88 No Deposit', badge: 'No Deposit', badgeColor: '#22c55e', games: '2,000+', payout: '97.1%' },
  { name: 'BetMGM', description: 'Premium brand offering sports and casino under one roof.', rating: 4, bonus: '$1,500 Risk Free', badge: 'VIP Perks', badgeColor: '#8b5cf6', games: '1,500+', payout: '96.5%' },
];

export default function CasinoPage() {
  const posts = getAllPosts().filter(p => p.category === 'Casino');

  return (
    <div style={{ paddingTop: '72px', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(180deg, var(--surface) 0%, var(--obsidian) 100%)',
        padding: '4rem 1.5rem 3rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <span style={{ color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            🎰 Verified Reviews
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Casino & Sportsbook Reviews
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '540px', lineHeight: 1.7 }}>
            Every casino is tested by our team for fairness, bonuses, game variety, and withdrawal speed. Ratings you can trust.
          </p>
        </div>
      </div>

      {/* Top picks grid */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem' }}>
          🏆 Our Top Picks
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
          {topPicks.map((casino, i) => (
            <div
              key={casino.name}
              className="card-hover"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px', height: '48px',
                  background: i === 0 ? 'linear-gradient(135deg, #d97706, #fbbf24)' : 'var(--surface-2)',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '1.25rem',
                  color: i === 0 ? '#0a0a0f' : 'var(--text-muted)',
                  fontFamily: 'var(--font-display)',
                }}>#{i + 1}</div>
                <span className="bet-badge" style={{ background: `${casino.badgeColor}22`, color: casino.badgeColor, border: `1px solid ${casino.badgeColor}44` }}>
                  {casino.badge}
                </span>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.375rem' }}>{casino.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>{casino.description}</p>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1, textAlign: 'center', padding: '0.75rem', background: 'var(--surface-2)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Games</div>
                  <div style={{ fontWeight: 700, color: '#f5f5f0', marginTop: '0.25rem' }}>{casino.games}</div>
                </div>
                <div style={{ flex: 1, textAlign: 'center', padding: '0.75rem', background: 'var(--surface-2)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>RTP</div>
                  <div style={{ fontWeight: 700, color: '#22c55e', marginTop: '0.25rem' }}>{casino.payout}</div>
                </div>
              </div>

              <div style={{ padding: '0.875rem', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Welcome Offer</div>
                <div style={{ fontWeight: 700, color: '#22c55e', fontSize: '1.0625rem' }}>{casino.bonus}</div>
              </div>

              <span style={{ color: '#f59e0b', fontSize: '1rem' }}>{'★'.repeat(casino.rating)}</span>

              <a href="/promotions" className="btn-gold" style={{ textAlign: 'center', justifyContent: 'center' }}>
                Claim Bonus
              </a>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', textAlign: 'center' }}>T&C apply · 18+</p>
            </div>
          ))}
        </div>

        {/* Casino articles */}
        {posts.length > 0 && (
          <>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem' }}>
              Latest Casino Reviews
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {posts.map(post => (
                <PostCard key={post.slug} post={post} href={`/casino/${post.slug}`} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
