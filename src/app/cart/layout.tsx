import React from 'react'

export const metadata = {
  title: "Shopping Cart - Online Store",
  description: "Review and manage items in your shopping cart.",
};

const CartLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}

export default CartLayout
