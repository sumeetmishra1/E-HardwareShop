import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './utils/CartContext';
import { AuthContextProvider } from './utils/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

