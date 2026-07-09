import React from 'react'
import { LayoutDashboard, Package, ShoppingCart, X } from 'lucide-react'
import { menuItems } from '../constants'

const iconMap = {
  LayoutDashboard,
  Package,
  ShoppingCart,
}

const pathToPageMap = {
  '/': 'overview',
  '/produk': 'produk',
  '/pesanan': 'pesanan',
}

const Sidebar = ({ isOpen, setIsOpen, isDesktop = false, currentPage, setCurrentPage }) => {
  return (
    <>
      {/* Mobile Overlay - Only for mobile sidebar */}
      {!isDesktop && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`h-screen w-64 bg-slate-900 border-r border-slate-800 flex flex-col transition-transform duration-300 ease-in-out ${
          isDesktop
            ? 'static'
            : `fixed left-0 top-0 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">
            <span className="text-indigo-500">Stock</span>Vibe
          </h1>
          {/* Close button - Only for mobile */}
          {!isDesktop && (
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = iconMap[item.icon]
            const pageName = pathToPageMap[item.path]
            const isActive = currentPage === pageName

            return (
              <button
                key={item.name}
                onClick={() => {
                  setCurrentPage(pageName)
                  !isDesktop && setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800">
          <p className="text-xs text-slate-500 text-center">
            © 2026 StockVibe Admin
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
