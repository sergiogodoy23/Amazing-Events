import { Link } from 'react-router-dom'
import './events.css'

export const Event = ({name, image, description, price, _id}) => {
  return (
    <div className='card'>
        <img src={image} alt="" />
        <div className='info-card'>
            <p className='card-title'>{name}</p>
            <p className='card-description'>{description}</p>
            <strong className='card-price'>${price}</strong>
        </div>
        <button className='btn-event'>
          <Link  role='buttonElement' className='link-event' to={`/detail/${_id}`}>Ver mas</Link>
        </button>
    </div>
  )
}
