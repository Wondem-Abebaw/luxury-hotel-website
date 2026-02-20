import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#D4C5B9',
}

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Luxe Haven - Boutique Luxury Hotel | Premium Accommodations',
  description: 'Experience refined elegance at Luxe Haven, a boutique luxury hotel offering premium accommodations, world-class amenities, and exceptional service. Book your perfect getaway today.',
  keywords: ['luxury hotel', 'boutique hotel', 'premium accommodations', 'luxury spa', 'fine dining', 'travel'],
  generator: 'v0.app',
  applicationName: 'Luxe Haven Hotel',
  authors: [{ name: 'Luxe Haven' }],
  creator: 'Luxe Haven',
  publisher: 'Luxe Haven',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luxehaven.com',
    siteName: 'Luxe Haven',
    title: 'Luxe Haven - Boutique Luxury Hotel | Premium Accommodations',
    description: 'Experience refined elegance at Luxe Haven. Premium rooms, world-class amenities, and exceptional hospitality.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Luxe Haven Luxury Hotel',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxe Haven - Boutique Luxury Hotel',
    description: 'Experience refined elegance with premium accommodations and world-class amenities.',
    images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=630&q=80'],
    creator: '@luxehaven',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={_playfair.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
