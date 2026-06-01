import Link from 'next/link';
import { Post } from '@/lib/posts';

interface PostCardProps {
  post: Post;
  href: string;
  size?: 'default' | 'featured';
}

const categoryColors: Record<string, string> = {
  'Sports Betting': '#3b82f6',
  'Casino': '#8b5cf6',
  'Promotions': '#22c55e',
  'Football': '#f59e0b',
  'Basketball': '#f97316',
  'Tennis': '#06b6d4',
};

function Stars({ rating }: { rating: number }) {
  return (
    <span className="stars" style={{ fontSize: '0.875rem' }}>
      {'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}
    </span>
  );
}

export function PostCard({ post, href, size = 'default' }: PostCardProps) {
  const catColor = categoryColors[post.category] || '#f59e0b';
  const isFeatured = size === 'featured';

  return (
    <Link href={href} style={{ textDecoration: 'none', display: 'block' }}>
      <article
        className="card-hover"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Image placeholder */}
        <div style={{
          height: isFeatured ? '220px' : '180px',
          background: `linear-gradient(135deg, var(--surface-2), var(--surface-3))`,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Pattern overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(245,158,11,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.08) 0%, transparent 60%)',
          }} />
          <span style={{ fontSize: isFeatured ? '3.5rem' : '2.5rem', filter: 'grayscale(0.3)' }}>
            {post.category === 'Casino' ? '🎰' : post.category === 'Promotions' ? '🎁' : '⚽'}
          </span>
          {/* Category badge */}
          <div style={{
            position: 'absolute', top: '1rem', left: '1rem',
          }}>
            <span className="bet-badge" style={{ background: `${catColor}22`, color: catColor, border: `1px solid ${catColor}44` }}>
              {post.category}
            </span>
          </div>
          {post.featured && (
            <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <span className="bet-badge" style={{ background: 'rgba(245,158,11,0.2)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)' }}>
                ★ Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: isFeatured ? '1.25rem' : '1.0625rem',
            fontWeight: 700,
            color: '#f5f5f0',
            lineHeight: 1.3,
            marginBottom: '0.25rem',
          }}>
            {post.title}
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6, flex: 1 }}>
            {post.excerpt}
          </p>

          {post.rating && <Stars rating={post.rating} />}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
              <span>{post.author}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
