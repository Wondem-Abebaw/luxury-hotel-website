'use client'

import { useRef } from 'react'
import { QRCodeSVG } from 'qrcode.react'

type Props = {
  hotelName: string
  menuUrl: string
  tagline?: string
}

export function QRCard({ hotelName, menuUrl, tagline }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="flex flex-col items-center gap-8">

      {/* Print Button - hidden when printing */}
      <button
        onClick={handlePrint}
        className="no-print flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
      >
        🖨️ Print / Save as PDF
      </button>

      {/* Branded Card */}
      <div
        ref={cardRef}
        className="qr-card bg-white rounded-3xl shadow-2xl overflow-hidden w-[380px]"
      >
        {/* Top Banner */}
        <div className="bg-amber-600 px-8 py-6 text-center">
          <h1 className="text-white text-3xl font-bold tracking-wide">{hotelName}</h1>
          {tagline && (
            <p className="text-amber-100 text-sm mt-1">{tagline}</p>
          )}
        </div>

        {/* QR Section */}
        <div className="px-8 py-8 flex flex-col items-center gap-6">

          {/* Instruction */}
          <p className="text-gray-500 text-sm text-center">
            Scan the code below to explore our full menu
          </p>

          {/* QR Code */}
          <div className="border-4 border-amber-500 rounded-2xl p-4 bg-white">
            <QRCodeSVG
              value={menuUrl}
              size={200}
              fgColor="#1a1a1a"
              bgColor="#ffffff"
              level="H"
            />
          </div>

          {/* Divider */}
          <div className="w-full flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-xs uppercase tracking-widest">Our Menu</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Steps */}
          <div className="w-full space-y-2">
            {[
              { step: '1', text: 'Open your phone camera' },
              { step: '2', text: 'Point it at the QR code' },
              { step: '3', text: 'Tap the link that appears' },
            ].map(({ step, text }) => (
              <div key={step} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {step}
                </span>
                <span className="text-gray-600 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer
        <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-100">
          <p className="text-gray-400 text-xs">
            {menuUrl}
          </p>
        </div> */}
      </div>

    </div>
  )
}