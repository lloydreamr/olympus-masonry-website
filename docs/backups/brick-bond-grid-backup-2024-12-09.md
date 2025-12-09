# Brick Bond Grid Pattern Backup

**Date:** December 9, 2024
**Component:** `components/BrickBondGrid.tsx`
**Images Location:** `public/images/hero/brick-bond/`

---

## Pattern Overview

A **seamless running brick bond pattern** that displays 6 masonry images in a 2-row grid with:
- Row 1: 3 full images
- Row 2: 3 full images + 1 partial wrap-around (creating seamless continuity)
- 3px black gaps between all images (matching site's vertical divider width)
- Second row offset by 16.67% (half of one image width) to create authentic brick bond stagger

### Visual Layout
```
┌─────────────┬─────────────┬─────────────┐
│  brick-01   │  brick-02   │  brick-03   │  ← Row 1 (3 full images)
├───────┬─────┴─────┬───────┴─────┬───────┤
│brick-06│ brick-04  │  brick-05   │brick-06│  ← Row 2 (offset + wrap)
│(right) │  (full)   │   (full)    │(left)  │
└───────┴───────────┴─────────────┴───────┘
         ↑                              ↑
    Left wrap                    Right continuation
    (shows right                 (gets clipped,
     portion)                     wraps to left)
```

---

## Component Code

```tsx
"use client";

import Image from "next/image";

const brickImages = [
  { src: "/images/hero/brick-bond/brick-01.webp", alt: "Red brick wall texture" },
  { src: "/images/hero/brick-bond/brick-02.webp", alt: "Weathered vintage brick" },
  { src: "/images/hero/brick-bond/brick-03.webp", alt: "Mixed brick with mortar" },
  { src: "/images/hero/brick-bond/brick-04.webp", alt: "Dark multi-colored brick" },
  { src: "/images/hero/brick-bond/brick-05.webp", alt: "Salmon red brick wall" },
  { src: "/images/hero/brick-bond/brick-06.webp", alt: "White painted brick" },
];

export default function BrickBondGrid() {
  // Calculate offset: half of one cell width (1/3 = 33.33%, half = 16.67%)
  const offsetPercent = 16.67;

  return (
    <div className="w-full h-full flex flex-col bg-black overflow-hidden" style={{ gap: "3px" }}>
      {/* Row 1 - 3 images */}
      <div className="flex flex-1 min-h-0" style={{ gap: "3px" }}>
        {brickImages.slice(0, 3).map((img, index) => (
          <div key={index} className="relative flex-1 overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 16vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Row 2 - Seamless running bond: [brick-06 partial] [brick-04] [brick-05] [brick-06 partial] */}
      <div
        className="flex flex-1 min-h-0"
        style={{
          gap: "3px",
          marginLeft: `-${offsetPercent}%`,
          width: `calc(100% + ${offsetPercent * 2}%)`,
        }}
      >
        {/* Left wrap: brick-06 (showing right portion that would be clipped) */}
        <div className="relative overflow-hidden" style={{ flex: `0 0 calc(${offsetPercent}% - 1.5px)` }}>
          <Image
            src={brickImages[5].src}
            alt={brickImages[5].alt}
            fill
            className="object-cover object-right"
            sizes="(max-width: 768px) 16vw, 8vw"
          />
        </div>

        {/* Main 3 images: brick-04, brick-05, brick-06 */}
        {brickImages.slice(3, 6).map((img, index) => (
          <div key={index} className="relative flex-1 overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 16vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## Usage in page.tsx

```tsx
// Import at top of file
import BrickBondGrid from "@/components/BrickBondGrid";

// In hero section right side
<div className="split-right bg-black p-0 overflow-hidden">
  <BrickBondGrid />
</div>
```

---

## Image Files

All images stored in `public/images/hero/brick-bond/`:

| File | Description | Source |
|------|-------------|--------|
| brick-01.webp | Red brick wall texture | Unsplash (XEsx2NVpqWY) |
| brick-02.webp | Weathered vintage brick | Unsplash (0Qvaxzh3VBo) |
| brick-03.webp | Mixed brick with mortar | Unsplash (U7cQPCb_dxo) |
| brick-04.webp | Dark multi-colored brick | Unsplash (LmGT_iY-ykc) |
| brick-05.webp | Salmon red brick wall | Unsplash (t4DuoDHjxrQ) |
| brick-06.webp | White painted brick | Unsplash (4Zaq5xY5M_c) |

**Image specs:**
- Format: WebP
- Dimensions: 600x400px
- Quality: 85%
- File sizes: 31KB - 97KB each

---

## Key CSS/Style Details

1. **Container:** `bg-black` with `overflow-hidden` and `gap: 3px`
2. **Row 1:** Standard flex with 3 equal-width children
3. **Row 2:**
   - `marginLeft: -16.67%` (negative offset to shift left)
   - `width: calc(100% + 33.34%)` (extra width for wrap)
   - First child is fixed-width partial image with `object-right` positioning
4. **Gap:** 3px black (matches site divider width)
5. **Images:** `object-cover` to maintain aspect ratio

---

## Restoration Steps

If something breaks:

1. Copy the component code above to `components/BrickBondGrid.tsx`
2. Ensure images exist in `public/images/hero/brick-bond/`
3. Import and use in `app/page.tsx` hero section
4. The split-right container needs: `bg-black p-0 overflow-hidden`
