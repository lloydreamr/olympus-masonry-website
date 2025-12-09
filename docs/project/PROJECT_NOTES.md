# Olympus Masonry - Project Documentation

## Overview
- **Client:** Olympus Masonry
- **Location:** Edmonton, Alberta, Canada
- **Business:** Masonry contractors (brick, stone, concrete)
- **Contact:** 403-919-5272 | ollympus1@outlook.com

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Custom display/heading fonts
- **Deployment:** Vercel (planned)

## Brand Colors
- **Gold:** `#D4A657` (olympus-gold)
- **Black:** `#0A0A0A` (olympus-black)
- **Accent backgrounds:** Gray variants for contrast

---

## Main Page Structure (`app/page.tsx`)

The homepage uses a **split-screen layout** with 8 sections:
- **Left side:** Content (text, headings, CTAs)
- **Right side:** Visual area (images/design elements)
- **Divider:** Gold gradient line between left and right

### 8 Sections

| # | Section Name | Left Background | Right Background | Notes |
|---|--------------|-----------------|------------------|-------|
| 1 | **MASONRY EXCELLENCE** | Black | TBD | Hero section with main CTA |
| 2 | **Brick & Stone Masonry** (01) | White | TBD | Service description |
| 3 | **Retaining Walls & Patios** (02) | Black | TBD | Service description |
| 4 | **Chimneys & Fireplaces** (03) | White | TBD | Service description |
| 5 | **Years of Excellence** | Gold | TBD | Stats section (4+ years, 100%, 365) |
| 6 | **Winter Masonry** (04) | Black | TBD | Specialty service |
| 7 | **Testimonial** | White | TBD | Quote from John M. |
| 8 | **READY TO START?** | Black | TBD | Final CTA with phone/email |

### Section Pattern
- Odd sections (1,3,5,7): Dark left → Light right (alternating)
- Even sections (2,4,6,8): Light left → Dark right (alternating)

---

## Key Components

| Component | Path | Purpose |
|-----------|------|---------|
| Header | `components/Header.tsx` | Navigation with logo |
| Footer | `components/Footer.tsx` | Contact info, copyright |

---

## CSS Classes (`app/globals.css`)

### Split Layout
- `.split-section` - Grid container (left | divider | right)
- `.split-left` - Content area with padding
- `.split-right` - Visual/image area
- `.split-divider` - Gold gradient line

### Animations
- `.animate-fade-in-up` - Fade in with upward motion
- `.stagger-children` - Staggered list animations (desktop only)
- `.premium-button` - Elevated button with hover effects
- `.premium-badge` - Bordered badge with blur backdrop

### Responsive Breakpoints
- Desktop: 1025px+
- Tablet/Mobile: 1024px and below
- Small Mobile: 480px and below

---

## Image Assets

Images are organized in:
```
assets/images/
├── 01-originals/     # Raw source images
├── 03-edited/        # Enhanced/processed images
├── 04-web-ready/     # Optimized for web (WebP format)
│   ├── portfolio/
│   │   ├── brick-work/
│   │   ├── stone-work/
│   │   ├── patios/
│   │   ├── chimneys/
│   │   └── commercial-retail/
│   └── projects/

public/images/
├── hero/             # Hero section images
├── sections/         # Section-specific images
└── portfolio/        # Portfolio gallery images
```

---

## Services Offered
1. Brick & Stone Masonry (residential & commercial)
2. Retaining Walls
3. Patios & Hardscaping
4. Chimneys & Fireplaces
5. Winter Masonry (cold-weather certified)
6. Emergency Repair Services (24/7)

---

## Design Notes

### Running Bond Pattern (Brick Layout)
If implementing a brick bond visual pattern:
- **Running Bond:** Offset rows by half a brick
- Row pattern: `[1][2][3]` then `  [4][5][6]` (offset)
- For seamless multi-section: Alternate starting offset per section

### Mobile Considerations
- Split layout stacks vertically on mobile (content above, visual below)
- Divider hidden on mobile
- Reduced padding and heights for compact feel
- Hover effects disabled for touch devices

---

## Future Tasks
- [ ] Design and implement right-side visuals for all 8 sections
- [ ] Add portfolio page with project gallery
- [ ] Services page with detailed offerings
- [ ] Contact form integration

---

*Last updated: December 2024*
