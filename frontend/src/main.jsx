import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'     // ✅ THIS IS THE FIX
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
