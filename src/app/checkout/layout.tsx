"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const CheckoutLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Back to Cart</span>
              <span className="sm:hidden">Back</span>
            </button>
            <Link href="/" className="text-lg sm:text-xl font-bold text-primary">
              ShoesShop
            </Link>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200">
        <div className="container py-4 sm:py-6">
          <div className="flex items-center justify-center space-x-2 sm:space-x-8">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">
                1
              </div>
              <span className="text-xs sm:text-sm font-medium text-primary hidden sm:inline">Address</span>
            </div>
            <div className="w-8 sm:w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">
                2
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-600 hidden sm:inline">Payment</span>
            </div>
            <div className="w-8 sm:w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">
                3
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-600 hidden sm:inline">Review</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-4 sm:py-8">
        {children}
      </main>
    </div>
  )
}

export default CheckoutLayout
