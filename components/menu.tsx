
import { getMenuGrouped } from '@/sanity/lib/queries'
import { MenuItemCard } from './menu-item-card'

export async function Menu() {
  const categories = await getMenuGrouped()

  if (!categories.length) {
    return (
      <section className="py-20 text-center text-gray-500">
        Menu coming soon.
      </section>
    )
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Freshly prepared dishes crafted with premium ingredients for your dining pleasure.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id}>

              {/* Category Header */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-amber-500 inline-block">
                {category.name}
              </h3>

              {/* Items */}
              {category.items.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  {category.items.map((item) => (
                    <MenuItemCard
                      key={item.id}
                      name={item.name}
                      price={item.price}
                      description={item.description}
                      image={item.image}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-sm">No items in this category yet.</p>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}