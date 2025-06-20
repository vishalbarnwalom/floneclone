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
          </>
        } />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/register" element={<LoginRegister />} />
        <Route path="/account" element={<LoginRegister />} />
      </Routes>
      <FooterP/>
    </ToastProvider>
  )
}

export default App
