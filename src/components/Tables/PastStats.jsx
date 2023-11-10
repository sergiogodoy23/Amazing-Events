import { useState, useEffect } from "react";
import "./tables.css";
import { useSelector } from "react-redux";

export const PastStats = () => {



 const [pastStats, setPastStats] = useState([])
 
  const data = useSelector(store => store.events)

 useEffect(() => {
   
   const getData = () => {
     const categoriesPast = {};
  
     const pastEvents = data.filter((event) => event.assistance);
  
     pastEvents.forEach((event) => {
  
       const { category, price, assistance, capacity } = event;
  
       if (!categoriesPast[category]) {
         categoriesPast[category] = {
           category,
           price,
           assistance,
           capacity,
           revenues: 0
         };
       }
  
       categoriesPast[category].revenues += price * assistance;
       categoriesPast[category].assistance += assistance;
       categoriesPast[category].capacity += capacity;
     });
     
  
     return Object.keys(categoriesPast).map(
       (category) => categoriesPast[category]
     );
   };
   
     const events = getData()
     const percentageEvents = events?.map(event => {
    
       const percentage = (event.assistance * 100) / event.capacity
    
       return {
           ...event,
           percentage
       }})

     setPastStats(percentageEvents)

 }, [data])
 
      


  

 

  return (
    <div className="container-tables">
      <h2 className="title">Past events statistics by category</h2>


      {data.length == 0? (
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
             
              pastStats.map((event) => (
                  <tr key={event.category}>
                      <td>{event?.category}</td>
                      <td>{event.revenues.toFixed(2)}</td>
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