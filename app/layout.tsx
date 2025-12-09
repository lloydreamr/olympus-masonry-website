import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olympus Masonry - Edmonton's Premier Masonry Contractors",
  description: "Expert craftsmanship in brick, stone & concrete. Year-round masonry services in Edmonton, AB. Licensed, insured, and trusted by homeowners and contractors.",
  keywords: ["masonry", "brick work", "stone work", "Edmonton", "Alberta", "chimney repair", "patio", "retaining walls", "winter masonry"],
  authors: [{ name: "Olympus Masonry" }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://olympus-masonry.ca'),
  openGraph: {
    title: "Olympus Masonry - Edmonton's Premier Masonry Contractors",
    description: "Expert craftsmanship in brick, stone & concrete. Year-round masonry services in Edmonton, AB. 27+ years experience. Licensed & insured.",
    url: 'https://olympus-masonry.ca',
    siteName: 'Olympus Masonry',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/hero/brick-bond/brick-01.webp',
        width: 1200,
        height: 630,
        alt: 'Olympus Masonry - Professional Brick and Stone Work in Edmonton',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Olympus Masonry - Edmonton's Premier Masonry Contractors",
    description: "Expert craftsmanship in brick, stone & concrete. Year-round masonry services in Edmonton, AB.",
    images: ['/images/hero/brick-bond/brick-01.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://olympus-masonry.ca',
  },
};

// LocalBusiness structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://olympus-masonry.ca',
  name: 'Olympus Masonry',
  image: 'https://olympus-masonry.ca/images/hero/brick-bond/brick-01.webp',
  description: 'Expert craftsmanship in brick, stone & concrete. Year-round masonry services in Edmonton, AB. 27+ years experience. Licensed & insured.',
  url: 'https://olympus-masonry.ca',
  telephone: '+1-403-919-5272',
  email: 'ollympus1@outlook.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Edmonton',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.5461,
    longitude: -113.4938,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '16:00',
    },
  ],
  priceRange: '$$',
  areaServed: {
    '@type': 'City',
    name: 'Edmonton',
  },
  serviceType: [
    'Brick Masonry',
    'Stone Masonry',
    'Chimney Repair',
    'Fireplace Installation',
    'Patio Construction',
    'Retaining Walls',
    'Winter Masonry',
  ],
  founder: {
    '@type': 'Person',
    name: 'Peter Kolia',
  },
  foundingDate: '1998',
  slogan: "Edmonton's Premier Masonry Contractors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
