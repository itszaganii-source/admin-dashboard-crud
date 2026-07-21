import React, { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'

const FormProduk = ({ editingProduct, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Elektronik',
    description: '',
    price: '',
    stock: '',
    image: '',
  })

  const categories = ['Elektronik', 'Aksesoris', 'Pakaian', 'Makanan', 'Lainnya']

  // Pre-fill form when editing
  useEffect(() => {
    if (editingProduct) {
      setFormData({
        name: editingProduct.name,
        category: editingProduct.category,
        description: editingProduct.description || '',
        price: editingProduct.price,
        stock: editingProduct.stock,
        image: editingProduct.image || '',
      })
    }
  }, [editingProduct])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === 'price' || name === 'stock' ? Number(value) : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (editingProduct) {
      onSave(editingProduct.id, formData)
    } else {
      onSave(formData)
    }
  }

  const handleCancel = () => {
    setFormData({
      name: '',
      category: 'Elektronik',
      description: '',
      price: '',
      stock: '',
      image: '',
    })
    onCancel()
  }

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={handleCancel}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors mb-4"
        >
          <ArrowLeft size={20} />
          <span>Kembali</span>
        </button>
        <h1 className="text-2xl font-bold text-slate-800">
          {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
        </h1>
        <p className="text-slate-500 mt-1">
          {editingProduct ? 'Edit informasi produk yang ada' : 'Tambahkan produk baru ke katalog'}
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nama Produk */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Nama Produk
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama produk"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          {/* Kategori */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">
              Kategori
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              required
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Deskripsi */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2">
              Deskripsi
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Masukkan deskripsi produk"
              rows="3"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Harga */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-slate-700 mb-2">
              Harga (IDR)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Masukkan harga produk"
              min="0"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          {/* Stok */}
          <div>
            <label htmlFor="stock" className="block text-sm font-medium text-slate-700 mb-2">
              Stok
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Masukkan jumlah stok"
              min="0"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          {/* Gambar URL */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-slate-700 mb-2">
              URL Gambar
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Masukkan URL gambar produk"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-all duration-300"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
            >
              {editingProduct ? 'Simpan Perubahan' : 'Simpan Produk'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormProduk
