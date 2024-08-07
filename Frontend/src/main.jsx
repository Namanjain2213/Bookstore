import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import  { Toaster } from 'react-hot-toast';

import App from './App.jsx'
import './index.css'
import Authprovider from './Context/Authprovider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Authprovider>    
    <Toaster />
    <App />
    </Authprovider>
  </BrowserRouter>
)
