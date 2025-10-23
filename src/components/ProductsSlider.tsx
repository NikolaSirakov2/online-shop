import React from 'react'
import ProductItem from './ProductItem';

// Array of all shoe images from /public/shoes folder
const shoeImages = [
  { 
    id: 'aqva-shoes',
    src: '/shoes/aqva-shoes.webp', 
    alt: 'Aqva Shoes', 
    description: 'Professional water sports shoes with excellent grip and quick-dry technology.',
    rating: 4,
    currentPrice: 89.99,
    originalPrice: 119.99
  },
  { 
    id: 'basketball-shoes',
    src: '/shoes/basketball-shoes.webp', 
    alt: 'Basketball Shoes', 
    description: 'High-performance basketball shoes with superior ankle support and cushioning.',
    rating: 5,
    currentPrice: 129.99,
    originalPrice: 159.99
  },
  { 
    id: 'football-shoes',
    src: '/shoes/football-shoes.webp', 
    alt: 'Football Shoes', 
    description: 'Lightweight football cleats designed for speed and precision on the field.',
    rating: 4,
    currentPrice: 79.99,
    originalPrice: 99.99
  },
  { 
    id: 'running-shoes',
    src: '/shoes/running-shoes.webp', 
    alt: 'Running Shoes', 
    description: 'Comfortable running shoes with advanced shock absorption and breathable design.',
    rating: 4,
    currentPrice: 109.99,
    originalPrice: 139.99
  },
  { 
    id: 'tennis-shoes',
    src: '/shoes/tennis-shoes.webp', 
    alt: 'Tennis Shoes', 
    description: 'Durable tennis shoes with excellent lateral support and court-specific traction.',
    rating: 5,
    currentPrice: 95.99,
    originalPrice: 125.99
  },
  { 
    id: 'volleyball-shoes',
    src: '/shoes/voleyball-shoes.webp', 
    alt: 'Volleyball Shoes', 
    description: 'Volleyball shoes with superior grip and lightweight construction for quick movements.',
    rating: 4,
    currentPrice: 84.99,
    originalPrice: 109.99
  },
  { 
    id: 'workout-shoes',
    src: '/shoes/workout-shoes.webp', 
    alt: 'Workout Shoes', 
    description: 'Versatile training shoes perfect for gym workouts and cross-training activities.',
    rating: 4,
    currentPrice: 99.99,
    originalPrice: 129.99
  }
];

function ProductsSlider() {
  return (
    <div className="products-slider mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shoeImages.map((shoe, index) => (
          <ProductItem
            key={shoe.id}
            id={shoe.id}
            imageSrc={shoe.src}
            alt={shoe.alt}
            description={shoe.description}
            rating={shoe.rating}
            currentPrice={shoe.currentPrice}
            originalPrice={shoe.originalPrice}
            href={`/product/${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsSlider