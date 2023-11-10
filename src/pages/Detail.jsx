import { useParams } from 'react-router-dom'
import { fetchData } from '../hooks/fetchData'
import { DetailCard } from '../components/Detail/DetailCard'
import '../components/Detail/detailcard.css'
import EventsLoader from '../components/Detail/EventsLoader'
import { useSelector } from 'react-redux'

export const Detail = () => {




  const data = useSelector(store => store.events)
  const {id} = useParams()

  const event = data.find( event => event._id == id)


  return (
    <div className='container-main'>
    {
      data.length == 0 ? <EventsLoader /> : <DetailCard event={event} />
    }
    
    
    </div>
    
      
    
  )
}
