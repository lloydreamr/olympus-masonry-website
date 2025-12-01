# Professional Image Enhancement Plan
**Project**: Olympus Masonry Website
**Phase**: Stage 3 - Image Editing & Enhancement
**Date**: November 29, 2025

---

## Overview

This plan outlines a comprehensive, systematic approach to professionally enhance all 21 curated images to align them perfectly with the Olympus Masonry website's high standards.

**Goal**: Transform good masonry project photos into stunning, professionally-polished website images that showcase quality craftsmanship.

---

## What Claude Code CAN Do

### ✅ Analysis & Planning
- **View and analyze each image** - Identify rotation, cropping, color, and quality issues
- **Generate specific recommendations** - Detailed action items for each image
- **Quality validation** - Check images against professional standards
- **Automated batch processing** - Using command-line tools (ImageMagick, Sharp)

### ✅ Basic Editing Operations
- **Rotate** - Fix orientation issues
- **Crop** - Remove unwanted elements, improve composition
- **Resize** - Scale to target dimensions
- **Format conversion** - JPEG → WebP
- **Brightness/Contrast adjustment** - Basic exposure correction
- **Color correction** - Temperature, saturation adjustments
- **Sharpening** - Enhance details

---

## What Claude Code CANNOT Do Directly

### ❌ Advanced AI Enhancement
- **AI Upscaling** - Requires external tools (Topaz Gigapixel AI, Real-ESRGAN)
- **Advanced noise reduction** - Professional-grade denoising
- **Content-aware fill** - Photoshop-level object removal
- **HDR merging** - Combine multiple exposures
- **Professional color grading** - Cinema-grade color science

### 🔧 Solution: Hybrid Workflow
Combine Claude Code's automation with recommended external tools for best results.

---

## Comprehensive Enhancement Workflow

### Phase 1: Analysis & Assessment (Claude Code)
**Duration**: ~2 hours for 21 images
**Process**: Analyze each image one-by-one

For each image, Claude Code will:
1. View the image
2. Identify issues:
   - Rotation needed? (Off-level horizon, tilted buildings)
   - Cropping needed? (Construction debris, distractions, composition)
   - Color issues? (Too warm/cool, washed out, oversaturated)
   - Brightness issues? (Too dark, too bright, flat contrast)
   - Quality issues? (Soft focus, noise, artifacts)
   - Expand/extend needed? (Need more canvas for hero format)
3. Generate enhancement checklist
4. Prioritize edits (Critical, Important, Optional)

**Output**: Detailed enhancement checklist for each of 21 images

---

### Phase 2: Tool Selection & Setup
**Duration**: 30 minutes

#### Option A: Command-Line Tools (Fast, Automated)
**What Claude Code Will Use**:

**ImageMagick** (Swiss army knife of image editing)
```bash
# Installation
brew install imagemagick

# Capabilities:
- Rotate, crop, resize
- Color correction (levels, curves, saturation)
- Brightness/contrast adjustment
- Sharpening
- Format conversion
- Batch processing
```

**Sharp (Modern, Fast Node.js library)**
```bash
# Installation
npm install -g sharp-cli

# Capabilities:
- High-quality resize
- WebP conversion
- Rotation
- Cropping
- Color adjustments
```

**ExifTool** (Metadata management)
```bash
# Installation
brew install exiftool

# Capabilities:
- Strip metadata (reduce file size)
- Preserve important EXIF data
```

---

#### Option B: AI Enhancement Tools (Best Quality)

**1. Topaz Photo AI** (Recommended - Professional Grade)
- **Cost**: $199 one-time purchase
- **Capabilities**:
  - AI upscaling (2x, 4x, 6x resolution)
  - AI noise reduction
  - AI sharpening
  - Face enhancement
  - Automatic adjustments
- **Best For**: Hero images, key portfolio shots
- **Website**: https://www.topazlabs.com/topaz-photo-ai

**2. Adobe Lightroom** (Professional Standard)
- **Cost**: $9.99/month (Photography Plan)
- **Capabilities**:
  - Professional color grading
  - Lens correction
  - Perspective correction
  - Local adjustments (masks, gradients)
  - Batch processing with presets
- **Best For**: Consistent color grading across all images
- **Website**: https://www.adobe.com/products/photoshop-lightroom.html

**3. Photopea** (Free Web-Based)
- **Cost**: FREE (with ads) or $5/month (Pro)
- **Capabilities**:
  - Photoshop-like interface
  - Layers, masks, selection tools
  - Content-aware fill
  - Clone stamp, healing brush
- **Best For**: Removing construction debris, complex editing
- **Website**: https://www.photopea.com/

**4. Real-ESRGAN** (Free AI Upscaling)
- **Cost**: FREE (open source)
- **Capabilities**:
  - AI upscaling (2x, 4x)
  - Noise reduction
  - Detail enhancement
