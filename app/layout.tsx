import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#D4C5B9",
};

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Costria Hotel - Luxury Hotel in Addis Ababa | Premium Accommodations",
  description:
    "Costria Hotel is a premier luxury hotel in Addis Ababa, Ethiopia, offering elegant rooms, world-class amenities, fine dining, and exceptional hospitality. Book your stay today.",
  keywords: [
    "Costria Hotel",
    "hotel in Addis Ababa",
    "luxury hotel Ethiopia",
    "Addis Ababa accommodation",
    "boutique hotel Addis Ababa",
    "Ethiopia travel",
  ],
  applicationName: "Costria Hotel",
  authors: [{ name: "Costria Hotel" }],
  creator: "Costria Hotel",
  publisher: "Costria Hotel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_ET",
    url: "https://costriahotel.com",
    siteName: "Costria Hotel",
    title: "Costria Hotel - Luxury Stay in Addis Ababa",
    description:
      "Discover refined comfort at Costria Hotel in Addis Ababa. Premium rooms, fine dining, spa services, and exceptional hospitality.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Costria Hotel Addis Ababa",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Costria Hotel - Luxury Hotel in Addis Ababa",
    description:
      "Experience comfort and elegance at Costria Hotel in Addis Ababa, Ethiopia.",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=630&q=80",
    ],
    creator: "@costriahotel",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={_playfair.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
