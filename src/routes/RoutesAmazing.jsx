import {  Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Contact } from "../pages/Contact"
import { Stats } from "../pages/Stats"
import { Detail } from "../pages/Detail"
import { PageNotFound } from "../pages/NotFound"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import eventsActions from "../store/EventsAction"
import { Checkout } from "../pages/Checkout"
import { FinshPurchase } from "../pages/FinshPurchase"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"


export const RoutesAmazing = () => {
    
        const dispatch = useDispatch()
 
        useEffect(() => {
          
            dispatch(eventsActions.get_events())
        }, [])
        

   


  return (

            <Routes>
                <Route path="/" element={<Home title ="Amazing Events" />} />
                <Route path="/upcomingEvents" element={<Home title="Upcoming Events" />} />
                <Route path="/pastEvents" element={<Home title="Past Events" />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/Purchase" element={<FinshPurchase />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        )
}
