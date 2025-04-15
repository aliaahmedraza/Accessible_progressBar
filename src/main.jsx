import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/reset.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
    domain="dev-vgj00lgmsosugxa3.us.auth0.com"
    clientId="EfyY7AUe5FfKJDpxEkpD7SyoDpL9T7Cj"
    authorizationParams={{
      redirect_uri: window.location.origin + "/callback"
    }}
  >
    <BrowserRouter> <App /></BrowserRouter>
   
  </Auth0Provider>
  </StrictMode>,
)
