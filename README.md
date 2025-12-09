# Olympus Masonry Website

**Professional website for Olympus Masonry - Edmonton's premier masonry contractors**

---

## 🎯 Project Status

**Phase**: Development
**Client**: Peter Kolia (Olympus Masonry)
**Design Chosen**: Sample #5 - Split Screen Layout
**Target Launch**: TBD (Urgent - high-value client showcase)

---

## 📋 Quick Links

- **Project Overview**: [PROJECT.md](./docs/project/PROJECT.md)
- **Client Info**: [docs/project/client-info.md](./docs/project/client-info.md)
- **Tech Stack**: [docs/development/tech-stack.md](./docs/development/tech-stack.md)
- **Image Workflow**: [docs/development/image-workflow.md](./docs/development/image-workflow.md)
- **Brand Guide**: [docs/design/brand-guide.md](./docs/design/brand-guide.md)
- **Documentation Index**: [docs/index.md](./docs/index.md)

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **Email**: Resend (contact forms)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm
- Git

### Installation

```bash
# Clone repository
git clone <repo-url>
cd olympus-mansory

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Project Documentation

- Read [docs/index.md](./docs/index.md) for full documentation index
- Review [docs/project/PROJECT_NOTES.md](./docs/project/PROJECT_NOTES.md) for main page structure
- Check [docs/development/tech-stack.md](./docs/development/tech-stack.md) for technical details

---

## 📁 Project Structure

```
olympus-mansory/
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Homepage (8 sections)
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── portfolio/            # Portfolio page
│   ├── services/             # Services page
│   └── contact/              # Contact page
│
├── components/               # React components
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Site footer
│   └── ...                   # Other components
│
├── public/                   # Static assets (served at /)
│   └── images/               # Optimized web images
│
├── docs/                     # Documentation (see docs/index.md)
│   ├── project/              # Core project docs
│   ├── design/               # Brand & design docs
│   ├── development/          # Technical docs
│   ├── research/             # Market research
│   └── archive/              # Historical documents
│
├── design/                   # Design assets
│   ├── wireframes/           # Wireframe files
│   ├── design-system/        # Design tokens
│   └── sample-5-chosen/      # Chosen design reference
│
├── assets/                   # Source media assets
│   ├── images/               # Image pipeline
│   └── logos/                # Logo files
│
└── samples/                  # Design samples
```

---

## 🎨 Brand Identity

### Colors
- **Gold**: `#D4A657` (Primary brand color)
- **Black**: `#000000` (Headers, text, dark sections)
- **White**: `#FFFFFF` (Backgrounds, light text)

### Typography
- **Bebas Neue**: Large display text, hero headlines
- **Oswald**: Section headlines, uppercase headers
- **Inter**: Body text, readable content

---

## 📸 Image Management

Client images go through a multi-stage pipeline:

1. **00-incoming**: New images from Peter
2. **01-originals**: Permanent archive (never edit)
3. **02-curated**: Selected images for website
4. **03-edited**: Post-processed images
5. **04-web-ready**: Optimized for Next.js

See [docs/development/image-workflow.md](./docs/development/image-workflow.md) for complete workflow.

---

## 🔧 Development Workflow

### Creating a Feature
```bash
# Create feature branch
git checkout -b feature/homepage-hero

# Make changes, commit
git add .
git commit -m "Implement homepage hero section"

# Push to remote
git push origin feature/homepage-hero
```

### Testing Locally
```bash
# Development mode (hot reload with Turbopack)
npm run dev

# Production build test
npm run build
npm run start
```

### Deployment
Push to `main` branch → Vercel automatically deploys

---

## 📦 Key Dependencies

### Core
- `next` v16.0.5 - React framework (App Router)
- `react` v19.2.0 - UI library
- `typescript` v5.9 - Type safety
- `tailwindcss` v3.4 - Styling

### Dev Tools
- `eslint` - Code linting
- `prettier` - Code formatting

---

## 🎯 Project Status

### Completed
- [x] Next.js 16 project initialized
- [x] Homepage with 8-section split layout
- [x] Portfolio page
- [x] Services page
- [x] Contact page
- [x] Header & Footer components
- [x] Mobile responsive design

### In Progress / Remaining
- [ ] Right-side visuals for homepage sections
- [ ] Image optimization and curation
- [ ] Contact form email integration
- [ ] SEO optimization
- [ ] Final deployment to production

---

## 📞 Client Contact

**Peter Kolia** - Olympus Masonry
📱 Phone: 403-919-5272
✉️ Email: ollympus1@outlook.com
📍 Location: Edmonton, AB

---

## 📝 Notes

- Winter masonry operations are a key differentiator
- Split-screen layout with 8 distinct sections on homepage
- Visual-first design approach
- See [docs/project/PROJECT_NOTES.md](./docs/project/PROJECT_NOTES.md) for detailed section breakdown

---

## 🤝 Contributing

This is a client project. Development workflow:
1. Create feature branch
2. Make changes
3. Test locally
4. Commit with clear message
5. Push and deploy

---

## 📄 License

Proprietary - Olympus Masonry Website © 2025

---

**Last Updated**: December 2024
**Developer**: Lloyd Lizardo
