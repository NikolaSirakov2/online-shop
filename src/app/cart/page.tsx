"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart } from '../../contexts/CartContext'
import Image from 'next/image'

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart()
  const router = useRouter()

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.currentPrice * item.quantity), 0)
  }

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

  if (cartItems.length === 0) {
    return (
      <section className='py-16'>
        <div className='container'>
          <div className='text-center py-20'>
            <div className='mb-8'>
              <svg className='mx-auto h-24 w-24 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01' />
              </svg>
            </div>
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>Your Cart is Empty</h1>
            <p className='text-gray-600 mb-8 max-w-md mx-auto'>
              Looks like you haven&apos;t added any items to your cart yet. Start shopping to fill it up!
            </p>
            <Link 
              href="/" 
              className='inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium'
            >
              Continue Shopping
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
          <h1 className='text-3xl font-bold text-gray-800'>Shopping Cart</h1>
          <button
            onClick={clearCart}
            className='text-red-600 hover:text-red-700 font-medium transition-colors'
          >
            Clear Cart
          </button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Cart Items */}
          <div className='lg:col-span-2 space-y-4'>
            {cartItems.map((item) => (
              <div key={item.id} className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm'>
                <div className='flex items-center space-x-4'>
                  {/* Product Image */}
                  <div className='shrink-0'>
                    <Image
                      src={item.imageSrc}
                      alt={item.alt}
                      width={120}
                      height={120}
                      className='rounded-lg object-cover'
                    />
                  </div>

                  {/* Product Details */}
                  <div className='flex-1 min-w-0'>
                    <h3 className='text-lg font-semibold text-gray-800 mb-2'>{item.alt}</h3>
                    <p className='text-gray-600 text-sm mb-2 line-clamp-2'>{item.description}</p>
                    
                    {/* Rating */}
                    <div className='flex items-center mb-3'>
                      {renderStars(item.rating)}
                    </div>

                    {/* Price */}
                    <div className='flex items-center space-x-2'>
                      <span className='text-xl font-bold text-red-600'>
                        ${item.currentPrice.toFixed(2)}
                      </span>
                      {item.originalPrice && (
                        <span className='text-sm text-gray-500 line-through'>
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className='flex flex-col items-center space-y-4'>
                    <div className='flex items-center space-x-2'>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className='w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50'
                      >
                        -
                      </button>
                      <span className='w-8 text-center font-medium'>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className='w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50'
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className='text-red-600 hover:text-red-700 text-sm font-medium transition-colors'
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className='lg:col-span-1'>
            <div className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm sticky top-4'>
              <h2 className='text-xl font-bold text-gray-800 mb-6'>Order Summary</h2>
              
              <div className='space-y-4 mb-6'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
                  <span className='font-medium'>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Shipping</span>
                  <span className='font-medium text-green-600'>Free</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Tax</span>
                  <span className='font-medium'>${(calculateTotal() * 0.08).toFixed(2)}</span>
                </div>
                <hr className='border-gray-200' />
                <div className='flex justify-between text-lg font-bold'>
                  <span>Total</span>
                  <span>${(calculateTotal() * 1.08).toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={() => router.push('/checkout')}
                className='w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors font-medium mb-4'
              >
                Proceed to Checkout
              </button>
              
              <Link 
                href="/" 
                className='block w-full text-center text-primary hover:text-primary/80 font-medium transition-colors'
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage
