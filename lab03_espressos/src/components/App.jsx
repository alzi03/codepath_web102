import { useState } from 'react'
import './App.css'

import BaristaForm from './BaristaForm';

function App() {

  return (
    <div>
      <div className="title-container">
        <h1 className="title">On My Grind</h1>
        <p>So you think you can barista?</p>
      </div>
      <BaristaForm />
    </div>
  )
}

export default App;
