import React, { useEffect } from 'react'
import { CheckCircle, XCircle, X } from 'lucide-react'

const Toast = ({ message, type = 'success' }) => {
  useEffect(() => {
    // Add animation class on mount
    const toastElement = document.getElementById('toast-notification')
    if (toastElement) {
      toastElement.classList.add('animate-in')
    }
  }, [])

  const isSuccess = type === 'success'

  return (
    <div
      id="toast-notification"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg transition-all duration-300 transform translate-y-0 opacity-100 ${
        isSuccess
          ? 'bg-green-500 text-white'
          : 'bg-red-500 text-white'
      }`}
    >
      {isSuccess ? (
        <CheckCircle size={20} />
      ) : (
        <XCircle size={20} />
      )}
      <span className="font-medium">{message}</span>
    </div>
  )
}

export default Toast
