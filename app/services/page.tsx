import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services - Professional Masonry in Edmonton | Olympus Masonry",
  description:
    "Expert masonry services in Edmonton: brick & stone work, patios, chimneys, fireplaces, and year-round winter masonry. 27+ years experience. Licensed & insured.",
};

const services = [
  {
    id: "brick-stone",
    title: "Brick & Stone Masonry",
    tagline: "Premium craftsmanship for lasting impressions",
    description: `Transform your property with expert brick and natural stone installations that stand the test of time. Whether you're building new or restoring existing masonry, our 27+ years of experience ensures precision craftsmanship that enhances both beauty and value.

We work with a wide range of premium materials including traditional clay brick, manufactured stone veneer, natural fieldstone, limestone, and specialty architectural masonry. Every project is executed with meticulous attention to detail, from proper mortar mixing to precise joint finishing.`,
    features: [
      "Residential & commercial building facades",
      "New construction and restoration projects",
      "Premium material selection and sourcing",
      "Precision color and texture matching",
      "Structural repairs and repointing",
      "Custom architectural details and accents",
    ],
    image: "/images/gallery/full/IMG_2506.webp",
    imageAlt: "Stone facade residential project by Olympus Masonry",
  },
  {
    id: "patios-walls",
    title: "Retaining Walls & Patios",
    tagline: "Outdoor spaces built for Edmonton's climate",
    description: `Create stunning outdoor living areas engineered to withstand Edmonton's demanding freeze-thaw cycles. Our patios, walkways, and retaining walls are built with proper drainage and foundation techniques that prevent shifting, cracking, and water damage for years to come.

From intimate backyard patios to expansive outdoor entertaining spaces, we design and build hardscaping solutions that extend your living space while adding significant value to your property. Every project includes proper grading, compaction, and drainage planning.`,
    features: [
      "Custom patio design and installation",
      "Interlocking stone and paver systems",
      "Structural retaining walls",
      "Walkways and garden pathways",
      "Professional drainage solutions",
      "Multi-season durability guaranteed",
    ],
    image: "/images/gallery/full/IMG_1059.webp",
    imageAlt: "Custom stone patio and pillars by Olympus Masonry",
  },
  {
    id: "chimneys-fireplaces",
    title: "Chimneys & Fireplaces",
    tagline: "Safety, warmth, and architectural beauty",
    description: `Ensure your home's safety and comfort with professional chimney and fireplace services. From routine repairs to complete rebuilds, our expert masons deliver reliable installations that meet all safety codes while adding architectural elegance to your home.

Chimney deterioration is common in Edmonton's climate due to moisture infiltration and freeze-thaw damage. We specialize in identifying and repairing these issues before they become safety hazards, including crown repairs, flashing replacement, and full chimney rebuilds.`,
    features: [
      "Chimney repair, rebuilding, and restoration",
      "Indoor and outdoor fireplace installations",
      "Safety inspections and assessments",
      "Crown and cap repairs",
      "Flashing and waterproofing",
      "Code-compliant installations",
    ],
    image: "/images/gallery/full/IMG_0099.webp",
    imageAlt: "Stone chimney installation by Olympus Masonry",
  },
];

