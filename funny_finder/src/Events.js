import Eventcard from './Eventcard';
import DateSelect from './DateSelect';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { getDate } from './helpers/getDate';



export default function Events ({events}) {

   const [currentDate, setCurrentDate] = React.useState(getDate());
   const [isOpen, setIsOpen] = React.useState(false)
   const [displayEvents, setDisplayEvents] = React.useState([])
 
  const displayDate =new Date(currentDate)
  

  useEffect(() => {
    const formattedDate =  new Date(currentDate).toLocaleDateString(); // Call toLocaleDateString as a function
    setDisplayEvents(events.filter(event => event.date === formattedDate));
    console.log(formattedDate);
  }, [currentDate]);

    const eventlist = displayEvents.map((event, index) => {
        return <Eventcard  key={index} eventname={event.eventname} eventlocation={event.eventlocation} eventtime={event.eventtime} eventurl={event.eventurl} />

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





