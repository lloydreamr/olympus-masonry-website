# Image Implementation Plan
**Project**: Olympus Masonry Website
**Date**: November 29, 2025
**Status**: Ready for Implementation

---

## Executive Summary

This document outlines the comprehensive strategy to replace all Unsplash placeholder images with Peter's professionally enhanced masonry project images. All dimensions have been validated for compatibility with the current website design.

**Critical Finding**: ✅ **PERFECT MATCH** - Our processed images (1920x1080) match the homepage placeholder dimensions exactly!

---

## Current Image Audit

### Homepage Split Sections (app/page.tsx)
All 8 sections use **identical specifications**:

| Section | Current Placeholder | Dimensions | Aspect Ratio | CSS |
|---------|---------------------|------------|--------------|-----|
| Hero | Unsplash brick building | 1920x1080 | 16:9 | `object-cover` |
| Section 2: Brick & Stone | Unsplash brick patio | 1920x1080 | 16:9 | `object-cover` |
| Section 3: Retaining Walls | Unsplash retaining wall | 1920x1080 | 16:9 | `object-cover` |
| Section 4: Chimneys | Unsplash fireplace | 1920x1080 | 16:9 | `object-cover` |
| Section 5: Stats | Unsplash stone work | 1920x1080 | 16:9 | `object-cover` |
| Section 6: Winter Masonry | Unsplash winter work | 1920x1080 | 16:9 | `object-cover` |
| Section 7: Testimonial | Unsplash happy client | 1920x1080 | 16:9 | `object-cover` |
| Section 8: Final CTA | Unsplash construction | 1920x1080 | 16:9 | `object-cover` |

**CSS Implementation** (globals.css:34-38):
```css
.split-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

**Analysis**:
- ✅ Our processed images: **1920x1080 (16:9)**
- ✅ Placeholder images: **1920x1080 (16:9)**
- ✅ `object-cover` handles any minor cropping automatically
- ✅ **100% COMPATIBLE** - no dimension issues!

---

### Portfolio Grid (app/portfolio/page.tsx)
9 project cards in responsive grid:

| Current Placeholder | Dimensions | Aspect Ratio | Container Height | CSS |
|---------------------|------------|--------------|------------------|-----|
| Various Unsplash images | 800x600 | 4:3 | `h-[400px]` fixed | `object-cover` + `group-hover:scale-110` |

**CSS Implementation** (portfolio/page.tsx:93-100):
```tsx
<div className="relative h-[400px] overflow-hidden">
  <Image
    src={project.image}
    alt={project.title}
    width={800}
    height={600}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
  />
