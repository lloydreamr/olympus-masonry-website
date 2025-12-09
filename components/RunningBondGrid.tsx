"use client";

import Image from "next/image";

interface ImageData {
  src: string;
  alt: string;
}

interface RunningBondGridProps {
  images: ImageData[];
}

export default function RunningBondGrid({ images }: RunningBondGridProps) {
  // Each brick is 1/3 of the width = 33.33%
  // Half brick (for offset/wrap) = 16.67%
  // Gap between bricks = 3px
  const gap = 3;

  // Get the 6th image (last in row 2) for wrap-around effect
  const lastImage = images[5];

  return (
    <div className="w-full h-full flex flex-col bg-black overflow-hidden" style={{ gap: `${gap}px` }}>
      {/* Row 1 - 3 equal bricks */}
      <div className="flex flex-1" style={{ gap: `${gap}px` }}>
        {images.slice(0, 3).map((img, index) => (
          <div
            key={`r1-${index}`}
            className="relative overflow-hidden"
            style={{ width: `calc(33.33% - ${gap * 2 / 3}px)` }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 33vw, 17vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Row 2 - Running bond: half brick wrap + 3 bricks (last one cut off) */}
      <div className="flex flex-1 overflow-hidden" style={{ gap: `${gap}px` }}>
        {/* Wrap-around: Right portion of image 6 (half brick width) */}
        <div
          className="relative overflow-hidden flex-shrink-0"
          style={{ width: `calc(16.67% - ${gap * 0.5}px)` }}
        >
          <Image
            src={lastImage.src}
            alt={lastImage.alt}
            fill
            className="object-cover object-right"
            sizes="(max-width: 768px) 15vw, 8vw"
          />
        </div>

        {/* 3 full bricks - same width as row 1 */}
        {images.slice(3, 6).map((img, index) => (
          <div
            key={`r2-${index}`}
            className="relative overflow-hidden flex-shrink-0"
            style={{ width: `calc(33.33% - ${gap * 2 / 3}px)` }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 33vw, 17vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
