import { Link } from "react-router-dom"
import './navbar.css'
import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { ModalCart } from "./ModalCart/ModalCart";
import { useSelector } from "react-redux";


export const Navbar = () => {

  const [isActive, setIsActive] = useState(false)
    const [openCart, setOpenCart] = useState(false)



    const cart = useSelector(state => state.cart.cartItems)

  const handleCart = () => {
    setOpenCart(!openCart)
  }
  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <nav className="navbar">
       <div className="bars__menu hamburguer" role="button" onClick={handleClick}>
          <span className={` ${isActive ? 'activeline1__bars-menu' : ''}`}></span>
          <span className={` ${isActive ? 'activeline2__bars-menu' : ''}`}></span>
          <span className={` ${isActive ? 'activeline3__bars-menu' : ''}`}></span>
      </div>

        <ul role="list" className={`nav-items ${isActive ? 'active' : ''}`}>
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
          <li>
            <FaUser color="white" fontSize={20} />
          </li>
          
          <li className="cart-icon">
          <FaShoppingCart color="white" fontSize={20} onClick={handleCart} />
          <span className="count-cart">{cart.length}</span>
          </li>
        </ul>

        
          
        {
          openCart && <ModalCart  setOpenCart={setOpenCart} />
     
        }
       
    </nav>
  )
}
