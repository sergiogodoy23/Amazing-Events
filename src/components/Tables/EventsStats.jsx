import { useEffect,useState } from 'react'
import './tables.css'
import { useSelector } from 'react-redux'


export const EventsStats = () => {

  const [eventHighAttendance, setEventHighAttendance] = useState({})
  const [eventLowestAttendance, setEventLowestAttendance] = useState({})
  const [eventLargerCapacity, setEventLargerCapacity] = useState({})


  const data = useSelector(store => store.events)

  
  useEffect(() => {
   
      const cloneData = [...data]
      const eventHigh = cloneData.sort((a,b)=> b.assistance - a.assistance)[0]
      const eventLow = cloneData.sort((a,b)=> a.assistance - b.assistance)[0]
      const eventCapacity = cloneData.sort((a,b)=> b.capacity - a.capacity)[0]
  
      setEventHighAttendance(eventHigh)
      setEventLowestAttendance(eventLow)
      setEventLargerCapacity(eventCapacity)
    
    
  }, [data])
  

     
  

 
  return (
    <div className='container-tables'>
      <h2 className='title'>Events Statistics</h2>
    {
      data.length === 0 ? <h2>cargando</h2> :

    <table>
      <thead>
        <tr>
          <th>Events with highest percentage of attendance</th>
          <th>Events with the lowest percentage of attendance</th>
          <th>Event with larger capacity</th>

        </tr>
      </thead>
      <tbody>

        <tr>
            <td>name: {eventHighAttendance?.name} - Assitance: {eventHighAttendance?.assistance}</td>
            <td>name: {eventLowestAttendance?.name} - Assistance: {eventLowestAttendance?.assistance}</td>
            <td>name: {eventLargerCapacity?.name} - Capacity: {eventLargerCapacity?.capacity}</td>
        </tr>
        
      </tbody>

    </table>
    }
    </div>
  )
}
