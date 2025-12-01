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
            src="/images/hero/commercial-brick-building-winter-hero.webp"
            alt="Modern commercial brick building - Olympus Masonry Edmonton"
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
            src="/images/sections/brick-work/commercial-corner-building-modern.webp"
            alt="Contemporary corner brick building - Commercial masonry Edmonton"
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
            src="/images/sections/patios/custom-stone-patio-01.webp"
            alt="Custom stone patio installation - Olympus Masonry"
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
            src="/images/sections/chimneys/stone-chimney-residential-01.webp"
            alt="Residential stone chimney installation - Edmonton masonry"
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
            <div className="text-white font-display text-9xl mb-6">4+</div>
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
            src="/images/sections/brick-work/commercial-large-complex.webp"
            alt="Large commercial brick building - Olympus Masonry Edmonton"
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
            src="/images/sections/stone-work/residential-winter-stone-home.webp"
            alt="Winter masonry - Stone home in snow - Year-round service Edmonton"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Testimonial Section: White left, Image right */}
      <section className="split-section">
        <div className="split-left bg-white">
          <div className="max-w-xl">
            <div className="mb-8">
              <svg className="w-12 h-12 text-olympus-gold mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <blockquote className="text-2xl font-heading text-olympus-black mb-6 leading-relaxed">
              "Exceptional craftsmanship and attention to detail. The team completed our patio ahead of schedule and the results are stunning."
            </blockquote>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-olympus-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="font-heading text-olympus-black font-semibold text-lg">John M.</p>
            <p className="text-gray-600">Edmonton, AB</p>
          </div>
        </div>

        <div className="split-divider"></div>

        <div className="split-right">
          <Image
            src="/images/sections/stone-work/luxury-home-landscaping.webp"
            alt="Luxury stone home - Completed masonry project Edmonton"
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
            src="/images/sections/stone-work/luxury-tower-stone-home.webp"
            alt="Modern luxury stone home - Premium masonry Edmonton"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
