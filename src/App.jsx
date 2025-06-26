import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header'
import Slider from './components/slider/slider'
import FeatureBanner from './components/Banner/Banner'
import DailyDeals from './components/DailyDeals'
import FooterP from './components/footer/Footer'
import ProductPage from './components/ProductPage'
import LoginRegister from './pages/LoginRegister'
import { ToastProvider } from './context/ToastContext.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import Contact from "./pages/ContactUs.jsx";
import ShopPageWithFilter from "./pages/ShopPage.jsx"
import BlogFeatured from './components/BlogFeatured.jsx';
import About from '../src/pages/AboutUs.jsx'
import Wishlist from './pages/WishlistPage.jsx';

function App() {
  return (
    <ToastProvider>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <Slider/>
            <FeatureBanner/>
            <DailyDeals/>
            <BlogFeatured/>
         
          </>
        } />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/register" element={<LoginRegister />} />
        <Route path="/account" element={<LoginRegister />} />
         <Route path="/cartpage" element={<CartPage/>} />
           <Route path="/checkout" element={<CheckoutPage/>} />
           <Route path="/contact" element={<Contact/>} />
            <Route path="/Shop" element={<ShopPageWithFilter/>} />
            <Route path="/about" element={<About/>} />
             <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <FooterP/>
    </ToastProvider>
  )
}

export default App
