import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact - Olympus Masonry",
  description: "Contact Olympus Masonry for a free estimate. Serving Edmonton and surrounding areas with expert masonry services year-round.",
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
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-heading text-olympus-black mb-6 uppercase">
                Let's Talk About<br />Your Project
              </h2>
              <div className="w-20 h-1 bg-olympus-gold mb-8"></div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-heading uppercase text-sm tracking-wider text-olympus-gold mb-2">Phone</h3>
                  <a href="tel:4039195272" className="text-2xl font-body text-olympus-black hover:text-olympus-gold transition-colors">
                    403-919-5272
                  </a>
                </div>

                <div>
                  <h3 className="font-heading uppercase text-sm tracking-wider text-olympus-gold mb-2">Email</h3>
                  <a href="mailto:ollympus1@outlook.com" className="text-2xl font-body text-olympus-black hover:text-olympus-gold transition-colors">
                    ollympus1@outlook.com
                  </a>
                </div>

                <div>
                  <h3 className="font-heading uppercase text-sm tracking-wider text-olympus-gold mb-2">Service Area</h3>
                  <p className="text-2xl font-body text-olympus-black">
                    Edmonton & Surrounding Areas
                  </p>
                </div>

                <div>
                  <h3 className="font-heading uppercase text-sm tracking-wider text-olympus-gold mb-2">Hours</h3>
                  <p className="text-lg font-body text-gray-700">
                    Monday - Friday: 7:00 AM - 6:00 PM<br />
                    Saturday: 8:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                  <p className="text-sm font-body text-olympus-gold mt-2">
                    Emergency services available
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 border-l-4 border-olympus-gold">
                <h3 className="font-heading uppercase text-sm tracking-wider text-olympus-black mb-2">Year-Round Service</h3>
                <p className="text-base font-body text-gray-700">
                  We offer winter masonry services using cold-weather certified techniques. Don't let the season stop your project!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8">
                <h3 className="text-2xl font-heading text-olympus-black mb-6 uppercase">Request a Free Estimate</h3>
                <ContactForm />
              </div>
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
              <div className="text-5xl font-display text-white mb-4">15+</div>
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
