import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services - Olympus Masonry",
  description: "Professional masonry services in Edmonton: brick & stone work, patios & outdoor spaces, chimneys & fireplaces, and year-round winter masonry.",
};

const services = [
  {
    title: "Brick & Stone Masonry",
    description: "Transform your property with premium brick and natural stone installations. From elegant residential facades to commanding commercial buildings, we deliver exceptional craftsmanship that withstands Edmonton's demanding climate.",
    features: [
      "Commercial & Residential Projects",
      "New Construction & Restoration",
      "Premium Material Selection",
      "Precision Color Matching",
      "Edmonton Climate-Tested Methods",
    ],
    image: "/images/services/brick-stone-masonry.webp",
    imageAlt: "Large commercial brick complex - Olympus Masonry Edmonton",
  },
  {
    title: "Patios & Outdoor Spaces",
    description: "Create stunning outdoor living areas that enhance your property value and lifestyle. Our expertly crafted patios, walkways, and hardscaping solutions are built to endure Edmonton's freeze-thaw cycles and provide years of beauty.",
    features: [
      "Custom Patio Design & Installation",
      "Walkways & Pathways",
      "Interlocking Stone Pavers",
      "Proper Drainage Solutions",
      "Multi-Season Durability",
    ],
    image: "/images/services/patios-outdoor-spaces.webp",
    imageAlt: "Custom brick patio walkway - Olympus Masonry",
  },
  {
    title: "Chimneys & Fireplaces",
    description: "Ensure your home's safety and warmth with professional chimney and fireplace services. From repairs to complete rebuilds, our expert masons deliver reliable installations that meet all safety standards while adding architectural beauty.",
    features: [
      "Chimney Repair & Rebuilding",
      "Indoor & Outdoor Fireplaces",
      "Safety Inspections & Maintenance",
      "Custom Stone Feature Walls",
      "Code-Compliant Installations",
    ],
    image: "/images/services/chimneys-fireplaces.webp",
    imageAlt: "Residential stone chimney installation - Olympus Masonry",
  },
  {
    title: "Winter Masonry Services",
    description: "Don't let cold weather delay your project. As Edmonton winter masonry specialists, we use advanced cold-weather techniques and heated materials to deliver quality installations year-round, ensuring your project stays on schedule.",
    features: [
      "Cold-Weather Certified Techniques",
      "Year-Round Project Availability",
      "Heated Mortar & Materials",
      "Weather-Protected Work Areas",
      "No Compromise on Quality",
    ],
    image: "/images/services/winter-masonry.webp",
    imageAlt: "Winter residential stone home - Olympus Masonry Edmonton",
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
            <span className="font-heading uppercase tracking-widest text-olympus-gold text-sm">Our Specializations</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-display mb-6 leading-none">
            EXPERT MASONRY<br />SERVICES
          </h1>
          <p className="text-xl font-body text-gray-300 max-w-2xl mx-auto">
            Premier brick, stone, and masonry craftsmanship serving Edmonton and surrounding areas. Quality work, year-round.
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
                    alt={service.imageAlt}
                    width={800}
                    height={600}
                    className="w-full h-[400px] object-cover shadow-lg"
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

      {/* Why Choose Olympus Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-display text-olympus-black mb-4">
              WHY CHOOSE OLYMPUS MASONRY
            </h2>
            <div className="w-20 h-1 bg-olympus-gold mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-olympus-gold mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-olympus-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading text-olympus-black mb-3 uppercase">
                Licensed & Insured
              </h3>
              <p className="text-gray-600 font-body">
                Fully licensed and insured for your peace of mind and project protection.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-olympus-gold mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-olympus-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading text-olympus-black mb-3 uppercase">
                Year-Round Service
              </h3>
              <p className="text-gray-600 font-body">
                Cold-weather certified for winter masonry. Your project doesn't have to wait for spring.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-olympus-gold mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-olympus-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading text-olympus-black mb-3 uppercase">
                Expert Craftsmen
              </h3>
              <p className="text-gray-600 font-body">
                Skilled masons dedicated to delivering exceptional quality on every project.
              </p>
            </div>
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
              href="mailto:ollympus1@outlook.com"
              className="border-2 border-olympus-black text-olympus-black px-10 py-5 font-heading uppercase tracking-wider text-lg hover:bg-olympus-black hover:text-olympus-gold transition-all duration-200"
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
