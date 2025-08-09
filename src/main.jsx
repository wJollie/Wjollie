import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Pages/Home.css'
import App from './Pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
