import { useState } from 'react'
import './scss/App.scss'
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components'
import { Home, NotFound } from './pages';

function App() {
  return (
    <div className='App'>
    <Header/>

    <Routes location={location} key={location.pathname}>
      <Route path='*' element={<NotFound/>}/>

      <Route path='/' element ={<Home/>}/>
    </Routes>
    </div>
  )
}

export default App
