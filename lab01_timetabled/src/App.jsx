import { useState } from 'react'
import './App.css'

import Calendar from './components/Calendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Calendar</h1>
      <h2>Weekly Schedule for Spring Break</h2>
      <div className="calendar">
        <Calendar />
      </div>
    </div>
  )
}

export default App