</div>
```

**Analysis**:
- ⚠️ Our processed images: **1920x1080 (16:9)**
- ⚠️ Placeholder images: **800x600 (4:3)**
- ✅ `object-cover` will handle aspect ratio difference
- 📊 **Recommendation**: Create optimized 800x600 versions for portfolio (better performance)

---

## Dimension Validation Results

### ✅ Homepage: PERFECT MATCH
Our processed images at **1920x1080** are **IDENTICAL** to current placeholders.

**Why This Works**:
1. Same aspect ratio (16:9)
2. Same exact dimensions (1920x1080)
3. `object-fit: cover` maintains aspect ratio
4. Split-screen layout uses full viewport height
5. Images fill containers perfectly without distortion

### ⚠️ Portfolio: ACCEPTABLE WITH OPTIMIZATION
Our **1920x1080** images will work but should be optimized to **800x600** for best performance.

**Why Current Images Will Work**:
1. `object-cover` automatically crops 16:9 → 4:3
2. Container has fixed `h-[400px]` height
3. Next.js Image component handles responsive sizing
4. Cropping is centered automatically

**Why We Should Optimize**:
1. **Performance**: 1920x1080 images are 2.4x larger than needed
2. **Loading Speed**: Smaller images = faster page load
3. **Mobile Optimization**: 800x600 is more appropriate for grid cards
4. **Bandwidth**: Reduce data usage for users

---

## Image Mapping Strategy

### Homepage Image Assignments

Based on IMAGE-CURATION-REPORT.md, here's the strategic mapping:

#### Section 1: Hero Banner
**Current**: Generic Unsplash brick building
**Replace With**: `commercial-brick-building-winter-hero.webp`
**Location**: `04-web-ready/hero/`
**File Size**: 573KB
**Why**:
- Modern 3-story commercial brick building
- Winter setting (shows year-round capability)
- Professional quality, excellent composition
- Clean, completed project
- Already processed at 1920x1080 ✅

---

#### Section 2: Brick & Stone Masonry
**Current**: Generic Unsplash brick patio
**Replace With**: `commercial-corner-building-modern.webp`
**Location**: `04-web-ready/projects/brick-work/`
**File Size**: 452KB
**Why**:
- Contemporary 4-story corner brick building
- Modern architectural design
- Excellent corner detail work
- Shows commercial expertise
- Aligns with "Commercial & Residential" messaging

**Alternative Options**:
- `commercial-large-complex.webp` (740KB) - Larger scale project
- `orange-brick-residential-01.webp` (320KB) - Residential focus

---

#### Section 3: Retaining Walls & Patios
**Current**: Generic Unsplash retaining wall
**Replace With**: `custom-stone-patio-01.webp`
**Location**: `04-web-ready/projects/patios/`
**File Size**: 494KB
**Why**:
- Directly matches section topic (patios)
- Custom stone patio installation
- Excellent craftsmanship detail visible
- Residential application
- Shows quality finish work

**Alternative Options**:
- `brick-patio-walkway-01.webp` (347KB) - Brick patio example
- `brick-exterior-walkway-01.webp` (360KB) - Walkway focus

---

#### Section 4: Chimneys & Fireplaces
**Current**: Generic Unsplash fireplace
**Replace With**: `stone-chimney-residential-01.webp`
**Location**: `04-web-ready/projects/chimneys/`
**File Size**: 317KB
**Why**:
- Professional chimney installation
- Clean, completed work
- Residential example
- Excellent detail and finish
- Matches "Chimney Repair & Rebuild" messaging

**Alternative Option**:
- `stone-fireplace-feature-wall.webp` (257KB) - Interior fireplace, luxury residential

---

#### Section 5: Stats Section Background
**Current**: Generic Unsplash stone work
**Replace With**: `commercial-large-complex.webp`
**Location**: `04-web-ready/projects/brick-work/`
**File Size**: 740KB
**Why**:
- Impressive scale (multi-story commercial)
- Shows capability for large projects
- Professional photography
- Reinforces "4+ Years of Excellence" stat
- Demonstrates commercial expertise

**Alternative Options**:
- `modern-commercial-storefront-01.webp` (400KB) - Commercial focus
- `midrise-residential-brick-01.webp` (513KB) - Mid-rise building

---

#### Section 6: Winter Masonry
**Current**: Generic Unsplash winter work
**Replace With**: `residential-winter-stone-home.webp`
**Location**: `04-web-ready/projects/stone-work/`
**File Size**: 364KB
**Why**:
- **PERFECT MATCH**: Actually shows winter setting with light snow
- Completed residential stone work
- Professional quality
- Emphasizes "Cold-Weather Certified" messaging
- Demonstrates year-round capability

**No alternative** - This is the ONLY winter image in our collection!

---

#### Section 7: Testimonial Background
**Current**: Generic Unsplash happy client project
**Replace With**: `luxury-home-landscaping.webp`
**Location**: `04-web-ready/projects/stone-work/`
**File Size**: 539KB
**Why**:
- High-end residential project (aspirational)
- Completed with professional landscaping
- Professional composition
- Matches testimonial context (satisfied client)
- Shows finished quality work

**Alternative Options**:
- `luxury-tower-stone-home.webp` (325KB) - Modern luxury home
- `contemporary-stone-accents-01.webp` (289KB) - Contemporary residential

---

#### Section 8: Final CTA Background
**Current**: Generic Unsplash construction
**Replace With**: `luxury-tower-stone-home.webp`
**Location**: `04-web-ready/projects/stone-work/`
**File Size**: 325KB
**Why**:
- Impressive architectural stone work
- Golden hour lighting (aspirational)
- High-end residential
- Inspiring, motivational for CTA
- **Note**: Curation report mentions construction materials at bottom - we'll use `object-position: center top` to crop them out

**Alternative Options**:
- `modern-stone-entry-feature-01.webp` (511KB) - Modern home with stone entry
- `modern-stone-veneer-facade-01.webp` (275KB) - Clean stone facade

---

### Portfolio Grid Image Assignments

The portfolio page currently has **9 placeholder projects**. We have **21 curated images** total.

**Strategy**: Use the remaining images (not used on homepage) to create a diverse portfolio showcase.

#### Portfolio Images (13 remaining after homepage):

**Brick Work Projects** (5 available):
1. `commercial-storefront-brick-01.webp` (381KB) - Commercial storefront
2. `midrise-residential-brick-01.webp` (513KB) - Mid-rise residential
3. `mixed-brick-stone-building-01.webp` (569KB) - Mixed brick/stone
4. `modern-commercial-storefront-01.webp` (400KB) - Modern commercial
5. `orange-brick-residential-01.webp` (320KB) - Orange brick residential

**Stone Work Projects** (5 available):
1. `modern-stone-veneer-facade-01.webp` (275KB) - Modern stone veneer
2. `contemporary-stone-accents-01.webp` (289KB) - Contemporary stone
3. `modern-stone-entry-feature-01.webp` (511KB) - Stone entry feature
4. `custom-stone-kitchen-wall-01.webp` (237KB) - Interior stone kitchen
5. `stone-feature-wall-beam-01.webp` (220KB) - Interior stone wall

**Patio/Walkway Projects** (2 available):
1. `brick-exterior-walkway-01.webp` (360KB) - Brick walkway
2. `brick-patio-walkway-01.webp` (347KB) - Brick patio

**Chimney/Fireplace Projects** (1 available):
1. `stone-fireplace-feature-wall.webp` (257KB) - Interior fireplace

**Total Available for Portfolio**: 13 images
**Currently in Portfolio**: 9 placeholders
**Action**: Replace all 9 + add 4 more for expanded portfolio (total 13)

---

## Implementation Phases

### Phase 1: Image Preparation ✅ COMPLETE
**Status**: All 21 images processed and ready

- [x] Hero image: 1920x1080 WebP @ 573KB
- [x] Brick-work: 7 images @ 1920x1080 WebP
- [x] Stone-work: 8 images @ 1920x1080 WebP
- [x] Patios: 3 images @ 1920x1080 WebP
- [x] Chimneys: 2 images @ 1920x1080 WebP

**Location**: `/assets/images/04-web-ready/`

---

### Phase 2: Create Portfolio-Optimized Versions
**Status**: PENDING
**Action Required**: Create 800x600 versions for portfolio grid

**Why**: While 1920x1080 images will work with `object-cover`, creating 800x600 versions will:
- Reduce page load time by ~60%
- Improve Lighthouse performance score
- Optimize mobile loading
- Match Next.js Image component specifications exactly

**Process**:
```bash
# For each portfolio image, create 800x600 version
magick [input-1920x1080.webp] \
  -gravity center \
  -resize 800x600^ \
  -extent 800x600 \
  -quality 85 \
  -define webp:method=6 \
  04-web-ready/portfolio/[output-800x600.webp]
