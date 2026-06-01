import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const casinoDirectory = path.join(process.cwd(), 'content/casino');
const promoDirectory = path.join(process.cwd(), 'content/promotions');

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  image: string;
  featured: boolean;
  readingTime: string;
  content: string;
  affiliateLink?: string;
  rating?: number;
}

function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function getPostsFromDir(dir: string, category: string): Post[] {
  if (!fs.existsSync(dir)) return [];
  const fileNames = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(dir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || content.slice(0, 160) + '...',
      category: data.category || category,
      tags: data.tags || [],
      author: data.author || 'BetPulse Editorial',
      image: data.image || '/images/default-og.jpg',
      featured: data.featured || false,
      readingTime: getReadingTime(content),
      content,
      affiliateLink: data.affiliateLink,
      rating: data.rating,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllPosts(): Post[] {
  const sports = getPostsFromDir(postsDirectory, 'Sports Betting');
  const casino = getPostsFromDir(casinoDirectory, 'Casino');
  const promos = getPostsFromDir(promoDirectory, 'Promotions');
  return [...sports, ...casino, ...promos].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter(p => p.featured).slice(0, 3);
}

export function getPostBySlug(slug: string, dir?: string): Post | null {
  const dirs = dir ? [dir] : [postsDirectory, casinoDirectory, promoDirectory];
  for (const d of dirs) {
    const fullPath = path.join(d, `${slug}.md`);
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        category: data.category || 'General',
        tags: data.tags || [],
        author: data.author || 'BetPulse Editorial',
        image: data.image || '/images/default-og.jpg',
        featured: data.featured || false,
        readingTime: getReadingTime(content),
        content,
        affiliateLink: data.affiliateLink,
        rating: data.rating,
      };
    }
  }
  return null;
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(p =>
    p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllSlugs(): string[] {
  return getAllPosts().map(p => p.slug);
}

export function getAllCategories(): string[] {
  const all = getAllPosts().map(p => p.category);
  const seen = new Set<string>();
  return all.filter(c => { if (seen.has(c)) return false; seen.add(c); return true; });
}
