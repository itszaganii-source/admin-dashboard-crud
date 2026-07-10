import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Overview from './pages/Overview'
import Produk from './pages/Produk'
import FormProduk from './pages/FormProduk'
import Pesanan from './pages/Pesanan'
import Toast from './components/Toast'
import { mockProducts, mockOrders } from './constants'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('overview')
  const [products, setProducts] = useState(() => {
    // Initialize from LocalStorage or use mock data
    const savedProducts = localStorage.getItem('stockvibe_products')
    if (savedProducts) {
      try {
        return JSON.parse(savedProducts)
      } catch (error) {
        console.error('Error parsing LocalStorage data:', error)
        return mockProducts
      }
    }
    // Save mock data to LocalStorage on first load
    localStorage.setItem('stockvibe_products', JSON.stringify(mockProducts))
    return mockProducts
  })
  const [editingProduct, setEditingProduct] = useState(null)
  const [toast, setToast] = useState(null)
  const [orders, setOrders] = useState(() => {
    // Initialize from LocalStorage or use mock data
    const savedOrders = localStorage.getItem('stockvibe_orders')
    if (savedOrders) {
      try {
        return JSON.parse(savedOrders)
      } catch (error) {
        console.error('Error parsing LocalStorage orders:', error)
        return mockOrders
      }
    }
    // Save mock data to LocalStorage on first load
    localStorage.setItem('stockvibe_orders', JSON.stringify(mockOrders))
    return mockOrders
  })

  // Save products to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('stockvibe_products', JSON.stringify(products))
  }, [products])

  // Save orders to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('stockvibe_orders', JSON.stringify(orders))
  }, [orders])

  // CRUD Functions
  const addProduct = (productData) => {
    const newProduct = {
      id: Date.now(),
      ...productData,
      image: 'https://via.placeholder.com/150',
    }
    setProducts([...products, newProduct])
    setCurrentPage('produk')
    setToast({ message: 'Produk berhasil ditambahkan', type: 'success' })
    setTimeout(() => setToast(null), 3000)
  }

  const updateProduct = (id, productData) => {
    setProducts(products.map((product) => 
      product.id === id ? { ...product, ...productData } : product
    ))
    setEditingProduct(null)
    setCurrentPage('produk')
    setToast({ message: 'Produk berhasil diperbarui', type: 'success' })
    setTimeout(() => setToast(null), 3000)
  }

  const deleteProduct = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
      setProducts(products.filter((product) => product.id !== id))
      setToast({ message: 'Produk berhasil dihapus', type: 'error' })
      setTimeout(() => setToast(null), 3000)
    }
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    setCurrentPage('form-produk')
  }

  const handleAdd = () => {
    setEditingProduct(null)
    setCurrentPage('form-produk')
  }

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map((order) => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
    setToast({ message: `Status Pesanan ${orderId} Berhasil Diperbarui!`, type: 'success' })
    setTimeout(() => setToast(null), 3000)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <Overview products={products} />
      case 'produk':
        return (
          <Produk 
            products={products} 
            onEdit={handleEdit} 
            onDelete={deleteProduct}
            onAdd={handleAdd}
          />
        )
      case 'form-produk':
        return (
          <FormProduk 
            editingProduct={editingProduct}
            onSave={editingProduct ? updateProduct : addProduct}
            onCancel={() => setCurrentPage('produk')}
          />
        )
      case 'pesanan':
        return (
          <Pesanan 
            orders={orders}
            onUpdateStatus={updateOrderStatus}
          />
        )
      default:
        return <Overview products={products} />
    }
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Mobile Sidebar (Slide-over) */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
        isDesktop={false}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      {/* Desktop Layout Grid */}
      <div className="lg:grid lg:grid-cols-[256px_1fr]">
        {/* Desktop Sidebar (Static) */}
        <div className="hidden lg:block">
          <Sidebar 
            isOpen={true} 
            setIsOpen={() => {}} 
            isDesktop={true}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        
        {/* Main Content Area */}
        <div className="flex flex-col min-h-screen">
          {/* Sticky Header */}
          <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          
          {/* Scrollable Content */}
          <main className="flex-1">
            {renderPage()}
          </main>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  )
}

export default App
