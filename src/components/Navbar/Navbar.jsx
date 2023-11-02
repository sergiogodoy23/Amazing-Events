import { Link } from "react-router-dom"
import './navbar.css'
import { useState } from "react"

export const Navbar = () => {

  const [isActive, setIsActive] = useState(false)




  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <nav className="navbar">
       <div className="bars__menu hamburguer" onClick={handleClick}>
          <span className={` ${isActive ? 'activeline1__bars-menu' : ''}`}></span>
          <span className={` ${isActive ? 'activeline2__bars-menu' : ''}`}></span>
          <span className={` ${isActive ? 'activeline3__bars-menu' : ''}`}></span>
      </div>

        <ul className={`nav-items ${isActive ? 'active' : ''}`}>
          <li className="nav-link">
          <Link onClick={(active) => setIsActive(!active)} to="/">Home</Link>
          </li>
          <li className="nav-link">
          <Link onClick={(active) => setIsActive(!active)} to="/upcomingEvents">Upcoming Events</Link>
          </li>
         
          <li className="nav-link">
            <Link onClick={(active) => setIsActive(!active)} to="/pastEvents">Past Events</Link>
          </li>
          <li className="nav-link">
            <Link onClick={(active) => setIsActive(!active)} to="/stats">Stats</Link>
          </li>
          <li className="nav-link">
          <Link onClick={(active) => setIsActive(!active)} to="/contact">Contact</Link> 
          </li>
        </ul>
    </nav>
  )
}
