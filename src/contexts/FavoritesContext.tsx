"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

export interface FavoriteItem {
  id: string
  imageSrc: string
  alt: string
  description: string
  rating: number
  currentPrice: number
  originalPrice?: number
}

interface FavoritesContextType {
  favoriteItems: FavoriteItem[]
  favoritesCount: number
  addToFavorites: (item: FavoriteItem) => void
  removeFromFavorites: (id: string) => void
  isFavorite: (id: string) => boolean
  toggleFavorite: (item: FavoriteItem) => void
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}

interface FavoritesProviderProps {
  children: ReactNode
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([])

  const addToFavorites = (item: FavoriteItem) => {
    setFavoriteItems(prevItems => {
      const existingItem = prevItems.find(favItem => favItem.id === item.id)
      if (!existingItem) {
        return [...prevItems, item]
      }
      return prevItems
    })
  }

  const removeFromFavorites = (id: string) => {
    setFavoriteItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const isFavorite = (id: string) => {
    return favoriteItems.some(item => item.id === id)
  }

  const toggleFavorite = (item: FavoriteItem) => {
    if (isFavorite(item.id)) {
      removeFromFavorites(item.id)
    } else {
      addToFavorites(item)
    }
  }

  const favoritesCount = favoriteItems.length

  const value: FavoritesContextType = {
    favoriteItems,
    favoritesCount,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}
