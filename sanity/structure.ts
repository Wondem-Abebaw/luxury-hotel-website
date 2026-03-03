import { Calendar } from 'lucide-react'
import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Custom list items
      S.listItem()
        .title('Bookings')
        .icon(Calendar)
        .child(
          S.documentList()
            .title('All Bookings')
            .filter('_type == "booking"')
            .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
        ),

      // Default document types
      ...S.documentTypeListItems(),
    ])
