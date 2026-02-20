
import type { Metadata } from 'next'
import './print.css'
import { QRCard } from '@/components/qr/qr-card'

export const metadata: Metadata = {
  title: 'Menu QR Code | Luxe Haven',
  description: 'Printable QR code for the Luxe Haven digital menu.',
}


const HOTEL_NAME = 'Luxe Haven'
const HOTEL_TAGLINE = 'Boutique Luxury Hotel'
const MENU_URL = 'https://luxury-hotel-website-five.vercel.app/menus'

export default function QRPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 px-4">
      <QRCard
        hotelName={HOTEL_NAME}
        menuUrl={MENU_URL}
        tagline={HOTEL_TAGLINE}
      />
    </main>
  )
}
