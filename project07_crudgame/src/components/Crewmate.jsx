import '../App.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../client'
import crewmates from '../assets/crewmates.png'

export default function(){

  const {id} = useParams();
  const [data, setData] = useState()

  const [crewName, setName] = useState()
  const [crewSpeed, setSpeed] = useState()
  const [crewColor, setColor] = useState()

  useEffect(() => {
    const fetchData = async() => {
      const result = await supabase
      .from('Crewmates')
      .select()
      .eq('id', id);
      setData(result.data[0])
    }
    fetchData().catch(console.error)
  }, [])

  const handleSubmit = async(e) => {
    e.preventDefault();
    await supabase
    .from('Crewmates')
    .update({name:crewName, speed:crewSpeed, color: crewColor})
    .eq('id', id)

    window.location = "/crewmate/gallery"
  }

  const handleDelete = async(e) => {
    e.preventDefault();
    await supabase
    .from('Crewmates')
    .delete()
    .eq('id', id)

    window.location = "/crewmate/gallery"
  }
 
  return(
    <div className="individualCrewmate">
      {data &&
      <div className="individualInfo">
        <div className='title'>Update Crewmate</div>
        <img src={crewmates} width="300px" alt="crewmates image"/>
        <div className="crewInfo">
          <h3>Name: {data.name}</h3>
          <h3>Speed: {data.speed}</h3>
          <h3>Color: {data.color}</h3>
        </div>
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
            <option value="red">Red</option>
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
      <div className="buttons">
        <button className="submitButton" onClick={handleSubmit}>
          Submit
        </button>
        <button className="submitButton" onClick={handleDelete}>
          Delete
        </button>
      </div>
      </div>
      }
    </div>
  )
}