// components/rooms-grid.tsx
import { urlFor } from "@/sanity/lib/image";
import { getRooms } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

export async function RoomsGrid() {
  const rooms = await getRooms();

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Rooms & Suites</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each room is meticulously designed with your comfort and luxury in
            mind.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room: any) => (
            <div
              key={room.id}
              className="group rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                {/* <Image
                  src={urlFor(room.image).width(600).height(400).url()}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                /> */}
                <Image
                  src={urlFor(room.image).width(800).url()} // 👈 Sanity resizes it BEFORE it hits Vercel
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw" // 👈 Tells browser to load smaller images on mobile
                  priority={room.isFeatured} // 👈 Loads the main image instantly
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{room.name}</h3>
                  <span className="text-lg font-bold text-amber-600">
                    ${room.price}
                    <span className="text-sm font-normal">/night</span>
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <Link
                  href={`/rooms/${room.slug}`}
                  className="inline-block bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
