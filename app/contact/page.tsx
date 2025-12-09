import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact - Olympus Masonry",
  description: "Contact Olympus Masonry for expert masonry services. Call Peter at 403-919-5272 (Cell) or 780-245-5809 (Office). Serving Edmonton and surrounding areas year-round.",
};

export default function Contact() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-olympus-black text-white py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block border-2 border-olympus-gold px-4 py-2 mb-8">
            <span className="font-heading uppercase tracking-widest text-olympus-gold text-sm">Get In Touch</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-display mb-6 leading-none">
            CONTACT US
          </h1>
          <p className="text-xl font-body text-gray-300 max-w-2xl mx-auto">
            Ready to start your masonry project? Get in touch for a free estimate.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading text-olympus-black mb-6 uppercase">
              Let's Talk About Your Project
            </h2>
            <div className="w-20 h-1 bg-olympus-gold mx-auto mb-8"></div>
            <p className="text-lg font-body text-gray-600 max-w-2xl mx-auto">
              Ready to start your masonry project? Reach out to us directly by phone or email. We respond quickly to all inquiries.
            </p>
          </div>

          {/* Phone Section - Primary Contact Method */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-olympus-gold p-8 md:p-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-olympus-black flex items-center justify-center">
                  <svg className="w-6 h-6 text-olympus-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading uppercase text-sm tracking-wider text-olympus-black">Call Us Directly</h3>
                  <p className="text-xs text-gray-700">Preferred contact method</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Cell */}
                <a href="tel:4039195272" className="group bg-olympus-black hover:bg-gray-900 p-6 text-center transition-colors duration-300">
                  <p className="text-xs font-heading uppercase tracking-wider text-gray-400 group-hover:text-olympus-gold mb-1 transition-colors duration-300">Cell (Peter)</p>
                  <p className="text-3xl md:text-4xl font-display text-white transition-colors duration-300">403-919-5272</p>
                  <p className="text-xs text-olympus-gold mt-2 transition-colors duration-300">Fastest response</p>
                </a>

                {/* Office */}
                <a href="tel:7802455809" className="group bg-olympus-black hover:bg-gray-900 p-6 text-center transition-colors duration-300">
                  <p className="text-xs font-heading uppercase tracking-wider text-gray-400 group-hover:text-olympus-gold mb-1 transition-colors duration-300">Office</p>
                  <p className="text-3xl md:text-4xl font-display text-white transition-colors duration-300">780-245-5809</p>
                  <p className="text-xs text-olympus-gold mt-2 transition-colors duration-300">Business hours</p>
                </a>
              </div>

              <p className="text-center text-gray-800 text-sm mt-6">Monday - Saturday • Emergency services available</p>
            </div>
          </div>

          {/* Email Section - Secondary Contact */}
          <div className="max-w-3xl mx-auto">
            <a href="mailto:ollympus1@outlook.com" className="group block bg-gray-100 hover:bg-gray-200 p-6 text-center transition-colors duration-300">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5 text-gray-500 group-hover:text-olympus-gold transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="font-heading uppercase text-sm tracking-wider text-gray-600 group-hover:text-olympus-black transition-colors duration-300">Or email us</span>
              </div>
              <p className="text-lg font-body text-gray-700 group-hover:text-olympus-black mt-2 transition-colors duration-300">ollympus1@outlook.com</p>
              <p className="text-xs text-gray-500 mt-1">We respond within 24 hours</p>
            </a>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 border-l-4 border-olympus-gold">
                <h3 className="font-heading uppercase text-sm tracking-wider text-olympus-black mb-2">Service Area</h3>
                <p className="text-lg font-body text-gray-700">
                  Edmonton & Surrounding Areas
                </p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-olympus-gold">
                <h3 className="font-heading uppercase text-sm tracking-wider text-olympus-black mb-2">Business Hours</h3>
                <p className="text-sm font-body text-gray-700">
                  Mon-Fri: 7:00 AM - 6:00 PM<br />
                  Saturday: 8:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
                <p className="text-xs font-body text-olympus-gold mt-2">
                  Emergency services available
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-olympus-gold text-center">
              <h3 className="font-heading uppercase text-sm tracking-wider text-olympus-black mb-2">Year-Round Service</h3>
              <p className="text-base font-body text-gray-800">
                We offer winter masonry services using cold-weather certified techniques. Don't let the season stop your project!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-olympus-gold py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-display text-olympus-black text-center mb-12">WHY CHOOSE OLYMPUS?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-display text-white mb-4">27+</div>
              <h3 className="font-heading uppercase text-sm tracking-wider text-gray-800 mb-2">Years Experience</h3>
              <p className="text-sm font-body text-gray-700">
                Proven track record of quality craftsmanship in Edmonton
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-display text-white mb-4">100%</div>
              <h3 className="font-heading uppercase text-sm tracking-wider text-gray-800 mb-2">Licensed & Insured</h3>
              <p className="text-sm font-body text-gray-700">
                Fully licensed, insured, and committed to safety
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-display text-white mb-4">365</div>
              <h3 className="font-heading uppercase text-sm tracking-wider text-gray-800 mb-2">Days Available</h3>
              <p className="text-sm font-body text-gray-700">
                Year-round service including winter masonry
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
