'use client'

import { useEffect, useState } from 'react'
import { X, CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react'
import { cn } from '@/lib/utils'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

interface ToastProps {
  message: string
  type?: ToastType
  duration?: number
  onClose?: () => void
}

const icons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
}

const colors = {
  success: 'bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-400',
  error: 'bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-400',
  warning: 'bg-yellow-50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-400',
  info: 'bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-400',
}

export function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)
  const Icon = icons[type]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
      <div className={cn('flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg', colors[type])}>
        <Icon size={20} />
        <span className="font-medium">{message}</span>
        <button
          onClick={() => {
            setIsVisible(false)
            onClose?.()
          }}
          className="ml-2 hover:opacity-70"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}