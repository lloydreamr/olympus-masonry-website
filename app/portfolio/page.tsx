import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata = {
  title: "Portfolio - Edmonton Masonry Projects | Olympus Masonry",
  description: "View our completed masonry projects: commercial retail (Insight Optometry, Popeyes, Cadence Dental), residential brick & stone work, interior stone features, patios, fireplaces, and chimneys in Edmonton, Alberta.",
};

const projects = [
  // Commercial Retail Projects (3) - NEW! Shows diverse business types
  {
    title: "Insight Optometry Commercial Storefront",
    category: "Commercial Retail",
    description: "Modern commercial storefront for Insight Optometry featuring dark charcoal brick facade with stone columns and professional glass entrance.",
    image: "/images/portfolio/commercial-retail/insight-optometry-storefront.webp",
  },
  {
    title: "Cadence Dental Clinic Facade",
    category: "Healthcare Commercial",
    description: "Contemporary dental clinic with dark brick accent panels showcasing modern architectural design and professional finish.",
    image: "/images/portfolio/commercial-retail/cadence-dental-clinic.webp",
  },
  {
    title: "Popeyes Louisiana Kitchen Restaurant",
    category: "Restaurant Commercial",
    description: "Restaurant exterior featuring light gray brick facade with modern design elements and branded storefront signage.",
    image: "/images/portfolio/commercial-retail/popeyes-restaurant.webp",
  },

  // Residential Brick Projects (2) - Reduced from 5, keeping best examples
  {
    title: "Mid-Rise Residential Brick Building",
    category: "Residential Brick Work",
    description: "Modern mid-rise residential building with expert brick masonry craftsmanship and clean contemporary design.",
    image: "/images/portfolio/brick-work/midrise-residential-brick-01.webp",
  },
  {
    title: "Mixed Brick and Stone Building",
    category: "Residential Mixed Materials",
    description: "Multi-story residential building showcasing versatile masonry skills with mixed brick and stone facade.",
    image: "/images/portfolio/brick-work/mixed-brick-stone-building-01.webp",
  },

  // Residential Stone Projects (2) - Reduced from 5, keeping best examples
  {
    title: "Modern Stone Veneer Facade",
    category: "Residential Stone Work",
    description: "Contemporary home featuring modern stone veneer facade with clean architectural lines and professional installation.",
    image: "/images/portfolio/stone-work/modern-stone-veneer-facade-01.webp",
  },
  {
    title: "Stone Entry Feature Wall",
    category: "Residential Stone Work",
    description: "Modern residential home with prominent stone entry feature wall showcasing expert craftsmanship.",
    image: "/images/portfolio/stone-work/modern-stone-entry-feature-01.webp",
  },

  // Interior Stone Work (2) - Unique project types
  {
    title: "Custom Stone Kitchen Feature Wall",
    category: "Interior Stone Work",
    description: "Luxury custom stone feature wall in modern kitchen interior with professional finish and attention to detail.",
    image: "/images/portfolio/stone-work/custom-stone-kitchen-wall-01.webp",
  },
  {
    title: "Stone Feature Wall with Wood Beam",
    category: "Interior Stone Work",
    description: "Elegant stone feature wall with wooden beam detail in residential interior showcasing refined craftsmanship.",
    image: "/images/portfolio/stone-work/stone-feature-wall-beam-01.webp",
  },

  // Outdoor Living Spaces (2) - Patios & Walkways
  {
    title: "Brick Exterior Walkway",
    category: "Outdoor Living Spaces",
    description: "Professional brick walkway installation for residential property with expert laying and finishing.",
    image: "/images/portfolio/patios/brick-exterior-walkway-01.webp",
  },
  {
    title: "Brick Patio Installation",
    category: "Outdoor Living Spaces",
    description: "Custom brick patio and walkway with expert craftsmanship, attention to detail, and durable construction.",
    image: "/images/portfolio/patios/brick-patio-walkway-01.webp",
  },

  // Fireplace & Chimney Work (1) - Unique specialty
  {
    title: "Residential Stone Chimney",
    category: "Chimneys & Masonry",
    description: "Professional stone chimney construction for luxury residential home. Expert masonry work ensuring safety, durability, and aesthetic appeal.",
    image: "/images/portfolio/chimneys/stone-chimney-residential-01.webp",
  },

  // Additional Commercial (1) - Keeps some commercial variety
  {
    title: "Commercial Storefront Brick Facade",
    category: "Commercial Projects",
    description: "Professional brick facade installation for commercial storefront in Edmonton with modern design.",
    image: "/images/portfolio/brick-work/commercial-storefront-brick-01.webp",
  },
];

export default function Portfolio() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-olympus-black text-white py-24 px-6" role="banner">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block border-2 border-olympus-gold px-4 py-2 mb-8">
            <span className="font-heading uppercase tracking-widest text-olympus-gold text-sm" aria-label="Section label">Our Work</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-display mb-6 leading-none">
            PROJECT<br />PORTFOLIO
          </h1>
          <p className="text-xl font-body text-gray-300 max-w-2xl mx-auto">
            Explore our completed masonry projects across Edmonton. Quality craftsmanship, exceptional results.
          </p>
        </div>
      </section>

      {/* Portfolio Grid with Filters */}
      <PortfolioGrid projects={projects} />

      {/* Stats Section */}
      <section className="bg-olympus-gold py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-display text-white mb-2">200+</div>
              <div className="text-sm font-heading text-gray-800 uppercase">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-display text-white mb-2">4+</div>
              <div className="text-sm font-heading text-gray-800 uppercase">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-display text-white mb-2">100%</div>
              <div className="text-sm font-heading text-gray-800 uppercase">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-display text-white mb-2">365</div>
              <div className="text-sm font-heading text-gray-800 uppercase">Days Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-olympus-black text-white py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-display mb-6">
            START YOUR PROJECT
          </h2>
          <p className="text-xl font-body text-gray-300 mb-10">
            Let's bring your masonry vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:4039195272"
              className="bg-olympus-gold text-olympus-black px-10 py-5 font-heading uppercase tracking-wider text-lg hover:bg-olympus-gold-light transition-all duration-200"
            >
              Call: 403-919-5272
            </a>
            <a
              href="mailto:ollympus1@outlook.com"
              className="border-2 border-white text-white px-10 py-5 font-heading uppercase tracking-wider text-lg hover:bg-white hover:text-olympus-black transition-all duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
