import { Link, useLocation } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import './header.css'
import { ModalCart } from '../Navbar/ModalCart/ModalCart'

export const Header = () => {

  const location = useLocation()


  const navbarStyle = location.pathname === '/upcomingEvents' || location.pathname === '/pastEvents' || location.pathname === "/" ? 
    // { backgroundColor: "#2c009449"} 
     { backgroundColor: 'transparent' }
    : {	background: `linear-gradient(-9deg, #30009f, #0f002b, #110032, #30009f)`}

  return (
    <header className="head" style={navbarStyle}>


    <h1 className='logo' role='headerElement'>
      <Link to="/">Amazing events</Link>
    </h1>
    
    <Navbar />
    </header>
  )
}
