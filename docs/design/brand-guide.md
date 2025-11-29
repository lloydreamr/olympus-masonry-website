# Olympus Masonry - Brand & Website Design Guide

## Client Information

**Company Name:** Olympus Masonry
**Owner:** Peter Kolia
**Location:** Edmonton, Alberta, Canada

**Contact Details:**
- **Cell:** 403-919-5272
- **Office:** 403-919-5272
- **Email:** ollympus1@outlook.com
- **Service Area:** Edmonton & surrounding areas

---

## Brand Identity

### Logo Analysis

The Olympus Masonry logo features:
- **Geometric pyramid design** with brick pattern
- **Yellow/gold bricks** (left side) transitioning to **white bricks** (right side)
- **Sun/circle element** in top right
- **Bold, modern typography:** "OLYMPUS" in yellow/gold, "MASONRY" in white
- **Clean, professional aesthetic** - not overly traditional, appeals to modern clients

**What the logo communicates:**
- Strength and stability (pyramid)
- Craftsmanship (brick detail)
- Modern approach (geometric design)
- Quality and warmth (gold color)

### Brand Color Palette

#### Primary Colors

```css
/* Brand Yellow/Gold (extracted from logo) */
--olympus-gold: #D4A657; /* Primary brand color */
--olympus-gold-light: #E5C078; /* Lighter variant for backgrounds */
--olympus-gold-dark: #B8903C; /* Darker for hover states */

/* Black */
--olympus-black: #1A1A1A; /* Not pure black - softer */
--olympus-charcoal: #2C2C2C; /* Slightly lighter for text */

/* White */
--olympus-white: #FFFFFF;
--olympus-off-white: #F8F8F8; /* For subtle backgrounds */
```

#### Supporting Colors

```css
/* Grays for text hierarchy */
--text-primary: #1A1A1A; /* Headlines, important text */
--text-secondary: #4A4A4A; /* Body text */
--text-tertiary: #7A7A7A; /* Captions, metadata */

/* Backgrounds */
--bg-primary: #FFFFFF; /* Main background */
--bg-secondary: #F8F8F8; /* Alternate sections */
--bg-dark: #1A1A1A; /* Dark sections/footer */

/* Accents (use sparingly) */
--accent-success: #4CAF50; /* For success messages */
--accent-warning: #FF9800; /* For warnings */
```

### Color Usage Strategy

**Different from Thomann-Hanry's teal, but same principles:**

