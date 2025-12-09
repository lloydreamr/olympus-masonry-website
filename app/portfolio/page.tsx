import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import galleryImages from "@/public/images/gallery/manifest.json";

export const metadata = {
  title: "Portfolio - Edmonton Masonry Projects | Olympus Masonry",
  description:
    "Browse our complete gallery of masonry projects: commercial brick work, residential stone facades, interior features, patios, fireplaces, and chimneys across Edmonton, Alberta.",
};

export default function Portfolio() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-olympus-black text-white py-24 px-6" role="banner">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block border-2 border-olympus-gold px-4 py-2 mb-8">
            <span
              className="font-heading uppercase tracking-widest text-olympus-gold text-sm"
              aria-label="Section label"
            >
              Our Work
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-display mb-6 leading-none">
            PROJECT
            <br />
            PORTFOLIO
          </h1>
          <p className="text-xl font-body text-gray-300 max-w-2xl mx-auto">
            Browse our complete collection of masonry work across Edmonton.
            From commercial builds to residential renovations — real projects,
            real craftsmanship.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <GalleryGrid images={galleryImages} />

      {/* Stats Section */}
      <section className="bg-olympus-gold py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-display text-white mb-2">200+</div>
              <div className="text-sm font-heading text-gray-800 uppercase">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-5xl font-display text-white mb-2">27+</div>
              <div className="text-sm font-heading text-gray-800 uppercase">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-5xl font-display text-white mb-2">100%</div>
              <div className="text-sm font-heading text-gray-800 uppercase">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="text-5xl font-display text-white mb-2">365</div>
              <div className="text-sm font-heading text-gray-800 uppercase">
                Days Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-olympus-black text-white py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-display mb-6">START YOUR PROJECT</h2>
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
