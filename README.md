# Portfolio

> Personal portfolio website showcasing projects and expertise.

## Overview

A modern, responsive portfolio website built with Next.js and Framer Motion, featuring dark mode, smooth animations, and a blog section.

## Features

- **Hero Section** — Animated introduction with typing effect
- **About Section** — Professional background and skills
- **Projects Section** — Showcase of featured projects
- **Research Section** — Technical research and articles
- **Blog Section** — Technical blog posts
- **Contact Section** — Contact form with EmailJS integration
- **Dark Mode** — Toggle between light and dark themes
- **Smooth Animations** — Framer Motion transitions
- **Scroll Progress** — Visual scroll indicator
- **Back to Top** — Smooth scroll to top button

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics
- **Email:** EmailJS

## Quick Start

```bash
# Clone
git clone https://github.com/bravforcode/portfolio-production.git
cd portfolio-production

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Project Structure

```
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   ├── api/              # API routes
│   └── blog/             # Blog pages
├── components/
│   ├── layout/           # Navigation, Footer
│   ├── sections/         # Hero, About, Skills, Projects, Research, Blog, Contact
│   ├── common/           # ScrollProgress, BackToTop
│   └── ui/               # Reusable UI components
├── contexts/             # Theme context
├── hooks/                # Custom hooks
├── lib/                  # Utilities
└── types/                # TypeScript types
```

## Deployment

This project is optimized for Vercel deployment:

```bash
# Build for production
npm run build

# Start production server
npm start
```

## License

MIT
