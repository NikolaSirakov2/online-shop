"use client"

import React, { useEffect } from 'react'
import { HiCheckCircle } from 'react-icons/hi2'
import { HiXMark } from 'react-icons/hi2'

interface ToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
  duration?: number
}

const Toast: React.FC<ToastProps> = ({ 
  message, 
  isVisible, 
  onClose, 
  duration = 3000 
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-in">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
        <div className="flex items-center gap-3">
          <div className="shrink-0">
            <HiCheckCircle className="w-6 h-6 text-green-500" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <HiXMark className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Toast
