import React from 'react'
import ProductItem from './ProductItem';
import { products } from '../data/products';

function ProductsSlider() {
  return (
    <div className="products-slider mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductItem
            key={product.id}
            id={product.id}
            imageSrc={product.src}
            alt={product.alt}
            description={product.description}
            rating={product.rating}
            currentPrice={product.currentPrice}
            originalPrice={product.originalPrice}
            href={`/product/${product.id}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsSlider