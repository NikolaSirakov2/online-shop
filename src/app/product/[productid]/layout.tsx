import React from 'react'

export const metadata = {
  title: "Product Details - Online Store",
  description: "View detailed information about our products including features, reviews, and specifications.",
};

const ProductPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}

export default ProductPageLayout
