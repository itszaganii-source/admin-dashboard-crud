# 🚀 StockVibe - Modern Admin Dashboard CRUD

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

Sebuah projek portofolio premium berupa **Admin Dashboard CRUD** bernama **StockVibe** yang dirancang untuk manajemen inventaris produk dan pemantauan transaksi masuk secara *real-time*. Projek ini dibangun menggunakan **React.js (Vite)** dan **Tailwind CSS v4** dengan menerapkan arsitektur komponen yang bersih (*clean code*) serta sistem penyimpanan data persisten.

Projek ini didesain menggunakan pendekatan **Decoupled Architecture (Ecosystem Plan)**, di mana ke depannya panel admin ini akan disandingkan dengan *toko-online-client* (sisi pembeli) dan terhubung ke satu *centralized backend API* menggunakan **Go (Golang)**.

---

## ✨ Fitur Utama

*   **📱 Fully Responsive Layout:** Antarmuka adaptif yang otomatis menyesuaikan di layar desktop besar hingga layar *smartphone* dengan transisi *slide-over* hamburger menu yang halus.
*   **📦 Full Product CRUD:** Sistem manajemen inventaris barang lengkap dengan fungsi *Create, Read, Update,* dan *Delete* produk secara instan.
*   **📋 Order Management & Status Tracker:** Halaman khusus untuk memantau daftar transaksi masuk lengkap dengan fitur dropdown interaktif untuk mengubah status pesanan (*Diproses, Dikirim, Selesai*) secara *real-time*.
*   **💾 Persistent LocalStorage Data:** Sinkronisasi state yang terintegrasi dengan `LocalStorage` browser, memastikan seluruh data produk dan transaksi baru tetap aman dan tidak hilang saat halaman di-refresh.
*   **🔔 Interactive Toast Notifications:** Sistem pop-up notifikasi kustom dengan transisi bawaan Tailwind v4 murni untuk memberikan feedback visual instan di setiap aksi pengguna (sukses tambah, edit, atau hapus).
*   **📊 Dynamic Statistics Card:** Panel ringkasan metrik toko (Total Produk, Total Stok, Stok Menipis, dan Total Omset) yang terhitung dan ter-update otomatis secara dinamis dari manipulasi data.

---

## 🛠️ Tech Stack & Library

*   **Core Framework:** React.js (v18+)
*   **Build Tool:** Vite (Cepat & Ringan)
*   **Styling Engine:** Tailwind CSS v4 (Modern configuration & native transitions)
*   **Icons Pack:** Lucide React
*   **State Management:** React Hooks (`useState`, `useEffect`)

---

## 📁 Struktur Folder Projek

Arsitektur folder di dalam direktori `src/` disusun secara rapi dan modular untuk memudahkan proses integrasi API backend di masa mendatang:

```text
src/
├── assets/          # File gambar, logo, dan grafis statis
├── components/      # Komponen UI global yang modular dan reusable
│   ├── Sidebar.jsx  # Menu navigasi samping (Desktop & Mobile drawer)
│   ├── StatsCard.jsx# Kartu metrik kalkulasi data dinamis
│   └── Toast.jsx    # Pop-up notifikasi feedback aksi
├── constants/       # Data awal / placeholder (mockProducts, mockOrders)
│   └── index.js
├── pages/           # Komponen halaman utama dashboard
│   ├── Produk.jsx   # Kelola tabel produk dan form modal CRUD
│   └── Pesanan.jsx  # Kelola tabel transaksi dan update status
├── App.jsx          # Root Component tempat routing halaman, state utama, & logika LocalStorage
├── index.css        # Konfigurasi directive Tailwind CSS v4
└── main.jsx         # Entry point utama aplikasi React
```

---

## 🏃‍♂️ Cara Menjalankan Projek Secara Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan projek ini di komputer atau laptop Anda:

### 1. Kloning Repositori
```bash
git clone https://github.com/itszaganii-source/admin-dashboard-crud.git
```

### 2. Masuk ke Direktori Projek
```bash
cd admin-dashboard-crud
```

### 3. Instalasi Dependencies
Pastikan Anda sudah menginstal Node.js di sistem Anda. Jalankan perintah berikut untuk mengunduh semua modul yang diperlukan:

```bash
npm install
```

### 4. Jalankan Server Development
Mulai server lokal untuk melihat dan menguji projek di browser secara real-time:

```bash
npm run dev
```

Setelah berhasil running, buka alamat http://localhost:5173 pada browser kesayangan Anda.

---

## 🧑‍💻 Identitas Developer

**GitHub:** [@itszaganii-source](https://github.com/itszaganii-source)

**Email:** itszaganii@gmail.com

Projek ini dibuat dengan dedikasi penuh untuk tujuan portofolio profesional dan pameran kapabilitas technical skill.
