# 🎯 BetPulse — Sports Betting & Casino Affiliate Blog

A production-ready affiliate blog built with **Next.js 14** and deployed **free on Vercel**. Manages 1,000+ articles via Markdown files in GitHub — no database, no CMS subscription, no cPanel.

---

## ⚡ Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | Next.js 14 | SEO, speed, free Vercel hosting |
| Content | Markdown (.md files) | Write in GitHub, no database needed |
| Styling | Tailwind CSS | Utility-first, fast |
| Hosting | Vercel | Free tier, auto-deploys from GitHub |
| CMS (optional) | Prose.io | Visual editor for your .md files |

---

## 🚀 Quick Start (15 minutes to live)

### Step 1: Get the Code on GitHub

1. Create a free account at [github.com](https://github.com)
2. Click **"New Repository"**, name it `betpulse`
3. Upload this entire folder (drag & drop in GitHub's web UI), OR use Git:

```bash
git init
git add .
git commit -m "Initial BetPulse setup"
git remote add origin https://github.com/YOUR_USERNAME/betpulse.git
git push -u origin main
```

### Step 2: Deploy to Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click **"Add New Project"**
3. Import your `betpulse` GitHub repository
4. Click **Deploy** — that's it! ✅

Vercel will give you a free URL like `betpulse.vercel.app`. You can later add a custom domain for free.

### Step 3: Write Your First Article

Create a `.md` file in `content/posts/` with this format:

```markdown
---
title: "Your Article Title"
date: "2025-01-20"
category: "Sports Betting"
excerpt: "A short description shown in article cards"
tags: ["football", "picks", "weekend"]
author: "Your Name"
featured: true
affiliateLink: "https://yourpartner.com/?ref=YOU"
rating: 4.5
---

## Your Article Heading

Write your article here in normal Markdown...
```

Push to GitHub → Vercel auto-deploys in ~30 seconds → Article is live! 🎉

---

## 📝 Content Management Options

### Option A: GitHub Web Editor (Easiest)
Edit files directly on GitHub.com. No software needed.

### Option B: Prose.io (Recommended — WordPress-like)
1. Go to [prose.io](https://prose.io)
2. Sign in with GitHub
3. Navigate to your `content/posts/` folder
4. Click **New File** and write with a visual editor

### Option C: VS Code (Power Users)
Install VS Code, clone your repo, and write locally.

---

## 📂 Folder Structure

```
betpulse/
├── content/
│   ├── posts/          ← Sports betting articles (.md files)
│   ├── casino/         ← Casino review articles (.md files)
│   └── promotions/     ← Bonus/promotion articles (.md files)
├── src/
│   ├── app/            ← Next.js pages
│   │   ├── page.tsx    ← Homepage
│   │   ├── blog/       ← Blog listing + article pages
│   │   ├── casino/     ← Casino reviews page
│   │   ├── promotions/ ← Bonuses page
│   │   └── about/      ← About page
│   ├── components/     ← Reusable UI components
│   └── lib/posts.ts    ← Article reading logic
└── public/             ← Static assets (images, favicon)
```

---

## 🎨 Customization

### Change Site Name
Edit `src/app/layout.tsx` — update the `title` and `description` metadata.

### Change Colors
Edit `src/styles/globals.css` — update the CSS variables at the top:
```css
--gold: #f59e0b;       /* Main accent color */
--obsidian: #0a0a0f;   /* Background */
```

### Add Affiliate Links
In your article frontmatter:
```yaml
affiliateLink: "https://yourpartner.com/?ref=YOURCODE"
```
A green "Claim Bonus" CTA will automatically appear in the article.

### Update Casino Table (Homepage)
Edit `src/app/page.tsx` — find the `topCasinos` array and update the names, bonuses, and links.

### Update Promotions Page
Edit `src/app/promotions/page.tsx` — update the `promos` array with your actual affiliate deals.

---

## 🔌 Custom Domain (Free)

1. In Vercel dashboard → Your Project → **Settings → Domains**
2. Add your domain (e.g., `betpulse.com`)
3. Update DNS records at your domain registrar (Namecheap, GoDaddy, etc.)
4. Done! HTTPS is automatic and free.

---

## 📈 SEO Features Built In

- ✅ Dynamic `<title>` and `<meta description>` per page
- ✅ Open Graph tags for social sharing
- ✅ Static generation (fast = better rankings)
- ✅ Sitemap (add `next-sitemap` package for auto-generation)
- ✅ Semantic HTML structure
- ✅ Mobile responsive

### Add Sitemap (Recommended)
```bash
npm install next-sitemap
```
Then add `next-sitemap.config.js`:
```js
module.exports = {
  siteUrl: 'https://yourdomain.com',
  generateRobotsTxt: true,
}
```

---

## 💰 Monetization Tips

1. **Affiliate Links:** Add `affiliateLink` to each article frontmatter — a CTA button auto-appears
2. **Bonus Code Table:** Edit the promotions page with your actual partner codes
3. **Homepage Casino Table:** Update with your highest-paying affiliate partners
4. **Newsletter:** Connect the email form to Mailchimp/ConvertKit for free

---

## 🛡️ Legal Compliance

- Affiliate disclosure is shown in the footer automatically
- Responsible gambling notice on the promotions page
- 18+ warnings on all casino content
- Update `/src/app/about/page.tsx` with your real team info

---

## 📞 Getting Help

- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Prose.io Guide:** [prose.io](https://prose.io)
- **Markdown Cheatsheet:** [markdownguide.org](https://markdownguide.org)

---

*Built with ❤️ for affiliate bloggers who want a professional site without the hosting fees.*
