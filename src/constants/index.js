// Navigation menu data
export const menuItems = [
  {
    name: 'Dashboard',
    path: '/',
    icon: 'LayoutDashboard',
  },
  {
    name: 'Produk',
    path: '/produk',
    icon: 'Package',
  },
  {
    name: 'Pesanan',
    path: '/pesanan',
    icon: 'ShoppingCart',
  },
];

// Mock product data
export const mockProducts = [
  {
    id: 1,
    name: 'Laptop Gaming Pro X',
    category: 'Elektronik',
    price: 15000000,
    stock: 25,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    category: 'Aksesoris',
    price: 2500000,
    stock: 50,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Mechanical Keyboard RGB',
    category: 'Aksesoris',
    price: 1800000,
    stock: 8,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Smartphone Ultra 5G',
    category: 'Elektronik',
    price: 12000000,
    stock: 15,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Gaming Mouse',
    category: 'Aksesoris',
    price: 750000,
    stock: 5,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Monitor 27" 4K',
    category: 'Elektronik',
    price: 5500000,
    stock: 12,
    image: 'https://via.placeholder.com/150',
  },
];

// Mock order data
export const mockOrders = [
  {
    id: 'ORD-001',
    namaPelanggan: 'Budi Santoso',
    tanggal: '2026-07-08',
    totalHarga: 15000000,
    status: 'Diproses',
  },
  {
    id: 'ORD-002',
    namaPelanggan: 'Siti Rahayu',
    tanggal: '2026-07-09',
    totalHarga: 4300000,
    status: 'Dikirim',
  },
  {
    id: 'ORD-003',
    namaPelanggan: 'Ahmad Wijaya',
    tanggal: '2026-07-09',
    totalHarga: 6250000,
    status: 'Selesai',
  },
  {
    id: 'ORD-004',
    namaPelanggan: 'Dewi Lestari',
    tanggal: '2026-07-10',
    totalHarga: 750000,
    status: 'Diproses',
  },
  {
    id: 'ORD-005',
    namaPelanggan: 'Rudi Hartono',
    tanggal: '2026-07-10',
    totalHarga: 12000000,
    status: 'Dikirim',
  },
];
