import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'


type Props = {
  name: string
  price: number
  description: string
  image: any
}

export function MenuItemCard({ name, price, description, image }: Props) {
  return (
    <div className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
      {/* Image */}
      <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={urlFor(image).width(200).height(200).url()}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
          <span className="text-amber-600 font-bold text-sm whitespace-nowrap">
            ${price.toFixed(2)}
          </span>
        </div>
        {description && (
          <p className="text-gray-500 text-xs mt-1 line-clamp-2">{description}</p>
        )}
      </div>
    </div>
  )
}