# Deployment Guide - Olympus Masonry Website

**Platform**: Vercel
**Framework**: Next.js 16.0.5
**Last Updated**: November 2025

---

## Overview

This guide covers deploying the Olympus Masonry website to Vercel, from initial setup through production deployment and ongoing maintenance.

---

## Prerequisites

Before deploying, ensure:
- ✅ All code is committed to Git repository
- ✅ Repository is pushed to GitHub/GitLab/Bitbucket
- ✅ Email integration is implemented (see `docs/development/email-integration.md`)
- ✅ Environment variables are documented in `.env.local.example`
- ✅ All tests pass locally (when testing is implemented)
- ✅ Production build succeeds: `npm run build`

---

## Initial Vercel Setup

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (recommended) or email
3. Verify your email address

### Step 2: Import Project
1. Click "Add New Project" in Vercel dashboard
2. Import your Git repository:
   - **GitHub**: Select `olympus-mansory` repository
   - **GitLab/Bitbucket**: Connect and select repository
3. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

### Step 3: Configure Environment Variables
Add all variables from `.env.local.example`:

**Required for Production:**
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_FORM_TO_EMAIL=ollympus1@outlook.com
CONTACT_FORM_FROM_EMAIL=noreply@olympusmasonry.ca
```

**Optional (for analytics):**
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**How to add in Vercel:**
1. Go to Project Settings → Environment Variables
2. Add each variable:
   - **Key**: Variable name (e.g., `RESEND_API_KEY`)
   - **Value**: Actual value
   - **Environment**: Production, Preview, Development (select all)
3. Click "Save"

### Step 4: Deploy
1. Click "Deploy"
2. Wait for build to complete (usually 1-3 minutes)
3. Vercel will provide a URL: `https://olympus-mansory-xxx.vercel.app`

---

## Custom Domain Setup

### Step 1: Purchase Domain (if not already owned)
Recommended registrars:
- **Namecheap** - Affordable, good UI
- **Google Domains** - Simple, reliable
- **Cloudflare** - Best pricing, advanced features

Suggested domain: `olympusmasonry.ca` or `olympusmasonry.com`

### Step 2: Add Domain to Vercel
1. Go to Project Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `olympusmasonry.ca`)
4. Vercel will provide DNS records to add

### Step 3: Configure DNS Records
Add these records in your domain registrar:

**For root domain (olympusmasonry.ca):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**DNS Propagation**: Wait 5 minutes to 48 hours (usually ~10 minutes)

### Step 4: Verify Domain
1. Return to Vercel → Domains
2. Click "Refresh" to verify
3. Once verified, Vercel auto-provisions SSL certificate
4. Your site is now live at your custom domain

### Step 5: Set Primary Domain
1. In Vercel Domains settings
2. Click "..." next to your preferred domain
3. Select "Set as Primary"
4. Enable "Redirect other domains to primary"

---

## Deployment Workflow

### Automatic Deployments

Vercel automatically deploys on Git push:

**Production Deployments** (from `main` or `master` branch):
```bash
git add .
git commit -m "Update homepage hero section"
git push origin main
```
→ Deploys to production URL (e.g., `olympusmasonry.ca`)

**Preview Deployments** (from feature branches):
```bash
git checkout -b feature/new-gallery
# make changes
git add .
git commit -m "Add new gallery section"
git push origin feature/new-gallery
```
→ Creates preview URL: `olympus-mansory-git-feature-new-gallery.vercel.app`

### Manual Deployments

**Via Vercel CLI:**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## Environment-Specific Configuration

### Production
- Branch: `main` or `master`
- URL: Custom domain (e.g., `olympusmasonry.ca`)
- Analytics: Enabled
- Caching: Aggressive

### Preview (Staging)
- Branch: Any feature branch
- URL: Auto-generated Vercel URL
- Analytics: Optional
- Caching: Standard

### Development
- Location: Local machine
- URL: `http://localhost:3000`
- Command: `npm run dev`

---

## Build Configuration

### next.config.ts
Current configuration (no changes needed):
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration options here
};

