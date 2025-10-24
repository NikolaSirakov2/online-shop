"use client"

import React from 'react'
import Link from 'next/link'
import { useFavorites } from '../../contexts/FavoritesContext'
import { useCart } from '../../contexts/CartContext'
import Image from 'next/image'

const FavouritesPage = () => {
  const { favoriteItems, removeFromFavorites } = useFavorites()
  const { addToCart } = useCart()

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-sm ${
            i <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      imageSrc: item.imageSrc,
      alt: item.alt,
      description: item.description,
      rating: item.rating,
      currentPrice: item.currentPrice,
      originalPrice: item.originalPrice
    })
  }

  if (favoriteItems.length === 0) {
    return (
      <section className='py-16'>
        <div className='container'>
          <div className='text-center py-20'>
            <div className='mb-8'>
              <svg className='mx-auto h-24 w-24 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
              </svg>
            </div>
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>No Favorites Yet</h1>
            <p className='text-gray-600 mb-8 max-w-md mx-auto'>
              You haven't added any items to your favorites yet. Start exploring and add products you love!
            </p>
            <Link 
              href="/" 
              className='inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium'
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className='py-8'>
      <div className='container'>
        {/* Header */}
        <div className='flex items-center justify-between mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>My Favorites</h1>
          <span className='text-gray-600'>{favoriteItems.length} item{favoriteItems.length !== 1 ? 's' : ''}</span>
        </div>

        {/* Favorites Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {favoriteItems.map((item) => (
            <div key={item.id} className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'>
              <div className='flex flex-col h-full'>
                {/* Product Image */}
                <div className='mb-4'>
                  <Link href={`/product/${item.id}`}>
                    <Image
                      src={item.imageSrc}
                      alt={item.alt}
                      width={200}
                      height={200}
                      className='w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform'
                    />
                  </Link>
                </div>

                {/* Product Details */}
                <div className='flex-1 flex flex-col'>
                  <Link href={`/product/${item.id}`} className='group'>
                    <h3 className='text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors line-clamp-2'>
                      {item.alt}
                    </h3>
                  </Link>
                  
                  <p className='text-gray-600 text-sm mb-3 line-clamp-2 flex-1'>
                    {item.description}
                  </p>
                  
                  {/* Rating */}
                  <div className='flex items-center mb-3'>
                    {renderStars(item.rating)}
                  </div>

                  {/* Price */}
                  <div className='flex items-center space-x-2 mb-4'>
                    <span className='text-xl font-bold text-red-600'>
                      ${item.currentPrice.toFixed(2)}
                    </span>
                    {item.originalPrice && (
                      <span className='text-sm text-gray-500 line-through'>
                        ${item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className='flex space-x-2 mt-auto'>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className='flex-1 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors font-medium text-sm'
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => removeFromFavorites(item.id)}
                      className='px-4 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 transition-colors'
                      title='Remove from favorites'
                    >
                      ❤️
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className='text-center mt-12'>
          <Link 
            href="/" 
            className='inline-block bg-gray-100 text-gray-700 px-8 py-3 rounded-md hover:bg-gray-200 transition-colors font-medium'
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FavouritesPage
