import './App.css'
import Github from './assets/github-mark.png'

import { collection, getDocs } from "@firebase/firestore"

import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Header from './components/Header.jsx'
import HomePage from './components/Homepage/HomePage.jsx'
import PostGallery from './pages/PostGallery'



function App() {
  /*
  const [data, setData] = useState();

  const ref = collection(firebase, 'Posts')
  useEffect(() => {
    const fetchData = async() => {
      const Snapshot = await getDocs(ref)
      const list = Snapshot.docs.map(doc => doc.data());
      setData(list)
    }

    fetchData().catch(console.error)
  }, [])

  console.log(data)
  useEffect(() => {
    const fetchData = () => {
      ref.onSnapshot((querySnapshot) => {
        const items = []
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        })
        setData(items)
      })
    }
    fetchData().catch(console.error);
  }, [])

  console.log(data)
  */

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/posts" element={<PostGallery />} />o
      </Routes>
      <div className="Footer">
        <a href="https://github.com/alzi03"><img src={Github} width="30px" className="githubLogo"/></a>
      </div>
    </div>
  )
}

export default App;
