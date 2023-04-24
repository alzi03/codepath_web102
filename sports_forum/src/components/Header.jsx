import '../App.css'
import { Link } from 'react-router-dom'

export default function Header(){
  return(
    <div>
      <nav className="app-Header">
        <h1 className="headerTitle">Triple Double</h1>
        <div className="links">
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Home</Link>
          <Link to="/posts" style={{textDecoration: 'none', color: 'white'}}>Posts</Link>
        </div>
      </nav>
    </div>
  )
}


