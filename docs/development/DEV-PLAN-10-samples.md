# Development Plan: 10 Homepage Design Samples for Olympus Masonry

## Project Goal

Create 10 distinct homepage design samples for Peter (Olympus Masonry client) to evaluate and choose his preferred design direction. Each sample will showcase a different design approach while maintaining the Olympus brand identity (black, gold, white colors + pyramid logo).

---

## Project Structure

```
olympus-mansory/
├── samples/
│   ├── index.html                 # Main selection page with thumbnails
│   ├── shared/
│   │   ├── css/
│   │   │   ├── reset.css         # CSS reset
│   │   │   └── variables.css     # Shared CSS variables (colors, fonts)
│   │   ├── js/
│   │   │   └── shared.js         # Shared JavaScript utilities
│   │   └── images/
│   │       ├── logo.png          # Olympus logo
│   │       └── placeholder/      # Placeholder images for all samples
│   │           ├── hero-*.jpg    # Hero images (various)
│   │           ├── project-*.jpg # Project photos
│   │           ├── team-*.jpg    # Team/owner photos
│   │           └── texture-*.jpg # Background textures
│   ├── sample-1/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── sample-2/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   └── ... (sample-3 through sample-10)
└── DEV-PLAN-10-samples.md        # This file
```

---

## Shared Assets & Resources

### Brand Colors (EXACT - Use across ALL samples)

**IMPORTANT:** All 10 samples MUST use the exact same color palette from the business card.

```css
/* shared/css/variables.css */
:root {
  /* Olympus Brand Colors - FROM BUSINESS CARD */
  --olympus-gold: #D4A657;        /* Primary gold/yellow from logo and text */
  --olympus-gold-light: #E5C078;  /* Lighter variant for hover states */
  --olympus-gold-dark: #B8903C;   /* Darker variant for active states */

  --olympus-black: #000000;       /* Pure black from business card background */
  --olympus-charcoal: #1A1A1A;    /* Slightly lighter for softer black sections */

  --olympus-white: #FFFFFF;       /* Pure white from "MASONRY" text */
  --olympus-off-white: #F8F8F8;   /* Very light gray for subtle backgrounds */

  /* Text Colors - Use these consistently */
  --text-on-white: #000000;       /* Black text on white backgrounds */
  --text-on-black: #FFFFFF;       /* White text on black backgrounds */
  --text-gold: #D4A657;           /* Gold for accents/highlights */

  /* Backgrounds - Use these consistently */
  --bg-white: #FFFFFF;            /* Primary white background */
  --bg-black: #000000;            /* Primary black background */
  --bg-light: #F8F8F8;            /* Subtle off-white for alternating sections */

  /* Spacing */
  --space-xs: 8px;
  --space-s: 16px;
  --space-m: 24px;
  --space-l: 32px;
  --space-xl: 64px;
  --space-xxl: 80px;

  /* Transitions */
  --transition-fast: 0.15s;
  --transition-base: 0.2s;
  --transition-slow: 0.4s;
}
```

**Color Usage Rules (Apply to ALL samples):**
- **Primary palette:** Black, Gold, White ONLY
- **No gray text** - Use black or white depending on background
- **Gold for accents:** Buttons, highlights, hover states, borders
- **Black for:** Headers, primary text, dark sections
- **White for:** Light sections, text on dark backgrounds
- **DO NOT** introduce new colors or variations

### Typography (EXACT - Use across ALL samples)

**IMPORTANT:** All 10 samples MUST use the same fonts matching the business card style.

**From Business Card Analysis:**
- "OLYMPUS" uses a bold, geometric sans-serif (uppercase, wide, strong)
- "MASONRY" uses a clean, spaced sans-serif (uppercase, tracking)
- Body text (name, contact) uses a clean, readable sans-serif

**Selected Fonts (Matching Business Card):**

```html
<!-- Add to ALL HTML files -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

```css
/* Typography Variables - CONSISTENT ACROSS ALL SAMPLES */
:root {
  --font-display: 'Bebas Neue', sans-serif;     /* For "OLYMPUS" style text - Bold, geometric */
  --font-heading: 'Oswald', sans-serif;         /* For "MASONRY" style - Clean, strong */
  --font-body: 'Inter', sans-serif;             /* For body text - Readable, modern */
}

