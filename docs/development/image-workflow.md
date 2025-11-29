# Image Management Workflow

**Purpose**: Professional pipeline for managing, curating, editing, and optimizing client images for web use.

---

## Overview

Peter has provided 55 images (~65MB) with more coming throughout development. We need a systematic workflow to:
1. Receive and organize new images
2. Curate the best images for website use
3. Edit/enhance images as needed
4. Optimize for web performance
5. Integrate into Next.js

---

## Folder Structure

```
assets/images/
├── 00-incoming/              # New images from Peter land here
│   └── 2025-11-XX/           # Date-based folders
├── 01-originals/             # Permanent archive (NEVER edit)
│   └── [all client photos]   # Organized by date received
├── 02-curated/               # Images selected for website use
│   ├── hero-candidates/      # Potential hero/banner images
│   ├── projects/             # Project photos by type
│   │   ├── brick-work/
│   │   ├── stone-work/
│   │   ├── patios/
│   │   └── chimneys/
│   ├── team/                 # Peter + team photos
│   ├── process/              # Work-in-progress shots
│   └── misc/                 # Other usable images
├── 03-edited/                # Post-processed images
│   └── [mirrors 02-curated structure]
└── 04-web-ready/             # Optimized for web (Next.js uses these)
    ├── hero/                 # 1920x1080, WebP, quality 85
    ├── projects/             # 800x600, WebP, quality 80
    │   ├── full/
    │   └── thumbnails/       # 400x300
    └── team/                 # Various sizes
```

---

## Workflow Stages

### Stage 1: Incoming Images

**When Peter Sends Images:**

1. **Create dated folder**:
   ```bash
   mkdir -p assets/images/00-incoming/2025-11-29
   ```

2. **Download images to folder**:
   ```
   assets/images/00-incoming/2025-11-29/
   ```

3. **Quick review**:
   - Check file quality (resolution, clarity)
   - Note any issues (too dark, blurry, etc.)
   - Communicate with Peter if images aren't usable

---

### Stage 2: Archive Originals

**Purpose**: Never lose the original, untouched images

1. **Copy to originals folder**:
   ```bash
   cp assets/images/00-incoming/2025-11-29/* assets/images/01-originals/
   ```

2. **Organize by date received** (optional):
   ```
   assets/images/01-originals/
   ├── 2025-11-15-batch-1/
   └── 2025-11-29-batch-2/
   ```

3. **Rule**: NEVER edit files in `01-originals/` - this is permanent archive

---

### Stage 3: Curate for Website Use

**Purpose**: Select best images and categorize them

**Process**:

1. **Review all incoming images**
2. **Select keepers based on**:
   - Image quality (sharp, well-lit, professional)
   - Content relevance (shows work clearly)
   - Composition (visually appealing)
   - Variety (different project types, angles)

3. **Copy selected images to appropriate category**:
   ```bash
   # Example: Great brick patio shot
   cp assets/images/01-originals/IMG_2458.JPEG \
      assets/images/02-curated/projects/patios/patio-brick-red-01.jpg

   # Example: Potential hero image
   cp assets/images/01-originals/IMG_1110.JPEG \
      assets/images/02-curated/hero-candidates/stonework-wall-01.jpg
   ```

4. **Rename files descriptively**:
   - ❌ Bad: `IMG_2458.JPEG`
   - ✅ Good: `patio-brick-red-01.jpg`
   - ✅ Good: `chimney-stone-exterior-winter-01.jpg`

**Naming Convention**:
```
[project-type]-[material]-[distinguisher]-[number].jpg

Examples:
- patio-brick-herringbone-01.jpg
- chimney-stone-exterior-winter-01.jpg
- retaining-wall-natural-stone-curved-01.jpg
- team-peter-onsite-01.jpg
```

---

### Stage 4: Edit Images (If Needed)

**Purpose**: Enhance images for better presentation

**Tools**:
- **Photoshop** (if available)
- **GIMP** (free alternative)
- **Online tools**: Photopea, Pixlr, etc.

**Common Edits**:
1. **Crop**: Remove distractions, improve composition
2. **Exposure**: Brighten dark images
3. **Color correction**: Fix color balance, saturation
4. **Straighten**: Level horizons
5. **Minor cleanup**: Remove debris, distractions

**Process**:
1. Open original from `02-curated/[category]/`
2. Make edits
3. Save to `03-edited/[same-category]/`
4. **Keep same filename** for tracking

**Example**:
```
Input:  02-curated/projects/patios/patio-brick-red-01.jpg
Output: 03-edited/projects/patios/patio-brick-red-01.jpg
```

