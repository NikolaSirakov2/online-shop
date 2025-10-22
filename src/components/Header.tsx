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

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)

  return (
    <header className='py-2 md:py-4 bg-white shadow-sm'>
      <div className="container">
        {/* Desktop Header */}
        <div className="hidden lg:flex justify-between items-center">
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
              <Link href={"/wishlist"} className='relative flex'>
                <span className='bg-[#DC2626] w-6 h-6 text-white rounded-full flex items-center justify-center absolute -top-[10px] -right-[17px] z-50 text-xs'>3</span>
                <FaRegHeart size={25} className='text-gray-700 hover:text-primary transition-colors duration-200' />
              </Link>
              <Link href={"/cart"} className='relative flex'>
                <span className='bg-[#DC2626] w-6 h-6 text-white rounded-full flex items-center justify-center absolute -top-[10px] -right-[17px] z-50 text-xs'>3</span>
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
              <Link href={"/wishlist"} className='relative flex'>
                <span className='bg-[#DC2626] w-5 h-5 text-white rounded-full flex items-center justify-center absolute -top-[8px] -right-[12px] z-50 text-xs'>3</span>
                <FaRegHeart size={20} className='text-gray-700 hover:text-primary transition-colors duration-200' />
              </Link>
              <Link href={"/cart"} className='relative flex'>
                <span className='bg-[#DC2626] w-5 h-5 text-white rounded-full flex items-center justify-center absolute -top-[8px] -right-[12px] z-50 text-xs'>3</span>
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
                  className='hover:text-primary transition-colors py-2'
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href={"/register"} 
                  className='hover:text-primary transition-colors py-2'
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            </div>
          )}

          {/* Navigation Menu */}
          {isNavMenuOpen && (
            <div className="bg-gray-50 rounded-lg p-4 space-y-3 mb-3">
              <div className='flex flex-col gap-3'>
                <Link 
                  href="/" 
                  className='hover:text-primary transition-colors py-2'
                  onClick={() => setIsNavMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/fruits-vegetables" 
                  className='hover:text-primary transition-colors py-2'
                  onClick={() => setIsNavMenuOpen(false)}
                >
                  Fruits & Vegetables
                </Link>
                <Link 
                  href="/meats-seafood" 
                  className='hover:text-primary transition-colors py-2'
                  onClick={() => setIsNavMenuOpen(false)}
                >
                  Meats & Seafood
                </Link>
                <Link 
                  href="/breakfast" 
                  className='hover:text-primary transition-colors py-2'
                  onClick={() => setIsNavMenuOpen(false)}
                >
                  Breakfast
                </Link>
                <Link 
                  href="/breads-eggs" 
                  className='hover:text-primary transition-colors py-2'
                  onClick={() => setIsNavMenuOpen(false)}
                >
                  Breads & Eggs
                </Link>
                <Link 
                  href="/beverages" 
                  className='hover:text-primary transition-colors py-2'
                  onClick={() => setIsNavMenuOpen(false)}
                >
                  Beverages
                </Link>
                <Link 
                  href="/frozen-food" 
                  className='hover:text-primary transition-colors py-2'
                  onClick={() => setIsNavMenuOpen(false)}
                >
                  Frozen Food
                </Link>
                <Link 
                  href="/biscuits-snacks" 
                  className='hover:text-primary transition-colors py-2'
                  onClick={() => setIsNavMenuOpen(false)}
                >
                  Biscuits & Snacks
                </Link>
                <Link 
                  href="/grocery-staples" 
                  className='hover:text-primary transition-colors py-2'
                  onClick={() => setIsNavMenuOpen(false)}
                >
                  Grocery & Staples
                </Link>
                <span className='hover:text-primary transition-colors py-2 cursor-pointer'>
                  More
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Navigation - Hidden on mobile */}
      <div className="hidden lg:block">
        <Nav />
      </div>
    </header>
  )
}

export default Header