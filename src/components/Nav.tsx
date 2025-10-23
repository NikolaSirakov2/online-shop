import Link from 'next/link';
import React from 'react';

const Nav = () => {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/running', label: 'Running' },
    { href: '/basketball', label: 'Basketball' },
    { href: '/football', label: 'Football' },
    { href: '/tennis', label: 'Tennis' },
    { href: '/training', label: 'Training' },
    { href: '/lifestyle', label: 'Lifestyle' },
    { href: '/kids', label: 'Kids' },
    { href: '/accessories', label: 'Accessories' },
  ];

  return (
    <nav className='pt-6 pb-4 bg-white'>
      <div className='container flex items-center justify-center'>
        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center justify-center gap-4 xl:gap-6 2xl:gap-8 whitespace-nowrap'>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-[16px] text-gray-800 font-semibold hover:text-primary transition-colors duration-200 whitespace-nowrap'
            >
              {item.label}
            </Link>
          ))}
          <span className='text-[16px] text-gray-800 font-semibold hover:text-primary transition-colors duration-200 cursor-pointer whitespace-nowrap'>
            More
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
