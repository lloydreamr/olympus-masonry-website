# 🚀 HANDOFF TO DEVELOPMENT

## Project: Olympus Masonry - 10 Homepage Design Samples

**Date:** 2025-01-06
**Client:** Peter Kolia (Olympus Masonry, Edmonton, AB)
**Deliverable:** 10 distinct homepage layouts for client review

---

## 📋 What You're Building

Create **10 different homepage design samples** using the **same brand identity** (colors, fonts, logo) but with **different layout approaches**.

### Purpose
Peter needs to see various design directions to choose which layout style resonates with him. He'll pick his favorite, then we'll build the full website in that chosen style.

---

## 📦 Key Documents (Read These)

1. **DEV-PLAN-10-samples.md** - Complete technical specification
2. **SAMPLES-OVERVIEW.md** - Quick visual guide of the 10 layouts
3. **olympus-masonry-brand-guide.md** - Full brand guidelines
4. **thomann-hanry-technical-implementation.md** - Reference for Sample 1 (Thomann-Hanry inspired)

---

## 🎨 Brand Identity (LOCKED IN - Don't Change)

### Colors (From Business Card)
```css
--olympus-gold: #D4A657;
--olympus-black: #000000;
--olympus-white: #FFFFFF;
```
**That's it. Only these 3 colors.**

### Fonts (Matching Business Card)
```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```
- **Bebas Neue** - Large display text (hero headlines)
- **Oswald** - Section headlines (uppercase, tracked)
- **Inter** - Body text

### Contact Info
- **Company:** Olympus Masonry
- **Owner:** Peter Kolia
- **Office:** 403-919-5272
- **Cell:** 403-919-5272
- **Email:** ollympus1@outlook.com
- **Location:** Edmonton, Alberta

---

## 🏗️ Project Structure

```
olympus-mansory/
├── samples/
│   ├── index.html                  # Main selection page (build this last)
│   ├── shared/
│   │   ├── css/
│   │   │   ├── reset.css          # CSS reset
│   │   │   └── variables.css      # Brand colors & fonts
│   │   ├── js/
│   │   │   └── shared.js          # Optional shared utilities
│   │   └── images/
│   │       ├── logo.svg           # Olympus logo
│   │       └── placeholder/       # Placeholder images
│   ├── sample-1/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js (if needed)
│   ├── sample-2/
│   │   └── ... (same structure)
│   └── ... (samples 3-10)
```

---

## ✅ Technical Requirements

### For Each Sample:
- [x] Semantic HTML5
- [x] Mobile-first responsive (375px, 768px, 1440px)
- [x] Use `../shared/css/variables.css` for colors/fonts
- [x] Vanilla CSS (or add Tailwind/Bootstrap if preferred)
- [x] Vanilla JS (or add jQuery for carousels)
- [x] Fast loading (<3 seconds)
- [x] Placeholder images from Unsplash (URLs in DEV-PLAN)
- [x] All samples use SAME colors & fonts

### Carousel Library (Samples 1, 2, 8)
Choose one:
- **Slick Carousel** (easier, needs jQuery)
- **Swiper.js** (modern, no jQuery)

CDN links provided in DEV-PLAN-10-samples.md

---

## 📱 What Each Sample Must Include

1. **Header/Navigation**
   - Olympus logo
   - Links: Services, Portfolio, About, Contact
   - Phone number (clickable)
   - "Get Quote" CTA button

2. **Hero Section**
   - Large headline
   - Subheadline
   - CTA button(s)
   - Background image or video

3. **Services Section**
   - 3-5 services (brief descriptions)
   - Images or icons

4. **Trust Signals**
   - "Quality Craftsmanship"
   - "Licensed & Insured"
   - "Year-Round Service"
   - "Edmonton Local"

5. **Testimonial**
   - At least 1 testimonial
   - Name + location
   - 5-star visual rating

6. **Final CTA**
   - "Ready to start?" headline
   - "Get Free Estimate" button
   - Phone number

7. **Footer**
   - Logo
   - Quick links
   - Contact info
   - Copyright

**Content length:** 3-4 screens of scrolling per sample

---

## 🎯 The 10 Layouts (Build in This Order)

### Phase 1: Simple Layouts (Start Here)
1. ✅ **Sample 10** - Minimal Brutalist (30 min)
2. ✅ **Sample 7** - Card-Based (45 min)
3. ✅ **Sample 4** - Modern Grid (1 hour)

### Phase 2: Medium Complexity
4. ✅ **Sample 5** - Split Screen (1 hour)
5. ✅ **Sample 3** - Dark & Luxe (1 hour)
6. ✅ **Sample 6** - Full-Width Sections (1.5 hours)

### Phase 3: Complex (Carousels/Video)
7. ✅ **Sample 1** - Minimal Gold / Thomann-Hanry (1.5 hours)
8. ✅ **Sample 2** - Bold Gold (1 hour)
9. ✅ **Sample 8** - Carousel Hero (1.5 hours)
10. ✅ **Sample 9** - Video Hero (1.5 hours)

### Phase 4: Selection Page
11. ✅ **index.html** - Main selection hub (30 min)

**Total Estimated Time:** 10-12 hours

---

## 🎨 Quick Layout Descriptions

**Sample 1:** White dominant, text left (40%) + carousel right (60%), minimal gold accents

