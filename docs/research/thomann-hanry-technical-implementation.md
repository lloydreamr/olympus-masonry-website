# Thomann-Hanry Technical Implementation Analysis

## Overview

This document details the technical implementation of Thomann-Hanry's website (https://thomann-hanry.co.uk/), which you identified as your favorite design reference for clean layout, balanced text-to-image ratio, and effective microanimations.

**Screenshot saved:** `thomann-hanry-hero.png`

---

## Platform & Technology Stack

### Core Technologies
- **jQuery**: Version 3.7.1
- **Custom Build**: Not WordPress (no generator meta tag found)
- **JavaScript Libraries**: jQuery Migration 3.4.1

### Carousel Implementation
- **Library**: Likely Slick Carousel or custom implementation
- **Pattern**: Image carousels embedded in each service section
- **Navigation**: Dot indicators + Next/Prev arrows
- **Responsive**: Touch-enabled swipe functionality

---

## Typography System

### Font Families

**Primary Fonts:**
- **Body Text**: `ingra, sans-serif` (Adobe Fonts)
- **Headlines**: `futura-pt, sans-serif` (Futura PT)

**Font Sizes:**
```css
body {
  font-size: 16px;
  line-height: 1.6; /* estimated */
}

h1 {
  font-size: 95px;
  font-weight: 700;
  line-height: 1.1; /* estimated */
}

h2 {
  font-size: 30.4px;
  font-weight: 500-600; /* estimated */
}

h4 (subheadline) {
  font-size: ~20px; /* estimated */
}
```

### Typography Hierarchy

**Hero Section:**
- H1: "Restoring Excellence" - 95px, Bold, White text on teal overlay
- H4: "The world leading façade cleaning experts" - Smaller, lighter weight

**Section Headlines:**
- H2: 30.4px for service section titles
- Clean, sans-serif, high readability

**Body Copy:**
- 16px base size
- Gray color for reduced visual weight
- Short paragraphs (2-4 sentences max per section)

---

## Color Palette

### Primary Colors

```css
/* Background */
--background: rgb(255, 255, 255); /* #FFFFFF - White */

/* Text Colors */
--body-text: rgb(146, 146, 146); /* #929292 - Medium Gray */
--heading-text: rgb(0, 0, 0); /* #000000 - Black (H2s) */
--hero-text: rgb(239, 245, 244); /* #EFF5F4 - Off-white */

/* Accent/Brand Color */
--primary-accent: rgb(5, 110, 89); /* #056E59 - Teal/Green */

/* Button States */
--button-bg: rgb(5, 110, 89); /* #056E59 - Teal */
--button-text: rgb(255, 255, 255); /* #FFFFFF - White */
--button-outline: transparent; /* For secondary buttons */
```

### Color Usage Strategy

