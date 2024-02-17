import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { HashRouter, Routes, Route } from 'react-router-dom';
import './scss/index.scss';
import './fonts/GTWalsheimPro/stylesheet.css';
// import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <HashRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </HashRouter>,
);