- **Best For**: Budget-friendly AI enhancement
- **Installation**:
```bash
git clone https://github.com/xinntao/Real-ESRGAN.git
cd Real-ESRGAN
pip install -r requirements.txt
```

---

### Phase 3: Systematic Enhancement (Image-by-Image)

**Workflow for Each Image**:

#### Step 1: Claude Code Analysis
```
1. Load image
2. Identify all issues
3. Generate action list
4. Present to you for approval
```

#### Step 2: Basic Edits (Claude Code via ImageMagick/Sharp)
```bash
# Example: Rotate, crop, color correct
magick input.jpg \
  -rotate 2 \              # Fix slight tilt
  -crop 1920x1080+0+200 \ # Crop to hero size, remove bottom debris
  -brightness-contrast 10x15 \  # Boost brightness +10%, contrast +15%
  -modulate 100,120,100 \ # Increase saturation by 20%
  -sharpen 0x1 \          # Subtle sharpening
  output.jpg
```

#### Step 3: AI Enhancement (External Tool - If Needed)
```
For critical images (hero, key portfolio):
1. Export from Claude Code edits
2. Process through Topaz Photo AI or Lightroom
3. Re-import enhanced version
```

#### Step 4: Validation (Claude Code)
```
1. Load enhanced image
2. Check against quality standards
3. Compare before/after
4. Flag any issues
5. Approve or request re-edit
```

---

### Quality Standards Checklist

Every enhanced image must meet these criteria:

**✅ Technical Quality**
- [ ] Resolution: Minimum 1920x1080 for hero, 800x600 for gallery
- [ ] File format: WebP (with JPEG fallback)
- [ ] File size: < 500KB for hero, < 200KB for gallery
- [ ] Sharpness: Crisp focus, no blur
- [ ] Noise: Minimal grain or artifacts
- [ ] Compression: No visible compression artifacts

**✅ Composition**
- [ ] Rule of thirds: Key elements aligned
- [ ] Horizon level: Straight buildings, no tilt
- [ ] No distractions: Construction debris removed/cropped
- [ ] Subject centered: Masonry work is focal point
- [ ] Adequate breathing room: Not too tight

**✅ Color & Exposure**
- [ ] Proper exposure: Not too dark, not blown out
- [ ] Accurate colors: Natural brick/stone tones
- [ ] Good contrast: Separation between elements
- [ ] Consistent color temperature: Neutral or slightly warm (2800K-5500K)
- [ ] Saturation: Vibrant but not oversaturated

**✅ Brand Alignment**
- [ ] Professional appearance: Polished, high-quality
- [ ] Showcases craftsmanship: Clear view of masonry work
- [ ] Matches website aesthetic: Modern, clean, aspirational
- [ ] Tells a story: Quality, expertise, attention to detail

---

## Recommended Enhancement Strategy

### Tier 1: Critical Images (AI Enhancement)
**Images**: 8 homepage section images
**Tools**: Topaz Photo AI + Lightroom (or Photopea)
**Time**: 30-45 minutes per image
**Budget**: $199 (Topaz) + $10/month (Lightroom) OR Free (Photopea)

**Why**: These images have maximum visibility and impact. Worth the extra effort.

**Process**:
1. Claude Code: Analyze, rotate, crop, basic color
2. Export to Topaz: AI upscale, denoise, sharpen
3. Import to Lightroom: Professional color grading, final adjustments
4. Export final WebP

---

### Tier 2: Portfolio Gallery (Batch Processing)
**Images**: 13 portfolio images
**Tools**: ImageMagick/Sharp + Lightroom presets
**Time**: 10-15 minutes per image
**Budget**: $10/month (Lightroom) or Free (ImageMagick only)

**Why**: Good quality needed, but can batch process with consistent presets.

**Process**:
1. Claude Code: Analyze all, generate batch edit script
2. ImageMagick: Batch rotate, crop, basic adjustments
3. Lightroom: Apply consistent preset for color grading
4. Claude Code: Validate batch results

---

### Tier 3: Budget-Friendly Option (All Free)
**Tools**: ImageMagick + Photopea + Real-ESRGAN
**Cost**: $0
**Time**: 20-30 minutes per image

**Process**:
1. Claude Code + ImageMagick: Basic edits
2. Photopea: Manual advanced edits (remove debris, healing)
3. Real-ESRGAN: AI upscale critical images
4. Claude Code: Final validation

---

## Detailed Action Plan: How to Proceed

### Immediate Next Steps (Choose Your Path):

#### Option A: Professional Route (Recommended)
**Investment**: ~$210 one-time + $10/month
**Quality**: ⭐⭐⭐⭐⭐ (5/5)
**Time**: ~20 hours total

