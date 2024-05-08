import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Category from './pages/Category'
import Navbar from './components/Navbar'
import Pagenotfound from "./pages/Pagenotfound"
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import CategoryDetails from './pages/CategoryDetails'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/category' element={<Category />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/products/category/:categoryName' element={<CategoryDetails />} />
          <Route path='*' element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