```

**Estimated File Sizes**: 150-250KB each (vs 300-500KB for 1920x1080)

**Images to Process** (13 total):
- 5 brick-work images
- 5 stone-work images
- 2 patio images
- 1 chimney image

---

### Phase 3: Move Images to Public Directory
**Status**: PENDING
**Action Required**: Move processed images from `/assets/images/04-web-ready/` to `/public/images/`

**Directory Structure to Create**:
```
/public/
├── images/
│   ├── hero/
│   │   └── commercial-brick-building-winter-hero.webp
│   ├── sections/
│   │   ├── brick-work/
│   │   │   ├── commercial-corner-building-modern.webp
│   │   │   └── commercial-large-complex.webp
│   │   ├── stone-work/
│   │   │   ├── residential-winter-stone-home.webp
│   │   │   ├── luxury-home-landscaping.webp
│   │   │   └── luxury-tower-stone-home.webp
│   │   ├── patios/
│   │   │   └── custom-stone-patio-01.webp
│   │   └── chimneys/
│   │       └── stone-chimney-residential-01.webp
│   └── portfolio/
│       ├── brick-work/
│       │   ├── commercial-storefront-brick-01.webp (800x600)
│       │   ├── midrise-residential-brick-01.webp (800x600)
│       │   ├── mixed-brick-stone-building-01.webp (800x600)
│       │   ├── modern-commercial-storefront-01.webp (800x600)
│       │   └── orange-brick-residential-01.webp (800x600)
│       ├── stone-work/
│       │   ├── modern-stone-veneer-facade-01.webp (800x600)
│       │   ├── contemporary-stone-accents-01.webp (800x600)
│       │   ├── modern-stone-entry-feature-01.webp (800x600)
│       │   ├── custom-stone-kitchen-wall-01.webp (800x600)
│       │   └── stone-feature-wall-beam-01.webp (800x600)
│       ├── patios/
│       │   ├── brick-exterior-walkway-01.webp (800x600)
│       │   └── brick-patio-walkway-01.webp (800x600)
│       └── chimneys/
│           └── stone-fireplace-feature-wall.webp (800x600)
```

**Why `/public/images/`**:
- Next.js serves files from `/public/` directory
- Accessible via `/images/hero/filename.webp` URLs
- Proper Next.js convention for static assets
- Easy to reference in Image components

---

### Phase 4: Update Homepage Code
**Status**: PENDING
**File**: `/app/page.tsx`

**Changes Required**: Replace 8 Unsplash URLs with local image paths

#### Section 1: Hero (Line 36-43)
**Before**:
```tsx
<Image
  src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=1920&h=1080&fit=crop&q=80"
  alt="Masonry Work"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
  priority
