"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
}

interface PortfolioGridProps {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  // Get unique categories for filter buttons
  const categories = ["All", "Commercial", "Residential", "Interior", "Outdoor"];

  // Filter projects based on active filter
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Commercial") {
      return project.category.includes("Commercial") || project.category.includes("Restaurant") || project.category.includes("Healthcare") || project.category.includes("Retail");
    }
    if (activeFilter === "Residential") {
      return project.category.includes("Residential");
    }
    if (activeFilter === "Interior") {
      return project.category.includes("Interior");
    }
    if (activeFilter === "Outdoor") {
      return project.category.includes("Outdoor");
    }
    return true;
  });

  return (
    <>
      {/* Filter Buttons */}
      <section className="py-8 px-6 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Project category filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 font-heading text-sm uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === category
                    ? "bg-olympus-gold text-olympus-black"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-olympus-gold hover:text-olympus-gold"
                }`}
                role="tab"
                aria-selected={activeFilter === category}
                aria-controls="portfolio-grid"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div
            id="portfolio-grid"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="tabpanel"
            aria-live="polite"
            aria-label={`Showing ${filteredProjects.length} ${activeFilter === "All" ? "" : activeFilter} project${filteredProjects.length !== 1 ? "s" : ""}`}
          >
            {filteredProjects.map((project, index) => (
              <article key={index} className="group relative overflow-hidden">
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-olympus-black via-olympus-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" aria-hidden="true"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-olympus-gold font-heading text-xs uppercase tracking-wider mb-2" aria-label="Project category">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-heading mb-2">{project.title}</h3>
                    <p className="text-sm font-body text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
