import {  createReducer } from "@reduxjs/toolkit";
import eventsActions from "./EventsAction";


const initialState = []

const eventsReducer = createReducer(initialState, (builder) => {
    return builder.addCase(eventsActions.get_events.fulfilled, (state, action) => {
        
        let newState = action.payload
        return newState
    })

})

export default eventsReducer;