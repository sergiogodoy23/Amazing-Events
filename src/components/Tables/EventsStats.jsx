import { fetchData } from '../../hooks/fetchData'
import './tables.css'


export const EventsStats = () => {



  const {data, loading} =fetchData()

  const eventHighAttendance = data.sort((a,b)=> b.assistance - a.assistance)[0]
  const eventLowestAttendance = data.sort((a,b)=> a.assistance - b.assistance)[0]
  const eventLargerCapacity = data.sort((a,b)=> b.capacity - a.capacity)[0]



  return (
    <div className='container-tables'>
      <h2 className='title'>Events Statistics</h2>
    {
      loading ? <h2>cargando</h2> :

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
            <td>name: {eventHighAttendance.name} - Assitance: {eventHighAttendance.assistance}</td>
            <td>name: {eventLowestAttendance.name} - Assistance: {eventLowestAttendance.assistance}</td>
            <td>name: {eventLargerCapacity.name} - Capacity: {eventLargerCapacity.capacity}</td>
        </tr>
        
      </tbody>

    </table>


    }





    </div>
  )
}
