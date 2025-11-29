# Design Preferences Analysis - Based on Your Feedback

## Your Design Philosophy

Based on your reactions to the 9 masonry websites analyzed, here's what you're looking for:

### ✅ What You Want

1. **Minimal text content** - Let images do the talking
2. **Balance of images and text** (leaning toward more images)
3. **Clean layout** - No clutter, good spacing
4. **Microanimations** - Subtle, purposeful (not too slow)
5. **Carousels for image galleries** - Per section organization
6. **Simple navigation** - Minimal clicking, straightforward structure
7. **Professional color schemes** - Not too bold or aggressive

### ❌ What You Don't Want

1. **Text-heavy pages** - Too much reading required
2. **Complex navigation** - Too many menus, excessive clicking
3. **Cluttered layouts** - Busy designs
4. **Slow animations** - Microanimations should be snappy
5. **Bold/aggressive colors** - Prefer subtle, professional palettes

---

## Your Top Pick: Thomann-Hanry

**URL:** https://thomann-hanry.co.uk/

### Why It Works For You

#### 1. **Great Microanimations**
- Smooth, purposeful animations
- Not too slow (unlike #1)
- Enhances UX without being distracting
- Professional feel

#### 2. **Carousel Implementation**
- Images displayed per section using carousels
- Clean presentation of multiple projects
- Easy navigation through work
- Doesn't overwhelm with too many images at once

#### 3. **Minimal Text Content**
- Headlines are concise
- Copy is brief and to the point
- Focus on visual storytelling
- Text supports images, doesn't dominate

#### 4. **Clean Layout**
- Excellent use of whitespace
- Clear visual hierarchy
- Organized sections
- Not cluttered despite having lots of content

#### 5. **Balance**
- Images are prominent but not overwhelming
- Text is minimal but informative
- Every element has purpose
- Nothing feels unnecessary

---

## Secondary Picks (Worth Noting)

### London Stonemasonry (#7) - "Not bad"
**What works:**
- Good balance of texts and images
- Clean presentation
- Real project photos

**What to improve:**
- Could be more minimal with text
- Could use more dynamic elements

### Sclafmore (#6) - "Not bad"
**What works:**
- Overall layout is decent
- Good structure

**What doesn't work for you:**
- Color scheme (burgundy #B31942 too bold?)

### Ammex Masonry (#4) - "High-end clients"
**What works:**
- Credibility factor
- Professional positioning
- Quality client list

**What's missing:**
- Not as clean/minimal as you'd like
- Could have better visual presentation

---

## Websites to Avoid Emulating

### ❌ Masonry Chicago (#2) - "Wack"
**Issues:**
- Too much information
- Complex service menu (15+ subcategories)
- Dense navigation
- Information overload

### ❌ Castle Hill Masonry (#3) - "Wack"
**Issues:**
- Limited visual portfolio
- Too minimalist (lacks engagement)
- Not enough imagery
- Sparse design

### ❌ New Jersey Masonry Design (#5)
**Issues:**
- More texts, less images (opposite of what you want)
- Dense paragraphs
- Content redundancy
- Text-heavy approach

### ❌ Stonewest (#9)
**Issues:**
- Too many menus = too much clicking
- Complex navigation structure
- Footer clutter with menu duplications

---

## Design Direction for Your Client

Based on your preferences, here's the direction to take:

### Layout Approach

**Hero Section:**
```
[Large Image/Video Background]
[Minimal Headline - 1 line]
[Short Subheadline - 1 line]
[Single CTA Button]
```

**Service Sections:**
```
[Section Headline]
[2-3 lines of description]
[Image Carousel with 4-6 project photos]
[Simple CTA]
```

**Testimonials:**
```
[Quote - 2-3 lines max]
[Name + Location]
[Star Rating]
[Rotating carousel]
```

### Content Guidelines

**Text Limits:**
- Headlines: 4-8 words
- Subheadlines: 8-15 words
- Body copy: 2-3 sentences max per section
- Service descriptions: 1 short paragraph

**Image Strategy:**
- 60-70% images, 30-40% text (by visual weight)
- High-quality project photos only (no stock)
- Carousels for multiple images per section
- Before/after sliders where applicable

### Navigation Structure

**Keep It Simple (Max 5-6 items):**
```
Logo | Services | Portfolio | About | Contact | [Phone Number]
```

**Avoid:**
- Dropdown menus with 10+ items
- Multiple sub-levels
- Excessive footer links
- Service area pages that require clicks

**Alternative (If more pages needed):**
```
Logo | Services ▾ | Portfolio | About | Get Quote | [Phone]
       ↓
       [3-5 core services only]
```

### Microanimation Specifications

**What to animate:**
- Fade in on scroll (subtle, fast)
- Hover states on buttons/cards
- Carousel transitions (smooth, not slow)
- Menu transitions
- Image loading (subtle reveal)

**Timing:**
- Entrance animations: 0.3-0.5s
- Hover effects: 0.2s
- Carousel slides: 0.6-0.8s
- Page transitions: 0.4s

**Avoid:**
- Slow fades (1s+)
- Bouncy/springy effects
- Auto-playing carousels that are too fast
- Excessive parallax scrolling

### Color Palette Direction

**Avoid:**
- Bold burgundy/red (#B31942 like Sclafmore)
- Aggressive oranges/reds
- High-contrast accent colors

**Consider:**
- Neutral base (white, light gray backgrounds)
- Dark text (charcoal, navy)
- Subtle earth-tone accents (warm gray, taupe, sandstone)
- Minimal use of accent colors (only for CTAs)

**Example palette:**
```
Background: #FFFFFF (white) or #F5F5F5 (light gray)
Text: #2C2C2C (charcoal) or #1A1A1A (near black)
Accent: #8B7355 (warm taupe) or #A89B8F (sandstone)
CTA: #3A5A6A (muted blue-gray) or #6B5B4A (warm brown)
```

---

## Technical Implementation Notes

### Carousel Best Practices

**Features to include:**
- Navigation dots/indicators
- Left/right arrows
- Swipe functionality (mobile)
- Keyboard navigation
- Lazy loading
- Smooth transitions (CSS transforms, not jQuery)

**Settings:**
- Auto-play: Optional, 5-7s intervals
- Transition speed: 600-800ms
- Easing: ease-in-out or cubic-bezier
- Touch-enabled
- Infinite loop

**Example libraries:**
- Swiper.js (modern, performant)
- Slick Carousel (classic, reliable)
- Keen Slider (lightweight)
- Flickity (touch-friendly)

### Animation Implementation

**Scroll animations:**
```javascript
// Use Intersection Observer API
// Trigger: when 20% of element is visible
// Effect: Fade in + slight upward movement
// Duration: 400ms
// Easing: ease-out
```

**Hover effects:**
```css
transition: all 0.2s ease;
/* Subtle scale, shadow, or color change */
```

**Page load:**
```javascript
// Hero fades in: 500ms
// Stagger other elements: 100ms delay between each
// Total animation time: <2s for full page
```

### Layout Grid

**Desktop:**
```
Max width: 1200-1400px
Grid: 12 columns
Gutter: 24-32px
Padding: 40-60px
Section spacing: 80-120px
```

**Mobile:**
```
Single column
Padding: 20-24px
Section spacing: 40-60px
Font size: 16px base (minimum)
```

---

## Specific Recommendations for Edmonton Masonry Site

### Page Structure

**Homepage:**
1. Hero (image/video + minimal text + CTA)
2. Trust signals (1 line: "20 years | Licensed | Winter specialists")
3. Services overview (3-4 cards with icons, minimal text)
4. Project carousel (8-12 images, filterable by type)
5. Why choose us (3 points with icons, 1-2 lines each)
6. Testimonial carousel (3-5 testimonials)
7. Final CTA section (large image bg + form)

**Total page sections:** 7
**Estimated scroll depth:** 3-4 screens
**Text-to-image ratio:** 35% text / 65% images

### Services Page (if separate)

**Structure:**
```
[Hero image of service]
[Service name]
[2-3 line description]
[Image carousel: 6-8 project photos]
[What's included: Bullet points (4-6 items)]
[CTA: Get Quote]
```

**Keep each service page to single screen + 1 scroll**

### Portfolio/Gallery Page

**Layout:**
- Masonry grid (3 columns desktop, 2 tablet, 1 mobile)
- Filter by service type (tabs, not dropdown)
- Lightbox on click
- Minimal text (just project name + year)

**No separate project detail pages** - keep it simple

### About Page

**Structure:**
```
[Team photo or owner photo]
[Company story: 3-4 sentences]
[Core values: 3 icons with 1 line each]
[Credentials/certifications: Logos]
[CTA]
```

**Total content:** Single screen worth

### Contact Page

**Layout:**
```
[50% map / 50% form]
[Phone number prominent]
[Hours, address below]
[No additional text needed]
```

---

## Design System Components

### Typography Hierarchy

```
H1 (Hero): 48-64px, Bold, 1-1.2 line height
H2 (Sections): 36-42px, SemiBold, 1.2 line height
H3 (Cards): 24-28px, SemiBold, 1.3 line height
Body: 16-18px, Regular, 1.6 line height
Small: 14px, Regular, 1.5 line height
```

**Font suggestions:**
- Modern Sans: Inter, Poppins, Outfit
- Professional: Montserrat, Proxima Nova
- Clean: Raleway, Work Sans

### Button Styles

**Primary CTA:**
```css
Padding: 16px 32px
Font size: 16-18px
Border radius: 4-8px (not too rounded)
Shadow: subtle
Hover: slight scale (1.02) + shadow increase
Transition: 0.2s ease
```

**Secondary CTA:**
```css
Outlined style
Same dimensions
Hover: filled background
```

### Card Components

**Service Cards:**
```
Image: 16:9 ratio
Icon/Logo overlay: Top left
Title: Bottom overlay (gradient background)
Hover: Scale 1.03 + shadow
No borders (use shadows instead)
```

**Testimonial Cards:**
```
Quote marks icon
2-3 lines of text
Avatar (optional)
Name + location
Star rating
Background: Light gray or white card with shadow
```

### Spacing System

```
XS: 8px (tight elements)
S: 16px (related items)
M: 24px (card padding)
L: 40px (between sections)
XL: 80px (major sections)
XXL: 120px (section dividers)
```

---

## Competitive Advantages to Highlight (Visually)

### 1. Winter Operations
**Visual treatment:**
- Badge/icon in header: "Year-Round Service"
- Hero image: Team working in snow
- Before/after: Winter damage repairs
- Icon in service cards: Snowflake symbol

**Text (minimal):**
- "Winter specialists"
- "Cold-weather certified"

### 2. Local Expertise
**Visual treatment:**
- Edmonton skyline in footer
- Map with service areas highlighted
- Local project photos with neighborhood names

**Text (minimal):**
- "[X] years serving Edmonton"
- "Locally owned"

### 3. Quality/Craftsmanship
**Visual treatment:**
- Detail shots of mortar work
- Close-ups of finished edges
- Process photos (mixing, laying)

**Text (minimal):**
- "Licensed & insured"
- "Warranty included"

---

## Mobile-First Considerations

Your design should look perfect on mobile because:
1. Most searches for contractors happen on phones
2. Users want to call immediately
3. Simple navigation matters even more

**Mobile priorities:**
1. Sticky header with phone number
2. Large tap targets (48px minimum)
3. Simple swipe carousels
4. Minimal form fields
5. One-column layout
6. Fast loading (<3s)

---

## Next Steps

Now that we have your design direction clear, here's what we can do:

1. **Deep dive into Thomann-Hanry technical implementation**
2. **Create wireframes** based on these principles
3. **Develop a component library** for the site
4. **Plan the sitemap** (keeping navigation simple)
5. **Gather information about your client** to apply these principles specifically
6. **Create a design mood board** with color palettes and typography

What would you like to tackle next?
