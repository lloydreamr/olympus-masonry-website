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
          <div className="max-w-xl animate-fade-in-up">
            <div className="inline-block border-2 border-olympus-gold px-4 py-2 mb-8">
              <span className="font-heading uppercase tracking-widest text-olympus-gold text-sm">Edmonton, Alberta</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-display mb-8 leading-none tracking-tight">
              <span className="block opacity-90">MASONRY</span>
              <span className="block text-olympus-gold">EXCELLENCE</span>
            </h1>
            <p className="text-2xl md:text-3xl font-body mb-8 text-gray-300 leading-relaxed tracking-wide">
              Expert craftsmanship in brick, stone & concrete masonry
            </p>

            {/* Premium Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="premium-badge px-4 py-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-olympus-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-heading uppercase tracking-wider text-gray-400">Licensed & Insured</span>
              </div>
              <div className="premium-badge px-4 py-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-olympus-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-heading uppercase tracking-wider text-gray-400">Year-Round Service</span>
              </div>
            </div>

            <a
              href="tel:4039195272"
              className="premium-button inline-block bg-olympus-gold text-olympus-black px-12 py-6 font-heading uppercase tracking-widest text-base hover:bg-olympus-gold-light"
            >
              Schedule Consultation
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
            <div className="text-olympus-gold font-display text-9xl mb-6 opacity-10 tracking-tighter select-none">01</div>
            <h2 className="text-5xl md:text-6xl font-heading text-olympus-black mb-6 uppercase leading-tight tracking-tight">
              Brick & Stone<br />Masonry
            </h2>
            <div className="w-20 h-1 bg-olympus-gold mb-8"></div>
            <p className="text-lg md:text-xl font-body text-gray-600 mb-8 leading-relaxed">
              Masterful installation of premium brick and natural stone for discerning residential and commercial clients. From elegant patios to commanding building facades, we deliver exceptional craftsmanship.
            </p>
            <ul className="space-y-4 mb-10 stagger-children">
              <li className="flex items-center text-gray-700 font-body text-base">
                <span className="w-2 h-2 bg-olympus-gold mr-4 flex-shrink-0"></span>
                Residential & Commercial Projects
              </li>
              <li className="flex items-center text-gray-700 font-body text-base">
                <span className="w-2 h-2 bg-olympus-gold mr-4 flex-shrink-0"></span>
                New Construction & Expert Repair
              </li>
              <li className="flex items-center text-gray-700 font-body text-base">
                <span className="w-2 h-2 bg-olympus-gold mr-4 flex-shrink-0"></span>
                Cold-Weather Certified Techniques
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
            <div className="text-olympus-gold font-display text-9xl mb-6 opacity-10 tracking-tighter select-none">02</div>
            <h2 className="text-5xl md:text-6xl font-heading mb-6 uppercase leading-tight tracking-tight">
              Retaining Walls<br />& Patios
            </h2>
            <div className="w-20 h-1 bg-olympus-gold mb-8"></div>
            <p className="text-lg md:text-xl font-body text-gray-300 mb-8 leading-relaxed">
              Beautiful and functional outdoor spaces engineered to withstand Edmonton's harsh climate. Transform your property with expertly crafted hardscaping solutions.
            </p>
            <ul className="space-y-4 mb-10 stagger-children">
              <li className="flex items-center text-gray-300 font-body text-base">
                <span className="w-2 h-2 bg-olympus-gold mr-4 flex-shrink-0"></span>
                Bespoke Custom Designs
              </li>
              <li className="flex items-center text-gray-300 font-body text-base">
                <span className="w-2 h-2 bg-olympus-gold mr-4 flex-shrink-0"></span>
                Professional Drainage Solutions
              </li>
              <li className="flex items-center text-gray-300 font-body text-base">
                <span className="w-2 h-2 bg-olympus-gold mr-4 flex-shrink-0"></span>
                Multi-Season Durability Guaranteed
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
            <div className="text-olympus-gold font-display text-9xl mb-6 opacity-10 tracking-tighter select-none">03</div>
            <h2 className="text-5xl md:text-6xl font-heading text-olympus-black mb-6 uppercase leading-tight tracking-tight">
              Chimneys &<br />Fireplaces
            </h2>
            <div className="w-20 h-1 bg-olympus-gold mb-8"></div>
            <p className="text-lg md:text-xl font-body text-gray-600 mb-8 leading-relaxed">
              Professional chimney repair, restoration, and luxury fireplace installations. Keep your home safe, warm, and elegant with our expert masonry services.
            </p>
            <ul className="space-y-4 mb-10 stagger-children">
              <li className="flex items-center text-gray-700 font-body text-base">
                <span className="w-2 h-2 bg-olympus-gold mr-4 flex-shrink-0"></span>
                Expert Chimney Repair & Rebuild
              </li>
              <li className="flex items-center text-gray-700 font-body text-base">
                <span className="w-2 h-2 bg-olympus-gold mr-4 flex-shrink-0"></span>
                Indoor & Outdoor Fireplaces
              </li>
              <li className="flex items-center text-gray-700 font-body text-base">
                <span className="w-2 h-2 bg-olympus-gold mr-4 flex-shrink-0"></span>
                Comprehensive Safety Inspections
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
            <div className="text-white font-display text-9xl mb-8 tracking-tight">4+</div>
            <h2 className="text-5xl font-heading text-olympus-black mb-6 uppercase tracking-tight">
              Years of Excellence
            </h2>
            <p className="text-xl md:text-2xl font-body text-gray-800 mb-10 leading-relaxed">
              Serving Edmonton's finest properties with expert masonry craftsmanship
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="premium-badge border-olympus-black/20">
                <div className="text-4xl font-display text-white mb-2">100%</div>
                <div className="text-sm font-heading text-gray-800 uppercase tracking-wide">Licensed & Insured</div>
              </div>
              <div className="premium-badge border-olympus-black/20">
                <div className="text-4xl font-display text-white mb-2">365</div>
                <div className="text-sm font-heading text-gray-800 uppercase tracking-wide">Days Available</div>
              </div>
            </div>
            <a
              href="tel:4039195272"
              className="premium-button inline-block bg-olympus-black text-olympus-gold px-12 py-6 font-heading uppercase tracking-widest text-base shadow-2xl hover:bg-gray-900"
            >
              Speak With an Expert
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
            <div className="text-olympus-gold font-display text-9xl mb-6 opacity-10 tracking-tighter select-none">04</div>
            <h2 className="text-5xl md:text-6xl font-heading mb-6 uppercase leading-tight tracking-tight">
              Winter<br />Masonry
            </h2>
            <div className="w-20 h-1 bg-olympus-gold mb-8"></div>
            <p className="text-lg md:text-xl font-body text-gray-300 mb-8 leading-relaxed">
              Don't let cold weather delay your project. We specialize in winter masonry using cold-weather certified techniques and premium materials designed for Edmonton's climate.
            </p>
            <ul className="space-y-4 mb-10 stagger-children">
              <li className="flex items-center text-gray-300 font-body text-base">
                <span className="w-2 h-2 bg-olympus-gold mr-4 flex-shrink-0"></span>
                Cold-Weather Certified Specialists
              </li>
              <li className="flex items-center text-gray-300 font-body text-base">
                <span className="w-2 h-2 bg-olympus-gold mr-4 flex-shrink-0"></span>
                Year-Round Project Availability
              </li>
              <li className="flex items-center text-gray-300 font-body text-base">
                <span className="w-2 h-2 bg-olympus-gold mr-4 flex-shrink-0"></span>
                24/7 Emergency Repair Service
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
            <div className="mb-10">
              <svg className="w-14 h-14 text-olympus-gold mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <blockquote className="text-2xl md:text-3xl font-heading text-olympus-black mb-8 leading-relaxed tracking-tight">
              "Exceptional craftsmanship and meticulous attention to detail. The team completed our custom patio ahead of schedule and the results are absolutely stunning."
            </blockquote>
            <div className="flex items-center mb-6 gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-olympus-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <div className="w-12 h-12 rounded-full bg-olympus-gold/10 flex items-center justify-center">
                <span className="text-olympus-gold font-heading text-xl">J</span>
              </div>
              <div>
                <p className="font-heading text-olympus-black font-semibold text-lg">John M.</p>
                <p className="text-gray-600 text-sm">Residential Client • Edmonton, AB</p>
              </div>
            </div>
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
            <h2 className="text-6xl md:text-7xl font-display mb-8 leading-tight tracking-tight">
              READY TO<br />START?
            </h2>
            <p className="text-xl md:text-2xl font-body text-gray-300 mb-12 leading-relaxed">
              Schedule your complimentary consultation with Edmonton's premier masonry specialists
            </p>
            <div className="flex flex-col gap-5">
              <a
                href="tel:4039195272"
                className="premium-button bg-olympus-gold text-olympus-black px-12 py-6 font-heading uppercase tracking-widest text-base hover:bg-olympus-gold-light"
              >
                Call: 403-919-5272
              </a>
              <a
                href="mailto:ollympus1@outlook.com"
                className="premium-button border-2 border-white text-white px-12 py-6 font-heading uppercase tracking-widest text-base hover:bg-white hover:text-olympus-black shadow-none"
              >
                Email Consultation
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
