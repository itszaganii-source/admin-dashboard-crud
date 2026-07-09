# Admin Dashboard - Product Management

Admin dashboard for managing products and store inventory with full CRUD functionality.

## Project Structure

```
admin-dashboard-crud/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   └── Header.jsx
│   ├── pages/
│   │   ├── Overview.jsx
│   │   ├── Produk.jsx
│   │   └── FormProduk.jsx
│   ├── constants/
│   │   └── index.js
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Setup Instructions

Since terminal commands couldn't be executed automatically, please follow these steps in your terminal:

1. **Navigate to the project directory:**
   ```bash
   cd d:\portofolio-project\admin-dashboard-crud
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## Tech Stack

- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing

## Features

- **Overview Page** - Dashboard statistics (total products, total sales)
- **Produk Page** - Product list table with Edit and Delete buttons
- **FormProduk Page** - Add/Edit product form
- **Sidebar** - Navigation menu (Dashboard, Produk, Pesanan)
- **Header** - Admin profile section

## Next Steps

- Implement Sidebar component with navigation
- Implement Header component with admin profile
- Implement Overview page with statistics cards
- Implement Produk page with product table and CRUD operations
- Implement FormProduk page with add/edit form
- Add product data management (state/local storage)
