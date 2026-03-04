import { Calendar, BedDouble, UtensilsCrossed, LayoutList } from 'lucide-react'
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Bookings
      S.listItem()
        .title('Bookings')
        .icon(Calendar)
        .child(
          S.documentList()
            .title('All Bookings')
            .filter('_type == "booking"')
            .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
        ),

      // Rooms
      S.listItem()
        .title('Rooms')
        .icon(BedDouble)
        .child(
          S.documentList()
            .title('All Rooms')
            .filter('_type == "room"')
        ),

      // Menu Items
      S.listItem()
        .title('Menu Items')
        .icon(UtensilsCrossed)
        .child(
          S.documentList()
            .title('All Menu Items')
            .filter('_type == "menuItem"')
        ),

      // Menu Categories
      S.listItem()
        .title('Menu Categories')
        .icon(LayoutList)
        .child(
          S.documentList()
            .title('All Menu Categories')
            .filter('_type == "menuCategory"')
        ),
    ])