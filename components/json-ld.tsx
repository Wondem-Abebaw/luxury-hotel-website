export function JsonLd() {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": "https://costriahotel.com",
    name: "Costria Hotel",
    description:
      "Costria Hotel is one of the top hotels in Addis Ababa, offering premium accommodations, world-class amenities, and exceptional service for an unforgettable stay.",
    url: "https://costriahotel.com",
    telephone: "+251-11-123-4567",
    email: "info@costriahotel.com",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    priceRange: "$$$$",
    starRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bole Road",
      addressLocality: "Addis Ababa",
      addressRegion: "Addis Ababa",
      postalCode: "1000",
      addressCountry: "ET",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "8.9806",
      longitude: "38.7578",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Spa" },
      { "@type": "LocationFeatureSpecification", name: "Restaurant" },
      { "@type": "LocationFeatureSpecification", name: "Fitness Center" },
      { "@type": "LocationFeatureSpecification", name: "WiFi" },
      { "@type": "LocationFeatureSpecification", name: "Concierge" },
    ],
    rooms: [
      {
        "@type": "Room",
        name: "Deluxe Suite",
        description: "Spacious suite with premium furnishings and city views",
        url: "https://costriahotel.com/rooms/deluxe-suite",
        offers: {
          "@type": "PriceSpecification",
          priceCurrency: "ETB",
          price: "450",
          priceValidUntil: "2025-12-31",
        },
      },
      {
        "@type": "Room",
        name: "City View Room",
        description: "Modern accommodation with panoramic Addis Ababa views",
        url: "https://costriahotel.com/rooms/city-view-room",
        offers: {
          "@type": "PriceSpecification",
          priceCurrency: "ETB",
          price: "380",
          priceValidUntil: "2025-12-31",
        },
      },
      {
        "@type": "Room",
        name: "Presidential Suite",
        description:
          "Ultimate luxury with private spa and exceptional amenities",
        url: "https://costriahotel.com/rooms/presidential-suite",
        offers: {
          "@type": "PriceSpecification",
          priceCurrency: "ETB",
          price: "650",
          priceValidUntil: "2025-12-31",
        },
      },
    ],
    sameAs: [
      "https://www.facebook.com/costriahotel",
      "https://www.instagram.com/costriahotel",
      "https://www.twitter.com/costriahotel",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Costria Hotel",
    url: "https://costriahotel.com",
    logo: "https://costriahotel.com/logo.png",
    description:
      "Boutique luxury hotel in Addis Ababa with premium accommodations and world-class amenities",
    sameAs: [
      "https://www.facebook.com/costriahotel",
      "https://www.instagram.com/costriahotel",
      "https://www.twitter.com/costriahotel",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+251-11-123-4567",
      email: "info@costriahotel.com",
    },
  };

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
  );
}
