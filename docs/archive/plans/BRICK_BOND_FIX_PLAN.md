# Comprehensive Brick Bond Pattern Fix Plan

## Problem Statement
1. **Inconsistent brick bond pattern** - Sections 2, 4, 6, 8 use "alternate" pattern (3x2 grid) instead of running bond
2. **Duplicate images across sections** - Same images appear in multiple sections
3. **Insufficient unique images** - Only 29 images available for 48 slots (8 sections × 6 images)

## Solution Overview
1. Change ALL sections to use `pattern="default"` for consistent running bond
2. Source thematic placeholder images from Unsplash for each section
3. Ensure each section has 6 unique images with NO cross-section duplicates

---

## Image Allocation Plan

### Section 1: HERO - Masonry Excellence (Showcase variety)
Theme: Premium masonry showcase - mix of stone and brick work
Images needed: 6 unique luxury/premium masonry images
- Source: Unsplash search "luxury stone masonry", "premium brick building"

### Section 2: Brick & Stone Masonry (01)
Theme: Brick and stone construction, building facades
Images needed: 6 unique brick/stone building images
- Current available: 5 portfolio/brick-work images + 1 service image
- Use existing portfolio/brick-work images (no placeholders needed)

### Section 3: Retaining Walls & Patios (02)
Theme: Outdoor hardscaping, patios, walkways, retaining walls
Images needed: 6 unique patio/outdoor images
- Current available: 2 portfolio/patios + 1 sections/patios + 1 service
- Need: 2 additional patio/outdoor placeholder images
- Source: Unsplash search "stone patio", "brick walkway", "retaining wall"

### Section 4: Chimneys & Fireplaces (03)
Theme: Fireplaces, chimneys, interior stone features
Images needed: 6 unique chimney/fireplace images
- Current available: 2 portfolio/chimneys + 1 sections/chimneys + 1 service + 2 interior stone
- Source: Unsplash search "stone fireplace", "brick chimney", "fireplace interior"

### Section 5: Years of Excellence (Commercial showcase)
Theme: Commercial projects, retail, professional buildings
Images needed: 6 unique commercial images
- Current available: 3 portfolio/commercial-retail + 1 hero commercial + 2 sections/brick-work
- Use existing commercial images (no placeholders needed)

### Section 6: Winter Masonry (04)
Theme: Winter construction, cold-weather masonry, snowy scenes
Images needed: 6 unique winter/cold weather masonry images
- Current available: 1 service/winter + 1 hero winter + 1 sections/stone-work winter
- Need: 3 additional winter masonry placeholder images
- Source: Unsplash search "brick building winter", "stone house snow", "masonry winter"

### Section 7: Testimonials
Theme: Beautiful completed residential projects
Images needed: 6 unique residential showcase images
- Current available: Various stone-work portfolio images
- Source: Unsplash search "luxury home stone", "residential masonry"

### Section 8: CTA - Ready to Start?
Theme: Inspiring final showcase - best work variety
Images needed: 6 unique inspiring project images
- Use remaining available images + placeholders
- Source: Unsplash search "masonry architecture", "stone building exterior"

---

## Placeholder Images to Source

### From Unsplash (royalty-free):
1. **Patios Section** (2 images):
   - Stone patio with outdoor furniture
   - Brick paver walkway

2. **Chimneys Section** (2 images):
   - Modern stone fireplace interior
   - Outdoor stone fireplace

3. **Winter Section** (3 images):
   - Stone building in snow
   - Brick facade winter
   - Masonry detail with frost

4. **Testimonials Section** (3 images):
   - Luxury home stone exterior
   - Residential stone entryway
   - Beautiful stone facade

5. **CTA Section** (2 images):
   - Dramatic stone architecture
   - Premium brick detail

---

## Implementation Steps

1. **Download placeholder images from Unsplash**
   - Use direct Unsplash URLs with proper attribution
   - Or download and convert to WebP format

2. **Update page.tsx**
   - Change ALL sections to `pattern="default"`
   - Assign unique images to each section
   - No duplicate paths across any sections

3. **Test and validate**
   - Build the project
   - Visual verification of all 8 sections
   - Confirm running bond pattern on all sections
   - Verify no broken images

---

## Expected Outcome
- All 8 sections display consistent running bond brick pattern
- Each section has 6 unique, thematically appropriate images
- No duplicate images across sections
- Professional appearance with high-quality imagery
