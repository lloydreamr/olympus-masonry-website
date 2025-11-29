# Technical Stack - Olympus Masonry Website

**Last Updated**: November 2025

---

## Overview

Modern, production-grade web application built with Next.js 15, optimized for performance, SEO, and user experience.

---

## Frontend Stack

### Framework & Library
- **Next.js 15** (App Router)
  - Server-side rendering (SSR)
  - Static site generation (SSG) where beneficial
  - API routes for backend functionality
  - Image optimization built-in
  - File-based routing

- **React 19**
  - Component-based architecture
  - Server components by default
  - Client components where needed

- **TypeScript**
  - Type safety
  - Better developer experience
  - Catch errors at compile time
  - Industry standard for modern web apps

### Styling
- **Tailwind CSS**
  - Utility-first CSS framework
  - Rapid development
  - Built-in design system
  - Responsive design utilities
  - Dark mode support (if needed)
  - Excellent with React/Next.js

**Rationale**: Faster development than vanilla CSS, matches Sample #5's design needs, easier responsive design, widely supported.

### Typography
- **Google Fonts**
  - Bebas Neue (display/large headlines)
  - Oswald (section headers)
  - Inter (body text)
  - Self-hosted via Next.js font optimization

---

## Backend & Services

### Hosting & Deployment
- **Vercel**
  - Native Next.js support
  - Automatic deployments (git push → live)
  - Edge network (CDN)
  - Serverless functions
  - Built-in SSL
  - Preview deployments for PRs
  - Analytics included

**Cost**: ~$28/month (Pro plan)

### Email Service
- **Resend**
  - Modern email API
  - Contact form submissions
  - Easy integration with Next.js
  - Reliable delivery
  - Good developer experience

**Rationale**: Simple, reliable, perfect for contact forms. More straightforward than setting up Supabase just for email.

### Database & CMS (Future)
- **Supabase** (when needed)
  - PostgreSQL database
  - Authentication (if client portal needed)
  - File storage
  - Real-time capabilities
  - Good TypeScript support

**When to Add**: If Peter needs ability to update content himself, add portfolio projects, etc.

**For Now**: Static content in codebase, easier to manage during development.

### Image Storage
- **Vercel Blob** (optional)
  - Simple file storage
  - Integrates with Vercel
  - Good for user-uploaded images (if needed)

**For Now**: Images in `/public` folder or Vercel's Image Optimization API.

---

## Development Tools

### Package Management
- **pnpm** (or npm)
  - Fast, efficient
  - Disk space optimization
  - Good monorepo support

### Code Quality
- **ESLint**
  - Code linting
  - Catch errors early
  - Enforce code standards
  - Next.js configuration included

- **Prettier**
  - Code formatting
  - Consistent style
  - Auto-format on save

- **Husky**
  - Git hooks
  - Run linting before commits
  - Prevent bad code from being committed

### Image Optimization
- **Sharp**
  - Next.js uses this internally
  - Resize/compress images
  - WebP conversion
  - High performance

**Workflow**:
1. Client images → Sharp processing
2. Generate multiple sizes
3. Convert to WebP
4. Serve via Next.js Image component

---

## Architecture Decisions

### Why Next.js App Router?
- **Modern**: Latest Next.js features
- **SEO**: Server-side rendering by default
- **Performance**: Automatic code splitting
- **Developer Experience**: Great tooling
- **Future-Proof**: Industry direction

### Why TypeScript?
- **Type Safety**: Catch errors before runtime
- **Better IDE Support**: Autocomplete, refactoring
- **Documentation**: Types serve as inline docs
- **Maintainability**: Easier to refactor
- **Industry Standard**: Most modern projects use TS

### Why Tailwind CSS?
- **Speed**: Faster than writing vanilla CSS
- **Consistency**: Built-in design system
- **Responsive**: Mobile-first utilities
- **Popular**: Large community, good docs
- **Matches Design**: Works perfectly with Sample #5's needs

### Why Start Simple (No CMS Yet)?
- **Faster Development**: No extra complexity initially
- **Lower Cost**: One less service to pay for
- **Easier Debugging**: Fewer moving parts
- **Add Later**: Easy to add Supabase when needed

---

## Performance Strategy

### Image Optimization
- Next.js Image component (automatic optimization)
- WebP format (smaller file sizes)
- Lazy loading (only load visible images)
- Responsive images (serve appropriate sizes)

### Code Splitting
- Automatic with Next.js App Router
- Only load JavaScript needed for current page

### Caching Strategy
- Static pages cached at CDN
- Image optimization cached
- API routes with appropriate cache headers

