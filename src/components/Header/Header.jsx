import { Link, useLocation } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import './header.css'

export const Header = () => {

  const location = useLocation()


  const navbarStyle = location.pathname === '/stats' || location.pathname=== '/contact' ? { backgroundColor: "#2c009449"} : { backgroundColor: 'transparent' }

  return (
    <header className="head" style={navbarStyle}>


    <h1 className='logo' role='headerElement'>
      <Link to="/">Amazing events</Link>
    </h1>
    
    <Navbar />


    </header>
  )
}
