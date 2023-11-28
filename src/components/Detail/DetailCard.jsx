import './detailcard.css'
import { FaCalendar } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/cart/cartActions';
import { useState } from 'react';


export const DetailCard = ({event}) => {
    const [quantityState, setQuantityState] = useState(1)



    const formatDate = (dateFormat) => {
        return dateFormat.split("-").reverse().join("/")
      }


      const dispatch = useDispatch()

  const handleAddCart = () => {
            
    

    dispatch(addToCart({...event, quantity: Number(quantityState)}))
  }

 const handleChange = (e) => {
    setQuantityState(e.target.value)
 }




  return (
    <div >
        <div className='detail-container'>
          <img className='detail-image' src={event.image} alt="" />
            <div className='container-info'>
                <div className='detail-card'>
                    <h2 className='detail-name'>{event.name}</h2>
                    <p className='detail-description'>{event.description}</p>
                </div>
                <div className='detail-date-container'>
                    <p className='place-detail'><MdPlace color='#ce0202' /><span>{event.place}</span></p>
                    <span className='detail-date'> <FaCalendar size="1em" color='#444' />{formatDate(event.date)}</span>
                </div>
                <div className='detail-container-mid'>
                    <p className='detail-category'>Category: <span> {event.category}</span></p>
                    <p className='detail-price'>${event.price}</p>
                </div>
                <div className='container-footer'>
                    <div className='quantity-container'>
                    <label>quantity:</label>
                    <select name="quantity" className='quantity' onChange={handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    </div>
                    {/* <p className='capacity-detail'>capacity: <span>{event.capacity}</span></p> */}
                  
                 {
                    event.estimate ? (
                        <button className='btn-detail' onClick={handleAddCart}>
            <Link role='buttonElement' className='link-event'>buy ticket</Link>
                    </button>
                    ) : (
                        <button className='btn-detail-soldout'>
                        <Link role='buttonElement' className='link-event'>SOLD OUT</Link>
                    </button>
                    )
                 }
                    

                    
                </div>
            </div>
        </div>
        
    </div>
  )
}
