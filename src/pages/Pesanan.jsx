import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ShoppingCart } from 'lucide-react'

const API_BASE_URL = 'http://localhost:8080'

const Pesanan = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)

  // Fetch orders from API
  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_BASE_URL}/orders`)
      // Safely handle API response
      const ordersData = Array.isArray(response.data) 
        ? response.data 
        : (response.data?.data && Array.isArray(response.data.data) 
          ? response.data.data 
          : [])
      
      // Map backend fields (English) to frontend fields (Indonesian)
      const mappedOrders = ordersData.map(order => ({
        id: order.id,
        namaPelanggan: order.customer_name || order.CustomerName || 'Unknown',
        tanggal: order.created_at || order.CreatedAt || new Date().toISOString(),
        totalHarga: order.total_amount || order.TotalAmount || order.total_price || 0,
        status: order.status || 'Diproses'
      }))
      
      setOrders(mappedOrders)
    } catch (error) {
      console.error('Error fetching orders:', error)
      setOrders([])
    } finally {
      setLoading(false)
    }
  }
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value)
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('id-ID', options)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-gray-100 text-gray-700'
      case 'Diproses':
        return 'bg-amber-100 text-amber-700'
      case 'Dikirim':
        return 'bg-blue-100 text-blue-700'
      case 'Selesai':
        return 'bg-green-100 text-green-700'
      case 'Dibatalkan':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-slate-100 text-slate-700'
    }
  }

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await axios.put(`${API_BASE_URL}/orders/${orderId}/status`, {
        status: newStatus
      })
      alert(`Status pesanan berhasil diperbarui menjadi ${newStatus}`)
      fetchOrders() // Refresh data to sync with backend
    } catch (error) {
      console.error('Error updating order status:', error)
      alert('Gagal memperbarui status pesanan. Silakan coba lagi.')
    }
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Daftar Pesanan</h1>
        <p className="text-slate-500 mt-1">Kelola semua pesanan pelanggan</p>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  ID Pesanan
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Nama Pelanggan
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Tanggal
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Total Harga
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Ubah Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    Memuat pesanan...
                  </td>
                </tr>
              ) : orders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    Belum ada pesanan.
                  </td>
                </tr>
              ) : (
                orders.map((order, index) => (
                  <tr key={order.id || order.ID || index} className="hover:bg-slate-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                          <ShoppingCart size={20} className="text-indigo-600" />
                        </div>
                        <span className="font-medium text-slate-800">{order.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-800">
                      {order.namaPelanggan}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-600">
                      {formatDate(order.tanggal)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-800 font-medium">
                      {formatCurrency(order.totalHarga)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                        className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Diproses">Diproses</option>
                        <option value="Dikirim">Dikirim</option>
                        <option value="Selesai">Selesai</option>
                        <option value="Dibatalkan">Dibatalkan</option>
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Pesanan;
