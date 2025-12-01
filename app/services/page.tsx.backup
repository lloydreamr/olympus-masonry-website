import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services - Olympus Masonry",
  description: "Professional masonry services in Edmonton: brick & stone work, retaining walls, patios, chimneys, fireplaces, and winter masonry.",
};

const services = [
  {
    title: "Brick & Stone Masonry",
    description: "Expert installation of brick and natural stone for residential and commercial projects. From patios to building facades, we deliver exceptional craftsmanship.",
    features: [
      "Residential & Commercial",
      "New Construction & Repair",
      "Custom Stone Selection",
      "Color Matching Services",
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Retaining Walls & Patios",
    description: "Beautiful and functional outdoor spaces built to withstand Edmonton's harsh climate. Transform your property with expertly crafted hardscaping.",
    features: [
      "Custom Designs",
      "Drainage Solutions",
      "Multi-Season Durability",
      "Interlocking Stone",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Chimneys & Fireplaces",
    description: "Professional chimney repair, restoration, and new fireplace installations. Keep your home safe and warm with our expert masonry services.",
    features: [
      "Chimney Repair & Rebuild",
      "Indoor & Outdoor Fireplaces",
      "Safety Inspections",
      "Custom Fireplace Design",
    ],
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Winter Masonry",
    description: "Don't let cold weather stop your project. We specialize in winter masonry using cold-weather certified techniques and materials.",
    features: [
      "Cold-Weather Certified",
      "Year-Round Availability",
      "Emergency Repairs",
      "Heated Mortar & Materials",
    ],
    image: "https://images.unsplash.com/photo-1604782206219-3b9576575203?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Concrete Work",
    description: "Durable concrete solutions for foundations, walkways, driveways, and structural repairs. Quality concrete work that lasts.",
    features: [
      "Foundations & Footings",
      "Decorative Concrete",
      "Repair & Restoration",
      "Stamped Concrete",
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Restoration & Repair",
    description: "Expert restoration of heritage buildings and repair of damaged masonry. Preserve the beauty and integrity of your property.",
    features: [
      "Heritage Restoration",
      "Tuckpointing",
      "Brick Replacement",
      "Structural Repairs",
    ],
    image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&h=600&fit=crop&q=80",
  },
];

export default function Services() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-olympus-black text-white py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block border-2 border-olympus-gold px-4 py-2 mb-8">
            <span className="font-heading uppercase tracking-widest text-olympus-gold text-sm">Our Services</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-display mb-6 leading-none">
            EXPERT MASONRY<br />SERVICES
          </h1>
          <p className="text-xl font-body text-gray-300 max-w-2xl mx-auto">
            Comprehensive masonry solutions for residential and commercial projects in Edmonton and surrounding areas.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-4xl font-heading text-olympus-black mb-4 uppercase">
                    {service.title}
                  </h2>
                  <div className="w-20 h-1 bg-olympus-gold mb-6"></div>
                  <p className="text-lg font-body text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700 font-body">
                        <span className="w-2 h-2 bg-olympus-gold mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-olympus-gold py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-display text-olympus-black mb-6">
            READY TO GET STARTED?
          </h2>
          <p className="text-xl font-body text-gray-800 mb-10">
            Contact us today for a free estimate on your masonry project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:4039195272"
              className="bg-olympus-black text-olympus-gold px-10 py-5 font-heading uppercase tracking-wider text-lg hover:bg-gray-900 transition-all duration-200"
            >
              Call: 403-919-5272
            </a>
            <a
              href="/contact"
              className="border-2 border-olympus-black text-olympus-black px-10 py-5 font-heading uppercase tracking-wider text-lg hover:bg-olympus-black hover:text-olympus-gold transition-all duration-200"
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