**When to Skip Editing**:
- Image is already high quality
- No adjustments needed
- Can go straight to optimization

---

### Stage 5: Optimize for Web

**Purpose**: Convert images to web-friendly formats and sizes

**Target Specs**:

| Category | Dimensions | Format | Quality | Use Case |
|----------|-----------|---------|---------|----------|
| Hero images | 1920x1080 | WebP | 85 | Full-screen banners |
| Project full | 800x600 | WebP | 80 | Portfolio gallery |
| Project thumbnails | 400x300 | WebP | 75 | Gallery thumbnails |
| Team photos | 600x600 | WebP | 80 | About page |

**Tools**:

**Option 1: Sharp (Command Line)**
```bash
# Install Sharp CLI
npm install -g sharp-cli

# Convert and resize
sharp -i input.jpg -o output.webp --resize 800 600 --quality 80
```

**Option 2: Squoosh (Web UI)**
- Visit: https://squoosh.app/
- Drag and drop images
- Choose WebP format
- Adjust quality slider
- Download optimized image

**Option 3: Batch Script** (Create this)
```bash
# scripts/optimize-images.sh
# See implementation below
```

**Process**:
1. Take image from `03-edited/` (or `02-curated/` if no edits)
2. Resize to target dimensions
3. Convert to WebP
4. Save to `04-web-ready/[category]/`

**Example**:
```
Input:  03-edited/projects/patios/patio-brick-red-01.jpg
Output: 04-web-ready/projects/full/patio-brick-red-01.webp
Output: 04-web-ready/projects/thumbnails/patio-brick-red-01.webp
```

---

### Stage 6: Integration with Next.js

**Using Next.js Image Component**:

```tsx
import Image from 'next/image'

// Example: Hero image
<Image
  src="/images/hero/stonework-wall-hero.webp"
  alt="Custom stone retaining wall installation in Edmonton"
  width={1920}
  height={1080}
  priority // Load immediately for hero
  quality={85}
/>

// Example: Project thumbnail
<Image
  src="/images/projects/thumbnails/patio-brick-red-01.webp"
  alt="Red brick patio with herringbone pattern"
  width={400}
  height={300}
  loading="lazy" // Lazy load for gallery
  quality={75}
/>
```

**Move optimized images to Next.js public folder**:
```bash
# After Next.js is initialized
cp -r assets/images/04-web-ready/* src/public/images/
```

---

## Image Requirements by Page

### Homepage (Sample #5)
- **Hero Image**: 1x high-quality stonework or masonry (1920x1080)
- **Services Section**: 5x project images (800x600) - one per service
- **Trust Signals**: Optional icon images
- **Testimonial**: Optional customer photo
- **Final CTA**: Background image (optional, 1920x1080)

**Total Needed**: ~7-10 images

### Portfolio Page
- **Gallery**: 20-30 project images (thumbnails + full size)
- **Categories**:
  - Brick work (5-7 images)
  - Stone work (5-7 images)
  - Patios (5-7 images)
  - Chimneys (3-5 images)
  - Other (3-5 images)

**Total Needed**: 20-30 images

### About Page
- **Peter/Team Photo**: 1-2 images (600x600)
- **Process Photos**: 3-4 work-in-progress images (800x600)

**Total Needed**: 4-6 images

### Services Page
- **Service-Specific Images**: 5x per service page (800x600)

**Total Needed**: 15-25 images

### Contact Page
- **Office/Team Photo**: 1 image (optional, 800x600)

---

## Curation Criteria

### Hero Image Selection
**Must Have**:
- ✅ High resolution (min 1920x1080)
- ✅ Sharp focus
- ✅ Good lighting
- ✅ Shows quality craftsmanship
- ✅ Professional composition

**Nice to Have**:
- Edmonton-specific (recognizable location)
- Winter setting (emphasizes year-round capability)
- Dramatic/impressive project

**Avoid**:
- ❌ Blurry or low resolution
- ❌ Cluttered background
- ❌ Poor lighting (too dark/too bright)
- ❌ Incomplete work

### Project Image Selection
**Must Have**:
- ✅ Clear view of completed work
- ✅ Shows quality and detail
- ✅ Professional appearance
- ✅ Representative of typical projects

**Nice to Have**:
- Before/after pairs
- Different angles of same project
- Seasonal variety
- Different project scales (small to large)

**Avoid**:
- ❌ Work-in-progress (unless specifically for "process" section)
- ❌ Messy job sites
- ❌ Poor framing

---

## Batch Optimization Script

Create `scripts/optimize-images.sh`:

