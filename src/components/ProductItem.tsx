import Link from 'next/link'
import React from 'react'

interface ProductItemProps {
  imageSrc: string
  alt: string
  href?: string
}

function ProductItem({ imageSrc, alt, href = "/" }: ProductItemProps) {
  return (
    <div className='productItem shadow-md w-full bg-white rounded-md border-t border-gray-200'>
      <Link href={href} className='img overflow-hidden group p-4 flex justify-center items-center'>
        <img 
          src={imageSrc} 
          alt={alt} 
          className='transition group-hover:scale-105'
        />
      </Link>
    </div>
  )
}

export default ProductItem