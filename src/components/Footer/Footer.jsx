import { Link } from "react-router-dom"
import {FiGithub} from 'react-icons/fi'
import './footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="container-link">
        <li className="link-footer" >
          <Link to="./upcoming">Upcoming Events</Link>
        
        </li>
        <li className="link-footer">
          <Link to="/past">Past Events</Link>
        
        </li>
        <li className="link-footer" >
          <Link to="/stats">Stats</Link>
        
        </li>
        <li className="link-footer" >
          <Link to="/contact">Contact</Link>
        
        </li>
      </ul>

      <div className="container-copyright">
        <span className="copyright">
          <Link className="copyright-link" target="_blank" to={"https://github.com/sergiogodoy23"}>&copy;Sergio Godoy  {new Date().getFullYear()} <FiGithub /></Link>
        </span>
      </div>
  </footer>
  )
}