```bash
#!/bin/bash
# Image Optimization Script for Olympus Masonry Website

# Requires: sharp-cli (npm install -g sharp-cli)

# Set source and destination
SOURCE_DIR="assets/images/03-edited"
DEST_DIR="assets/images/04-web-ready"

# Hero images (1920x1080, quality 85)
for img in $SOURCE_DIR/hero-candidates/*.{jpg,jpeg,JPG,JPEG,png,PNG}; do
  [ -f "$img" ] || continue
  filename=$(basename "$img")
  filename="${filename%.*}.webp"
  sharp -i "$img" -o "$DEST_DIR/hero/$filename" \\
    --resize 1920 1080 --quality 85
  echo "Optimized: $filename (hero)"
done

# Project images (800x600 + 400x300 thumbnails, quality 80/75)
for img in $SOURCE_DIR/projects/**/*.{jpg,jpeg,JPG,JPEG,png,PNG}; do
  [ -f "$img" ] || continue
  filename=$(basename "$img")
  filename="${filename%.*}.webp"

  # Full size
  sharp -i "$img" -o "$DEST_DIR/projects/full/$filename" \\
    --resize 800 600 --quality 80

  # Thumbnail
  sharp -i "$img" -o "$DEST_DIR/projects/thumbnails/$filename" \\
    --resize 400 300 --quality 75

  echo "Optimized: $filename (project + thumbnail)"
done

# Team photos (600x600, quality 80)
for img in $SOURCE_DIR/team/*.{jpg,jpeg,JPG,JPEG,png,PNG}; do
  [ -f "$img" ] || continue
  filename=$(basename "$img")
  filename="${filename%.*}.webp"
  sharp -i "$img" -o "$DEST_DIR/team/$filename" \\
    --resize 600 600 --quality 80
  echo "Optimized: $filename (team)"
done

echo "✅ Image optimization complete!"
```

**Usage**:
```bash
chmod +x scripts/optimize-images.sh
./scripts/optimize-images.sh
```

---

## Checklist: New Image Batch

When Peter sends new images, follow this checklist:

- [ ] Create dated folder in `00-incoming/`
- [ ] Download images to incoming folder
- [ ] Quick quality review
- [ ] Copy ALL images to `01-originals/` (archive)
- [ ] Review and select best images
- [ ] Copy selected images to `02-curated/[category]/`
- [ ] Rename files descriptively
- [ ] Edit images if needed (save to `03-edited/`)
- [ ] Run optimization script OR optimize manually
- [ ] Save optimized images to `04-web-ready/`
- [ ] Update image inventory (track what's available)
- [ ] Communicate with Peter if more images needed

---

## Image Inventory

### Current Status
- **Total Images Received**: 55 (~65MB)
- **Hero Candidates**: [TBD after curation]
- **Project Images**: [TBD after curation]
  - Brick work: [X]
  - Stone work: [X]
  - Patios: [X]
  - Chimneys: [X]
- **Team Photos**: [TBD]
- **Process Shots**: [TBD]

### Gaps (Request from Peter)
- [ ] High-quality hero image (stonework or major project)
- [ ] Team photo with Peter on jobsite
- [ ] Winter work-in-progress shots (emphasize year-round capability)
- [ ] [Add specific gaps after curation]

---

## Best Practices

1. **Never delete originals** - Disk space is cheap, originals are irreplaceable
2. **Descriptive filenames** - Makes it easy to find images later
3. **Consistent naming** - Follow the naming convention
4. **Quality over quantity** - Better to have 20 great images than 50 mediocre ones
5. **Optimize for web** - Large images slow down the website
6. **WebP format** - Better compression than JPEG, widely supported
7. **Track inventory** - Know what you have, what you need

---

## Tools & Resources

### Image Editing
- **Photoshop**: Industry standard (paid)
- **GIMP**: Free alternative (https://www.gimp.org/)
- **Photopea**: Web-based Photoshop alternative (https://www.photopea.com/)

### Image Optimization
- **Squoosh**: Google's web-based optimizer (https://squoosh.app/)
- **Sharp CLI**: Command-line tool (https://sharp.pixelplumbing.com/)
- **TinyPNG**: Bulk compression (https://tinypng.com/)

### Image Organization
- **Adobe Bridge**: Image browser/organizer (paid)
- **XnView**: Free image browser (https://www.xnview.com/)
- **macOS Preview**: Built-in viewer with basic editing

---

**Next Steps**:
1. Curate current 55 images (review, categorize, rename)
2. Identify gaps and request from Peter
3. Edit images as needed
4. Run optimization script
5. Ready for Next.js integration

---

**Document Owner**: [Your Name]
**Last Updated**: November 2025
