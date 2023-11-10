import { useState, useEffect } from "react";
import "./tables.css";
import { fetchData } from "../../hooks/fetchData";
import { useSelector } from "react-redux";

export const UpcomingStats = () => {

  const [upcomingStats, setUpcomingStats] = useState([])


  const data = useSelector(store => store.events)

  useEffect(() => {
    
    const getData = () => {
      const categoriesUpcoming = {};
  
      const upcomingEevents = data.filter((event) => event.estimate);
  
      upcomingEevents.forEach((event) => {
  
        const { category, price, estimate, capacity } = event;
  
        if (!categoriesUpcoming[category]) {
          categoriesUpcoming[category] = {
            category,
            price,
            estimate,
            capacity,
            revenues: 0
          };
        }
  
    
        categoriesUpcoming[category].revenues += price * estimate;
        categoriesUpcoming[category].estimate += estimate;
        categoriesUpcoming[category].capacity += capacity;
      });
  
      return Object.keys(categoriesUpcoming).map(
        (category) => categoriesUpcoming[category]
      );
    };
  
    const events = getData();
  
    const percentageEvents = events.map(event => {
  
      const percentage = (event.estimate * 100) / event.capacity
  
      return {
          ...event,
          percentage
      }
    })
      setUpcomingStats(percentageEvents)
  }, [data])
  





  return (
    <div className='container-tables' >
      <h2 className="title">Upcoming events statistics by category</h2>


      {data.length == 0 ? (
        <h2>cargando</h2>
      ) : (
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Revenues</th>
            <th>Percentage of attendance</th>

          </tr>
        </thead>
        <tbody>

              {       
              upcomingStats.map((event) => (
                  <tr key={event.category}>
                      <td>{event.category}</td>
                      <td>{event.revenues}</td>
                      <td>%{event.percentage.toFixed(2)}</td>
                  </tr>
              ))
              }
        </tbody>
    </table>
    )}

      
    </div>
  );
};
