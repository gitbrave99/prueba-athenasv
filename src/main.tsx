import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './cofig/routes/AppRoutes.tsx'
import { SideBarShareComponent } from './shared/components/SideBarShareComponent.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SideBarShareComponent />
      <AppRoutes />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
