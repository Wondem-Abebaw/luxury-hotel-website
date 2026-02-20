"use client";

import { Wine, Utensils, Dumbbell, Wifi, ConciergeBell } from "lucide-react";

const AMENITIES = [
  {
    id: 1,
    name: "Spa & Wellness",
    description:
      "Full-service spa with treatments from world-renowned therapists",
    icon: Wine,
  },
  {
    id: 2,
    name: "Fine Dining",
    description:
      "Michelin-starred restaurant with seasonal, locally-sourced menus",
    icon: Utensils,
  },
  {
    id: 3,
    name: "Wine Cellar",
    description: "Curated collection of over 2,000 wines from around the world",
    icon: Wine,
  },
  {
    id: 4,
    name: "Fitness Center",
    description: "State-of-the-art equipment and personal training available",
    icon: Dumbbell,
  },
  {
    id: 5,
    name: "High-Speed WiFi",
    description: "Seamless connectivity throughout the property",
    icon: Wifi,
  },
  {
    id: 6,
    name: "Concierge",
    description: "24/7 dedicated concierge for all your needs",
    icon: ConciergeBell,
  },
];

export function Amenities() {
  return (
    <section
      id="amenities"
      className="py-20 px-4 bg-muted/20"
      aria-labelledby="amenities-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="amenities-heading"
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            World-Class Amenities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thoughtfully curated experiences designed to elevate your stay. From
            our spa and fine dining to fitness center and concierge services.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {AMENITIES.map((amenity) => {
            const Icon = amenity.icon;
            return (
              <article key={amenity.id} className="text-center group">
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon
                      size={32}
                      className="text-primary"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  {amenity.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