export default nextConfig;
```

### Optimization Settings (Optional)

Add to `next.config.ts` if needed:
```typescript
const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // Compression
  compress: true,

  // Analytics (Vercel Analytics enabled by default)
  // No config needed
};
```

---

## Pre-Deployment Checklist

### Code Quality
- [ ] All TypeScript errors resolved: `npm run build`
- [ ] ESLint passes: `npm run lint`
- [ ] No console errors in browser
- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] Mobile responsive on all pages

### Content
- [ ] All placeholder images replaced with client photos
- [ ] Contact information is correct (phone, email, address)
- [ ] Service descriptions are accurate
- [ ] Portfolio projects are up-to-date
- [ ] Testimonials are from real clients

### SEO & Performance
- [ ] Page titles are descriptive
- [ ] Meta descriptions are compelling
- [ ] Images have alt text
- [ ] Sitemap generated (add `sitemap.ts` to `/app/`)
- [ ] robots.txt configured
- [ ] Lighthouse score > 90 (Performance, Accessibility, SEO)

### Functionality
- [ ] Email integration works (test contact form)
- [ ] All internal links work
- [ ] External links open in new tab
- [ ] Mobile menu works
- [ ] Images load correctly
- [ ] No 404 errors

### Security
- [ ] Environment variables are in Vercel (not committed to Git)
- [ ] API keys are secure
- [ ] HTTPS is enforced
- [ ] No sensitive data exposed in client-side code

---

## Post-Deployment Tasks

### Immediate (Day 1)
- [ ] Verify custom domain is live
- [ ] Test contact form submission
- [ ] Check emails arrive in Peter's inbox
- [ ] Submit sitemap to Google Search Console
- [ ] Test website on multiple devices (desktop, tablet, mobile)
- [ ] Verify SSL certificate is active (padlock icon in browser)

### First Week
- [ ] Monitor Vercel Analytics for errors
- [ ] Check email delivery rate
- [ ] Review Core Web Vitals in Vercel dashboard
- [ ] Set up Google Analytics (optional)
- [ ] Add website to Google My Business

### Ongoing
- [ ] Weekly: Check analytics and fix any issues
- [ ] Monthly: Review and update portfolio projects
- [ ] Quarterly: Update dependencies: `npm outdated`
- [ ] As needed: Add new client testimonials

---

## Monitoring & Analytics

### Vercel Analytics (Built-in)
Access: Vercel Dashboard → Your Project → Analytics

**Metrics Tracked:**
- Page views
- Unique visitors
- Top pages
- Referrers
- Devices (desktop, mobile, tablet)
- Browsers
- Countries

### Core Web Vitals
Vercel automatically tracks:
- **LCP** (Largest Contentful Paint) - Loading performance
- **FID** (First Input Delay) - Interactivity
- **CLS** (Cumulative Layout Shift) - Visual stability

**Target scores:**
- LCP: < 2.5s (Good)
- FID: < 100ms (Good)
- CLS: < 0.1 (Good)

### Error Tracking
View errors in: Vercel Dashboard → Deployments → Click deployment → Function Logs

---

## Troubleshooting

### Build Fails on Vercel

**Error**: TypeScript errors
```bash
# Fix locally first
npm run build

# If build passes locally but fails on Vercel:
# Check Node.js version in Vercel settings
# Ensure it matches your local version
```

**Error**: Missing environment variables
- Go to Project Settings → Environment Variables
- Add missing variables
- Redeploy

### Domain Not Working

**Issue**: DNS not propagated
- Wait up to 48 hours (usually 10 minutes)
- Check DNS propagation: [dnschecker.org](https://dnschecker.org)

**Issue**: SSL certificate error
- Vercel auto-provisions SSL (usually 1-5 minutes)
- If delayed, contact Vercel support

### Emails Not Sending

**Check**:
1. `RESEND_API_KEY` is correct in Vercel environment variables
2. Email integration is implemented (see `docs/development/email-integration.md`)
3. Check Resend dashboard for error logs
4. Verify domain is authenticated with Resend

---

## Rollback Procedure

If deployment has critical issues:

### Quick Rollback (Instant)
1. Go to Vercel Dashboard → Deployments
2. Find last working deployment
3. Click "..." → "Promote to Production"
4. Confirm rollback

### Git Rollback
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force origin main
```

---

## Performance Optimization

### Image Optimization
- Use Next.js `<Image>` component (already implemented)
- Serve images in WebP/AVIF format (automatic with Next.js)
- Lazy load images (automatic with Next.js Image)

### Caching Strategy
Vercel automatically caches:
- Static assets (images, CSS, JS) - 1 year
- HTML pages - Based on headers
- API routes - No cache (can be configured)

### CDN
Vercel's Edge Network (built-in):
- 100+ global locations
- Automatic failover
- DDoS protection

---

## Scaling & Costs

### Vercel Pricing (as of 2025)

**Hobby (Free)**
- Perfect for this project
- Unlimited deployments
- 100 GB bandwidth/month
- Web Analytics included
- Free SSL certificates

**Pro ($20/month)**
- Upgrade if needed
- Unlimited bandwidth
- Priority support
- Team collaboration
- Advanced analytics

**For Olympus Masonry**: Hobby plan is sufficient unless traffic exceeds 100 GB/month.

---

## Security Best Practices

### HTTPS Enforcement
- ✅ Automatic with Vercel
- ✅ Free SSL certificates
- ✅ Auto-renewal

### Security Headers
Add to `next.config.ts` for enhanced security:
```typescript
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

---

## Maintenance Schedule

### Weekly
- Check Vercel Analytics for errors
- Monitor email delivery

### Monthly
- Review dependencies: `npm outdated`
- Update content (new projects, testimonials)
- Check Core Web Vitals

### Quarterly
- Update Next.js and dependencies
- Review security best practices
- Backup codebase (Git is your backup)

### Annually
- Renew domain registration
- Review hosting costs
- Audit SEO performance

---

## Support & Resources

### Vercel
- **Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Support**: support@vercel.com (Pro plan)
- **Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

### Next.js
- **Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub**: [github.com/vercel/next.js](https://github.com/vercel/next.js)

### Emergency Contacts
- **Developer**: Lloyd Lizardo
- **Client**: Peter Kolia (403-919-5272, ollympus1@outlook.com)

---

## Conclusion

Following this guide ensures a smooth deployment process for the Olympus Masonry website. The Vercel platform provides automatic deployments, global CDN, SSL certificates, and analytics out of the box.

**Remember**: Test thoroughly before deploying to production, and always have a rollback plan ready.

---

**Document Version**: 1.0
**Last Updated**: November 2025
**Next Review**: December 2025
