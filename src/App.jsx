import {Routes ,Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.Jsx'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Services from "./pages/Villas.jsx"
import Contact from "./pages/Contact.jsx"
import FAQ from "./pages/FAQ.jsx"

import './App.css'

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Villas' element={<Services/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/FAQ' element={<FAQ/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
