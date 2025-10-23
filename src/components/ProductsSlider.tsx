import React from 'react'
import ProductItem from './ProductItem';

// Array of all shoe images from /public/shoes folder
const shoeImages = [
  { src: '/shoes/aqva-shoes.webp', alt: 'Aqva Shoes' },
  { src: '/shoes/basketball-shoes.webp', alt: 'Basketball Shoes' },
  { src: '/shoes/football-shoes.webp', alt: 'Football Shoes' },
  { src: '/shoes/running-shoes.webp', alt: 'Running Shoes' },
  { src: '/shoes/tennis-shoes.webp', alt: 'Tennis Shoes' },
  { src: '/shoes/voleyball-shoes.webp', alt: 'Volleyball Shoes' },
  { src: '/shoes/workout-shoes.webp', alt: 'Workout Shoes' }
];

function ProductsSlider() {
  return (
    <div className="products-slider">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shoeImages.map((shoe, index) => (
          <ProductItem
            key={index}
            imageSrc={shoe.src}
            alt={shoe.alt}
            href={`/product/${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsSlider