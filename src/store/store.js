import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./EventsReducer";
import cartReducer from "./cart/cartReducer";



const store = configureStore({
    reducer:{
        events: eventsReducer,
        cart: cartReducer
    }

    
})

export default store