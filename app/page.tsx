import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Split Section - Black left, Image right */}
      <section className="split-section">
        <div className="split-left bg-olympus-black text-white">
          <div className="max-w-xl">
            <div className="inline-block border-2 border-olympus-gold px-4 py-2 mb-8">
              <span className="font-heading uppercase tracking-widest text-olympus-gold text-sm">Edmonton, Alberta</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-display mb-6 leading-none">
              MASONRY<br />EXCELLENCE
            </h1>
            <p className="text-2xl font-body mb-10 text-gray-300">
              Expert craftsmanship in brick, stone & concrete
            </p>
            <a
              href="tel:4039195272"
              className="inline-block bg-olympus-gold text-olympus-black px-10 py-5 font-heading uppercase tracking-wider text-lg hover:bg-olympus-gold-light transition-all duration-200"
            >
              Get Free Estimate
            </a>
          </div>
        </div>

        <div className="split-divider"></div>

        <div className="split-right">
          <Image
            src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=1920&h=1080&fit=crop&q=80"
            alt="Masonry Work"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </section>

      {/* Section 2: White left, Image right - Brick & Stone */}
      <section className="split-section">
        <div className="split-left bg-white">
          <div className="max-w-xl">
            <div className="text-olympus-gold font-display text-8xl mb-4 opacity-20">01</div>
            <h2 className="text-5xl font-heading text-olympus-black mb-6 uppercase">
              Brick & Stone<br />Masonry
            </h2>
            <div className="w-20 h-1 bg-olympus-gold mb-6"></div>
            <p className="text-lg font-body text-gray-600 mb-6 leading-relaxed">
              Expert installation of brick and natural stone for residential and commercial projects. From patios to building facades, we deliver exceptional craftsmanship.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700 font-body">
                <span className="w-2 h-2 bg-olympus-gold mr-3"></span>
                Residential & Commercial
              </li>
              <li className="flex items-center text-gray-700 font-body">
                <span className="w-2 h-2 bg-olympus-gold mr-3"></span>
                New Construction & Repair
              </li>
              <li className="flex items-center text-gray-700 font-body">
                <span className="w-2 h-2 bg-olympus-gold mr-3"></span>
                Winter-Ready Techniques
              </li>
            </ul>
            <Link
              href="/services"
              className="inline-flex items-center text-olympus-black font-heading uppercase text-sm tracking-wider hover:text-olympus-gold transition-colors"
            >
              View Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="split-divider"></div>

        <div className="split-right">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop&q=80"
            alt="Brick Patio"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Section 3: Black left, Image right - Retaining Walls */}
      <section className="split-section">
        <div className="split-left bg-olympus-black text-white">
          <div className="max-w-xl">
            <div className="text-olympus-gold font-display text-8xl mb-4 opacity-30">02</div>
            <h2 className="text-5xl font-heading mb-6 uppercase">
              Retaining Walls<br />& Patios
            </h2>
            <div className="w-20 h-1 bg-olympus-gold mb-6"></div>
            <p className="text-lg font-body text-gray-300 mb-6 leading-relaxed">
              Beautiful and functional outdoor spaces built to withstand Edmonton's harsh climate. Transform your property with expertly crafted hardscaping.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300 font-body">
                <span className="w-2 h-2 bg-olympus-gold mr-3"></span>
                Custom Designs
              </li>
              <li className="flex items-center text-gray-300 font-body">
                <span className="w-2 h-2 bg-olympus-gold mr-3"></span>
                Drainage Solutions
              </li>
              <li className="flex items-center text-gray-300 font-body">
                <span className="w-2 h-2 bg-olympus-gold mr-3"></span>
                Multi-Season Durability
              </li>
            </ul>
            <Link
              href="/portfolio"
              className="inline-flex items-center text-white font-heading uppercase text-sm tracking-wider hover:text-olympus-gold transition-colors"
            >
              View Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="split-divider"></div>

        <div className="split-right">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=80"
            alt="Retaining Wall"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Section 4: White left, Image right - Chimneys */}
      <section className="split-section">
        <div className="split-left bg-white">
          <div className="max-w-xl">
            <div className="text-olympus-gold font-display text-8xl mb-4 opacity-20">03</div>
            <h2 className="text-5xl font-heading text-olympus-black mb-6 uppercase">
              Chimneys &<br />Fireplaces
            </h2>
            <div className="w-20 h-1 bg-olympus-gold mb-6"></div>
            <p className="text-lg font-body text-gray-600 mb-6 leading-relaxed">
              Professional chimney repair, restoration, and new fireplace installations. Keep your home safe and warm with our expert masonry services.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700 font-body">
                <span className="w-2 h-2 bg-olympus-gold mr-3"></span>
                Chimney Repair & Rebuild
              </li>
              <li className="flex items-center text-gray-700 font-body">
                <span className="w-2 h-2 bg-olympus-gold mr-3"></span>
                Indoor & Outdoor Fireplaces
              </li>
              <li className="flex items-center text-gray-700 font-body">
                <span className="w-2 h-2 bg-olympus-gold mr-3"></span>
                Safety Inspections
              </li>
            </ul>
            <Link
              href="/services"
              className="inline-flex items-center text-olympus-black font-heading uppercase text-sm tracking-wider hover:text-olympus-gold transition-colors"
            >
              View Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="split-divider"></div>

        <div className="split-right">
          <Image
            src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1920&h=1080&fit=crop&q=80"
            alt="Fireplace"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Section 5: Gold left (highlight), Image right - Stats */}
      <section className="split-section">
        <div className="split-left bg-olympus-gold">
          <div className="max-w-xl text-center">
            <div className="text-white font-display text-9xl mb-6">15+</div>
            <h2 className="text-4xl font-heading text-olympus-black mb-6 uppercase">
              Years of Excellence
            </h2>
            <p className="text-xl font-body text-gray-800 mb-8">
              Serving Edmonton with expert masonry craftsmanship
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-display text-white mb-2">100%</div>
                <div className="text-sm font-heading text-gray-800 uppercase">Licensed</div>
              </div>
              <div>
                <div className="text-3xl font-display text-white mb-2">Year-Round</div>
                <div className="text-sm font-heading text-gray-800 uppercase">Service</div>
              </div>
            </div>
            <a
              href="tel:4039195272"
              className="inline-block bg-olympus-black text-olympus-gold px-10 py-5 font-heading uppercase tracking-wider text-lg hover:bg-gray-900 transition-all duration-200"
            >
              Call Now
            </a>
          </div>
        </div>

        <div className="split-divider"></div>

        <div className="split-right">
          <Image
            src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=1920&h=1080&fit=crop&q=80"
            alt="Stone Work"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Section 6: Black left, Image right - Winter Masonry */}
      <section className="split-section">
        <div className="split-left bg-olympus-black text-white">
          <div className="max-w-xl">
            <div className="text-olympus-gold font-display text-8xl mb-4 opacity-30">04</div>
            <h2 className="text-5xl font-heading mb-6 uppercase">
              Winter<br />Masonry
            </h2>
            <div className="w-20 h-1 bg-olympus-gold mb-6"></div>
            <p className="text-lg font-body text-gray-300 mb-6 leading-relaxed">
              Don't let cold weather stop your project. We specialize in winter masonry using cold-weather certified techniques and materials.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300 font-body">
                <span className="w-2 h-2 bg-olympus-gold mr-3"></span>
                Cold-Weather Certified
              </li>
              <li className="flex items-center text-gray-300 font-body">
                <span className="w-2 h-2 bg-olympus-gold mr-3"></span>
                Year-Round Availability
              </li>
              <li className="flex items-center text-gray-300 font-body">
                <span className="w-2 h-2 bg-olympus-gold mr-3"></span>
                Emergency Repairs
              </li>
            </ul>
            <Link
              href="/services"
              className="inline-flex items-center text-white font-heading uppercase text-sm tracking-wider hover:text-olympus-gold transition-colors"
            >
              Learn More
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="split-divider"></div>

        <div className="split-right">
          <Image
            src="https://images.unsplash.com/photo-1604782206219-3b9576575203?w=1920&h=1080&fit=crop&q=80"
            alt="Winter Work"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Final CTA: Black left, Image right */}
      <section className="split-section">
        <div className="split-left bg-olympus-black text-white">
          <div className="max-w-xl text-center">
            <h2 className="text-6xl font-display mb-6 leading-tight">
              READY TO<br />START?
            </h2>
            <p className="text-xl font-body text-gray-300 mb-10">
              Get your free estimate from Edmonton's trusted masonry experts
            </p>
            <div className="flex flex-col gap-4">
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
        </div>

        <div className="split-divider"></div>

        <div className="split-right">
          <Image
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&h=1080&fit=crop&q=80"
            alt="Construction"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
