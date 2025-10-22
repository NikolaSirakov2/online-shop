'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/fruits-vegetables', label: 'Fruits & Vegetables' },
    { href: '/meats-seafood', label: 'Meats & Seafood' },
    { href: '/breakfast', label: 'Breakfast' },
    { href: '/breads-eggs', label: 'Breads & Eggs' },
    { href: '/beverages', label: 'Beverages' },
    { href: '/frozen-food', label: 'Frozen Food' },
    { href: '/biscuits-snacks', label: 'Biscuits & Snacks' },
    { href: '/grocery-staples', label: 'Grocery & Staples' },
  ];

  return (
    <nav className='py-4 bg-white shadow-sm'>
      <div className='container flex items-center justify-between gap-5'>
        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center gap-8'>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-[16px] text-gray-800 font-semibold hover:text-primary transition-colors duration-200'
            >
              {item.label}
            </Link>
          ))}
          <span className='text-[16px] text-gray-800 font-semibold hover:text-primary transition-colors duration-200 cursor-pointer'>
            More
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className='lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1'
          aria-label='Toggle mobile menu'
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className='absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 lg:hidden z-50'>
            <div className='container py-4'>
              <div className='flex flex-col space-y-4'>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className='text-[16px] text-gray-800 font-semibold hover:text-primary transition-colors duration-200 py-2'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <span className='text-[16px] text-gray-800 font-semibold hover:text-primary transition-colors duration-200 cursor-pointer py-2'>
                  More
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
