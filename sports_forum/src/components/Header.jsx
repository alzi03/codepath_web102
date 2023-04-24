import '../App.css'
import { Link } from 'react-router-dom'
import Github from '../assets/github-mark-white.png'

export default function Header(){
  return(
    <div>
      <nav className="app-Header">
        <h1 className="headerTitle">Triple Double</h1>
        <a href="https://github.com/alzi03"><img src={Github} height="20px" className="footer"/></a>
        <div className="links">
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Home</Link>
          <Link to="/posts" style={{textDecoration: 'none', color: 'white'}}>Posts</Link>
          <Link to="/create" style={{textDecoration: 'none', color: 'white'}}>Create</Link>
        </div>
      </nav>
    </div>
  )
}


