"use client"

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import { getProductById } from '../../../data/products'
import { useCart } from '../../../contexts/CartContext'
import { useFavorites } from '../../../contexts/FavoritesContext'
import Link from 'next/link'
import Image from 'next/image'

const ProductDetails = () => {
  const params = useParams()
  const productId = params.productid as string
  const product = getProductById(productId)
  
  const { addToCart } = useCart()
  const { isFavorite, toggleFavorite } = useFavorites()
  
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(1)

  if (!product) {
    return (
      <section>
        <div className='container'>
          <div className='text-center py-20'>
            <h1 className='text-2xl font-bold text-gray-800 mb-4'>Product Not Found</h1>
            <p className='text-gray-600 mb-8'>The product you&apos;re looking for doesn&apos;t exist.</p>
            <Link 
              href="/" 
              className='inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors'
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-xl ${
            i <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }
    
    addToCart({
      id: product.id,
      imageSrc: product.src,
      alt: product.alt,
      description: product.description,
      rating: product.rating,
      currentPrice: product.currentPrice,
      originalPrice: product.originalPrice
    })
  }

  const handleToggleFavorite = () => {
    toggleFavorite({
      id: product.id,
      imageSrc: product.src,
      alt: product.alt,
      description: product.description,
      rating: product.rating,
      currentPrice: product.currentPrice,
      originalPrice: product.originalPrice
    })
  }

  return (
    <section className='py-8'>
      <div className='container'>
        {/* Breadcrumb */}
        <nav className='mb-8'>
          <ol className='flex items-center space-x-2 text-sm text-gray-600'>
            <li><Link href="/" className='hover:text-primary'>Home</Link></li>
            <li>/</li>
            <li><Link href="/" className='hover:text-primary'>Products</Link></li>
            <li>/</li>
            <li><span className='text-gray-800'>{product.alt}</span></li>
          </ol>
        </nav>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Product Image */}
          <div className='space-y-4'>
            <div className='aspect-square bg-gray-100 rounded-lg overflow-hidden'>
              <Image 
                src={product.src} 
                alt={product.alt}
                width={500}
                height={500}
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          {/* Product Details */}
          <div className='space-y-6'>
            <div>
              <h1 className='text-3xl font-bold text-gray-800 mb-2'>{product.alt}</h1>
              <p className='text-gray-600 text-lg'>{product.description}</p>
            </div>

            {/* Rating */}
            <div className='flex items-center space-x-2'>
              <div className='flex items-center'>
                {renderStars(product.rating)}
              </div>
              <span className='text-gray-600'>({product.reviews.length} reviews)</span>
            </div>

            {/* Price */}
            <div className='flex items-center space-x-4'>
              <span className='text-3xl font-bold text-red-600'>
                ${product.currentPrice.toFixed(2)}
              </span>
              <span className='text-xl text-gray-500 line-through'>
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className='bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium'>
                Save ${(product.originalPrice - product.currentPrice).toFixed(2)}
              </span>
            </div>

            {/* Stock Status */}
            <div className='flex items-center space-x-2'>
              <span className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
              <span className='text-gray-600'>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className='text-lg font-semibold text-gray-800 mb-3'>Size</h3>
              <div className='flex flex-wrap gap-2'>
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md transition-colors ${
                      selectedSize === size
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className='text-lg font-semibold text-gray-800 mb-3'>Color</h3>
              <div className='flex flex-wrap gap-2'>
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-md transition-colors ${
                      selectedColor === color
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className='text-lg font-semibold text-gray-800 mb-3'>Quantity</h3>
              <div className='flex items-center space-x-4'>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className='w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50'
                >
                  -
                </button>
                <span className='text-lg font-medium'>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className='w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50'
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex space-x-4'>
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className='flex-1 bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium'
              >
                ADD TO CART
              </button>
              <button
                onClick={handleToggleFavorite}
                className={`px-6 py-3 rounded-md border-2 transition-colors font-medium ${
                  isFavorite(product.id)
                    ? 'border-red-500 bg-red-50 text-red-600 hover:bg-red-100'
                    : 'border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-600'
                }`}
              >
                {isFavorite(product.id) ? '❤️' : '🤍'}
              </button>
            </div>

            {/* Features */}
            <div>
              <h3 className='text-lg font-semibold text-gray-800 mb-3'>Key Features</h3>
              <ul className='space-y-2'>
                {product.features.map((feature, index) => (
                  <li key={index} className='flex items-center space-x-2'>
                    <span className='w-2 h-2 bg-primary rounded-full'></span>
                    <span className='text-gray-600'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className='mt-16'>
          <h2 className='text-2xl font-bold text-gray-800 mb-8'>Customer Reviews</h2>
          <div className='space-y-6'>
            {product.reviews.map((review) => (
              <div key={review.id} className='border-b border-gray-200 pb-6'>
                <div className='flex items-center justify-between mb-2'>
                  <div className='flex items-center space-x-2'>
                    <span className='font-medium text-gray-800'>{review.name}</span>
                    <div className='flex items-center'>
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <span className='text-sm text-gray-500'>{review.date}</span>
                </div>
                <p className='text-gray-600'>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
