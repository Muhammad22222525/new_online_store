import React from 'react'
import Layout from './Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './components/Cart'
import Catalog from './Category/Catalog'
import AdminLayout from './Layout/AdminLayout'
import AdminTable from './admin/AdminTable'
import Base from './admin/Base'
import ProductCategory from './Category/ProductCategory'
import FormPost from './pages/FormPost'
import Basket from './pages/Basket'
import Favorites from './pages/Favorites'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/catalog/:slug" element={<ProductCategory />} /> 
        <Route path="/catalog/:sluk" element={<ProductCategory />} /> 

      </Route>
      
      <Route   element={<AdminLayout />}>
        <Route index path="/admin" element={<Base />} />
        <Route path="/table" element={<AdminTable />} />
        <Route path="/post" element={<FormPost />} />
      </Route>
    </Routes>
  )
}

export default App