**Sample 2:** More gold SECTIONS (full-width gold backgrounds), alternating colors, bolder type

**Sample 3:** Black dominant (70-80% dark backgrounds), luxe spacing, gold accent lines

**Sample 4:** Pinterest-style masonry grid, many images, minimal text

**Sample 5:** 50/50 vertical split throughout (text left, images right), gold dividing line

**Sample 6:** Full-width sections with varied layouts, magazine editorial style

**Sample 7:** Everything in clean cards with shadows, organized grid

**Sample 8:** Full-screen auto-rotating carousel hero (3-5 slides)

**Sample 9:** Video background hero, looping masonry work footage

**Sample 10:** Extreme whitespace (80% empty), HUGE typography (150px+), geometric gold shapes

**Detailed specs for each in:** `DEV-PLAN-10-samples.md`

---

## 🖼️ Placeholder Images (Use These)

### Hero Images (1920x1080):
```
https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=1920&h=1080&fit=crop
https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=1920&h=1080&fit=crop
https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop
https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&h=1080&fit=crop
```

### Project Images (800x600):
```
https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop
https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop
https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop
```

**Full list in DEV-PLAN-10-samples.md**

---

## ✅ Quality Checklist (Before Marking Complete)

For each sample:
- [ ] Uses correct brand colors (black, gold, white ONLY)
- [ ] Uses correct fonts (Bebas Neue, Oswald, Inter)
- [ ] Logo visible
- [ ] All links work (even if placeholder)
- [ ] Buttons have hover states
- [ ] Mobile responsive (test at 375px)
- [ ] Loads fast (<3s)
- [ ] No console errors
- [ ] Matches layout description in DEV-PLAN

---

## 📋 Deliverables Checklist

- [ ] Folder structure created (`samples/`, `shared/`, `sample-1/` through `sample-10/`)
- [ ] `shared/css/variables.css` with brand colors/fonts
- [ ] `shared/css/reset.css` with CSS reset
- [ ] Logo file in `shared/images/`
- [ ] 10 working homepage samples (each with `index.html`)
- [ ] `samples/index.html` selection page with thumbnails
- [ ] All samples tested on mobile/tablet/desktop
- [ ] Screenshots of each sample (for thumbnails)
- [ ] README.md with viewing instructions

---

## 🚀 Getting Started

### Step 1: Create Structure
```bash
cd /Users/maho/Documents/code/clients/olympus-mansory/
mkdir -p samples/shared/{css,js,images/placeholder}
mkdir -p samples/{sample-1,sample-2,sample-3,sample-4,sample-5,sample-6,sample-7,sample-8,sample-9,sample-10}
```

### Step 2: Set Up Shared CSS
Create `samples/shared/css/variables.css`:
```css
:root {
  --olympus-gold: #D4A657;
  --olympus-black: #000000;
  --olympus-white: #FFFFFF;

  --font-display: 'Bebas Neue', sans-serif;
  --font-heading: 'Oswald', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

### Step 3: Build Sample 10 First
(Simplest - good warm-up)

### Step 4: Continue Through All 10

### Step 5: Create Index Page
With thumbnails linking to each sample

### Step 6: Test Everything

### Step 7: Deliver

---

## 💡 Tips

- **Reuse code:** Copy/paste between samples and modify
- **Test as you go:** Check mobile at each stage
- **Keep it simple:** These are concept samples, not production
- **Focus on layouts:** Visual distinction is more important than perfection
- **Comment your code:** Make it easy to understand
- **Use browser dev tools:** For responsive testing
- **Don't over-engineer:** Speed > perfection for samples

---

## ❓ Questions?

Refer to:
1. `DEV-PLAN-10-samples.md` for technical details
2. `SAMPLES-OVERVIEW.md` for layout explanations
3. `olympus-masonry-brand-guide.md` for brand guidelines

---

## 🎉 When You're Done

The client (Peter) will:
1. Open `samples/index.html`
2. Click through all 10 designs
3. Pick his top 3 favorites
4. We'll refine and build the full site

---

## ⏱️ Time Tracking

| Phase | Task | Est. Time | Status |
|-------|------|-----------|--------|
| 1 | Setup structure | 30 min | ⬜ |
| 2 | Sample 10 (Brutalist) | 30 min | ⬜ |
| 3 | Sample 7 (Cards) | 45 min | ⬜ |
| 4 | Sample 4 (Grid) | 1 hour | ⬜ |
| 5 | Sample 5 (Split) | 1 hour | ⬜ |
| 6 | Sample 3 (Dark) | 1 hour | ⬜ |
| 7 | Sample 6 (Full-width) | 1.5 hours | ⬜ |
| 8 | Sample 1 (Minimal) | 1.5 hours | ⬜ |
| 9 | Sample 2 (Bold) | 1 hour | ⬜ |
| 10 | Sample 8 (Carousel) | 1.5 hours | ⬜ |
| 11 | Sample 9 (Video) | 1.5 hours | ⬜ |
| 12 | Index page | 30 min | ⬜ |
| 13 | Polish & testing | 1 hour | ⬜ |
| **TOTAL** | | **~12 hours** | |

---

## 🎯 Success Criteria

✅ 10 visually distinct layouts
✅ All use same brand colors & fonts
✅ All are mobile responsive
✅ All have placeholder content
✅ Selection page works
✅ Client can easily review and choose

**GO BUILD!** 🚀
