import { Link } from 'react-router-dom'
import icon from './icon.png'
import './purchase.css'


export const Purchase = () => {
  return (
    <div className='container-purchase-finish'>
        <div className='container-purchase'>
           

            <img src={icon}  />

            <h2 className='text-purchase'>Felicitaciones Tu Compra ha sido con exito!</h2>

            <button
             className="btn-purchase"
            
             > 
             <Link to="/">GO TO HOME</Link>
             </button>

        </div>
    </div>
  )
}
