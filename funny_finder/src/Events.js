import Eventcard from './Eventcard';
import DateSelect from './DateSelect';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { getDate } from './helpers/getDate';



export default function Events () {

    
   const [events, setEvents ] = React.useState([])
   const [currentDate, setCurrentDate] = React.useState(getDate());
   const [isOpen, setIsOpen] = React.useState(false)
   const [displayEvents, setDisplayEvents] = React.useState([])
   const displayDate =new Date(currentDate)

   useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('https://localhost:5000/api/events')
      const json = await response.json()

      if (response.ok) {
         setEvents(json)
         console.log(json)
      }
    }

    fetchEvents()
  }, []);

 
  
  
  function filterEvents() {
    const currentDayOfWeek = displayDate.getDay()
    const formattedDate =  new Date(currentDate).toLocaleDateString(); // Call toLocaleDateString as a function
  setDisplayEvents(events.filter(event => (event.date === formattedDate) | (event.day === currentDayOfWeek) ))

  }
  

  useEffect(() => {
    filterEvents()
  }, [currentDate]);


    const eventlist = displayEvents.map((event, index) => {
        return <Eventcard  key={index} eventname={event.name} eventlocation={event.location} eventtime={event.time} eventurl={event.eventurl} type={event.type} />

    })
    return (
    <div>
        <Typography variant="h3">
            Comedy Events for {displayDate.toLocaleDateString()}
        </Typography>
        <DateSelect currentDate={currentDate} setCurrentDate={setCurrentDate} />
        {eventlist}
        
    </div>
    )

}





