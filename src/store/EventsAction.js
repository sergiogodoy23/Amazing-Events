import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


 const get_events = createAsyncThunk("get_events", async() => {
    try {
       let events = await axios.get("/src/data/data.json")
      .then(res =>{
        return res.data.events

      })
      return events
    } catch (error) {
        console.log(error)
    }
})




const eventsActions = {get_events,};

export default eventsActions;