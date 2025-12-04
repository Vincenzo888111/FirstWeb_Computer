// src/main.jsx  (or main.js)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import App from './App'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'

AOS.init({
  duration: 800,
  once: true,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>      
      <App />
    </BrowserRouter>
  </React.StrictMode>
)