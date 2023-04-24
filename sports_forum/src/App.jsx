import './App.css'
import Github from './assets/github-mark.png'

import { collection, getDocs } from "@firebase/firestore"

import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Header from './components/Header.jsx'
import HomePage from './components/HomePage.jsx'
import PostGallery from './pages/PostGallery'
import CreatePost from './components/CreatePost'



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/posts" element={<PostGallery />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </div>
  )
}

export default App;
