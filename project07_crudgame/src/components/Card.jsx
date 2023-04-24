import '../App.css'
import crewmate from '../assets/crewmate.png'
import { Link } from 'react-router-dom'

export default function Car({id, name, speed, color}){

  const handleClick = () => {
    window.location = `/crewmate/${id}`
  }

  

  return(
    <div className="galleryCard" style={{boxShadow: `5px 5px 10px ${color}`}}>
      <img src={crewmate} width="200px" />
      <h1>Name: <span className="cardVariable">{name}</span></h1>
      <h2>Speed: <span className="cardVariable">{speed} mph</span></h2> <br />
      <h3>Color: <span className="cardVariable">{color}</span></h3> <br />
      <button className='editButton' onClick={handleClick}>Edit</button>
    </div>
  )

}