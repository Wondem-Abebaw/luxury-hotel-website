import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { RoomsGrid } from "@/components/rooms-grid";
import { Amenities } from "@/components/amenities";
import { Gallery } from "@/components/gallery";
import { BookingForm } from "@/components/booking-form";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { Menu } from "@/components/menu";

export const metadata: Metadata = {
  title: "Luxe Haven - Boutique Luxury Hotel | Premium Accommodations",
  description:
    "Best Hotels in Addis Ababa. Book your luxury stay with premium rooms, spa, fine dining, and world-class service.",
  keywords: [
    "luxury hotel",
    "Best Hotels in Addis Ababa",
    "Best Hotel",
    "Addis Ababa",
    "hotel booking",
    "top hotels in addis ababa",
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <main className="bg-background text-foreground">
        <Navigation />
        <Hero />
        <RoomsGrid />
        <Amenities />
        <Menu />
        <Gallery />
        <BookingForm />
        <Footer />
      </main>
    </>
  );
}
