import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyBookingBar from '@/components/StickyBookingBar'
import FloatingContactButton from '@/components/FloatingContactButton'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://747detailingclub.ro'),
  title: {
    default: '747 Detailing Club - Detailing Auto Premium București',
    template: '%s | 747 Detailing Club',
  },
  description: 'Servicii premium de detailing auto în București. Ceramic coating, polish profesional, curățare interior și exterior. Transformă-ți mașina cu atenție la detalii.',
  keywords: ['detailing auto București', 'ceramic coating București', 'polish auto', 'curățare interior auto București', '747 Detailing Club'],
  authors: [{ name: '747 Detailing Club' }],
  creator: '747 Detailing Club',
  publisher: '747 Detailing Club',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://747detailingclub.ro',
    siteName: '747 Detailing Club',
    title: '747 Detailing Club - Detailing Auto Premium București',
    description: 'Servicii premium de detailing auto în București. Ceramic coating, polish profesional, curățare interior și exterior.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '747 Detailing Club',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '747 Detailing Club - Detailing Auto Premium București',
    description: 'Servicii premium de detailing auto în București. Ceramic coating, polish profesional, curățare interior și exterior.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Adaugă Google Search Console verification code aici
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0b0b0b" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyBookingBar />
        <FloatingContactButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://747detailingclub.ro/#organization',
              name: '747 Detailing Club',
              image: 'https://747detailingclub.ro/og-image.jpg',
              '@id': 'https://747detailingclub.ro',
              url: 'https://747detailingclub.ro',
              telephone: '+40745313747',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Strada Dornei 93',
                addressLocality: 'București',
                postalCode: '012293',
                addressCountry: 'RO',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 44.4725384,
                longitude: 26.0502498,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
              ],
              sameAs: [
                'https://www.instagram.com/747detailingclub/',
              ],
              areaServed: {
                '@type': 'City',
                name: 'București',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}

