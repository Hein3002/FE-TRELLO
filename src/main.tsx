import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import route from './router/router'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={route}/>
  </StrictMode>,
)
