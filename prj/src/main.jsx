import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import 'aos/dist/aos.css';
import AOS from 'aos'
import "@fortawesome/fontawesome-free/css/all.min.css";

AOS.init({
  duration:800,
  easing:"ease-in-out",
  once:false,
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
