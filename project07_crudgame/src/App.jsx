import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Homepage from './pages/Homepage'
import CreateCrewmate from './pages/CreateCrewmate'
import CrewGallery from './pages/CrewGallery'
import Edit from './pages/EditCrew'


function App() {

  return (
    <div className="App">
      <nav className='nav'>
        <Link to="/" style={{ textDecoration: 'none' }}><h1>Home</h1></Link>
        <Link to="/crewmate/create" style={{ textDecoration: 'none' }}><h1>Create Crewmate</h1></Link>
        <Link to="/crewmate/gallery" style={{ textDecoration: 'none' }}><h1>Crewmate Gallery</h1></Link>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/crewmate/create" element={<CreateCrewmate />} />
          <Route path="/crewmate/gallery" element={<CrewGallery />} />
          <Route path="/crewmate/:id" element={<Edit />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
