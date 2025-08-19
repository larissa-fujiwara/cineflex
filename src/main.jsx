import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './globalStyles/globalStyles.js'

createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle/>
      <App />
  </>
)
