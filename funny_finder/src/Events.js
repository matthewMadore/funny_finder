import Eventcard from './Eventcard';
import DateSelect from './DateSelect';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { getDate } from './helpers/getDate';



export default function Events () {

    const events = [{"eventname": "Open Mic Night", "eventlocation": "Old Salty Bar", "eventtime": "7:30 pm", "date":"10/4/2023", "day": null, "eventurl": "https://oldsaltys.com/", "type" : "openmic"}, {"eventname": "Joe List", "eventlocation": "Helium Comedy Club", "eventtime": "7:00 pm", "date":"10/4/2023", "day": null, "eventurl": "https://portland.heliumcomedy.com/", "type" : "comedian"}, {"eventname": "Joe List", "eventlocation": "Helium Comedy Club", "eventtime": "10:00 pm", "date":"10/5/2023", "day": null, "eventurl": "https://portland.heliumcomedy.com/", "type" : "comedian"}, {"eventname": "Improv Night", "eventlocation": "Portland Improv", "eventtime": "9:00 pm", "date":"10/5/2023", "day": null, "eventurl": "https://www.curiouscomedy.org/", "type" : "improv"}, {"eventname": "Sundays at Saltys", "eventlocation": "Old Salty Bar", "eventtime": "7:30 pm", "date": null, "day": 0, "eventurl": "https://oldsaltys.com/", "type" : "openmic"}, {"eventname": "Helium Open Mic", "eventlocation": "Helium Comedy Club", "eventtime": "7:00 pm", "date": null, "day": 2, "eventurl": "https://portland.heliumcomedy.com/", "type" : "comedian"}  ]
   
    const [currentDate, setCurrentDate] = React.useState(getDate());
   const [isOpen, setIsOpen] = React.useState(false)
   const [displayEvents, setDisplayEvents] = React.useState([])
   const displayDate =new Date(currentDate)
   
 
  
  
  function filterEvents() {
    const currentDayOfWeek = displayDate.getDay()
    const formattedDate =  new Date(currentDate).toLocaleDateString(); // Call toLocaleDateString as a function
  setDisplayEvents(events.filter(event => (event.date === formattedDate) | (event.day === currentDayOfWeek) ))

  }
  

  useEffect(() => {
    filterEvents()
  }, [currentDate]);


    const eventlist = displayEvents.map((event, index) => {
        return <Eventcard  key={index} eventname={event.eventname} eventlocation={event.eventlocation} eventtime={event.eventtime} eventurl={event.eventurl} type={event.type} />

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





