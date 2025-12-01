import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-olympus-black text-white py-8 px-6">
      <div className="container mx-auto text-center">
        <div className="flex flex-row items-center justify-center gap-4 mb-4">
          <Image
            src="/olympus-masonry-logo.png"
            alt="Olympus Masonry"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <div className="flex items-center gap-3 leading-none">
            <div className="text-4xl font-display text-olympus-gold leading-none">OLYMPUS</div>
            <div className="text-4xl font-display text-white leading-none">MASONRY</div>
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-2">© 2025 Olympus Masonry. Edmonton, AB.</p>
        <p className="text-gray-500 text-xs">
          <a href="mailto:ollympus1@outlook.com" className="hover:text-olympus-gold transition-colors">
            ollympus1@outlook.com
          </a>
          {" | "}
          <a href="tel:4039195272" className="hover:text-olympus-gold transition-colors">
            403-919-5272
          </a>
        </p>
      </div>
    </footer>
  );
}
