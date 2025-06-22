import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  { Routes } from './router.tsx'
import { DarkModeProvider } from "../src/context/darkmode.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <Routes />
    </DarkModeProvider>  
  </StrictMode>,
)