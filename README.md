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
- **Client Info**: [docs/client-info.md](./docs/client-info.md)
- **Tech Stack**: [docs/development/tech-stack.md](./docs/development/tech-stack.md)
- **Image Workflow**: [docs/development/image-workflow.md](./docs/development/image-workflow.md)
- **Brand Guide**: [docs/design/brand-guide.md](./docs/design/brand-guide.md)

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
- pnpm (or npm)
- Git

### Installation

```bash
# Clone repository (if not already)
cd olympus-masonry-website

# Install dependencies (after Next.js is initialized)
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
```

### First Time Setup

1. **Review project documentation**:
   - Read [PROJECT.md](./docs/project/PROJECT.md) for overview
   - Review [docs/client-info.md](./docs/client-info.md) for client details
   - Check [docs/development/tech-stack.md](./docs/development/tech-stack.md) for technical decisions

2. **Curate client images**:
   - Review images in `assets/images/01-originals/`
   - Follow workflow in [docs/development/image-workflow.md](./docs/development/image-workflow.md)

3. **Initialize Next.js** (when ready):
   ```bash
   npx create-next-app@latest . --typescript --tailwind --app --src-dir
   ```

---

## 📁 Project Structure

```
olympus-masonry-website/
├── docs/                     # Documentation
│   ├── project/              # Project overview docs
│   ├── design/               # Design and brand docs
│   ├── development/          # Development docs
│   ├── research/             # Research artifacts
│   ├── client-info.md        # Client contact & requirements
│   └── archive/              # Completed phases (01-research, 02-proposal, 03-design-samples)
│
├── design/                   # Design resources
│   └── sample-5-chosen/      # Chosen design reference
│
├── assets/                   # Media assets
│   └── images/               # Image pipeline (incoming → originals → curated → edited → web-ready)
│
├── src/                      # Next.js application (to be initialized)
│
└── scripts/                  # Utility scripts
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
# Development mode (hot reload)
pnpm dev

# Production build test
pnpm build
pnpm start
```

### Deployment
Push to `main` branch → Vercel automatically deploys

---

## 📦 Key Dependencies

### Core
- `next` - React framework
- `react` - UI library
- `typescript` - Type safety
- `tailwindcss` - Styling

### Services
- `resend` - Email service (contact forms)

### Dev Tools
- `eslint` - Code linting
- `prettier` - Code formatting
- `husky` - Git hooks

---

## 🎯 Next Steps

### Immediate
- [ ] Curate client images (55 photos)
- [ ] Initialize Next.js project
- [ ] Set up development environment
- [ ] Create component structure based on Sample #5

### Development Priorities
1. Homepage implementation (Sample #5 layout)
2. Portfolio gallery system
3. Contact form with email integration
4. Services pages
5. About page
6. Mobile optimization
7. SEO setup

---

## 📞 Client Contact

**Peter Kolia** - Olympus Masonry
📱 Phone: 403-919-5272
✉️ Email: ollympus1@outlook.com
📍 Location: Edmonton, AB

---

## 📝 Notes

- Peter has urgent timeline (high-value client showcase)
- Winter operations are key differentiator
- Keep content minimal and visual-first
- More images expected from Peter during development

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

**Last Updated**: November 2025
**Developer**: Lloyd Lizardo