/* Typography Usage */
.logo-text,
.hero-main {
  font-family: var(--font-display);     /* Bebas Neue - Like "OLYMPUS" */
  font-weight: 400;                      /* Bebas Neue is naturally bold */
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

h1, h2, h3 {
  font-family: var(--font-heading);     /* Oswald - Like "MASONRY" */
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

body, p, a, li {
  font-family: var(--font-body);        /* Inter - Clean, readable */
  font-weight: 400;
}
```

**Font Rules (Apply to ALL samples):**
- **DO NOT** change fonts between samples
- **DO NOT** use different font families
- Use Bebas Neue for large display text (hero headlines)
- Use Oswald for section headlines
- Use Inter for body text
- Keep uppercase styling for headlines (matches business card)
- Keep letter-spacing consistent

### Placeholder Images

**Use Unsplash for high-quality, free placeholder images:**

**Hero Images (1920x1080):**
- Brick wall close-up: `https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=1920&h=1080&fit=crop`
- Stone masonry work: `https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=1920&h=1080&fit=crop`
- Modern building facade: `https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop`
- Construction site: `https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&h=1080&fit=crop`
- Dark brick texture: `https://images.unsplash.com/photo-1604782206219-3b9576575203?w=1920&h=1080&fit=crop`

**Project Images (800x600):**
- Patio/walkway: `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop`
- Fireplace: `https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop`
- Retaining wall: `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop`
- Stone facade: `https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop`
- Chimney work: `https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop`
- Brick detail: `https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop`

**Person/Team (400x400):**
- Professional contractor: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop`

**Logo:**
- Create a simple SVG version of the Olympus logo or use a placeholder with text

### Content (Use across all samples)

**Company Info:**
- Company: Olympus Masonry
- Owner: Peter Kolia
- Phone: 403-919-5272
- Phone (Cell): 403-919-5272
- Email: ollympus1@outlook.com
- Location: Edmonton, Alberta

**Taglines (vary per design):**
- "Edmonton's Premier Masonry Contractors"
- "Expert Craftsmanship in Brick, Stone & Concrete"
- "Building Excellence Since [Year]"
- "Year-Round Masonry Services"

**Services (keep brief):**
1. Brick & Stone Masonry
2. Retaining Walls & Patios
3. Chimneys & Fireplaces
4. Concrete Work
5. Winter Masonry Services

**Sample Text:**
"Expert masonry services for residential and commercial projects. From patios to building facades, we deliver exceptional craftsmanship that stands the test of time."

---

## Sample Designs Breakdown

**CRITICAL: All samples use IDENTICAL:**
- Colors (Black, Gold, White ONLY)
- Fonts (Bebas Neue, Oswald, Inter)
- Logo (same Olympus pyramid logo)
- Branding elements

**What DIFFERS between samples:**
- Layout structure
- Content arrangement
- Visual hierarchy
- Component organization
- Design patterns (cards, grids, carousels, etc.)
- Spacing and whitespace
- Hero approach
- Section layouts

---

### Sample 1: Minimal Gold (Thomann-Hanry Inspired)

**Layout Approach:** Clean, professional, minimal text with carousels

**Key Features:**
- Dark hero with gold accent badge
- 40% text / 60% image carousel sections
- White background with generous spacing
- Subtle gold accents on hover
- Simple navigation

**Hero Section:**
- Full-width dark hero (black overlay on brick image)
- Gold badge: "Year-Round Service"
- Large white headline: "Edmonton's Premier Masonry Contractors"
- Subheadline in light gray
- Two buttons: Gold primary + White outline

**Body Sections:**
- 3 service sections (text left, carousel right)
- Trust signals bar (black background, gold numbers)
- Testimonial carousel
- CTA section (dark background, gold button)

**Navigation:**
- Sticky white header
- Black logo + text links
- Gold phone number (right)
- Gold "Get Quote" button

---

### Sample 2: Bold Gold (High-Energy)

**Layout Approach:** More prominent use of gold sections, energetic feel

**Key Features:**
- MORE gold-colored sections/backgrounds
- Gold section header bars
- Black & gold alternating sections
- Higher contrast layouts
- Larger, bolder typography sizes

**Hero Section:**
- Black overlay on hero image
- LARGE gold headline (Bebas Neue, huge size)
- White subheadline
- Gold button prominent

**Body Sections:**
- Full-width GOLD background sections (with black text)
- Alternating: White section → Gold section → Black section → repeat
- Gold header bars above section titles
- Gold borders/dividers between sections
- Larger typography throughout

**Navigation:**
- Black header background
- White text links, gold hover underline
- Gold button (black text)

---

### Sample 3: Dark & Luxe (Premium Feel)

**Layout Approach:** Mostly dark backgrounds, sophisticated spacing

**Key Features:**
- BLACK backgrounds dominant (70-80% of page)
- Gold as premium accent lines/borders
- Extra generous spacing (premium feel)
- Larger font sizes
- Refined, minimal layouts

**Hero Section:**
- Full dark hero with subtle overlay
- Thin gold border/line accent
- White headline (Bebas Neue) with one word in gold
- White subheadline
- Gold button with black text

**Body Sections:**
- Most sections: BLACK background with white text
- Occasional white section for contrast
- Gold thin dividing lines between sections
- Minimal content per section (lots of whitespace)
- Content in centered containers (not full-width)

**Navigation:**
- Black background (or transparent → black on scroll)
- White links with gold underline on hover
- Gold button

---

### Sample 4: Modern Grid (Masonry Layout)

**Design Approach:** Pinterest-style masonry grid, highly visual

**Key Features:**
- Simple hero
- Large masonry grid of project images
- Minimal text overlays on images
- Modern, clean aesthetic
- Image-first approach

**Hero Section:**
- Split hero: Text left (40%) + Large image right (60%)
- White background
- Black text with gold accent word
- Clean, minimal

**Body Sections:**
- Masonry grid gallery (3 columns, various heights)
- Text overlays on hover (service names)
- Brief intro text section
- Trust stats as overlay cards on images

**Navigation:**
- Clean white header
- Minimal links
- Gold accent on active page

---

### Sample 5: Split Screen (Text Left, Images Right)

**Layout Approach:** Consistent 50/50 split throughout entire page

**Key Features:**
- Fixed 50/50 vertical split layout
- Text ALWAYS left, images ALWAYS right
- Full-height sections
- Strong vertical division line

**Hero Section:**
- Left 50%: Black background, white/gold text, headline, CTA
- Right 50%: Large hero image (full height)
- Gold vertical dividing line down the middle

**Body Sections:**
- Each section maintains perfect 50/50 split
- Left: Text content (alternates white/black backgrounds)
- Right: Image or carousel (full height matches left side)
- Gold dividing line remains consistent throughout

**Navigation:**
- Full-width bar above split (black background)
- Centered logo + navigation
- Gold accents

---

### Sample 6: Full-Width Sections (Magazine Style)

**Design Approach:** Full-width sections with varying layouts, editorial feel

**Key Features:**
- Full-width hero
- Each section full-width with different layouts
- Large typography
- Bold imagery
- Magazine/editorial aesthetic

**Hero Section:**
- Full-width hero image
- Centered text overlay
- Large, bold headline
- Minimal elements

**Body Sections:**
- Section 1: Full-width image with text overlay
- Section 2: Text full-width on white
- Section 3: Grid of 3 images
- Section 4: Large quote testimonial
- Section 5: Split image/text
- Varied, dynamic layouts

**Navigation:**
- Minimal top bar
- Hamburger menu (mobile-first)
- Gold accent on logo

---

### Sample 7: Card-Based (Modern, Clean Cards)

**Design Approach:** Everything in clean, modern cards with shadows

**Key Features:**
- Card-based design system
- Consistent spacing
- Modern shadows
- Clean, organized
- Grid layouts

**Hero Section:**
- Large hero card (centered, not full-width)
- White card with shadow on dark/image background
- Content inside card
- Floating aesthetic

**Body Sections:**
- Service cards (3 per row)
- Image cards with text overlays
- Testimonial cards
- All with consistent shadow/radius
- Grid-based layout

**Navigation:**
- Header in a card (floating at top)
- Subtle shadow
- Clean, modern

---

### Sample 8: Carousel Hero (Image Slider Focus)

**Design Approach:** Large carousel hero, multiple slides, very visual

**Key Features:**
- Full-screen carousel hero (3-5 slides)
- Auto-rotating slides
- Large project images
- Minimal text on slides
- Visual-first

**Hero Section:**
- Full-screen carousel (Slide 1: brick work, Slide 2: stone patio, etc.)
- Text overlay on each slide
- Different headline per slide
- Dots + arrows navigation
- Auto-play (5s intervals)

**Body Sections:**
- Simple, clean sections after hero
- Let hero be the star
- Minimal text sections
- Small image carousels for services

**Navigation:**
- Transparent header over carousel
- Becomes solid on scroll
- Gold progress bar for carousel

---

### Sample 9: Video Hero (Dynamic, Engaging)

**Design Approach:** Video background in hero, dynamic, modern

**Key Features:**
- Video background (looping)
- Minimal text overlay
- Modern, engaging
- Dynamic feel
- Premium aesthetic

**Hero Section:**
- Full-width video background (masonry work timelapse)
- Dark overlay (60% opacity)
- White headline
- Minimal text
- Single gold CTA button
- Muted video (no sound), auto-loop

**Body Sections:**
- Clean white sections after video hero
- Simple layouts
- Let video hero be the focal point
- Mix of text and images

**Navigation:**
- Transparent header over video
- White text/logo
- Becomes black on scroll

**Note:** Use placeholder video or animated background if no video available.

---

### Sample 10: Minimal Brutalist (Ultra-Clean, Geometric)

**Layout Approach:** Extreme minimalism, geometric shapes, bold confidence

**Key Features:**
- EXTREME whitespace (sections are 80% empty space)
- Geometric gold shapes (circles, squares, lines)
- HUGE typography
- Minimal text (5-10 words maximum per section)
- Bold, confident, stark

**Hero Section:**
- White background (full screen)
- MASSIVE black headline centered (Bebas Neue, 150px+)
- Single gold geometric shape (circle or line)
- ONE button (black background, gold text)
- 80% whitespace

**Body Sections:**
- Mostly white backgrounds
- HUGE section numbers in gold (01, 02, 03) - 200px+
- One large image per section (very large, edge-to-edge)
- 5-10 word headlines ONLY
- Geometric gold accent shapes (minimal)
- Grid-based, precise alignment

**Navigation:**
- Minimal: Just logo + one "Contact" button
- Ultra-clean, lots of space

---

## Development Guidelines

### Technical Requirements

**For Each Sample:**

1. **HTML Structure:**
   - Semantic HTML5
   - Clean, readable code
   - Comments for major sections
   - Proper alt tags for images
   - Meta tags (title, description)

2. **CSS:**
   - Mobile-first approach
   - Responsive breakpoints (768px, 1024px, 1440px)
   - CSS Grid and Flexbox
   - Use CSS variables from `shared/css/variables.css`
   - Smooth transitions (0.2s)
   - No frameworks required (pure CSS is fine)

3. **JavaScript:**
   - Vanilla JS (no jQuery required unless for carousels)
   - For carousels: Use Slick Carousel or Swiper.js
   - Smooth scroll functionality
   - Mobile menu toggle
   - Simple, lightweight

4. **Responsive:**
   - Mobile-first design
   - Test at 375px (mobile), 768px (tablet), 1440px (desktop)
   - Hamburger menu on mobile
   - Stacked layouts on mobile
   - Touch-friendly buttons (48px min)

5. **Performance:**
   - Optimize images (use Unsplash's URL parameters: `?w=1920&q=80`)
   - Lazy load images below fold
   - Minimal JavaScript
   - Fast loading (<3s)

### Carousel Implementation

**For samples that need carousels (1, 2, 8):**

**Option 1: Slick Carousel (easier)**
```html
<!-- Add to HTML -->
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
```

**Option 2: Swiper.js (modern, no jQuery)**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

### Common Components

**All samples should include:**

1. **Header/Navigation:**
   - Logo (linked to home)
   - Main nav: Services, Portfolio, About, Contact
   - Phone number (clickable)
   - "Get Quote" CTA button
   - Mobile hamburger menu

2. **Hero Section:**
   - Headline
   - Subheadline/description
   - Primary CTA button
   - Background image or video

3. **Services Section:**
   - 3-5 services
   - Brief description (1-2 sentences each)
   - Image/icon for each

4. **Trust Signals:**
   - Years in business (use "15+" as placeholder)
   - "Licensed & Insured"
   - "Year-Round Service"
   - "Edmonton Local"

5. **Testimonial:**
   - At least 1 testimonial
   - Name + location
   - 5-star rating (visual)

6. **Final CTA:**
   - "Ready to start?" headline
   - Brief text
   - "Get Free Estimate" button
   - Phone number

7. **Footer:**
   - Logo
   - Services links
   - Contact info
   - Copyright
   - Privacy/Terms links

**Content Length:**
- Homepage should be 3-4 screens of scrolling
- Not too long, not too short
- Fast to scan
- Visually balanced

---

## Index Page (Selection Hub)

Create `samples/index.html` as a selection page:

**Features:**
- Grid of 10 thumbnails (screenshots of each sample)
- Sample name + brief description under each
- Click to open sample in new tab
- Simple, clean design
- Olympus branding

**Layout:**
```
┌─────────────────────────────────┐
│     Olympus Masonry Samples     │
│  Choose Your Preferred Design   │
└─────────────────────────────────┘

┌────────┐ ┌────────┐ ┌────────┐
│Sample 1│ │Sample 2│ │Sample 3│
│Minimal │ │Bold    │ │Dark    │
│ Gold   │ │ Gold   │ │& Luxe  │
└────────┘ └────────┘ └────────┘

┌────────┐ ┌────────┐ ┌────────┐
│Sample 4│ │Sample 5│ │Sample 6│
│Modern  │ │Split   │ │Full    │
│ Grid   │ │Screen  │ │Width   │
└────────┘ └────────┘ └────────┘

... (and so on)
```

**Implementation:**
- Take screenshots of each sample (use browser dev tools)
- Save as `sample-1/thumbnail.jpg`, etc.
- Link each thumbnail to respective sample
- Simple grid layout
- Hover effects on thumbnails

---

## Development Order

**Phase 1: Setup (30 min)**
1. Create folder structure
2. Set up `shared/css/variables.css` with brand colors
3. Create `shared/css/reset.css` with CSS reset
4. Create logo placeholder
5. Collect placeholder images

**Phase 2: Build Samples (6-8 hours total)**
Build in this order (easiest to most complex):

1. **Sample 10** (Minimal Brutalist) - Simplest, pure HTML/CSS (30 min)
2. **Sample 7** (Card-Based) - Clean, straightforward (45 min)
3. **Sample 4** (Modern Grid) - CSS Grid practice (1 hour)
4. **Sample 5** (Split Screen) - Fixed layout (1 hour)
5. **Sample 3** (Dark & Luxe) - Styling practice (1 hour)
6. **Sample 1** (Minimal Gold) - Add carousel (1.5 hours)
7. **Sample 2** (Bold Gold) - Variation of Sample 1 (1 hour)
8. **Sample 6** (Full-Width) - Varied layouts (1.5 hours)
9. **Sample 8** (Carousel Hero) - Carousel intensive (1.5 hours)
10. **Sample 9** (Video Hero) - Most complex (1.5 hours)

**Phase 3: Polish (1-2 hours)**
1. Test all samples on mobile
2. Fix responsive issues
3. Ensure consistent branding
4. Check all links work
5. Optimize images

**Phase 4: Index Page (30 min)**
1. Take screenshots of all samples
2. Build index.html selection page
3. Link all samples

---

## Quality Checklist (For Each Sample)

**Visual:**
- [ ] Olympus brand colors used correctly
- [ ] Logo present and visible
- [ ] Images load correctly
- [ ] Typography is readable
- [ ] Spacing feels balanced
- [ ] Design looks polished

**Functional:**
- [ ] All links work (even if placeholder)
- [ ] Buttons have hover states
- [ ] Carousel works (if applicable)
- [ ] Mobile menu toggles correctly
- [ ] Forms have basic styling
- [ ] Phone numbers are clickable

**Responsive:**
- [ ] Works on mobile (375px)
- [ ] Works on tablet (768px)
- [ ] Works on desktop (1440px)
- [ ] Images scale properly
- [ ] Text is readable at all sizes
- [ ] Navigation adapts to mobile

**Performance:**
- [ ] Page loads in < 3 seconds
- [ ] No console errors
- [ ] Images are optimized
- [ ] CSS is minified or concatenated
- [ ] JavaScript is minimal

**Content:**
- [ ] Company name correct (Olympus Masonry)
- [ ] Contact info present
- [ ] Services listed
- [ ] At least 1 testimonial
- [ ] Trust signals visible
- [ ] Call-to-action clear

---

## Deliverables

**Final Structure:**
```
olympus-mansory/
├── samples/
│   ├── index.html                    # Selection hub
│   ├── shared/                       # Shared resources
│   ├── sample-1/
│   │   ├── index.html
│   │   ├── style.css
│   │   ├── script.js
│   │   └── thumbnail.jpg             # Screenshot for index
│   ├── sample-2/ ... sample-10/
│   └── screenshots/                  # Full-page screenshots
│       ├── sample-1-full.jpg
│       └── ... (1-10)
```

**For Client Review:**
1. **index.html** - Main selection page
2. **10 working samples** - Each fully functional
3. **Screenshots folder** - Full-page captures of each design
4. **README.md** - Simple instructions for Peter on how to view samples

---

## Sample README for Client

```markdown
# Olympus Masonry - Design Samples

Hi Peter,

We've created 10 different homepage designs for you to review.

## How to View

1. Open `samples/index.html` in your web browser
2. Click on any design thumbnail to view it
3. Browse through all 10 options
4. Make notes on which designs you like best

## Samples Overview

1. **Minimal Gold** - Clean, professional (like high-end UK sites)
2. **Bold Gold** - More energetic, stands out
3. **Dark & Luxe** - Premium, sophisticated feel
4. **Modern Grid** - Image-focused, Pinterest-style
5. **Split Screen** - Consistent 50/50 layout
6. **Full-Width** - Magazine/editorial style
7. **Card-Based** - Modern, clean cards
8. **Carousel Hero** - Large image slider
9. **Video Hero** - Dynamic background video
10. **Minimal Brutalist** - Ultra-clean, bold

## What to Consider

- Which design feels most professional?
- Which showcases your work best?
- Which matches how you want customers to see Olympus?
- Which is easiest to navigate?
- Do you prefer dark or light backgrounds?
- How much gold accent do you like?

## Next Steps

Let us know your top 3 favorites, and we'll refine them further!

Questions? Call or email us.
```

---

## Notes for Dev Agent

**Important:**
- Use placeholder images consistently across samples
- Keep code clean and commented
- Each sample should be self-contained (own CSS/JS)
- Don't over-engineer - these are samples, not production
- Focus on visual variety, not feature completeness
- Make sure index page works well for presenting options
- Test everything on mobile (critical for client review)

**Tips:**
- Start with the simplest samples first
- Copy/paste and modify rather than rebuilding from scratch
- Use browser dev tools to ensure responsive design
- Keep JavaScript minimal and simple
- Comment your code so it's easy to understand
- Create a consistent header/footer template and reuse

**Estimated Total Time:** 8-10 hours for all 10 samples + index page

**Priority:** Visual variety and polish over technical perfection. Peter needs to see different design directions, not perfect code.

---

## Summary

This plan gives the dev agent everything needed to build 10 distinct homepage samples for Olympus Masonry. Each sample offers a different design approach while maintaining brand consistency. Peter will be able to review all options and choose his preferred direction, which can then be refined and expanded into a full website.

The samples range from minimal and clean (Sample 1) to bold and energetic (Sample 2) to ultra-minimal (Sample 10), providing a comprehensive range of options for the client to evaluate.
