# Main Page Image Upgrade Plan
## Goal: Display ONLY finished, polished images on the main page

---

## PHASE 1: Image Audit - Current Problems

### Images Currently Showing "In-Progress" Work on Main Page:

| Current Image | Issue | Section Used |
|---------------|-------|--------------|
| `services/chimneys-fireplaces.webp` | JLG lift visible, blue tarp on chimney, construction site | Chimneys Section |
| `services/patios-outdoor-spaces.webp` | Scaffolding, dirt ground, equipment | Patios Section |
| `portfolio/chimneys/stone-chimney-residential-01.webp` | Same as chimneys-fireplaces (construction) | Chimneys Section |
| `portfolio/stone-work/stone-feature-wall-beam-01.webp` | Red exposed wiring visible | Testimonials Section |
| `portfolio/stone-work/custom-stone-kitchen-wall-01.webp` | Red extension cord visible | Testimonials Section |
| `portfolio/stone-work/modern-stone-entry-feature-01.webp` | Sign/delivery box at entrance | Stone Work areas |

---

## PHASE 2: Available FINISHED Images (Peter's Originals)

### High-Quality Finished Projects:

| Original File | Description | Quality | Best For |
|---------------|-------------|---------|----------|
| `IMG_2458.JPEG` | 10841 Mixed-use building (front) | EXCELLENT | Hero, Commercial |
| `IMG_2462.JPEG` | 10841 Courtyard with water feature | EXCELLENT | Commercial, CTA |
| `IMG_2509.JPEG` | Stone home with garage (winter-masonry) | EXCELLENT | Already in use |
| `IMG_2361.JPEG` | Gray stone home with arch | EXCELLENT | Stone Work, Testimonials |
| `IMG_0116.JPG` | Luxury stone mansion | VERY GOOD | Hero, Luxury showcase |

### Images Needing Processing (from 01-originals):

These finished images should be enhanced and converted to WebP:
1. `IMG_2458.JPEG` - Commercial mixed-use building
2. `IMG_2462.JPEG` - Courtyard with water feature
3. `IMG_2361.JPEG` - Gray stone home with arch
4. `IMG_0116.JPG` - Luxury stone mansion

---

## PHASE 3: Replacement Strategy

### Section-by-Section Updates:

#### 1. HERO Section (Current: Unsplash placeholders)
**Action:** Replace some Unsplash with Peter's best finished work
- Add: 10841 building (IMG_2458)
- Add: Courtyard water feature (IMG_2462)
- Keep: Some brick/stone texture Unsplash for variety

#### 2. CHIMNEYS Section (Current: Construction images)
**Action:** Replace construction photos with finished work
- REMOVE: `chimneys-fireplaces.webp` (JLG lift visible)
- REMOVE: `stone-chimney-residential-01.webp` (same construction)
- ADD: Finished fireplace interior images
- ADD: `IMG_2361.JPEG` gray stone home

#### 3. PATIOS Section (Current: Scaffolding visible)
**Action:** Replace `patios-outdoor-spaces.webp`
- REMOVE: Image with scaffolding
- ADD: Clean finished patio images

#### 4. TESTIMONIALS Section (Current: Exposed wiring)
**Action:** Remove kitchen images with red wiring
- REMOVE: `stone-feature-wall-beam-01.webp` (red wires)
- REMOVE: `custom-stone-kitchen-wall-01.webp` (red wires)
- ADD: Exterior finished stone homes

#### 5. CTA Section (Current: Mix of Unsplash)
**Action:** Add Peter's polished commercial work
- ADD: 10841 courtyard (IMG_2462)

---

## PHASE 4: Image Processing Pipeline

### Step 1: Enhance Images
```bash
# Process each original through enhancement
# Adjust brightness, contrast, saturation for web display
```

### Step 2: Convert to WebP
```bash
# Convert enhanced JPEGs to WebP format
# Target: 800px width, 80% quality for web grids
```

### Step 3: Organize into correct folders
```
public/images/
├── portfolio/
│   ├── commercial/         # 10841 building images
│   ├── luxury-residential/ # Stone mansions
│   └── interior/           # Clean interior shots
├── sections/
│   ├── chimneys/          # Finished fireplaces
│   └── testimonial/       # Best showcase images
```

---

## PHASE 5: Implementation Checklist

- [ ] Process IMG_2458.JPEG -> commercial mixed-use building
- [ ] Process IMG_2462.JPEG -> courtyard water feature
- [ ] Process IMG_2361.JPEG -> gray stone arch home
- [ ] Process IMG_0116.JPG -> luxury stone mansion
- [ ] Update page.tsx Hero section
- [ ] Update page.tsx Chimneys section (remove construction)
- [ ] Update page.tsx Patios section (remove scaffolding)
- [ ] Update page.tsx Testimonials section (remove exposed wiring)
- [ ] Update page.tsx CTA section
- [ ] Visual review of all sections
- [ ] Mobile responsiveness check

---

## Expected Outcome

After implementation:
- Main page shows ONLY completed, professional projects
- No visible: construction equipment, scaffolding, tarps, wiring, dirt
- Luxurious, polished appearance throughout
- In-progress photos moved to Portfolio page only