**Steps**:
1. **You**: Purchase Topaz Photo AI ($199) + Adobe Lightroom ($10/mo)
2. **Me (Claude Code)**: Analyze all 21 images, generate detailed enhancement checklist
3. **Me**: Execute basic edits (rotate, crop, color) via ImageMagick
4. **You**: Process Tier 1 images (8 critical) through Topaz + Lightroom
5. **Me**: Batch process Tier 2 images (13 gallery) with presets
6. **Me**: Validate all enhanced images against quality standards
7. **Me**: Export final WebP versions ready for website

---

#### Option B: Budget Route (Free)
**Investment**: $0
**Quality**: ⭐⭐⭐⭐ (4/5)
**Time**: ~25 hours total

**Steps**:
1. **Me (Claude Code)**: Analyze all 21 images, generate enhancement checklist
2. **Me**: Execute all edits via ImageMagick (rotate, crop, color, sharpen)
3. **You**: Use Photopea for advanced edits (remove debris, content-aware fill) on Tier 1
4. **Me**: Process AI upscaling via Real-ESRGAN on hero image
5. **Me**: Validate all enhanced images
6. **Me**: Export final WebP versions

---

#### Option C: Hybrid Route (Best Value)
**Investment**: ~$50-100
**Quality**: ⭐⭐⭐⭐½ (4.5/5)
**Time**: ~15 hours total

**Tools**: Photopea Pro ($5/mo) + Real-ESRGAN (free) + ImageMagick (free)

**Steps**:
1. **Me (Claude Code)**: Full analysis of all images
2. **Me**: Batch process all 21 images with ImageMagick (basic edits)
3. **You**: Photopea Pro for Tier 1 critical edits (8 images)
4. **Me**: Real-ESRGAN AI upscaling for hero image
5. **Me**: Validation and final WebP export

---

## Example: Hero Image Enhancement Walkthrough

### Current Image: `commercial-brick-building-winter-hero.jpg`

**Step 1: Claude Code Analysis**
```
Issues Identified:
1. Slight tilt (buildings lean left ~1.5 degrees)
2. Trees in foreground partially obscure building (crop recommended)
3. Sky could be more vibrant (increase blue saturation)
4. Shadows too dark (lift shadows +15%)
5. Could benefit from AI upscaling (current 3024x4032, target 1920x1080 crop + upscale)
```

**Step 2: Basic Edit (Claude Code + ImageMagick)**
```bash
magick commercial-brick-building-winter-hero.jpg \
  -rotate 1.5 \                    # Fix tilt
  -gravity center \
  -crop 1920x1080+0+100 \         # Crop to hero ratio, remove trees
  -brightness-contrast 5x10 \      # Brighten +5%, contrast +10%
  -modulate 100,115,100 \         # Saturation +15%
  -channel RGB -shadows 15 \       # Lift shadows
  -sharpen 0x0.8 \                # Subtle sharpen
  -quality 92 \
  commercial-brick-building-winter-hero-edited.jpg
```

**Step 3: AI Enhancement (Your Step - Topaz Photo AI)**
1. Open `commercial-brick-building-winter-hero-edited.jpg` in Topaz
2. Apply "Recover Faces" OFF, "Sharpen" Medium, "Noise" Auto
3. Export at 100% quality

**Step 4: Final Polish (Your Step - Lightroom)**
1. Import Topaz output
2. Apply "Vibrant Architecture" preset
3. Fine-tune:
   - Highlights: -10
   - Shadows: +15
   - Clarity: +20
   - Vibrance: +15
4. Export as WebP, quality 85

**Step 5: Validation (Claude Code)**
```
✅ Resolution: 1920x1080
✅ File size: 385KB
✅ Horizon level: Perfect
✅ Color: Vibrant, professional
✅ Sharpness: Excellent detail
✅ Composition: Clean, no distractions
✅ Brand alignment: Modern, aspirational

APPROVED ✅
```

---

## Timeline & Milestones

### Week 1: Analysis & Setup
- **Day 1-2**: Claude Code analyzes all 21 images (Me)
- **Day 3**: You purchase tools (if Option A) and set up workflow
- **Day 4**: Test workflow on 1 sample image (Me + You)
- **Day 5**: Refine workflow based on test results

### Week 2: Enhancement Execution
- **Day 6-8**: Process Tier 1 images (8 critical homepage images)
- **Day 9-10**: Batch process Tier 2 images (13 portfolio images)

### Week 3: Validation & Export
- **Day 11-12**: Quality validation on all enhanced images (Me)
- **Day 13**: Re-edit any images that don't meet standards
- **Day 14**: Final WebP export and integration preparation

**Total Duration**: 14 days (can be compressed to 7 days if full-time focus)

