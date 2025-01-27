import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import store from './store/store.js'
import { Provider } from 'react-redux'

import { BrowserRouter } from "react-router"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <BrowserRouter basename="/desarrollo-frontend-react-2025/">
            <App />
          </BrowserRouter>
      </Provider>
  </StrictMode>
)
