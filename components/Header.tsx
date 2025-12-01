"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-olympus-black text-white py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex flex-row items-center gap-3 md:gap-4">
          <Image
            src="/olympus-masonry-logo.png"
            alt="Olympus Masonry"
            width={32}
            height={32}
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <div className="flex items-center gap-2 leading-none">
            <span className="text-2xl md:text-3xl font-display text-olympus-gold leading-none">OLYMPUS</span>
            <span className="text-2xl md:text-3xl font-display text-white leading-none">MASONRY</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-heading text-sm uppercase tracking-wider">
          <Link href="/services" className="hover:text-olympus-gold transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-olympus-gold transition-colors">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-olympus-gold transition-colors">
            Contact
          </Link>
        </nav>

        <a
          href="tel:4039195272"
          className="hidden md:inline-block bg-olympus-gold text-olympus-black px-6 py-3 font-heading uppercase text-sm tracking-wider hover:bg-olympus-gold-light transition-colors"
        >
          403-919-5272
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 space-y-4">
          <Link
            href="/services"
            className="block font-heading uppercase text-sm tracking-wider hover:text-olympus-gold transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="block font-heading uppercase text-sm tracking-wider hover:text-olympus-gold transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="block font-heading uppercase text-sm tracking-wider hover:text-olympus-gold transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <a
            href="tel:4039195272"
            className="block bg-olympus-gold text-olympus-black px-6 py-3 font-heading uppercase text-sm tracking-wider text-center hover:bg-olympus-gold-light transition-colors"
          >
            403-919-5272
          </a>
        </nav>
      )}
    </header>
  );
}
