import './globals.css';

// TODO: Replace with actual Website URL
const WEBSITE_URL = 'https://rishimehndi.shop';

export const metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: {
    default: 'Rishi Mehndi Art | Best Bridal Mehndi Artist in Gurugram',
    template: '%s | Rishi Mehndi Art'
  },
  description: 'Premium professional Mehndi artist in Gurugram. Specializing in luxury bridal, wedding, engagement, and Arabic Mehndi. Home service available.',
  keywords: [
    'Bridal Mehndi Artist in Gurugram', 
    'Best Mehndi Artist in Gurugram', 
    'Professional Mehndi Artist in Gurugram', 
    'Wedding Mehndi Artist Gurugram', 
    'Arabic Mehndi Artist Gurugram', 
    'Mehndi Artist Near Me',
    'Engagement Mehndi Artist Gurugram',
    'Luxury Bridal Mehndi Gurugram',
    'Rishi Mehndi Art',
    'Mehndi Artist Haryana'
  ],
  authors: [{ name: 'Rishi Mehndi Art', url: WEBSITE_URL }],
  creator: 'Rishi Mehndi Art',
  publisher: 'Rishi Mehndi Art',
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  verification: {
    // TODO: Add Google Search Console verification code
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    // TODO: Add Bing verification code
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['rishimehndiartist@gmail.com', WEBSITE_URL],
      'msvalidate.01': 'YOUR_BING_VERIFICATION_CODE',
    },
  },
  openGraph: {
    title: 'Rishi Mehndi Art | Best Bridal Mehndi Artist in Gurugram',
    description: 'Premium professional Mehndi artist in Gurugram. Specializing in luxury bridal, wedding, engagement, and Arabic Mehndi.',
    url: WEBSITE_URL,
    siteName: 'Rishi Mehndi Art',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/hero-main.jpeg',
        width: 1200,
        height: 630,
        alt: 'Beautiful Bridal Mehndi Design by Rishi Mehndi Art in Gurugram',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rishi Mehndi Art | Best Bridal Mehndi Artist in Gurugram',
    description: 'Premium professional Mehndi artist in Gurugram. Specializing in luxury bridal, wedding, engagement, and Arabic Mehndi.',
    images: ['/hero-main.jpeg'],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Rishi Mehndi Art',
  image: `${WEBSITE_URL}/hero-main.jpeg`,
  '@id': WEBSITE_URL,
  url: WEBSITE_URL,
  telephone: '+917668715610',
  email: 'rishimehndiartist@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No. CG-72, Arcadia, South City II, Sector 49',
    addressLocality: 'Gurugram',
    addressRegion: 'Haryana',
    postalCode: '122018',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.4116,
    longitude: 77.0658
  },
  priceRange: '₹₹',
  description: 'Professional Bridal and Arabic Mehendi Artist based in Gurugram, Haryana. Home service available.',
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rishi Mehndi Art',
  url: WEBSITE_URL,
  logo: `${WEBSITE_URL}/favicon.svg`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+917668715610',
    contactType: 'customer service',
    email: 'rishimehndiartist@gmail.com'
  },
  sameAs: [
    'https://www.instagram.com/rishi_imehandi_art_/'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessLd, organizationLd]) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
