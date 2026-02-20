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
export type MenuItem = {
  id: string
  name: string
  price: number
  description: string
  image: any
  available: boolean
  category: {
    id: string
    name: string
    slug: string
    order: number
  }
}
export type MenuCategory = {
  id: string
  name: string
  slug: string
  order: number
  items: MenuItem[]
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
        // revalidate: 36000      // fallback: recheck every 10 hour if webhook fails
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
// Fetch all categories with their items grouped
export async function getMenuGrouped(): Promise<MenuCategory[]> {
  return client.fetch(
    `*[_type == "menuCategory"] | order(order asc) {
      "id": _id,
      name,
      "slug": slug.current,
      order,
      "items": *[_type == "menuItem" && references(^._id) && available == true] | order(name asc) {
        "id": _id,
        name,
        price,
        description,
        image,
        available
      }
    }`,
    {},
    {
      next: {
        revalidate: 3600,
      }
    }
  )
}