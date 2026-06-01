import { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';
import { PostCard } from '@/components/blog/PostCard';

export const metadata: Metadata = {
  title: 'Betting Tips & Analysis',
  description: 'Expert sports betting tips, predictions, and strategies from professional analysts.',
};

export default function BlogPage() {
  const posts = getAllPosts().filter(p =>
    ['Sports Betting', 'Football', 'Basketball', 'Tennis', 'General'].includes(p.category)
  );

  const categories = ['All', 'Football', 'Basketball', 'Tennis', 'Horse Racing', 'Cricket', 'Esports'];

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
            📊 Expert Analysis
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Betting Tips & Predictions
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '540px', lineHeight: 1.7 }}>
            Data-driven analysis and expert picks across all major sports. Updated daily with odds and match previews.
          </p>

          {/* Filter pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            {categories.map((cat, i) => (
              <button key={cat} style={{
                padding: '0.5rem 1.125rem',
                borderRadius: '100px',
                border: '1px solid',
                borderColor: i === 0 ? 'rgba(245,158,11,0.5)' : 'var(--border)',
                background: i === 0 ? 'rgba(245,158,11,0.1)' : 'transparent',
                color: i === 0 ? 'var(--gold)' : 'var(--text-muted)',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.2s',
              }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {posts.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '5rem 2rem',
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: '16px',
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✍️</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', marginBottom: '1rem' }}>Ready for Your First Article</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Create a <code style={{ fontFamily: 'var(--font-mono)', background: 'var(--surface-2)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>.md</code> file
              inside <code style={{ fontFamily: 'var(--font-mono)', background: 'var(--surface-2)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>content/posts/</code> and it will appear here instantly.
            </p>
            <div style={{
              background: 'var(--surface-2)', borderRadius: '10px', padding: '1.5rem',
              textAlign: 'left', fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem', color: '#ccccd8',
              maxWidth: '480px', margin: '0 auto',
              border: '1px solid var(--border)',
            }}>
              <div style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}># content/posts/my-first-tip.md</div>
              <div style={{ color: 'var(--gold)' }}>---</div>
              <div>title: &quot;Premier League Picks: GW30&quot;</div>
              <div>date: &quot;2025-01-15&quot;</div>
              <div>category: Football</div>
              <div>excerpt: &quot;Our top picks for Gameweek 30&quot;</div>
              <div>featured: true</div>
              <div>author: BetPulse Editorial</div>
              <div style={{ color: 'var(--gold)' }}>---</div>
              <div style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Your article content here...</div>
            </div>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}>
            {posts.map(post => (
              <PostCard key={post.slug} post={post} href={`/blog/${post.slug}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
