"use client";

import Image from "next/image";

interface MasonryImage {
  src: string;
  alt: string;
}

interface MasonryGridProps {
  images: MasonryImage[];
  pattern?: "default" | "alternate";
  className?: string;
}

export default function MasonryGrid({
  images,
  pattern = "default",
  className = ""
}: MasonryGridProps) {
  // Ensure we have at least 2 images, pad with first image if needed
  const displayImages = images.length >= 4
    ? images.slice(0, 4)
    : images.length >= 2
      ? [...images, ...images].slice(0, 4)
      : [images[0], images[0], images[0], images[0]];

  return (
    <div className={`masonry-grid ${pattern === "alternate" ? "masonry-alt" : ""} ${className}`}>
      {displayImages.map((image, index) => (
        <div key={index} className={`masonry-cell masonry-cell-${index + 1}`}>
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={450}
            className="w-full h-full object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
