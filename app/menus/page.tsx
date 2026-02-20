
import { Menu } from '@/components/menu'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu | Luxe Haven',
  description: 'Explore our freshly prepared dishes and drinks at Luxe Haven.',
}

export default function MenusPage() {
  return (
    <>
     
      <main className="bg-background text-foreground">
        <Menu />
      </main>
   
    </>
  )
}