import { Hero } from '../components/hero/Hero'
import { Filters } from '../components/Filters/Filters'
import { Events } from '../components/Eventos/Events'
import { useFilters } from '../hooks/useFilters'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Footer } from '../components/footer/Footer'

export const Home = ({ title }) => {
  
  const [allEvents, setAllEvents] = useState([])
  const events = useSelector(store => store.events)
  const { valueSearch, handleCategory, 
     filteredData} = useFilters(allEvents)
    
     
     useEffect(() => {
      if (title === "Upcoming Events") {
        setAllEvents(events.filter((event) => event.estimate));
      } else if (title === "Past Events") {
        setAllEvents(events.filter((event) => event.assistance));
      } else {
        setAllEvents(events);
      }

    }, [title, events]);
      
          
  

  return (
    <>
      <Hero title={title}/>
      <Filters 
      onFilter={valueSearch }
      handleCategory={handleCategory }
       />
      <Events eventsFiltered={filteredData} />
    </>
  )
}