1. **Yellow/Gold (#D4A657)** - Use for:
   - Logo
   - Primary CTA buttons
   - Accent elements (sparingly)
   - Hover states
   - Section dividers/accents
   - Icons in limited cases

2. **Black (#1A1A1A)** - Use for:
   - Headlines
   - Navigation text
   - Footer background
   - Strong CTAs (with gold text)
   - Typography emphasis

3. **White (#FFFFFF)** - Dominant:
   - Main background
   - Clean, spacious sections
   - Text on dark backgrounds
   - Cards and containers

4. **Grays** - Supporting:
   - Body text (#4A4A4A)
   - Reduced emphasis elements
   - Borders and dividers

---

## Design Direction: Adapting Thomann-Hanry's Clean Style

### Your Preferences Applied to Olympus Branding

**Maintaining the clean aesthetic you liked while incorporating bold yellow/gold:**

#### Approach 1: Minimal Gold (Recommended)
**Most similar to Thomann-Hanry's restraint:**

```css
/* Use gold sparingly like Thomann-Hanry used teal */
- Hero overlay: Dark with gold accent elements
- Primary CTA: Gold background, black text
- Hover states: Gold underlines/accents
- Section dividers: Thin gold lines
- Icons: Black with gold on hover
```

**Result:** Professional, clean, sophisticated - gold feels premium

#### Approach 2: Bold Gold (Alternative)
**More distinctive, higher energy:**

```css
/* Embrace the yellow/gold more prominently */
- Hero overlay: Gold gradient with black overlay
- Headers: Gold backgrounds with black text
- CTAs: Black background with gold text/borders
- Section accents: Gold blocks
```

**Result:** More memorable, stands out from competitors, energetic

**Recommendation:** Start with **Approach 1 (Minimal Gold)** because:
- Matches your preference for clean, minimal design
- Gold is more refined when used sparingly
- Easier to maintain professional feel
- Less risk of looking "too busy"

---

## Typography System

### Font Recommendations

Since Thomann-Hanry uses:
- **Futura PT** (headlines) - Geometric, modern
- **Ingra** (body) - Clean sans-serif

For Olympus Masonry, consider:

#### Option 1: Similar to Thomann-Hanry
```css
--font-heading: 'Futura PT', 'Montserrat', sans-serif;
--font-body: 'Inter', 'Helvetica Neue', sans-serif;
```
**Why:** Clean, modern, highly readable, professional

#### Option 2: Slightly More Distinctive
```css
--font-heading: 'Oswald', 'Bebas Neue', sans-serif; /* Bold, impactful */
--font-body: 'Open Sans', 'Roboto', sans-serif; /* Readable, friendly */
```
**Why:** More construction/industrial feel, still modern

#### Option 3: Premium Feel
```css
--font-heading: 'Poppins', sans-serif; /* Clean, geometric */
--font-body: 'Inter', sans-serif; /* Modern, readable */
```
**Why:** Balanced, premium, works well with gold

**Recommendation:** **Option 3 (Poppins + Inter)** - Best balance of modern, professional, and readable.

### Typography Scale

```css
/* Mobile-first approach */
:root {
  --font-size-body: 16px;
  --line-height-body: 1.6;

  /* Headlines */
  --font-size-h1: 48px; /* Mobile */
  --font-size-h2: 28px;
  --font-size-h3: 24px;
  --font-size-h4: 20px;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}

/* Desktop */
@media (min-width: 1024px) {
  :root {
    --font-size-h1: 72px; /* Smaller than Thomann-Hanry's 95px */
    --font-size-h2: 36px;
    --font-size-h3: 28px;
  }
}
```

### Typography Usage

```css
h1 {
  font-family: var(--font-heading);
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: 16px;
}

h2 {
  font-family: var(--font-heading);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-semibold);
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: 16px;
}

body {
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: var(--text-secondary);
}
```

---

## Component Designs with Olympus Branding

### 1. Hero Section

**Concept:** Clean like Thomann-Hanry, but with Olympus's gold accent

#### Option A: Dark Hero (Recommended)
```html
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <div class="hero-badge">
      <span>Year-Round Masonry Services</span>
    </div>
    <h1>Edmonton's Premier<br>Masonry Contractors</h1>
    <p class="hero-subtitle">Expert craftsmanship in brick, stone, and concrete</p>
    <div class="hero-cta">
      <a href="#quote" class="btn-primary">Get Free Estimate</a>
      <a href="tel:4039195272" class="btn-secondary">Call: 403-919-5272</a>
    </div>
  </div>
</section>
```

```css
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: url('masonry-project.jpg') center/cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(26, 26, 26, 0.85) 0%,
    rgba(26, 26, 26, 0.7) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 900px;
  padding: 0 24px;
}

.hero-badge {
  display: inline-block;
  padding: 8px 20px;
  background: var(--olympus-gold);
  color: var(--olympus-black);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 24px;
  border-radius: 2px;
}

.hero h1 {
  color: white;
  font-size: clamp(42px, 8vw, 72px);
  font-weight: 700;
  margin-bottom: 16px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px;
  margin-bottom: 40px;
}

.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  padding: 16px 40px;
  background-color: var(--olympus-gold);
  color: var(--olympus-black);
  font-weight: 600;
  border-radius: 2px;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--olympus-gold-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(212, 166, 87, 0.3);
}

.btn-secondary {
  padding: 16px 40px;
  background-color: transparent;
  color: white;
  font-weight: 600;
  border: 2px solid white;
  border-radius: 2px;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background-color: white;
  color: var(--olympus-black);
}
```

#### Option B: Light Hero with Gold Accent
```css
.hero {
  background: white;
}

.hero h1 {
  color: var(--olympus-black);
}

.hero h1 span {
  color: var(--olympus-gold); /* Accent word */
}

.btn-primary {
  background-color: var(--olympus-black);
  color: var(--olympus-gold);
}
```

**Recommendation:** **Option A (Dark Hero)** - More dramatic, showcases gold beautifully, creates strong first impression.

---

### 2. Service Sections (Thomann-Hanry Pattern)

**Layout:** 40% text / 60% images with carousel

```html
<section class="service-section">
  <div class="container">
    <div class="section-content">
      <div class="section-text">
        <div class="section-number">01</div>
        <h2>Brick & Stone Masonry</h2>
        <p>Expert installation of brick and natural stone for residential and commercial projects. From patios to full building facades, we deliver exceptional craftsmanship.</p>
        <ul class="service-features">
          <li>Residential & commercial</li>
          <li>New construction & repair</li>
          <li>Winter-ready techniques</li>
        </ul>
        <a href="#" class="link-arrow">View Projects</a>
      </div>
      <div class="section-carousel">
        <div class="carousel">
          <div><img src="brick-project-1.jpg" alt="Brick patio"></div>
          <div><img src="brick-project-2.jpg" alt="Stone facade"></div>
          <div><img src="brick-project-3.jpg" alt="Brick walkway"></div>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
.service-section {
  padding: 80px 0;
}

.service-section:nth-child(even) {
  background-color: var(--bg-secondary);
}

.section-content {
  display: flex;
  gap: 80px;
  align-items: center;
}

.section-text {
  flex: 0 0 40%;
}

.section-number {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  color: var(--olympus-gold);
  background: rgba(212, 166, 87, 0.1);
  padding: 6px 16px;
  border-radius: 20px;
  margin-bottom: 16px;
}

.service-features {
  list-style: none;
  margin: 24px 0;
  padding: 0;
}

.service-features li {
  position: relative;
  padding-left: 28px;
  margin-bottom: 12px;
  color: var(--text-secondary);
}

.service-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 16px;
  height: 2px;
  background: var(--olympus-gold);
}

.link-arrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--olympus-black);
  font-weight: 600;
  transition: all 0.2s ease;
}

.link-arrow::after {
  content: '→';
  color: var(--olympus-gold);
  transition: transform 0.2s ease;
}

.link-arrow:hover::after {
  transform: translateX(4px);
}

.section-carousel {
  flex: 0 0 60%;
}

/* Responsive */
@media (max-width: 768px) {
  .section-content {
    flex-direction: column;
    gap: 40px;
  }

  .section-text,
  .section-carousel {
    flex: 0 0 100%;
  }
}
```

---

### 3. Trust Signals Section

```html
<section class="trust-section">
  <div class="container">
    <div class="trust-grid">
      <div class="trust-item">
        <div class="trust-number">15+</div>
        <div class="trust-label">Years Experience</div>
      </div>
      <div class="trust-item">
        <div class="trust-number">100%</div>
        <div class="trust-label">Licensed & Insured</div>
      </div>
      <div class="trust-item">
        <div class="trust-number">Year-Round</div>
        <div class="trust-label">Winter Specialists</div>
      </div>
      <div class="trust-item">
        <div class="trust-number">Edmonton</div>
        <div class="trust-label">Locally Owned</div>
      </div>
    </div>
  </div>
</section>
```

```css
.trust-section {
  background: var(--olympus-black);
  color: white;
  padding: 60px 0;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
}

.trust-item {
  padding: 20px;
}

.trust-number {
  font-size: 36px;
  font-weight: 700;
  color: var(--olympus-gold);
  margin-bottom: 8px;
}

.trust-label {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
}
```

---

### 4. Call-to-Action Section

```html
<section class="cta-section">
  <div class="container">
    <div class="cta-content">
      <h2>Ready to Start Your Project?</h2>
      <p>Get a free estimate from Edmonton's trusted masonry experts</p>
      <div class="cta-buttons">
        <a href="#quote" class="btn-primary-large">Request Free Estimate</a>
        <div class="cta-contact">
          <span>or call us directly:</span>
          <a href="tel:4039195272" class="phone-number">403-919-5272</a>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
.cta-section {
  background: linear-gradient(135deg,
    var(--olympus-black) 0%,
    #2A2A2A 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
}

.cta-content h2 {
  color: white;
  font-size: clamp(32px, 5vw, 48px);
  margin-bottom: 16px;
}

.cta-content p {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.btn-primary-large {
  padding: 20px 60px;
  background: var(--olympus-gold);
  color: var(--olympus-black);
  font-size: 18px;
  font-weight: 700;
  border-radius: 2px;
  transition: all 0.2s ease;
}

.btn-primary-large:hover {
  background: var(--olympus-gold-light);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(212, 166, 87, 0.4);
}

.cta-contact {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cta-contact span {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
}

.phone-number {
  font-size: 28px;
  font-weight: 700;
  color: var(--olympus-gold);
  transition: color 0.2s ease;
}

.phone-number:hover {
  color: var(--olympus-gold-light);
}
```

---

## Page Structure for Olympus Masonry

### Homepage Sections

1. **Hero** - "Edmonton's Premier Masonry Contractors"
2. **Trust Signals** - Quality craftsmanship, Licensed, Winter specialists, Local
3. **Services (5 sections):**
   - Brick & Stone Masonry
   - Retaining Walls & Patios
   - Chimneys & Fireplaces
   - Concrete Work
   - Winter Masonry Services
4. **Why Choose Olympus** - 3-4 key differentiators
5. **Portfolio Preview** - 6-8 project cards
6. **Testimonials Carousel**
7. **Service Area Map** - Edmonton coverage
8. **Final CTA** - Get Free Estimate

**Estimated Length:** 3-4 screens of scrolling (not too long)

### Recommended Additional Pages

1. **Services** (with individual sub-pages for each service)
2. **Portfolio/Gallery** (filterable by project type)
3. **About** (Peter's story, team, credentials)
4. **Contact** (form + map + info)
5. **Winter Masonry** (unique differentiator page)

**Total:** 5 main pages, simple navigation

---

## Navigation Design

### Header

```html
<header class="site-header">
  <div class="container">
    <div class="header-content">
      <a href="/" class="logo">
        <img src="olympus-logo.svg" alt="Olympus Masonry">
      </a>
      <nav class="main-nav">
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="header-cta">
        <a href="tel:4039195272" class="phone-link">403-919-5272</a>
        <a href="#quote" class="btn-header">Get Quote</a>
      </div>
      <button class="mobile-menu-toggle">☰</button>
    </div>
  </div>
</header>
```

```css
.site-header {
  position: sticky;
  top: 0;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 1000;
  padding: 16px 0;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.logo img {
  height: 50px;
  width: auto;
}

.main-nav {
  display: flex;
  gap: 32px;
}

.main-nav a {
  color: var(--text-primary);
  font-weight: 500;
  transition: color 0.2s ease;
}

.main-nav a:hover {
  color: var(--olympus-gold);
}

.header-cta {
  display: flex;
  align-items: center;
  gap: 16px;
}

.phone-link {
  color: var(--olympus-gold);
  font-weight: 700;
  font-size: 18px;
}

.btn-header {
  padding: 10px 24px;
  background: var(--olympus-black);
  color: var(--olympus-gold);
  font-weight: 600;
  border-radius: 2px;
  transition: all 0.2s ease;
}

.btn-header:hover {
  background: var(--olympus-gold);
  color: var(--olympus-black);
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .main-nav,
  .header-cta {
    display: none;
  }

  .mobile-menu-toggle {
    display: block;
  }
}
```

---

## Footer Design

```html
<footer class="site-footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-col footer-about">
        <img src="olympus-logo-white.svg" alt="Olympus Masonry" class="footer-logo">
        <p>Edmonton's trusted masonry contractors. Expert craftsmanship in brick, stone, and concrete work.</p>
      </div>

      <div class="footer-col">
        <h3>Services</h3>
        <ul>
          <li><a href="#">Brick & Stone Masonry</a></li>
          <li><a href="#">Retaining Walls</a></li>
          <li><a href="#">Chimneys & Fireplaces</a></li>
          <li><a href="#">Winter Masonry</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Company</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div class="footer-col footer-contact">
        <h3>Get In Touch</h3>
        <p><strong>Office:</strong> <a href="tel:4039195272">403-919-5272</a></p>
        <p><strong>Cell:</strong> <a href="tel:4039195272">403-919-5272</a></p>
        <p><strong>Email:</strong> <a href="mailto:ollympus1@outlook.com">ollympus1@outlook.com</a></p>
        <p><strong>Location:</strong> Edmonton, AB</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Olympus Masonry. All rights reserved.</p>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
```

```css
.site-footer {
  background: var(--olympus-black);
  color: white;
  padding: 60px 0 24px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 60px;
  margin-bottom: 40px;
}

.footer-logo {
  height: 60px;
  margin-bottom: 16px;
}

.footer-col h3 {
  color: var(--olympus-gold);
  font-size: 18px;
  margin-bottom: 16px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
}

.footer-col li {
  margin-bottom: 8px;
}

.footer-col a {
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s ease;
}

.footer-col a:hover {
  color: var(--olympus-gold);
}

.footer-contact p {
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.footer-contact a {
  color: white;
  font-weight: 600;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-legal {
  display: flex;
  gap: 24px;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
```

---

## Key Differentiators for Olympus Masonry

### 1. Winter Operations (MAJOR)
**Messaging:**
- "Year-Round Masonry Services"
- "Edmonton's Winter Masonry Specialists"
- "Cold-Weather Certified Techniques"

**Visual Treatment:**
- Badge in hero: "Winter Specialists"
- Dedicated service section
- Before/after winter damage repairs
- Team working in snow photos

### 2. Local Expertise
- "Serving Edmonton & Area"
- "Locally Owned & Operated"
- Service area map
- Edmonton neighborhood projects

### 3. Experience & Quality
- "[X] Years Serving Edmonton"
- "Licensed & Insured"
- "Expert Craftsmanship"
- "Warranty Included"

### 4. Direct Owner Communication
- "Speak Directly with Peter"
- "No Subcontractors"
- Owner photo/bio
- Personal touch emphasis

---

## Content Guidelines

### Tone of Voice
- **Professional but approachable**
- **Confident without being boastful**
- **Educational** (help customers understand)
- **Direct and clear** (no jargon unless explained)

### Writing Style (Minimal Text - Your Preference)

**Headlines:**
- 4-8 words maximum
- Active voice
- Benefit-focused

**Body Copy:**
- 2-3 sentences per section
- Short paragraphs
- Bullet points when possible
- Conversational but professional

**Example Service Description:**
```
Brick & Stone Masonry

Expert installation of brick and natural stone for residential
and commercial projects. From patios to building facades, we
deliver exceptional craftsmanship that withstands Edmonton's
harsh climate.

✓ Residential & commercial
✓ New construction & repair
✓ Winter-ready techniques

[View Projects →]
```

**Total words:** ~40 (perfect for your minimal-text preference)

---

## Next Steps

1. **Gather Content:**
   - [ ] Project photos (high-quality, 20-30 images minimum)
   - [ ] Customer testimonials (3-5)
   - [ ] Business details (years in business, certifications)
   - [ ] Service descriptions (brief, 2-3 sentences each)

2. **Technical Setup:**
   - [ ] Domain name & hosting
   - [ ] Font licenses (Poppins + Inter are free from Google Fonts)
   - [ ] Image optimization
   - [ ] Form submission setup

3. **Design & Build:**
   - [ ] Wireframes/mockups
   - [ ] Homepage development
   - [ ] Service pages
   - [ ] Portfolio gallery
   - [ ] Contact form
   - [ ] Mobile optimization

4. **Launch Preparation:**
   - [ ] SEO setup (meta tags, keywords)
   - [ ] Google Business Profile
   - [ ] Analytics tracking
   - [ ] Testing across devices

---

## Summary

**Olympus Masonry's website will combine:**

✅ **Thomann-Hanry's clean aesthetic** (minimal text, carousels, spacing)
✅ **Your design preferences** (40/60 text-to-image, fast animations, simple nav)
✅ **Olympus's bold black & gold branding** (used sophisticatedly, not overwhelmingly)
✅ **Edmonton market differentiators** (winter operations, local expertise)

**The result:** A professional, modern, visually-driven website that stands out from competitors while maintaining sophistication and trust.