/>
```

**After**:
```tsx
<Image
  src="/images/hero/commercial-brick-building-winter-hero.webp"
  alt="Modern commercial brick building - Olympus Masonry Edmonton"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
  priority
/>
```

#### Section 2: Brick & Stone (Line 88-94)
**Before**:
```tsx
<Image
  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop&q=80"
  alt="Brick Patio"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
/>
```

**After**:
```tsx
<Image
  src="/images/sections/brick-work/commercial-corner-building-modern.webp"
  alt="Contemporary corner brick building - Commercial masonry Edmonton"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
/>
```

#### Section 3: Retaining Walls & Patios (Line 139-145)
**Before**:
```tsx
<Image
  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=80"
  alt="Retaining Wall"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
/>
```

**After**:
```tsx
<Image
  src="/images/sections/patios/custom-stone-patio-01.webp"
  alt="Custom stone patio installation - Olympus Masonry"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
/>
```

#### Section 4: Chimneys & Fireplaces (Line 190-196)
**Before**:
```tsx
<Image
  src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1920&h=1080&fit=crop&q=80"
  alt="Fireplace"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
/>
```

**After**:
```tsx
<Image
  src="/images/sections/chimneys/stone-chimney-residential-01.webp"
  alt="Residential stone chimney installation - Edmonton masonry"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
/>
```

#### Section 5: Stats Background (Line 233-239)
**Before**:
```tsx
<Image
  src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=1920&h=1080&fit=crop&q=80"
  alt="Stone Work"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
/>
```

**After**:
```tsx
<Image
  src="/images/sections/brick-work/commercial-large-complex.webp"
  alt="Large commercial brick building - Olympus Masonry Edmonton"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
/>
```

#### Section 6: Winter Masonry (Line 284-290)
**Before**:
```tsx
<Image
  src="https://images.unsplash.com/photo-1604782206219-3b9576575203?w=1920&h=1080&fit=crop&q=80"
  alt="Winter Work"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
/>
```

**After**:
```tsx
<Image
  src="/images/sections/stone-work/residential-winter-stone-home.webp"
  alt="Winter masonry - Stone home in snow - Year-round service Edmonton"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
/>
```

#### Section 7: Testimonial Background (Line 321-327)
**Before**:
```tsx
<Image
  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop&q=80"
  alt="Happy Client Project"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
/>
```

**After**:
```tsx
<Image
  src="/images/sections/stone-work/luxury-home-landscaping.webp"
  alt="Luxury stone home - Completed masonry project Edmonton"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
/>
```

#### Section 8: Final CTA Background (Line 361-367)
**Before**:
```tsx
<Image
  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&h=1080&fit=crop&q=80"
  alt="Construction"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
/>
```

**After**:
```tsx
<Image
  src="/images/sections/stone-work/luxury-tower-stone-home.webp"
  alt="Modern luxury stone home - Premium masonry Edmonton"
  width={1920}
  height={1080}
  className="w-full h-full object-cover object-top"
