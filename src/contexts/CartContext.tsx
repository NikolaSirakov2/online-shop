"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

export interface CartItem {
  id: string
  imageSrc: string
  alt: string
  description: string
  rating: number
  currentPrice: number
  originalPrice?: number
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartCount: number
  toastMessage: string
  showToast: boolean
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  showToastNotification: (message: string) => void
  hideToast: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [toastMessage, setToastMessage] = useState<string>('')
  const [showToast, setShowToast] = useState<boolean>(false)

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id)
      
      if (existingItem) {
        // If item already exists, increase quantity
        const updatedItems = prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
        showToastNotification(`${item.alt} quantity increased!`)
        return updatedItems
      } else {
        // If item doesn't exist, add it with quantity 1
        showToastNotification(`${item.alt} added to cart!`)
        return [...prevItems, { ...item, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const showToastNotification = (message: string) => {
    setToastMessage(message)
    setShowToast(true)
  }

  const hideToast = () => {
    setShowToast(false)
    setToastMessage('')
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const value: CartContextType = {
    cartItems,
    cartCount,
    toastMessage,
    showToast,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    showToastNotification,
    hideToast
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
