import '../../App.css'
import backgroundImage from '../../assets/giannisImage.webp'

export default function HomePage(){
  return(
    <div className="homePage">
      <img src={backgroundImage} width="500px"/>
    </div>
  )
}