import { useParams } from 'react-router-dom'
import { fetchData } from '../hooks/fetchData'
import { DetailCard } from '../components/Detail/DetailCard'
import '../components/Detail/detailcard.css'
import EventsLoader from '../components/Detail/EventsLoader'

export const Detail = () => {
  const {data, loading} = fetchData()
  const {id} = useParams()

  const event = data.find( event => event._id == id)


  return (
    <div className='container-main'>
    {
      loading ? <EventsLoader /> : <DetailCard event={event} />
    }
    
    
    </div>
    
      
    
  )
}
