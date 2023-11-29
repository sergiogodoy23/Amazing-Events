import './modalCart.css'
import { MdClose } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, removeFromCart } from '../../../store/cart/cartActions';
import { Link } from 'react-router-dom';


export const ModalCart = ({setOpenCart}) => {

    const cart = useSelector(state => state.cart.cartItems)
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const totalEventInCart = cart.reduce((acc, item) => acc + item.quantity, 0)

    const dispatch = useDispatch()

    
    
  return (
    <div className="modal-container">

            <button
             onClick={() => setOpenCart(false)}
             className='btn-closed' 
             >
             <MdClose color='white' size={20} />
            </button>


            <div className='container-head-cart'>

                <h3 className='title-cart'>Tus Eventos: {totalEventInCart}</h3>
                <button 
                    className='btn-clear-cart' 
                    style={{opacity: `${cart.length === 0 ? ".5" : "1"}`}}
                    onClick={() => dispatch(clearCart())}
                    > <MdDelete color='white' size={15} /></button>
            </div>

            <div className='container-events-cart'>
                {
                    cart.map( event=> (
                        
                    <div className='container-event-cart' key={event._id}>
                        <img className='cart-event-image'  src={event.image} />
                        <div className='container-text'>
                            <p className='event-cart-name'>{event.name}</p>
                            <strong className='cart-price-item'>${event.price}</strong>
                        </div>
                        <div className='container-buttons-event'>
                            <button onClick={() => dispatch(removeFromCart(event._id))}>
                                {event.quantity === 1 ? <MdDelete color='white' /> : "-"}
                            </button>
                            <span>{event.quantity}</span>
                            <button 
                            style={{opacity: `${event.quantity === 4 ? ".5" : "1"}`, cursor: `${event.quantity == 4 ? "no-drop" : "pointer" }`}}
                            onClick={() => dispatch(addToCart(event))}
                            >+</button>
                        </div>
                    </div>

                   ))
                }
            </div>



        <div className='footer-cart'>
            <div className='container-shipping-cart'>
                <p>Envio:</p>
                <p>{ cart.length === 0 ? "$0" : "$1600"}</p>
            </div>
            <div className='container-total-cart'>
                <p>Total:</p>
                <span>${total}</span>
            </div>
            <hr />
            <div className='container-btn-cart'>
            <Link to="/checkout">
                <button
                disabled={cart.length === 0}
                className="btn-cart"
                    style={{opacity: `${cart.length == 0 ?".4" : "1"}`, cursor: `${cart.length === 0 ? "no-drop" : "pointer"}`}}
                > 
                    iniciar Compra
                </button>
             </Link>
            </div>
        </div>

    </div>
  )
}
