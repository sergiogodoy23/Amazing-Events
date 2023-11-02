import { Event } from "./Event";
import { Loader } from "../Loader/Loader";
import { useEffect, useState } from "react";
import { MessageError } from "../Filters/MessageError";

export const Events = ({ eventsFiltered }) => {
  
  const [load, setLoad] = useState(false)


  useEffect(() => {
    if (eventsFiltered.length > 0) {
      setLoad(true)
    }

  }, [eventsFiltered])
  
 

  
  return (
    <div className="container">
      <section className="container-events">
        {
        eventsFiltered.length === 0 && load === false ? (
          <Loader />
        ) : eventsFiltered.length > 0 ? 
          (
          eventsFiltered.map((event) => <Event key={event._id} {...event} />)
        ) : (
          <MessageError />
        )}



      </section>
    </div>
  );
};