1. **Teal/Green (#056E59)** - Brand color, used sparingly:
   - Primary CTA buttons
   - Hero overlay
   - Accent elements
   - Social media icon hover states

2. **White (#FFFFFF)** - Dominant background:
   - Clean, spacious feel
   - Maximum readability
   - Professional appearance

3. **Gray (#929292)** - Body text:
   - Reduces visual weight
   - Easier on eyes
   - Modern, sophisticated look

4. **Black** - Headlines only:
   - Strong hierarchy
   - Clear section separation

---

## Layout & Spacing

### Grid System

```css
/* Container */
.container {
  max-width: 1200-1400px; /* estimated */
  margin: 0 auto;
  padding: 0 40-60px;
}

/* Section Spacing */
section {
  padding-top: 64px;
  padding-bottom: 64px;
  margin-bottom: 64px; /* Between major sections */
}

/* Content Blocks */
.content-block {
  display: flex;
  gap: 40-60px;
}

/* Two-Column Layout (Text + Carousel) */
.section-left { /* Text */
  flex: 0 0 40%;
}

.section-right { /* Images */
  flex: 0 0 60%;
}
```

### Spacing Scale

```css
/* Spacing System */
--space-xs: 8px;
--space-s: 16px;
--space-m: 24px;
--space-l: 32px;
--space-xl: 64px;
--space-xxl: 80-120px;
```

**Section Padding:** 64px top and bottom (consistent)
**Element Gaps:** 24-32px between related items
**Major Sections:** 64px+ between different content blocks

---

## Component Breakdown

### 1. Hero Section

**Structure:**
```html
<div class="hero">
  <div class="hero-background">
    <!-- Full-width building image with teal overlay -->
  </div>
  <div class="hero-content">
    <h1>Restoring Excellence</h1>
    <h4>The world leading façade cleaning experts</h4>
    <div class="hero-cta">
      <a href="#" class="btn-video">Watch our video</a>
      <a href="#" class="btn-download">Download our brochure</a>
    </div>
  </div>
</div>
```

**Key Features:**
- Full-width background image
- Teal color overlay (opacity ~70-80%)
- Centered text (white)
- Large, bold headline (95px)
- Two CTAs below (video + download)
- Feefo rating badge (left side)

### 2. Service Section Pattern

**Structure (Repeated 5x):**
```html
<section class="service-section">
  <div class="service-content">
    <div class="service-text">
      <h2>Service Name</h2>
      <p>2-3 sentence description...</p>
      <a href="#" class="link-arrow">Find out more →</a>
    </div>
    <div class="service-carousel">
      <!-- 3-image carousel -->
      <div class="carousel-images">
        <img src="project-1.jpg" alt="...">
        <img src="project-2.jpg" alt="...">
        <img src="project-3.jpg" alt="...">
      </div>
      <div class="carousel-navigation">
        <button class="prev">Prev</button>
        <button class="next">Next</button>
        <div class="dots">
          <span class="dot active">1</span>
          <span class="dot">2</span>
          <span class="dot">3</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Layout:**
- 40% text (left) / 60% images (right)
- Horizontal layout
- Text: Minimal, 2-3 sentences
- Images: 3-column carousel per section
- Navigation: Dots + arrows
- Consistent spacing between sections (64px)

### 3. Testimonials Carousel

**Structure:**
```html
<section class="testimonials">
  <h2>What people say</h2>
  <div class="testimonial-carousel">
    <blockquote>
      <p>"Testimonial text..."</p>
      <footer>
        <p>Name, Title</p>
        <p>Company Name</p>
      </footer>
      <a href="#">View all reviews →</a>
    </blockquote>
    <!-- More testimonials... -->
  </div>
  <div class="carousel-nav">
    <button>Prev</button>
    <button>Next</button>
  </div>
</section>
```

**Features:**
- Full-width quotes
- Client name + title + company
- "View all reviews" link in each
- Rotating carousel
- Long-form testimonials (3-5 sentences)

### 4. Button Styles

**Primary Button (CTA):**
```css
.btn-primary {
  background-color: rgb(5, 110, 89); /* #056E59 */
  color: rgb(255, 255, 255);
  padding: 8px 16px;
  border-radius: 2px; /* Minimal rounding */
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  border: none;
}

.btn-primary:hover {
  background-color: rgb(4, 88, 71); /* Darker teal */
  transform: translateY(-1px); /* Subtle lift */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
```

**Secondary/Outline Button:**
```css
.btn-outline {
  background-color: transparent;
  color: rgb(5, 110, 89);
  padding: 8px 16px;
  border: 1px solid rgb(5, 110, 89);
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-outline:hover {
  background-color: rgb(5, 110, 89);
  color: white;
}
```

**Link with Arrow:**
```css
.link-arrow {
  color: rgb(0, 0, 0);
  font-size: 16px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.link-arrow::after {
  content: '→';
  display: inline-block;
  transition: transform 0.2s ease;
}

.link-arrow:hover::after {
  transform: translateX(4px);
}
```

---

## Microanimations & Transitions

### Global Transition

```css
* {
  transition: all 0.2-0.3s ease;
}
```

**Note:** This is applied broadly, which you noted felt "a bit too slow" - consider 0.2s for your implementation.

### Specific Animations

**1. Scroll-In Animations (Estimated):**
```css
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**2. Hover Effects:**
```css
/* Cards/Images */
.project-card:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
}

/* Buttons */
button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* Links with arrows */
.link-arrow:hover::after {
  transform: translateX(4px);
  transition: transform 0.2s ease;
}
```

**3. Carousel Transitions:**
```css
.carousel-slide {
  transition: transform 0.6s ease-in-out;
}

/* Fade transition alternative */
.carousel-fade .slide {
  opacity: 0;
  transition: opacity 0.4s ease;
}

.carousel-fade .slide.active {
  opacity: 1;
}
```

### Animation Timing (Your Preference)

Based on your feedback that animations were "a bit too slow":

```css
/* Recommended Timing */
--transition-fast: 0.15s;    /* Hover states */
--transition-base: 0.2s;     /* Standard interactions */
--transition-slow: 0.4s;     /* Carousels, page loads */
--transition-page: 0.5s;     /* Heavy elements */

/* Easing functions */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0.0, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* Subtle bounce */
```

---

## Image Carousel Implementation

### Recommended Library: Slick Carousel

**Why Slick:**
- Lightweight
- Touch-enabled
- Responsive breakpoints
- Dot navigation built-in
- Customizable arrows

**Basic Implementation:**
```html
<div class="service-carousel">
  <div class="carousel-container">
    <div><img src="image-1.jpg" alt="Project 1"></div>
    <div><img src="image-2.jpg" alt="Project 2"></div>
    <div><img src="image-3.jpg" alt="Project 3"></div>
  </div>
</div>
```

```javascript
$('.carousel-container').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 600, // 0.6s transition
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false, // No autoplay
  fade: false, // Slide transition
  cssEase: 'ease-in-out',
  prevArrow: '<button class="slick-prev">Prev</button>',
  nextArrow: '<button class="slick-next">Next</button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
});
```

### Custom Carousel Styling

```css
/* Carousel Container */
.service-carousel {
  position: relative;
  width: 100%;
}

/* Slides */
.carousel-container .slick-slide {
  padding: 0 8px; /* Gap between slides if showing multiple */
}

.carousel-container img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* Navigation Dots */
.slick-dots {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
  list-style: none;
  padding: 0;
}

.slick-dots li button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(200, 200, 200);
  border: none;
  cursor: pointer;
  font-size: 0; /* Hide text */
  transition: background-color 0.2s ease;
}

.slick-dots li.slick-active button {
  background-color: rgb(5, 110, 89); /* Brand color */
}

/* Arrow Buttons */
.slick-prev,
.slick-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  z-index: 10;
}

.slick-prev {
  left: 16px;
}

.slick-next {
  right: 16px;
}

.slick-prev:hover,
.slick-next:hover {
  background-color: rgb(5, 110, 89);
  color: white;
}
```

---

## Content-to-Image Ratio

### Analysis

**Thomann-Hanry Pattern:**
- **~40% text / 60% images** (by visual weight)
- Each section: Small text block (left) + Large image carousel (right)
- Minimal body copy: 2-3 sentences maximum
- Headlines prominent but concise

### Layout Split

```css
/* Desktop Layout */
.section-content {
  display: flex;
  gap: 60px;
  align-items: center;
}

.section-text {
  flex: 0 0 40%;
}

.section-images {
  flex: 0 0 60%;
}

/* Mobile Layout */
@media (max-width: 768px) {
  .section-content {
    flex-direction: column;
  }

  .section-text,
  .section-images {
    flex: 0 0 100%;
  }
}
```

---

## Responsive Design

### Breakpoints (Estimated)

```css
/* Mobile First Approach */
:root {
  --container-padding: 20px;
  --section-spacing: 40px;
}

/* Tablet: 768px+ */
@media (min-width: 768px) {
  :root {
    --container-padding: 40px;
    --section-spacing: 60px;
  }

  .section-content {
    flex-direction: row;
  }
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  :root {
    --container-padding: 60px;
    --section-spacing: 64px;
  }

  h1 {
    font-size: 95px;
  }
}

/* Large Desktop: 1440px+ */
@media (min-width: 1440px) {
  .container {
    max-width: 1400px;
  }
}
```

### Mobile Optimizations

**Typography:**
```css
/* Mobile */
h1 { font-size: 48px; }
h2 { font-size: 24px; }
body { font-size: 16px; }

/* Desktop */
@media (min-width: 1024px) {
  h1 { font-size: 95px; }
  h2 { font-size: 30.4px; }
  body { font-size: 16px; }
}
```

**Layout:**
- Single column on mobile
- Text above images
- Simplified navigation (hamburger menu)
- Larger tap targets (48px minimum)

---

## Key Design Principles (Your Takeaways)

### ✅ What Makes Thomann-Hanry Effective

1. **Minimal Text Content**
   - 2-3 sentences per section
   - Headlines do the heavy lifting
   - No unnecessary fluff

2. **Strong Visual Hierarchy**
   - Large, bold headlines (95px)
   - Clear section separation (64px spacing)
   - Consistent layout pattern

3. **Balanced Text-to-Image Ratio**
   - 40% text / 60% images
   - Images tell the story
   - Text provides context

4. **Clean, Spacious Layout**
   - Generous whitespace (64px section padding)
   - Uncluttered design
   - Breathing room between elements

5. **Subtle, Fast Microanimations**
   - Hover effects: 0.2s
   - Transitions: 0.3-0.4s
   - No bouncy/aggressive effects
   - Purpose-driven animations

6. **Professional Color Palette**
   - Dominant white background
   - Gray body text (reduced visual weight)
   - Teal accent (used sparingly)
   - High contrast headlines

7. **Carousel Implementation**
   - One per service section
   - 3 images each
   - Clear navigation (dots + arrows)
   - Smooth transitions (0.6s)

---

## Implementation Checklist for Your Client

### Phase 1: Foundation
- [ ] Set up font loading (Futura PT or similar for headlines)
- [ ] Define color palette (choose your teal/accent color)
- [ ] Create spacing scale (8px, 16px, 24px, 64px, etc.)
- [ ] Set up responsive breakpoints
- [ ] Configure base typography (16px body, hierarchy)

### Phase 2: Components
- [ ] Build hero section with overlay
- [ ] Create service section pattern (text + carousel)
- [ ] Design button styles (primary + secondary)
- [ ] Implement link-with-arrow component
- [ ] Build testimonial carousel
- [ ] Create project card component

### Phase 3: Interactions
- [ ] Add Slick Carousel (or alternative)
- [ ] Implement hover states (0.2s transitions)
- [ ] Add scroll-in animations (optional, subtle)
- [ ] Test carousel on mobile (swipe)
- [ ] Optimize touch targets (48px minimum)

### Phase 4: Content
- [ ] Write minimal copy (2-3 sentences per section)
- [ ] Gather high-quality project photos (3 per service)
- [ ] Collect testimonials
- [ ] Create trust badges/certifications
- [ ] Optimize images for web

### Phase 5: Polish
- [ ] Test all animations (ensure 0.2-0.3s feels right)
- [ ] Verify color contrast (accessibility)
- [ ] Check mobile experience
- [ ] Optimize page load speed
- [ ] Test across browsers

---

## Code Templates

### HTML Structure Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Masonry Contractor | Edmonton</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
  <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
</head>
<body>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <h1>Your Main Headline</h1>
      <h4>Supporting subheadline</h4>
      <div class="hero-cta">
        <a href="#" class="btn-primary">Get Free Quote</a>
        <a href="tel:780-xxx-xxxx" class="btn-outline">Call Now</a>
      </div>
    </div>
  </section>

  <!-- Service Section (Repeat Pattern) -->
  <section class="service-section">
    <div class="container">
      <div class="section-content">
        <div class="section-text">
          <h2>Service Name</h2>
          <p>Brief description in 2-3 sentences. Focus on benefits and what makes you different.</p>
          <a href="#" class="link-arrow">Learn more</a>
        </div>
        <div class="section-carousel">
          <div class="carousel">
            <div><img src="project-1.jpg" alt="Project 1"></div>
            <div><img src="project-2.jpg" alt="Project 2"></div>
            <div><img src="project-3.jpg" alt="Project 3"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="testimonials">
    <div class="container">
      <h2>What Our Clients Say</h2>
      <div class="testimonial-carousel">
        <blockquote>
          <p>"Testimonial text here..."</p>
          <footer>
            <p><strong>Client Name</strong></p>
            <p>Location or Company</p>
          </footer>
        </blockquote>
        <!-- More testimonials... -->
      </div>
    </div>
  </section>

  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="slick/slick.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

### CSS Foundation

```css
/* Reset & Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Colors */
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-gray: #929292;
  --color-accent: #056E59; /* Adjust to your brand */

  /* Spacing */
  --space-xs: 8px;
  --space-s: 16px;
  --space-m: 24px;
  --space-l: 32px;
  --space-xl: 64px;

  /* Typography */
  --font-body: 'Your Body Font', sans-serif;
  --font-heading: 'Your Heading Font', sans-serif;

  /* Transitions */
  --transition-fast: 0.15s;
  --transition-base: 0.2s;
  --transition-slow: 0.4s;
}

body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-gray);
  background-color: var(--color-white);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--color-black);
  margin-bottom: var(--space-m);
}

h1 {
  font-size: clamp(48px, 8vw, 95px);
  font-weight: 700;
  line-height: 1.1;
}

h2 {
  font-size: clamp(24px, 3vw, 30.4px);
  font-weight: 600;
}

p {
  margin-bottom: var(--space-m);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  transition: all var(--transition-base) ease;
}

/* Container */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-l);
}

/* Sections */
section {
  padding: var(--space-xl) 0;
}

/* Buttons */
.btn-primary {
  display: inline-block;
  padding: 12px 32px;
  background-color: var(--color-accent);
  color: var(--color-white);
  border-radius: 2px;
  font-weight: 500;
  transition: all var(--transition-base) ease;
}

.btn-primary:hover {
  background-color: color-mix(in srgb, var(--color-accent) 80%, black);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.btn-outline {
  display: inline-block;
  padding: 12px 32px;
  background-color: transparent;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  border-radius: 2px;
  font-weight: 500;
  transition: all var(--transition-base) ease;
}

.btn-outline:hover {
  background-color: var(--color-accent);
  color: var(--color-white);
}

/* Links with arrows */
.link-arrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-black);
  font-weight: 500;
}

.link-arrow::after {
  content: '→';
  transition: transform var(--transition-base) ease;
}

.link-arrow:hover::after {
  transform: translateX(4px);
}

/* Hero Section */
.hero {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-white);
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(5, 110, 89, 0.7), rgba(5, 110, 89, 0.7)),
              url('hero-image.jpg') center/cover no-repeat;
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 800px;
  padding: 0 var(--space-l);
}

.hero h1 {
  color: var(--color-white);
  margin-bottom: var(--space-s);
}

.hero-cta {
  display: flex;
  gap: var(--space-m);
  justify-content: center;
  margin-top: var(--space-xl);
}

/* Service Sections */
.section-content {
  display: flex;
  gap: 60px;
  align-items: center;
}

.section-text {
  flex: 0 0 40%;
}

.section-carousel {
  flex: 0 0 60%;
}

/* Responsive */
@media (max-width: 768px) {
  .section-content {
    flex-direction: column;
  }

  .section-text,
  .section-carousel {
    flex: 0 0 100%;
  }

  .hero-cta {
    flex-direction: column;
  }
}
```

### JavaScript (Carousel Init)

```javascript
$(document).ready(function(){
  // Service section carousels
  $('.carousel').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: false,
    cssEase: 'ease-in-out',
    prevArrow: '<button class="slick-prev" aria-label="Previous">Prev</button>',
    nextArrow: '<button class="slick-next" aria-label="Next">Next</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });

  // Testimonial carousel
  $('.testimonial-carousel').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: true, // Fade for testimonials
    prevArrow: '<button class="slick-prev">Previous</button>',
    nextArrow: '<button class="slick-next">Next</button>',
  });
});
```

---

## Summary: Your Edmonton Masonry Site

Based on Thomann-Hanry's design and your preferences, your Edmonton masonry site should:

1. **Use 40/60 text-to-image ratio** - Minimal text, maximum visuals
2. **Implement carousels per section** - 3-4 images showcasing each service type
3. **Keep animations fast** - 0.2s for hovers, 0.4-0.6s for carousels
4. **Maintain clean spacing** - 64px between major sections
5. **Use professional color palette** - White bg, gray text, one accent color
6. **Simple navigation** - 5-6 menu items maximum
7. **Highlight winter capability** - Major differentiator for Edmonton market

This implementation guide gives you everything needed to build a site with the same clean, professional feel as Thomann-Hanry while tailored for the Edmonton masonry market.
