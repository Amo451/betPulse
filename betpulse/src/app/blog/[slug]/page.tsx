import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllSlugs, getPostBySlug } from '@/lib/posts';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

async function renderMarkdown(content: string): Promise<string> {
  const result = await remark().use(html).process(content);
  return result.toString();
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const contentHtml = await renderMarkdown(post.content);

  return (
    <div style={{ paddingTop: '72px', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '0.75rem 1.5rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-muted)', alignItems: 'center' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link>
          <span>›</span>
          <span style={{ color: '#f5f5f0' }}>{post.title}</span>
        </div>
      </div>

      {/* Article */}
      <article style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* Meta */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            <span className="bet-badge" style={{ background: 'rgba(245,158,11,0.12)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.25)' }}>
              {post.category}
            </span>
            {post.tags.map(tag => (
              <span key={tag} className="bet-badge" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                #{tag}
              </span>
            ))}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}>{post.title}</h1>

          {post.rating && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span className="stars" style={{ fontSize: '1.25rem' }}>
                {'★'.repeat(Math.round(post.rating))}{'☆'.repeat(5 - Math.round(post.rating))}
              </span>
              <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1.125rem' }}>{post.rating}/5</span>
            </div>
          )}

          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            <span>✍️ {post.author}</span>
            <span>📅 {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>⏱ {post.readingTime}</span>
          </div>

          <div className="gold-line" />
        </div>

        {/* Affiliate CTA */}
        {post.affiliateLink && (
          <div style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(34,197,94,0.04))',
            border: '1px solid rgba(34,197,94,0.2)',
            borderRadius: '12px',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '0.25rem', color: '#22c55e' }}>🎁 Exclusive Offer</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Claim your welcome bonus for this operator</div>
            </div>
            <a href={post.affiliateLink} target="_blank" rel="noopener noreferrer sponsored" className="btn-gold">
              Claim Bonus →
            </a>
          </div>
        )}

        {/* Content */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Bottom CTA */}
        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          textAlign: 'center',
        }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
            Enjoyed this analysis?
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
            Get daily tips and exclusive bonuses delivered to your inbox.
          </p>
          <Link href="/promotions" className="btn-gold">View All Bonuses 🎁</Link>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginRight: '0.75rem' }}>Tags:</span>
            {post.tags.map(tag => (
              <span key={tag} className="bet-badge" style={{ marginRight: '0.5rem', background: 'var(--surface-2)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </div>
  );
}
