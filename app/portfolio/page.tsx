import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio - Olympus Masonry",
  description: "View our portfolio of completed masonry projects in Edmonton. Quality brick work, stone installations, patios, retaining walls, and more.",
};

const projects = [
  {
    title: "Residential Brick Patio",
    category: "Patios & Outdoor Spaces",
    description: "Custom brick patio with intricate herringbone pattern. Built to withstand Edmonton winters.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Stone Retaining Wall",
    category: "Retaining Walls",
    description: "Multi-tiered natural stone retaining wall with integrated drainage system.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Custom Outdoor Fireplace",
    category: "Fireplaces",
    description: "Stunning outdoor fireplace and entertainment area with stone veneer.",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Commercial Brick Facade",
    category: "Commercial Projects",
    description: "Complete brick facade installation for commercial building in downtown Edmonton.",
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Heritage Chimney Restoration",
    category: "Restoration",
    description: "Professional restoration of heritage home chimney using period-accurate materials and techniques.",
    image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Winter Construction Project",
    category: "Winter Masonry",
    description: "Successful winter masonry project using cold-weather certified materials and techniques.",
    image: "https://images.unsplash.com/photo-1604782206219-3b9576575203?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Decorative Stone Walkway",
    category: "Walkways & Paths",
    description: "Beautiful flagstone walkway with natural stone borders and plantings.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Residential Driveway",
    category: "Driveways",
    description: "Interlocking stone driveway with custom border design and sealing.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Indoor Fireplace Installation",
    category: "Fireplaces",
    description: "Custom stone fireplace installation with handcrafted mantel and hearth.",
    image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=800&h=600&fit=crop&q=80",
  },
];

export default function Portfolio() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-olympus-black text-white py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block border-2 border-olympus-gold px-4 py-2 mb-8">
            <span className="font-heading uppercase tracking-widest text-olympus-gold text-sm">Our Work</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-display mb-6 leading-none">
            PROJECT<br />PORTFOLIO
          </h1>
          <p className="text-xl font-body text-gray-300 max-w-2xl mx-auto">
            Explore our completed masonry projects across Edmonton. Quality craftsmanship, exceptional results.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-olympus-black via-olympus-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-olympus-gold font-heading text-xs uppercase tracking-wider mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-heading mb-2">{project.title}</h3>
                    <p className="text-sm font-body text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-olympus-gold py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-display text-white mb-2">500+</div>
              <div className="text-sm font-heading text-gray-800 uppercase">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-display text-white mb-2">15+</div>
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
              href="/contact"
              className="border-2 border-white text-white px-10 py-5 font-heading uppercase tracking-wider text-lg hover:bg-white hover:text-olympus-black transition-all duration-200"
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
