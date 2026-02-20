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

// export async function getRooms(): Promise<Room[]> {
//   return client.fetch(
//     `*[_type == "room"] | order(_createdAt asc) {
//       "id": _id,
//       name,
//       "slug": slug.current,
//       price,
//       image,
//       description,
//       amenities
//     }`
//   )
// }


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
        revalidate: 60  // re-fetch from Sanity every 60 seconds at minimum
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