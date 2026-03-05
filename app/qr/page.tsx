
import type { Metadata } from 'next'
import './print.css'
import { QRCard } from '@/components/qr/qr-card'

export const metadata: Metadata = {
  title: 'Menu QR Code | Green Pearl',
  description: 'Printable QR code for the Green Pearl digital menu.',
}


const HOTEL_NAME = 'Green Pearl Hotel'
const HOTEL_TAGLINE = 'Under Entoto Mountain'
const MENU_URL = 'https://greenpearlhotel.vercel.app/menus'

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
