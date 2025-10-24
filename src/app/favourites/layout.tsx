import React from 'react'

export const metadata = {
  title: "My Favorites - Online Store",
  description: "View and manage your favorite products.",
};

const FavouritesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}

export default FavouritesLayout
