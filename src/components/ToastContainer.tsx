"use client"

import React from 'react'
import Toast from './Toast'
import { useCart } from '../contexts/CartContext'

const ToastContainer: React.FC = () => {
  const { toastMessage, showToast, hideToast } = useCart()

  return (
    <Toast
      message={toastMessage}
      isVisible={showToast}
      onClose={hideToast}
      duration={3000}
    />
  )
}

export default ToastContainer
