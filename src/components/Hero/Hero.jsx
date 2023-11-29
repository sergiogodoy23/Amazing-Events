import { useSelector } from 'react-redux'
import './hero.css'

export const Hero = ({ title}) => {

  const data = useSelector(store => store.events)

  return (
    <section className='container-hero'>
        <h2 className='hero-title'>{title}</h2>
        <span className='description-hero'>Descubre Diversión, Arte y Sabor en Nuestros Eventos Musicales, Museos, Comidas, Conciertos Y más.</span>


        <div className='container-images'>
          {
            data.slice(0, 3).map(event => (
             <img key={event._id} className='images' src={event.image} />
            ))
          }
        </div>
    
    
    </section>
  )
}
