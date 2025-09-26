import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {TheContext} from './components/contaxt.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<TheContext.Provider >
    <App />
</TheContext.Provider>
  </StrictMode>
    
)