/>
```

**Note**: Added `object-top` to crop construction materials at bottom of image.

---

### Phase 5: Update Portfolio Code
**Status**: PENDING
**File**: `/app/portfolio/page.tsx`

**Changes Required**: Replace projects array with real project data (13 projects)

**Strategy**:
1. Update `projects` array with 13 real projects
2. Use 800x600 optimized images
3. Write accurate descriptions based on actual images
4. Categorize properly by project type

**New Projects Array**:
```tsx
const projects = [
  // Brick Work Projects (5)
  {
    title: "Commercial Storefront Brick Facade",
    category: "Commercial Brick Work",
    description: "Professional brick facade installation for commercial storefront in Edmonton.",
    image: "/images/portfolio/brick-work/commercial-storefront-brick-01.webp",
  },
  {
    title: "Mid-Rise Residential Brick Building",
    category: "Residential Brick Work",
    description: "Modern mid-rise residential building with expert brick masonry craftsmanship.",
    image: "/images/portfolio/brick-work/midrise-residential-brick-01.webp",
  },
  {
    title: "Mixed Brick and Stone Building",
    category: "Commercial Projects",
    description: "Multi-story mixed brick and stone residential building showcasing versatile masonry skills.",
    image: "/images/portfolio/brick-work/mixed-brick-stone-building-01.webp",
  },
  {
    title: "Modern Commercial Storefront",
    category: "Commercial Brick Work",
    description: "Contemporary commercial brick storefront with clean lines and professional finish.",
    image: "/images/portfolio/brick-work/modern-commercial-storefront-01.webp",
  },
  {
    title: "Orange Brick Residential Building",
    category: "Residential Brick Work",
    description: "Charming mid-rise orange-red brick residential building with timeless appeal.",
    image: "/images/portfolio/brick-work/orange-brick-residential-01.webp",
  },

  // Stone Work Projects (5)
  {
    title: "Modern Stone Veneer Facade",
    category: "Residential Stone Work",
    description: "Contemporary home featuring modern stone veneer facade with clean architectural lines.",
    image: "/images/portfolio/stone-work/modern-stone-veneer-facade-01.webp",
  },
  {
    title: "Contemporary Stone Accent Home",
    category: "Residential Stone Work",
    description: "Beautiful contemporary home with large stone accent features showcasing expert craftsmanship.",
    image: "/images/portfolio/stone-work/contemporary-stone-accents-01.webp",
  },
  {
    title: "Stone Entry Feature",
    category: "Residential Stone Work",
    description: "Modern residential home with prominent stone entry feature wall.",
    image: "/images/portfolio/stone-work/modern-stone-entry-feature-01.webp",
  },
  {
    title: "Custom Stone Kitchen Wall",
    category: "Interior Stone Work",
    description: "Luxury custom stone feature wall in modern kitchen interior.",
    image: "/images/portfolio/stone-work/custom-stone-kitchen-wall-01.webp",
  },
  {
    title: "Stone Feature Wall with Beam",
    category: "Interior Stone Work",
    description: "Elegant stone feature wall with wooden beam detail in residential interior.",
    image: "/images/portfolio/stone-work/stone-feature-wall-beam-01.webp",
  },

  // Patio & Walkway Projects (2)
  {
    title: "Brick Exterior Walkway",
    category: "Patios & Walkways",
    description: "Professional brick walkway installation for residential property.",
    image: "/images/portfolio/patios/brick-exterior-walkway-01.webp",
  },
  {
    title: "Brick Patio Installation",
    category: "Patios & Walkways",
    description: "Custom brick patio and walkway with expert craftsmanship and attention to detail.",
    image: "/images/portfolio/patios/brick-patio-walkway-01.webp",
  },

  // Chimney & Fireplace Projects (1)
  {
    title: "Luxury Stone Fireplace",
    category: "Fireplaces",
    description: "Stunning stone fireplace feature wall in luxury residential home.",
    image: "/images/portfolio/chimneys/stone-fireplace-feature-wall.webp",
  },
];
```

---

### Phase 6: SEO Optimization
**Status**: PENDING

**Action Required**: Update alt tags for accessibility and SEO

**Alt Tag Best Practices**:
1. Describe what's in the image
2. Include relevant keywords naturally
3. Include location (Edmonton) when appropriate
4. Keep under 125 characters
5. Don't start with "Image of" or "Picture of"

**Examples**:
- ❌ Bad: "Image 1" or "IMG_2458.jpg"
- ❌ Bad: "Masonry work"
- ✅ Good: "Modern commercial brick building - Olympus Masonry Edmonton"
- ✅ Good: "Winter masonry - Stone home in snow - Year-round service Edmonton"

---

### Phase 7: Performance Testing
**Status**: PENDING

**Action Required**: Test performance after implementation

**Tests to Run**:

1. **Lighthouse Audit** (Chrome DevTools)
   - Performance score (target: 90+)
   - Accessibility score (target: 95+)
   - Best Practices score (target: 100)
   - SEO score (target: 100)

2. **WebP Support Check**
   - Verify fallback for older browsers
   - Test in Safari, Chrome, Firefox, Edge

3. **Image Loading Check**
   - Verify lazy loading works (non-hero images)
   - Verify hero image loads with `priority`
   - Check for layout shift (CLS score)

4. **Mobile Responsiveness**
   - Test on iPhone, Android, tablets
   - Verify object-cover cropping looks good
   - Check loading speed on 3G/4G

5. **Page Load Speed**
   - Homepage total load time (target: < 3s)
   - Portfolio page load time (target: < 3s)
   - Time to First Contentful Paint (target: < 1.5s)

---

## Risk Assessment & Mitigation

### Risk 1: Aspect Ratio Mismatch
**Probability**: LOW
**Impact**: LOW
**Mitigation**:
- ✅ Homepage: 1920x1080 matches exactly
- ⚠️ Portfolio: `object-cover` handles 16:9 → 4:3 automatically
- ✅ Creating 800x600 versions eliminates any potential issues

### Risk 2: File Size Too Large
**Probability**: LOW
**Impact**: MEDIUM (page load speed)
**Mitigation**:
- ✅ All images optimized to WebP format
- ✅ Quality set to 85% (optimal balance)
- ✅ Average file size: 403KB (acceptable for 1920x1080)
- ✅ Portfolio 800x600 versions will be ~150-250KB

### Risk 3: Construction Materials Visible in Final CTA Image
**Probability**: MEDIUM
**Impact**: LOW
**Mitigation**:
- ✅ Use `object-position: top` to crop bottom of image
- ✅ Alternative: Use different image from stone-work collection
- ✅ Curation report already noted this issue

### Risk 4: Not Enough Variety in Portfolio
**Probability**: LOW
**Impact**: LOW
**Mitigation**:
- ✅ Have 13 unique images for portfolio (vs 9 current)
- ✅ Good mix: 5 brick, 5 stone, 2 patio, 1 chimney
- ✅ Mix of commercial and residential projects

### Risk 5: Winter Image Quality
**Probability**: LOW
**Impact**: LOW
**Mitigation**:
- ✅ Only one winter image available, but it's high quality
- ✅ Winter section critical for messaging (cold-weather capability)
- ✅ Image shows light snow, perfect for demonstration

---

## Quality Assurance Checklist

### Pre-Implementation
- [ ] All 21 images enhanced and in WebP format ✅ COMPLETE
- [ ] Create 800x600 portfolio versions
- [ ] Move images to `/public/images/` directory
- [ ] Verify all file paths are correct
- [ ] Review alt tags for SEO compliance

### During Implementation
- [ ] Update homepage `app/page.tsx` (8 image replacements)
- [ ] Update portfolio `app/portfolio/page.tsx` (13 image replacements)
- [ ] Test homepage in development mode
- [ ] Test portfolio page in development mode
- [ ] Verify no broken image links

### Post-Implementation
- [ ] Visual QA: Check all images display correctly
- [ ] Responsive QA: Test mobile, tablet, desktop
- [ ] Performance QA: Run Lighthouse audit
- [ ] Browser QA: Test Chrome, Firefox, Safari, Edge
- [ ] SEO QA: Verify alt tags and image optimization
- [ ] Accessibility QA: Check WCAG 2.1 compliance

### Production Deployment
- [ ] Build production version: `npm run build`
- [ ] Test production build locally
- [ ] Deploy to Vercel
- [ ] Test live site
- [ ] Monitor Core Web Vitals in Vercel dashboard
- [ ] Get client approval

---

## Expected Results

### Performance Improvements
- **Homepage Load Time**: 15-25% faster (smaller WebP vs Unsplash)
- **Portfolio Load Time**: 40-50% faster (optimized 800x600 images)
- **Lighthouse Score**: 90+ (currently unknown baseline)
- **Mobile Performance**: Significant improvement due to smaller images

### SEO Benefits
- **Image Alt Tags**: Proper descriptive tags with Edmonton keyword
- **Local SEO**: Location-based keywords in alt tags
- **Unique Content**: No stock photos, all original work
- **User Trust**: Real projects increase credibility

### Client Satisfaction
- **Authentic Representation**: Shows Peter's actual work
- **Professional Quality**: Enhanced images look polished
- **Project Diversity**: Showcases range of capabilities
- **Year-Round Capability**: Winter image demonstrates cold-weather expertise

---

## Implementation Timeline

### Immediate (Today)
1. ✅ Image audit complete
2. ✅ Dimension validation complete
3. ✅ Image mapping strategy finalized
4. ⏳ Awaiting approval to proceed

### Phase A: Portfolio Image Optimization (30 minutes)
1. Create 800x600 versions of 13 portfolio images
2. Batch process with ImageMagick
3. Validate file sizes (target: 150-250KB each)

### Phase B: File Organization (15 minutes)
1. Create `/public/images/` directory structure
2. Copy homepage images (8 files) to appropriate folders
3. Copy portfolio images (13 files) to portfolio folders
4. Verify all 21 files in correct locations

### Phase C: Code Updates (45 minutes)
1. Update `app/page.tsx` (8 image source changes)
2. Update `app/portfolio/page.tsx` (13 project entries)
3. Update all alt tags for SEO
4. Test in development mode

### Phase D: Testing & QA (30 minutes)
1. Visual QA on localhost
2. Responsive testing (mobile, tablet, desktop)
3. Lighthouse performance audit
4. Cross-browser testing

### Phase E: Deployment (15 minutes)
1. Build production: `npm run build`
2. Deploy to Vercel
3. Test live site
4. Client review and approval

**Total Estimated Time**: 2.5 hours

---

## Success Metrics

### Technical Metrics
- [ ] All 21 images successfully replaced
- [ ] Zero broken image links
- [ ] Lighthouse Performance: 90+
- [ ] Lighthouse Accessibility: 95+
- [ ] Mobile page load: < 3 seconds
- [ ] Desktop page load: < 2 seconds

### Visual Quality Metrics
- [ ] Images display correctly in all browsers
- [ ] No aspect ratio distortion
- [ ] Object-cover cropping looks professional
- [ ] Color and contrast meet brand standards
- [ ] No visible compression artifacts

### SEO Metrics
- [ ] All alt tags descriptive and keyword-rich
- [ ] Image file names semantic and SEO-friendly
- [ ] Core Web Vitals pass Google standards
- [ ] No layout shift issues (CLS)

### Client Approval Metrics
- [ ] Client approves image selections
- [ ] Client approves image quality
- [ ] Client approves page performance
- [ ] Ready for production launch

---

## Next Steps

**AWAITING USER APPROVAL** to proceed with:

1. **Phase A**: Create 800x600 portfolio image versions
2. **Phase B**: Move all images to `/public/images/` directory
3. **Phase C**: Update homepage and portfolio code
4. **Phase D**: Test and validate implementation
5. **Phase E**: Deploy to production

**User Decision Required**:
- ✅ Approve image mapping strategy (Section assignments)
- ✅ Approve portfolio image selections (13 projects)
- ✅ Confirm alt tag approach (SEO-optimized descriptions)
- ✅ Confirm timeline (2.5 hours estimated)

---

## Appendix: Technical Specifications

### Image Format: WebP
- **Browser Support**: 97%+ (Chrome, Firefox, Edge, Safari 14+)
- **Compression**: 25-35% smaller than JPEG at same quality
- **Quality Setting**: 85% (optimal balance)
- **Method**: 6 (best compression)

### Dimensions Summary
| Use Case | Dimensions | Aspect Ratio | Format | Avg Size |
|----------|------------|--------------|--------|----------|
| Homepage Hero | 1920x1080 | 16:9 | WebP | 573KB |
| Homepage Sections | 1920x1080 | 16:9 | WebP | 300-500KB |
| Portfolio Grid | 800x600 | 4:3 | WebP | 150-250KB |

### CSS Implementation
**Homepage** (`globals.css`):
```css
.split-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Optional: object-position: center (default) */
}
```

**Portfolio** (`portfolio/page.tsx`):
```tsx
className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
```

### Next.js Image Component
```tsx
<Image
  src="/images/hero/filename.webp"
  alt="Descriptive alt text with keywords"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
  priority  // Only for hero image
/>
```

**Priority Flag**:
- Use on hero image only
- Preloads image for LCP optimization
- Prevents lazy loading delay

---

**Document Version**: 1.0
**Last Updated**: November 29, 2025
**Author**: Development Team
**Status**: Ready for Approval
