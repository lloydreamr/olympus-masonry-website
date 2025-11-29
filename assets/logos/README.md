# Olympus Masonry Logo Files

## Logo Variations

This directory contains the official Olympus Masonry logo in multiple formats and variations.

### SVG Files (Vector - Scalable)

1. **olympus-logo-full.svg** - Full vertical logo (icon + text stacked)
   - Use for: Print materials, high-resolution displays
   - Dimensions: 400x180px viewport

2. **olympus-icon.svg** - Icon only (pyramid with bricks)
   - Use for: Favicons, app icons, social media avatars
   - Dimensions: 160x150px viewport

3. **olympus-horizontal.svg** - Horizontal logo (icon + text side-by-side)
   - Use for: Website headers, navigation bars, email signatures
   - Dimensions: 450x150px viewport

### Reference Files

- **business-card-reference.jpg** - Original business card photo for color/design reference

## Brand Colors

From the business card analysis:

```css
--olympus-gold: #D4A657;     /* Primary brand color */
--olympus-white: #FFFFFF;    /* Secondary color */
--olympus-black: #000000;    /* Outlines and text */
```

## Logo Design Elements

1. **Pyramid Structure** - Represents masonry craftsmanship
2. **Brick Pattern** - Staggered horizontal rows (classic masonry technique)
3. **Two-Tone Design**:
   - Left side: Gold bricks
   - Right side: White bricks
4. **Sun Element** - Gold circle in upper right corner
5. **Typography**:
   - "OLYMPUS" - Bebas Neue, bold, gold
   - "MASONRY" - Oswald, white, wide letter spacing

## Usage Guidelines

### DO:
✅ Maintain aspect ratio when scaling
✅ Use on dark backgrounds for best visibility
✅ Keep minimum clear space around logo (equal to height of pyramid)
✅ Use SVG files whenever possible for crisp rendering

### DON'T:
❌ Change the brand colors
❌ Rearrange logo elements
❌ Add effects (shadows, gradients, etc.)
❌ Stretch or distort the logo
❌ Use on light backgrounds without adjustment

## File Generation

Logos were created from the business card reference on 2025-11-29.

## Next Steps

When Next.js is initialized, consider generating:
- PNG versions for broader compatibility
- Favicon sizes (16x16, 32x32, 180x180, 192x192, 512x512)
- Open Graph images (1200x630)
- Apple Touch Icons

Use tools like:
- Sharp CLI for PNG conversion
- Favicon generators for multi-size icons
