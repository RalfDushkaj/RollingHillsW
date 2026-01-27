import {Routes ,Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.Jsx'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Villas from "./pages/Villas.jsx"
import VillasInfo from './pages/villasInfo.jsx'
import Contact from "./pages/Contact.jsx"
import FAQ from "./pages/FAQ.jsx"

import './App.css'

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/villas' element={<Villas/>}/>
        <Route path='/villas/:slug' element={<VillasInfo />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/faq' element={<FAQ/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
