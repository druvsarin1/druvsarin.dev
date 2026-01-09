# Portfolio Deployment Guide

**Site:** https://druvsarin.dev

## Quick Redeploy

After making any changes, just run:

```bash
cd /Users/dhruv/portfolio
vercel --prod --yes
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main page layout
│   ├── layout.tsx        # Site metadata & SEO
│   └── globals.css       # Global styles
├── components/
│   ├── Hero.tsx          # Profile pic, name, tagline, badges
│   ├── Experience.tsx    # Work history timeline
│   ├── Projects.tsx      # Avyra, Voxa, NBA project cards
│   ├── Skills.tsx        # Tech stack grid
│   ├── Contact.tsx       # Social links
│   ├── BinaryRain.tsx    # Background 0s and 1s animation
│   └── FloatingCode.tsx  # Floating code snippets
public/
└── profile.png           # Profile picture
```

## Common Edits

### Update tagline (Hero.tsx)
Look for the `<motion.p>` after the name TypeWriter

### Update experience (Experience.tsx)
Edit the `experiences` array at the top

### Update skills (Skills.tsx)
Edit the `skillCategories` array

### Update projects (Projects.tsx)
Edit the `projects` array

### Change profile picture
Replace `public/profile.png` (must be actual PNG, not HEIF)

## Tech Stack

- Next.js 16
- Tailwind CSS
- Framer Motion (animations)
- Vercel (hosting)
- Porkbun (domain)

## Vercel Dashboard

https://vercel.com/sarindruv-8652s-projects/portfolio
