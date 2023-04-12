import { Link } from "react-router-dom";
import '../App.css'
import crewmates from '../assets/crewmates.png'


export default function Home(){
  return(
    <div className="homePage">
      <div className="title">Crewmate Creator</div>
      <h4>Here is where you can create your very own set of crewmates before sending them off into space!</h4>
      <img src={crewmates} width="500px"/>
    </div>
  )
}