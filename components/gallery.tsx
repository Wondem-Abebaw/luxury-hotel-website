'use client'

import { useState } from 'react'

const GALLERY_IMAGES = [
  {
    id: 1,
    title: 'Luxury Bedroom',
    url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
  },
  {
    id: 2,
    title: 'Spa & Wellness',
    url: 'https://images.unsplash.com/photo-1600881333195-6ce9f4d2b9b1?w=800&q=80',
  },
  {
    id: 3,
    title: 'Fine Dining',
    url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80',
  },
  {
    id: 4,
    title: 'Oceanfront View',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    id: 5,
    title: 'Swimming Pool',
    url: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=800&q=80',
  },
  {
    id: 6,
    title: 'Exterior Architecture',
    url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
  },
]

export function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 px-4 bg-background" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="gallery-heading" className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the beauty and elegance of Luxe Haven's luxury rooms, spa facilities, fine dining, and stunning oceanfront views
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              className="group relative h-64 overflow-hidden rounded-sm cursor-pointer"
              onClick={() => setSelectedId(image.id)}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url("${image.url}")`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-serif font-bold text-center px-4">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedId && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative max-w-4xl max-h-screen w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url("${
                  GALLERY_IMAGES.find((img) => img.id === selectedId)?.url
                }")`,
              }}
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation */}
            <button
              onClick={() => {
                const currentIndex = GALLERY_IMAGES.findIndex(
                  (img) => img.id === selectedId
                )
                const prevId =
                  GALLERY_IMAGES[
                    (currentIndex - 1 + GALLERY_IMAGES.length) %
                      GALLERY_IMAGES.length
                  ].id
                setSelectedId(prevId)
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                const currentIndex = GALLERY_IMAGES.findIndex(
                  (img) => img.id === selectedId
                )
                const nextId =
                  GALLERY_IMAGES[(currentIndex + 1) % GALLERY_IMAGES.length].id
                setSelectedId(nextId)
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
