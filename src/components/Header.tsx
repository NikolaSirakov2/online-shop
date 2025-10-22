"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Search from './Search'
import { FaRegHeart } from 'react-icons/fa'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { HiBars3 } from 'react-icons/hi2'
import { HiXMark } from 'react-icons/hi2'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
                <FaRegHeart size={25} className='text-gray-700' />
              </Link>
              <Link href={"/cart"} className='relative flex'>
                <span className='bg-[#DC2626] w-6 h-6 text-white rounded-full flex items-center justify-center absolute -top-[10px] -right-[17px] z-50 text-xs'>3</span>
                <HiOutlineShoppingBag size={30} className='text-gray-700' />
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
                <FaRegHeart size={20} className='text-gray-700' />
              </Link>
              <Link href={"/cart"} className='relative flex'>
                <span className='bg-[#DC2626] w-5 h-5 text-white rounded-full flex items-center justify-center absolute -top-[8px] -right-[12px] z-50 text-xs'>3</span>
                <HiOutlineShoppingBag size={24} className='text-gray-700' />
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
              >
                {isMobileMenuOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-3">
            <Search />
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className='flex flex-col gap-3'>
                <Link 
                  href={"/login"} 
                  className='hover:text-primary transition-colors py-2'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href={"/register"} 
                  className='hover:text-primary transition-colors py-2'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header