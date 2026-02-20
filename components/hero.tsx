'use client'

import { useEffect, useState } from 'react'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label="Luxe Haven Hotel Hero Section"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80")',
          backgroundPosition: 'center',
        }}
        role="img"
        aria-label="Luxe Haven luxury hotel lobby and accommodations"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 text-balance">
            Luxury Redefined at Luxe Haven
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 text-balance">
            Experience unparalleled elegance and comfort in an intimate boutique hotel setting designed for discerning travelers seeking premium accommodations and world-class hospitality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground text-sm uppercase tracking-wider rounded-sm hover:opacity-90 transition-all hover:scale-105">
              Book Your Stay
            </button>
            <button className="px-8 py-3 border border-white text-white text-sm uppercase tracking-wider rounded-sm hover:bg-white hover:text-black transition-all">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="animate-bounce text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