export default function Services() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-olympus-black text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block border-2 border-olympus-gold px-4 py-2 mb-6">
            <span className="font-heading uppercase tracking-widest text-olympus-gold text-sm">
              What We Do
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display mb-6 leading-none">
            OUR SERVICES
          </h1>
          <p className="text-xl font-body text-gray-300 max-w-2xl mx-auto mb-10">
            27+ years of expert masonry craftsmanship serving Edmonton and
            surrounding areas. Quality work, year-round.
          </p>

          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#winter-masonry"
              className="px-4 py-2 border border-olympus-gold/50 text-olympus-gold text-sm font-heading uppercase tracking-wide hover:bg-olympus-gold hover:text-olympus-black transition-colors"
            >
              Winter Masonry
            </a>
            <a
              href="#brick-stone"
              className="px-4 py-2 border border-white/30 text-white text-sm font-heading uppercase tracking-wide hover:border-white hover:bg-white hover:text-olympus-black transition-colors"
            >
              Brick & Stone
            </a>
            <a
              href="#patios-walls"
              className="px-4 py-2 border border-white/30 text-white text-sm font-heading uppercase tracking-wide hover:border-white hover:bg-white hover:text-olympus-black transition-colors"
            >
              Patios & Walls
            </a>
            <a
              href="#chimneys-fireplaces"
              className="px-4 py-2 border border-white/30 text-white text-sm font-heading uppercase tracking-wide hover:border-white hover:bg-white hover:text-olympus-black transition-colors"
            >
              Chimneys
            </a>
          </div>
        </div>
      </section>

      {/* Winter Masonry - Featured Section */}
      <section id="winter-masonry" className="bg-olympus-gold py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-olympus-black px-3 py-1 mb-4">
                <span className="text-olympus-gold font-heading text-xs uppercase tracking-widest">
                  Our Specialty
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display text-olympus-black mb-6 leading-tight">
                WINTER MASONRY SERVICES
              </h2>
              <p className="text-lg font-body text-gray-800 mb-6 leading-relaxed">
                <strong>Most contractors close for winter. We don't.</strong>{" "}
                As Edmonton's cold-weather masonry specialists, we use advanced
                techniques and heated materials to deliver quality installations
                year-round—even in sub-zero temperatures.
              </p>
              <p className="text-base font-body text-gray-700 mb-8 leading-relaxed">
                Don't let Edmonton's long winters delay your project. Our
                cold-weather certified techniques ensure proper curing and
                lasting durability, so your masonry work performs just as well
                as summer installations. We're available 365 days a year,
                including emergency repair services when you need them most.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Cold-weather certified installation techniques",
                  "Heated mortar and materials for proper curing",
                  "Weather-protected work areas",
                  "Year-round project scheduling",
                  "24/7 emergency repair services",
                  "No compromise on quality—guaranteed",
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start text-gray-800 font-body"
                  >
                    <span className="w-2 h-2 bg-olympus-black mt-2 mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="tel:4039195272"
                className="inline-flex items-center gap-2 bg-olympus-black text-olympus-gold px-8 py-4 font-heading uppercase tracking-wider text-sm hover:bg-gray-900 transition-colors"
              >
                Call for Winter Project
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>
            </div>
            <div className="relative">
              <div
                className="relative w-full bg-gray-200 rounded-lg overflow-hidden shadow-2xl"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src="/images/gallery/full/IMG_2502.webp"
                  alt="Winter masonry project in Edmonton"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 bg-olympus-black text-white p-6 shadow-xl">
                <div className="text-4xl font-display text-olympus-gold mb-1">
                  365
                </div>
                <div className="text-xs font-heading uppercase tracking-wider text-gray-400">
                  Days Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 px-6 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container mx-auto max-w-6xl">
            <div
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <h2 className="text-4xl md:text-5xl font-heading text-olympus-black mb-3 uppercase leading-tight">
                  {service.title}
                </h2>
                <p className="text-olympus-gold font-heading text-sm uppercase tracking-wider mb-6">
                  {service.tagline}
                </p>
                <div className="w-16 h-1 bg-olympus-gold mb-8"></div>

                {service.description.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base font-body text-gray-600 mb-4 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}

                <h3 className="font-heading text-olympus-black text-sm uppercase tracking-wider mt-8 mb-4">
                  What We Offer
                </h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-700 font-body"
                    >
                      <span className="w-2 h-2 bg-olympus-gold mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-olympus-black text-olympus-black px-6 py-3 font-heading uppercase tracking-wider text-sm hover:bg-olympus-black hover:text-white transition-colors"
                >
                  Request a Quote
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                <div
                  className="relative w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Olympus Section */}
      <section className="bg-olympus-black py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
              WHY CHOOSE OLYMPUS
            </h2>
            <div className="w-16 h-1 bg-olympus-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stat: "27+",
                label: "Years Experience",
                description:
                  "Proven track record of quality craftsmanship in Edmonton's demanding climate",
              },
              {
                stat: "100%",
                label: "Licensed & Insured",
                description:
                  "Fully credentialed for your peace of mind and project protection",
              },
              {
                stat: "365",
                label: "Days Available",
                description:
                  "Year-round service including winter masonry—we never close",
              },
              {
                stat: "Direct",
                label: "Owner Communication",
                description:
                  "Work directly with Peter Kolia—no middlemen, no runaround",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-display text-olympus-gold mb-3">
                  {item.stat}
                </div>
                <h3 className="font-heading text-white text-sm uppercase tracking-wider mb-3">
                  {item.label}
                </h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-olympus-gold py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-display text-olympus-black mb-6">
            READY TO DISCUSS YOUR PROJECT?
          </h2>
          <p className="text-lg font-body text-gray-800 mb-10 max-w-xl mx-auto">
            Get a free consultation and estimate. We'll discuss your vision,
            timeline, and budget—no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:4039195272"
              className="bg-olympus-black text-olympus-gold px-10 py-5 font-heading uppercase tracking-wider text-base hover:bg-gray-900 transition-all duration-200"
            >
              Call: 403-919-5272
            </a>
            <Link
              href="/contact"
              className="border-2 border-olympus-black text-olympus-black px-10 py-5 font-heading uppercase tracking-wider text-base hover:bg-olympus-black hover:text-olympus-gold transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-700 font-body">
            Speak directly with Peter Kolia, owner and lead craftsman
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