### SEO Optimization
- Server-side rendering (content visible to crawlers)
- Semantic HTML
- Proper meta tags
- Structured data (JSON-LD)
- Sitemap generation
- robots.txt

---

## Security

### HTTPS
- Automatic with Vercel
- SSL certificate included

### Form Security
- CSRF protection
- Rate limiting on API routes
- Input validation/sanitization
- Spam protection (honeypot or CAPTCHA)

### Environment Variables
- Sensitive keys in `.env.local`
- Never committed to git
- Properly configured in Vercel

---

## Development Workflow

### Local Development
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
```

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/homepage

# Make changes, commit
git add .
git commit -m "Implement homepage hero section"

# Push to remote
git push origin feature/homepage

# Create pull request (if working with team)
```

### Deployment
```bash
# Push to main branch
git push origin main

# Vercel automatically deploys
# Preview at assigned URL
```

---

## File Structure

```
olympus-masonry-website/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   ├── services/         # Services pages
│   │   ├── portfolio/        # Portfolio pages
│   │   ├── about/            # About page
│   │   └── contact/          # Contact page
│   ├── components/           # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── sections/         # Page sections
│   │   └── layout/           # Layout components
│   ├── lib/                  # Utility functions
│   ├── types/                # TypeScript types
│   └── styles/               # Global styles
├── public/                   # Static assets
│   ├── images/               # Optimized images
│   └── fonts/                # Fonts (if self-hosted)
├── .env.local                # Environment variables (not committed)
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

---

## Dependencies

### Core Dependencies
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.3.0",
    "tailwindcss": "^3.4.0",
    "resend": "^3.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/node": "^20.0.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "^15.0.0",
    "prettier": "^3.2.0",
    "husky": "^9.0.0"
  }
}
```

### Optional Dependencies (Add as Needed)
- `framer-motion` - Animations
- `react-hook-form` - Form handling
- `zod` - Schema validation
- `@supabase/supabase-js` - When CMS needed
- `sharp` - Image processing (if custom workflow needed)

---

## Environment Variables

### Required (Production)
```bash
# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key

# Contact Form Recipient
CONTACT_EMAIL=ollympus1@outlook.com

# Analytics (if using Vercel Analytics)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=auto
```

### Optional (When Added)
```bash
# Supabase (if added later)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Google Analytics (if needed)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Browser Support

### Target Browsers
- **Desktop**: Last 2 versions of Chrome, Firefox, Safari, Edge
- **Mobile**: Last 2 versions of iOS Safari, Chrome Android

### Progressive Enhancement
- Core functionality works without JavaScript
- Enhanced experience with JavaScript enabled

---

## Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.0s
- **Cumulative Layout Shift**: < 0.1
- **Lighthouse Score**: > 90 (all categories)

---

## Migration Path (Future Considerations)

### When to Add Supabase
- Peter wants to update content himself
- Need blog/news section
- Customer portal for quotes
- User authentication required

### When to Add Animation Library
- More complex interactions needed
- Scroll-triggered animations
- Page transitions

### When to Add Analytics
- Immediately after launch
- Vercel Analytics (built-in)
- Google Analytics (if detailed tracking needed)

---

## Cost Breakdown

### Monthly Recurring Costs
- **Vercel Pro**: ~$28/month
- **Domain**: $0.01/year (promotional) = ~$0.00/month
- **Resend**: Free tier (up to 3,000 emails/month) or $10/month
- **Development Tools**: ~$294/month (included in client's monthly package)

**Total Infrastructure**: ~$28-38/month (covered by client's $350/month package)

---

## Next Steps

### Phase 1: Setup
- [ ] Initialize Next.js project
- [ ] Configure TypeScript
- [ ] Set up Tailwind CSS
- [ ] Configure ESLint + Prettier
- [ ] Set up git hooks (Husky)

### Phase 2: Core Development
- [ ] Implement design system (colors, typography)
- [ ] Create layout components (header, footer)
- [ ] Build homepage (Sample #5 layout)
- [ ] Set up image optimization workflow

### Phase 3: Features
- [ ] Portfolio gallery
- [ ] Contact form + Resend integration
- [ ] Services pages
- [ ] About page

### Phase 4: Optimization
- [ ] SEO optimization
- [ ] Performance testing
- [ ] Accessibility audit
- [ ] Cross-browser testing

### Phase 5: Deployment
- [ ] Deploy to Vercel
- [ ] Configure domain
- [ ] Set up analytics
- [ ] Final testing

---

**Document Owner**: [Your Name]
**Last Reviewed**: November 2025
