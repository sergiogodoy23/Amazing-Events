import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export const fetchData = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)



    const fetchEvents = async() => {
      await axios.get("/src/data/data.json")
      .then(res => setData(res.data.events))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
      }

      
      
      useEffect(() => {
       
            
             fetchEvents()
       
      }, [])
    



  return {
    data,
    error,
    loading
  }
}

