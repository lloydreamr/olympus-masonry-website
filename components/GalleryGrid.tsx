"use client";

import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

export interface GalleryImage {
  id: string;
  thumbnail: string;
  full: string;
  alt: string;
  title?: string;
  description?: string;
  categories?: string[];
}

interface GalleryGridProps {
  images: GalleryImage[];
}

const CATEGORIES = [
  { key: "all", label: "All Projects", icon: "grid" },
  { key: "residential", label: "Residential", icon: "home" },
  { key: "commercial", label: "Commercial", icon: "building" },
  { key: "brick", label: "Brick Work", icon: "brick" },
  { key: "stone", label: "Stone Work", icon: "stone" },
  { key: "fireplaces", label: "Fireplaces", icon: "fire" },
  { key: "chimneys", label: "Chimneys", icon: "chimney" },
];

function CategoryIcon({ type, className }: { type: string; className?: string }) {
  const iconClass = className || "w-5 h-5";

  switch (type) {
    case "grid":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      );
    case "home":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case "building":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "brick":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5h16M4 5v4m0-4H2m18 0v4m0-4h2M4 9h16M4 9v4m0-4H2m18 0v4m0-4h2M4 13h16M4 13v4m0-4H2m18 0v4m0-4h2M4 17h16m-16 0v2m0-2H2m18 0v2m0-2h2" />
        </svg>
      );
    case "stone":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    case "fire":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      );
    case "chimney":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
        </svg>
      );
    default:
      return null;
  }
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter images based on active category
  const filteredImages = useMemo(() => {
    if (activeFilter === "all") return images;
    return images.filter((image) =>
      image.categories?.includes(activeFilter)
    );
  }, [images, activeFilter]);

  // Get counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: images.length };
    CATEGORIES.forEach((cat) => {
      if (cat.key !== "all") {
        counts[cat.key] = images.filter((img) =>
          img.categories?.includes(cat.key)
        ).length;
      }
    });
    return counts;
  }, [images]);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  }, [filteredImages.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  }, [filteredImages.length]);

  return (
    <>
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Category Filter - Running Bond Brick Pattern */}
          <div className="mb-12">
            {/* Desktop: Running Bond Layout - 4 bricks top, 3 bricks bottom (naturally offset by centering) */}
            <div className="hidden md:block">
              {/* Row 1: 4 bricks */}
              <div className="flex justify-center gap-[4px] mb-[4px]">
                {CATEGORIES.slice(0, 4).map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setActiveFilter(category.key)}
                    className={`
                      group flex items-center justify-center gap-2
                      w-[170px] h-[48px] font-heading text-sm font-medium uppercase tracking-wide
                      transition-all duration-200 ease-out
                      ${activeFilter === category.key
                        ? "bg-olympus-gold text-olympus-black shadow-[0_4px_12px_rgba(212,166,87,0.4)]"
                        : "text-white hover:text-olympus-gold"
                      }
                    `}
                    style={activeFilter !== category.key ? { backgroundColor: '#525252' } : undefined}
                    aria-pressed={activeFilter === category.key}
                  >
                    <CategoryIcon
                      type={category.icon}
                      className={`w-4 h-4 ${activeFilter === category.key ? "text-olympus-black" : "text-olympus-gold"}`}
                    />
                    <span className="truncate">{category.label}</span>
                    <span className={`
                      px-1.5 py-0.5 rounded text-xs font-semibold
                      ${activeFilter === category.key
                        ? "bg-olympus-black/20 text-olympus-black"
                        : "bg-white/20 text-white"
                      }
                    `}>
                      {categoryCounts[category.key]}
                    </span>
                  </button>
                ))}
              </div>
              {/* Row 2: 3 bricks - centered creates natural half-brick offset */}
              <div className="flex justify-center gap-[4px]">
                {CATEGORIES.slice(4, 7).map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setActiveFilter(category.key)}
                    className={`
                      group flex items-center justify-center gap-2
                      w-[170px] h-[48px] font-heading text-sm font-medium uppercase tracking-wide
                      transition-all duration-200 ease-out
                      ${activeFilter === category.key
                        ? "bg-olympus-gold text-olympus-black shadow-[0_4px_12px_rgba(212,166,87,0.4)]"
                        : "text-white hover:text-olympus-gold"
                      }
                    `}
                    style={activeFilter !== category.key ? { backgroundColor: '#525252' } : undefined}
                    aria-pressed={activeFilter === category.key}
                  >
                    <CategoryIcon
                      type={category.icon}
                      className={`w-4 h-4 ${activeFilter === category.key ? "text-olympus-black" : "text-olympus-gold"}`}
                    />
                    <span className="truncate">{category.label}</span>
                    <span className={`
                      px-1.5 py-0.5 rounded text-xs font-semibold
                      ${activeFilter === category.key
                        ? "bg-olympus-black/20 text-olympus-black"
                        : "bg-white/20 text-white"
                      }
                    `}>
                      {categoryCounts[category.key]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile: 2-column Running Bond Layout */}
            <div className="md:hidden px-4">
              <div className="flex flex-col gap-[4px] max-w-[340px] mx-auto">
                {/* Row pairs - alternating offset for running bond */}
                {[0, 2, 4, 6].map((startIndex) => {
                  const rowIndex = startIndex / 2;
                  const isOffsetRow = rowIndex % 2 === 1;
                  const items = CATEGORIES.slice(startIndex, startIndex + 2);

                  return (
                    <div
                      key={startIndex}
                      className={`flex gap-[4px] ${isOffsetRow ? 'px-6' : ''}`}
                    >
                      {items.map((category) => (
                        <button
                          key={category.key}
                          onClick={() => setActiveFilter(category.key)}
                          className={`
                            group flex items-center justify-center gap-1.5
                            flex-1 h-[44px] font-heading text-xs font-medium uppercase tracking-wide
                            transition-all duration-200 ease-out
                            ${activeFilter === category.key
                              ? "bg-olympus-gold text-olympus-black shadow-[0_4px_12px_rgba(212,166,87,0.4)]"
                              : "text-white"
                            }
                          `}
                          style={activeFilter !== category.key ? { backgroundColor: '#525252' } : undefined}
                          aria-pressed={activeFilter === category.key}
                        >
                          <CategoryIcon
                            type={category.icon}
                            className={`w-3.5 h-3.5 ${activeFilter === category.key ? "text-olympus-black" : "text-olympus-gold"}`}
                          />
                          <span className="truncate">{category.label}</span>
                          <span className={`
                            px-1 py-0.5 rounded text-[10px] font-semibold
                            ${activeFilter === category.key
                              ? "bg-olympus-black/20 text-olympus-black"
                              : "bg-white/20 text-white"
                            }
                          `}>
                            {categoryCounts[category.key]}
                          </span>
                        </button>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results summary */}
          <div className="text-center mb-8">
            <p className="text-gray-600 font-body">
              Showing <span className="font-semibold text-olympus-black">{filteredImages.length}</span>
              {activeFilter !== "all" && (
                <span> {CATEGORIES.find(c => c.key === activeFilter)?.label.toLowerCase()}</span>
              )} project{filteredImages.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Gallery Grid - Project Cards with 4:3 aspect ratio */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <article
                key={image.id}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                {/* Image Container - 4:3 Aspect Ratio */}
                <button
                  onClick={() => openLightbox(index)}
                  className="relative w-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-olympus-gold focus:ring-offset-2 bg-gray-100"
                  style={{ aspectRatio: '4/3' }}
                  aria-label={`View ${image.title || image.alt} in full size`}
                >
                  <Image
                    src={image.thumbnail}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Hover overlay with zoom icon */}
                  <div className="absolute inset-0 bg-olympus-black/0 group-hover:bg-olympus-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-olympus-black"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Title & Description */}
                <div className="p-4">
                  <h3 className="font-heading text-base font-semibold text-olympus-black uppercase tracking-wide truncate">
                    {image.title || image.alt}
                  </h3>
                  {image.description && (
                    <p className="mt-1 text-sm text-gray-600 font-body line-clamp-2">
                      {image.description}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-4">No projects match the selected filter.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="text-olympus-gold hover:text-olympus-gold/80 font-medium"
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filteredImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  );
}
