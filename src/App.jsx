import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Overview from './pages/Overview'
import Produk from './pages/Produk'
import FormProduk from './pages/FormProduk'
import { mockProducts } from './constants'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('overview')
  const [products, setProducts] = useState(mockProducts)
  const [editingProduct, setEditingProduct] = useState(null)

  // CRUD Functions
  const addProduct = (productData) => {
    const newProduct = {
      id: Date.now(),
      ...productData,
      image: 'https://via.placeholder.com/150',
    }
    setProducts([...products, newProduct])
    setCurrentPage('produk')
  }

  const updateProduct = (id, productData) => {
    setProducts(products.map((product) => 
      product.id === id ? { ...product, ...productData } : product
    ))
    setEditingProduct(null)
    setCurrentPage('produk')
  }

  const deleteProduct = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
      setProducts(products.filter((product) => product.id !== id))
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
    </div>
  )
}

export default App
