import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Display from './components/Display'
import CharacterDetail from './routes/CharacterDetail'

function App() {

  return (
    <div>
      <ul>
        <li><Link to="/" id="home">Home</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/character/:name" element={<CharacterDetail />} />
      </Routes>
    </div>
  )
}

export default App
