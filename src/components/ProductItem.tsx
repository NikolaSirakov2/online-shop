import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useCart } from '../contexts/CartContext'

interface ProductItemProps {
  id: string
  imageSrc: string
  alt: string
  description: string
  rating: number
  currentPrice: number
  originalPrice?: number
  href?: string
}

function ProductItem({ 
  id,
  imageSrc, 
  alt, 
  description, 
  rating, 
  currentPrice, 
  originalPrice, 
  href = "/" 
}: ProductItemProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id,
      imageSrc,
      alt,
      description,
      rating,
      currentPrice,
      originalPrice
    })
  }
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-lg ${
            i <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className='productItem shadow-md w-full bg-white rounded-md border-t border-gray-200'>
      <div className='p-4 flex flex-col justify-center items-center'>
        <Link href={href} className='group flex flex-col justify-center items-center mb-3'>
          <Image 
            src={imageSrc} 
            alt={alt} 
            width={200}
            height={200}
            className='transition group-hover:scale-105 mb-3'
          />
        </Link>
        
        <p className='text-sm text-gray-600 text-center leading-relaxed mb-2'>
          {description}
        </p>
        
        {/* Rating */}
        <div className='flex items-center mb-2'>
          {renderStars(rating)}
        </div>
        
        {/* Price */}
        <div className='flex items-center gap-2 mb-3'>
          <span className='text-lg font-bold text-red-600'>
            ${currentPrice.toFixed(2)}
          </span>
          {originalPrice && (
            <span className='text-sm text-gray-500 line-through'>
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Order Button */}
        <button 
          onClick={handleAddToCart}
          className='w-full py-2 px-4 border-2 border-primary text-primary bg-white rounded-md hover:bg-primary hover:text-white transition-colors duration-200 font-medium'
        >
          ADD TO CART
        </button>
      </div>
    </div>
  )
}

export default ProductItem