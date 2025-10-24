"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Search from './Search'
import Nav from './Nav'
import { FaRegHeart } from 'react-icons/fa'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { HiBars3 } from 'react-icons/hi2'
import { HiXMark } from 'react-icons/hi2'
import { HiOutlineUser } from 'react-icons/hi2'
import { useCart } from '../contexts/CartContext'
import { useFavorites } from '../contexts/FavoritesContext'

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)
  const { cartCount } = useCart()
  const { favoritesCount } = useFavorites()

  return (
    <header className='py-2 md:py-4 bg-white shadow-sm'>
      <div className="container">
        {/* Desktop Header */}
        <div className="hidden lg:flex justify-between items-center mb-3">
          <div className="logo">
            <Link href="/">
              <Image src="/shoes-logo-nobg.png" alt="logo" width={243} height={73} />
            </Link>
          </div>

          <Search />

          <div className='flex items-center gap-8'>
            <div className='flex items-center gap-3'>
              <Link href={"/login"} className='hover:text-primary transition-colors'>Login</Link>
              <span>|</span>
              <Link href={"/register"} className='hover:text-primary transition-colors'>Register</Link>
            </div>
            
            <div className='flex items-center gap-8'>
              <Link href={"/favourites"} className='relative flex'>
                {favoritesCount > 0 && (
                  <span className='bg-[#DC2626] w-6 h-6 text-white rounded-full flex items-center justify-center absolute -top-[10px] -right-[17px] z-50 text-xs'>{favoritesCount}</span>
                )}
                <FaRegHeart size={25} className='text-gray-700 hover:text-primary transition-colors duration-200' />
              </Link>
              <Link href={"/cart"} className='relative flex'>
                {cartCount > 0 && (
                  <span className='bg-[#DC2626] w-6 h-6 text-white rounded-full flex items-center justify-center absolute -top-[10px] -right-[17px] z-50 text-xs'>{cartCount}</span>
                )}
                <HiOutlineShoppingBag size={30} className='text-gray-700 hover:text-primary transition-colors duration-200' />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden">
          {/* Top Row - Logo and Icons */}
          <div className="flex justify-between items-center mb-3">
            <div className="logo">
              <Link href="/">
                <Image src="/shoes-logo-nobg.png" alt="logo" width={150} height={45} />
              </Link>
            </div>
            
            <div className='flex items-center gap-4'>
              <Link href={"/favourites"} className='relative flex'>
                {favoritesCount > 0 && (
                  <span className='bg-[#DC2626] w-5 h-5 text-white rounded-full flex items-center justify-center absolute -top-[8px] -right-[12px] z-50 text-xs'>{favoritesCount}</span>
                )}
                <FaRegHeart size={20} className='text-gray-700 hover:text-primary transition-colors duration-200' />
              </Link>
              <Link href={"/cart"} className='relative flex'>
                {cartCount > 0 && (
                  <span className='bg-[#DC2626] w-5 h-5 text-white rounded-full flex items-center justify-center absolute -top-[8px] -right-[12px] z-50 text-xs'>{cartCount}</span>
                )}
                <HiOutlineShoppingBag size={24} className='text-gray-700 hover:text-primary transition-colors duration-200' />
              </Link>
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="p-2 hover:text-primary transition-colors duration-200"
              >
                <HiOutlineUser size={24} className='text-gray-700' />
              </button>
              <button 
                onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
                className="p-2 hover:text-primary transition-colors duration-200"
              >
                {isNavMenuOpen ? <HiXMark size={24} className='text-gray-700' /> : <HiBars3 size={24} className='text-gray-700' />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-3">
            <Search />
          </div>

          {/* User Menu */}
          {isUserMenuOpen && (
            <div className="bg-gray-50 rounded-lg p-4 space-y-3 mb-3">
              <div className='flex flex-col gap-3'>
                <Link 
                  href={"/login"} 
                  className='hover:text-primary transition-colors py-2 text-right'
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href={"/register"} 
                  className='hover:text-primary transition-colors py-2 text-right'
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            </div>
          )}

          {/* Navigation Menu */}
          {isNavMenuOpen && (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 lg:hidden">
              <div className='p-4'>
                <div className='flex flex-col space-y-4'>
                  <Link 
                    href="/" 
                    className='hover:text-primary transition-colors py-3 text-right text-lg'
                    onClick={() => setIsNavMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/fruits-vegetables" 
                    className='hover:text-primary transition-colors py-3 text-right text-lg'
                    onClick={() => setIsNavMenuOpen(false)}
                  >
                    Fruits & Vegetables
                  </Link>
                  <Link 
                    href="/meats-seafood" 
                    className='hover:text-primary transition-colors py-3 text-right text-lg'
                    onClick={() => setIsNavMenuOpen(false)}
                  >
                    Meats & Seafood
                  </Link>
                  <Link 
                    href="/breakfast" 
                    className='hover:text-primary transition-colors py-3 text-right text-lg'
                    onClick={() => setIsNavMenuOpen(false)}
                  >
                    Breakfast
                  </Link>
                  <Link 
                    href="/breads-eggs" 
                    className='hover:text-primary transition-colors py-3 text-right text-lg'
                    onClick={() => setIsNavMenuOpen(false)}
                  >
                    Breads & Eggs
                  </Link>
                  <Link 
                    href="/beverages" 
                    className='hover:text-primary transition-colors py-3 text-right text-lg'
                    onClick={() => setIsNavMenuOpen(false)}
                  >
                    Beverages
                  </Link>
                  <Link 
                    href="/frozen-food" 
                    className='hover:text-primary transition-colors py-3 text-right text-lg'
                    onClick={() => setIsNavMenuOpen(false)}
                  >
                    Frozen Food
                  </Link>
                  <Link 
                    href="/biscuits-snacks" 
                    className='hover:text-primary transition-colors py-3 text-right text-lg'
                    onClick={() => setIsNavMenuOpen(false)}
                  >
                    Biscuits & Snacks
                  </Link>
                  <Link 
                    href="/grocery-staples" 
                    className='hover:text-primary transition-colors py-3 text-right text-lg'
                    onClick={() => setIsNavMenuOpen(false)}
                  >
                    Grocery & Staples
                  </Link>
                  <span className='hover:text-primary transition-colors py-3 cursor-pointer text-right text-lg'>
                    More
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Navigation - Hidden on mobile */}
      <div className="hidden lg:block border-t border-gray-200">
        <Nav />
      </div>
    </header>
  )
}

export default Header