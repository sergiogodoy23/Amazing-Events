import {  Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Contact } from "../pages/Contact"
import { Stats } from "../pages/Stats"
import { Detail } from "../pages/Detail"
import { fetchData } from "../hooks/fetchData"
import { PageNotFound } from "../pages/NotFound"


export const RoutesAmazing = () => {
      
        const {data} = fetchData()

   let upcomingEvents = data.filter(event => event.estimate)
   let pastEvents = data.filter(event => event.assistance)


  return (

            <Routes>
                <Route path="/" element={<Home title ="Amazing Events" data={data} />} />
                <Route path="/upcomingEvents" element={<Home title="Upcoming Events" data={upcomingEvents} />} />
                <Route path="/pastEvents" element={<Home title="Past Events" data={pastEvents} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        )
    

  
}
