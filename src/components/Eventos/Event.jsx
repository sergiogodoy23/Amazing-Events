import { Link } from 'react-router-dom'
import './events.css'
import { MdPlace } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

import { useState } from 'react';


 
export const Event = ({name, image, place, _id, date,price, category}) => {
  const [active, setActive] = useState(false);


  const formatDate = (dateFormat) => {
    return dateFormat.split("-").reverse().join("/")
  }

  // const dispatch = useDispatch()

  // const handleAddCart = () => {
  //   dispatch(addToCart({name, image,  _id,price}))
  // }




  return (
    <div className='card'>


      <img src={image} alt="" /> 
      
        <div className='info-card'>
          <div className='container-top-event'>
            <p className='card-title'>{name}</p> 
            {/* <button className={`heart-button ${active?"active":""}`} onClick={() => setActive(!active)}><svg xmlns="http://www.w3.org/2000/svg" className="heart" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path className="heart" d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg></button> */}
            {/* <strong className='card-date'>{formatDate(date)}</strong>  */}
            <strong className='card-date'>{category}</strong> 
            <div>
              
            </div>
            <p className='card-ubication'><MdPlace color='#db0101' /> {place}</p>
          </div>
            <div className='container-btn'>

              <button className='btn-event'>
                <Link  role='buttonElement' className='link-event' to={`/detail/${_id}`}><BsArrowRight size="1.2em" />
</Link>
              </button>
            </div>
        </div>
  

          {/* <button onClick={handleAddCart} >agregar</button> */}
    </div>
  )
}
