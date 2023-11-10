import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./EventsReducer";



const store = configureStore({
    reducer:{
        events: eventsReducer
    }
})

export default store