---

## Tool Installation Guide

### ImageMagick (Essential - Free)
```bash
# macOS
brew install imagemagick

# Verify installation
magick -version

# Test on sample image
magick input.jpg -resize 800x600 -quality 85 output.jpg
```

### Sharp CLI (Optional - Faster than ImageMagick)
```bash
# Install globally
npm install -g sharp-cli

# Verify
sharp --version

# Test
sharp input.jpg -o output.webp --resize 800 600 --quality 80
```

### Real-ESRGAN (Free AI Upscaling)
```bash
# Clone repository
git clone https://github.com/xinntao/Real-ESRGAN.git
cd Real-ESRGAN

# Install dependencies
pip install -r requirements.txt

# Download pre-trained model
wget https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-x4plus.pth -P weights/

# Test upscaling
python inference_realesrgan.py -i input.jpg -o output.jpg -n realesrgan-x4plus
```

---

## Quality Validation Script

Claude Code will run this validation on every enhanced image:

```bash
#!/bin/bash
# Image Quality Validation Script

IMAGE=$1
REQUIRED_WIDTH=$2
REQUIRED_HEIGHT=$3

echo "Validating: $IMAGE"

# Check resolution
DIMENSIONS=$(identify -format "%wx%h" "$IMAGE")
echo "Resolution: $DIMENSIONS (Required: ${REQUIRED_WIDTH}x${REQUIRED_HEIGHT})"

# Check file size
SIZE=$(du -h "$IMAGE" | cut -f1)
echo "File size: $SIZE"

# Check format
FORMAT=$(identify -format "%m" "$IMAGE")
echo "Format: $FORMAT"

# Check quality metrics
QUALITY=$(identify -verbose "$IMAGE" | grep -i quality | head -1)
echo "$QUALITY"

# Visual inspection checklist
echo ""
echo "Manual Checks:"
echo "[ ] Horizon level?"
echo "[ ] Colors accurate?"
echo "[ ] Sharp focus?"
echo "[ ] No artifacts?"
echo "[ ] Brand aligned?"
```

---

## Risk Mitigation

### Backup Strategy
**Rule**: NEVER delete or overwrite originals

Directory structure:
```
assets/images/
├── 01-originals/          # NEVER TOUCH
├── 02-curated/            # Curated selections
├── 03-edited/             # Enhanced versions (THIS STAGE)
│   ├── tier1-critical/    # 8 homepage images
│   ├── tier2-portfolio/   # 13 gallery images
│   └── backup/            # Before enhancement (safety)
└── 04-web-ready/          # Final WebP exports
```

### Version Control
Save intermediate steps:
```
hero-image-v1-raw.jpg          (After curation)
hero-image-v2-basic-edit.jpg   (After ImageMagick)
hero-image-v3-ai-enhanced.jpg  (After Topaz)
hero-image-v4-color-graded.jpg (After Lightroom)
hero-image-final.webp          (Final export)
```

---

## Success Metrics

### Before vs After Comparison

**Example Metrics to Track**:
- File size reduction: Target 40-60% smaller (WebP vs JPEG)
- Perceived quality: 5-point scale (1=poor, 5=excellent)
- Load time: < 1 second on 3G connection
- Lighthouse score: 90+ (Performance)

---

## MY RECOMMENDATION

**Start with Option C (Hybrid Route)**:

**Why**:
- ✅ Best value for money ($5-10 total)
- ✅ Professional results for hero image (AI upscaling)
- ✅ Good quality for all images (ImageMagick + manual polish)
- ✅ Low risk (can upgrade to Option A later if needed)
- ✅ Fast timeline (1-2 weeks)

**Your Role** (10-15 hours):
- Install Photopea Pro ($5/mo)
- Polish 8 critical images manually in Photopea
- Review and approve enhancements

**My Role (Claude Code)** (10-12 hours):
- Analyze all 21 images thoroughly
- Execute all automated edits (rotate, crop, color)
- AI upscale hero image via Real-ESRGAN
- Validate all enhancements
- Export final WebP versions

---

## Next Action: Your Decision

**Question for You**:
Which option do you prefer?

1. **Option A** (Professional): Invest in Topaz + Lightroom (~$210)
2. **Option B** (Budget): 100% free tools
3. **Option C** (Hybrid): $5-10, best value ⭐ RECOMMENDED

Once you decide, I'll immediately:
1. Install and set up all required tools
2. Begin analyzing the first image in detail
3. Show you a complete enhancement walkthrough
4. Execute the entire workflow image-by-image

**Let me know which path you want to take, and we'll get started right away!**

---

**Created**: November 29, 2025
**Status**: Awaiting Your Decision
**Next Step**: Choose enhancement path (A, B, or C)
