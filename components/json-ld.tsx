export function JsonLd() {
  const hotelSchema = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    '@id': 'https://luxehaven.com',
    name: 'Luxe Haven',
    description: 'A boutique luxury hotel offering premium accommodations and world-class amenities',
    url: 'https://luxehaven.com',
    telephone: '+1-555-123-4567',
    email: 'info@luxehaven.com',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    priceRange: '$$$$',
    starRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Luxury Boulevard',
      addressLocality: 'Paradise City',
      addressRegion: 'PC',
      postalCode: '12345',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7128',
      longitude: '-74.0060',
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Spa',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Restaurant',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Fitness Center',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'WiFi',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Concierge',
      },
    ],
    rooms: [
      {
        '@type': 'Room',
        name: 'Deluxe Suite',
        description: 'Spacious suite with premium furnishings and city views',
        url: 'https://luxehaven.com/rooms/deluxe-suite',
        offers: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          price: '450',
          priceValidUntil: '2025-12-31',
        },
      },
      {
        '@type': 'Room',
        name: 'Oceanview Room',
        description: 'Serene oceanfront accommodation with balcony',
        url: 'https://luxehaven.com/rooms/oceanview-room',
        offers: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          price: '380',
          priceValidUntil: '2025-12-31',
        },
      },
      {
        '@type': 'Room',
        name: 'Presidential Suite',
        description: 'Ultimate luxury with private spa and exceptional amenities',
        url: 'https://luxehaven.com/rooms/presidential-suite',
        offers: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          price: '650',
          priceValidUntil: '2025-12-31',
        },
      },
    ],
    sameAs: [
      'https://www.facebook.com/luxehaven',
      'https://www.instagram.com/luxehaven',
      'https://www.twitter.com/luxehaven',
    ],
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Luxe Haven',
    url: 'https://luxehaven.com',
    logo: 'https://luxehaven.com/logo.png',
    description: 'Boutique luxury hotel with premium accommodations and world-class amenities',
    sameAs: [
      'https://www.facebook.com/luxehaven',
      'https://www.instagram.com/luxehaven',
      'https://www.twitter.com/luxehaven',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+1-555-123-4567',
      email: 'info@luxehaven.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        suppressHydrationWarning
      />
    </>
  )
}
