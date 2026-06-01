import Link from 'next/link';
import { getAllPosts, getFeaturedPosts } from '@/lib/posts';
import { PostCard } from '@/components/blog/PostCard';

export default function HomePage() {
  const featured = getFeaturedPosts();
  const latest = getAllPosts().slice(0, 6);

  const stats = [
    { value: '500+', label: 'Expert Reviews' },
    { value: '98%', label: 'Accuracy Rate' },
    { value: '50K+', label: 'Monthly Readers' },
    { value: '200+', label: 'Casino Partners' },
  ];

  const topCasinos = [
    { name: 'Bet365', bonus: '100% up to $200', rating: 5, tag: 'Editor\'s Choice', color: '#22c55e' },
    { name: 'DraftKings', bonus: 'Bet $5 Get $200', rating: 5, tag: 'Best Sports', color: '#3b82f6' },
    { name: '888 Casino', bonus: '£88 No Deposit', rating: 4, tag: 'No Deposit', color: '#f59e0b' },
    { name: 'BetMGM', bonus: '$1,500 Risk Free', rating: 4, tag: 'High Roller', color: '#8b5cf6' },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '8rem 1.5rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(59,130,246,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.06) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />

        {/* Badge */}
        <div className="animate-fade-up" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.375rem 1rem',
          background: 'rgba(245,158,11,0.12)',
          border: '1px solid rgba(245,158,11,0.25)',
          borderRadius: '100px',
          fontSize: '0.8125rem',
          fontWeight: 600,
          color: '#fbbf24',
          letterSpacing: '0.05em',
          marginBottom: '2rem',
          textTransform: 'uppercase',
        }}>
          ⚡ Trusted by 50,000+ bettors
        </div>

        <h1 className="animate-fade-up delay-100" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          maxWidth: '900px',
          marginBottom: '1.5rem',
        }}>
          Win More with{' '}
          <span className="text-shimmer">Expert Betting</span>
          {' '}Intelligence
        </h1>

        <p className="animate-fade-up delay-200" style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'var(--text-muted)',
          maxWidth: '600px',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
        }}>
          Data-driven sports betting tips, unbiased casino reviews, and exclusive bonuses — curated by industry veterans since 2020.
        </p>

        <div className="animate-fade-up delay-300" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/blog" className="btn-gold">
            📊 Today's Tips
          </Link>
          <Link href="/casino" className="btn-ghost">
            🏆 Casino Reviews
          </Link>
        </div>

        {/* Stats */}
        <div className="animate-fade-up delay-400" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem', marginTop: '5rem',
          padding: '2.5rem 3rem',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          width: '100%', maxWidth: '700px',
        }}>
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: '#f59e0b' }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem', fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Casinos Quick Table */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                🏆 Handpicked Operators
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800 }}>
                Top Rated Casinos & Sportsbooks
              </h2>
            </div>
            <Link href="/casino" className="btn-ghost" style={{ fontSize: '0.875rem' }}>
              View All Reviews →
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {topCasinos.map((casino, i) => (
              <div
                key={casino.name}
                className="card-hover"
                style={{
                  display: 'flex', alignItems: 'center',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.25rem 1.5rem',
                  gap: '1.5rem',
                  flexWrap: 'wrap',
                }}
              >
                {/* Rank */}
                <div style={{
                  width: '36px', height: '36px', flexShrink: 0,
                  background: i === 0 ? 'linear-gradient(135deg, #d97706, #fbbf24)' : 'var(--surface-3)',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '1rem',
                  color: i === 0 ? '#0a0a0f' : 'var(--text-muted)',
                  fontFamily: 'var(--font-display)',
                }}>#{i + 1}</div>

                {/* Name & tag */}
                <div style={{ flex: 1, minWidth: '140px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700 }}>{casino.name}</h3>
                    <span className="bet-badge" style={{ background: `${casino.color}22`, color: casino.color, border: `1px solid ${casino.color}44` }}>
                      {casino.tag}
                    </span>
                  </div>
                  <span style={{ color: '#f59e0b', fontSize: '0.875rem' }}>{'★'.repeat(casino.rating)}</span>
                </div>

                {/* Bonus */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: '0.25rem' }}>Welcome Offer</div>
                  <div style={{ fontWeight: 700, color: '#22c55e', fontSize: '1rem' }}>{casino.bonus}</div>
                </div>

                {/* CTA */}
                <a href="/promotions" className="btn-gold" style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem', flexShrink: 0 }}>
                  Claim Offer
                </a>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem', textAlign: 'center' }}>
            T&C apply. 18+ only. Gamble responsibly.
          </p>
        </div>
      </section>

      {/* Latest Articles */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                📰 Fresh Content
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800 }}>
                Latest Betting Tips & Analysis
              </h2>
            </div>
            <Link href="/blog" className="btn-ghost" style={{ fontSize: '0.875rem' }}>
              All Articles →
            </Link>
          </div>

          {latest.length === 0 ? (
            <div style={{
              textAlign: 'center', padding: '4rem',
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '12px', color: 'var(--text-muted)',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✍️</div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>No articles yet</h3>
              <p>Add your first .md file to <code style={{ fontFamily: 'var(--font-mono)', background: 'var(--surface-2)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>content/posts/</code> to get started!</p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}>
              {latest.map(post => (
                <PostCard key={post.slug} post={post} href={`/blog/${post.slug}`} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--surface)' }}>
        <div style={{
          maxWidth: '640px', margin: '0 auto',
          textAlign: 'center',
          padding: '3.5rem 2rem',
          background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(245,158,11,0.03))',
          border: '1px solid rgba(245,158,11,0.2)',
          borderRadius: '20px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(245,158,11,0.1), transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📬</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem' }}>
            Get Daily Betting Picks
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
            Join 50,000+ bettors who receive our expert analysis, free bets, and exclusive offers every morning.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', maxWidth: '400px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1, minWidth: '200px',
                padding: '0.75rem 1rem',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: '#f5f5f0',
                fontSize: '0.9375rem',
                outline: 'none',
                fontFamily: 'var(--font-body)',
              }}
            />
            <button className="btn-gold">Subscribe</button>
          </div>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
}
