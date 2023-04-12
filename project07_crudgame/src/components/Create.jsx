import '../App.css'
import crewmates from '../assets/crewmates.png'
import { useState } from 'react'

import { supabase } from '../client'

export default function Create(){
  const [crewName, setName] = useState()
  const [crewSpeed, setSpeed] = useState()
  const [crewColor, setColor] = useState()

  const handleSubmit = async(e) => {
    e.preventDefault()
    await supabase
    .from('Crewmates')
    .insert({name:crewName, speed: crewSpeed, color:crewColor })
    .select();

    window.location = "/"

  }

  console.log(name)
  return(
    <div className="createContent">
      <div className="title">New Crewmate</div>
      <img src={crewmates} width="300px" />
      <form className="createForm">
        <div className="formSection">
          <h3>Name:</h3>
          <input type="text" placeholder="name" value={crewName} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className="formSection">
          <h3>Speed(mph):</h3>
          <input type="number" placeholder="speed" value={crewSpeed} onChange={(e) => setSpeed(e.target.value)}></input>
        </div>
        <div className="formSection">
          <h3>Color:</h3>
          <select name="color" onChange={(e) => setColor(e.target.value)}>
            <option value="purple">Purple</option>
            <option value="lightgreen">Light Green</option>
            <option value="cyan">Cyan</option>
            <option value="green">Green</option>
            <option value="violet">Violet</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="pink">Pink</option>
          </select>
        </div>
      </form>
      <button className="submitButton" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}