import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StateProvider } from "./components/cart/CartList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider>
    <App />
  </StateProvider>
);

