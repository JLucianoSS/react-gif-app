import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(

  // React.StrictMode solo se usa en desarrollo, en produccion se quita
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)
