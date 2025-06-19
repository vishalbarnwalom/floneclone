import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Slider from './components/slider/slider'
import FeatureBanner from './components/Banner/Banner'
import DailyDeals from './components/DailyDeals'
import FooterP from './components/footer/Footer'

function App() {
  

  return (
    <>
 <Header/>
<Slider/>
<FeatureBanner/>
<DailyDeals/>
    <FooterP/>
    </>
  )
}

export default App
