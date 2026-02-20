import { client } from './client'

export type Room = {
  id: string
  name: string
  slug: string
  price: number
  image: any   // Sanity image object
  description: string
  amenities: string[]
}




export async function getRooms() {
  return client.fetch(
    `*[_type == "room"] | order(_createdAt asc) {
      "id": _id,
      name,
      "slug": slug.current,
      price,
      image,
      description,
      amenities
    }`,
    {},
    {
      next: { 
        tags: ['room'],      // for instant webhook revalidation
        // revalidate: 3600      // fallback: recheck every 1 hour if webhook fails
      }
    }
  )
}

export async function getRoomBySlug(slug: string): Promise<Room> {
  return client.fetch(
    `*[_type == "room" && slug.current == $slug][0] {
      "id": _id,
      name,
      "slug": slug.current,
      price,
      image,
      description,
      amenities
    }`,
    { slug }
  )
}