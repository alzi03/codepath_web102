import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Display from './components/Main/Display'
import CharacterDetail from './routes/CharacterDetail'
import AboutPage from './routes/AboutPage'

function App() {

  return (
    <div className="main-content">
      <ul className="main-links">
        <h1><Link to="/" id="home" style={{ textDecoration: 'none' }}>Home 🏠</Link></h1>
        <h1><Link to="/about" id="home" style={{ textDecoration: 'none' }}>About ℹ️</Link></h1>
      </ul>
      
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/character/:name" element={<CharacterDetail />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App
