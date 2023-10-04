import Eventcard from './Eventcard';
import DateSelect from './DateSelect';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { getDate } from './helpers/getDate';



export default function Events ({events}) {

   const [currentDate, setCurrentDate] = React.useState(getDate());
   const [isOpen, setIsOpen] = React.useState(false)
 
  const dt =new Date(currentDate)

  useEffect(() => {
   
}, [currentDate]);

    const eventlist = events.map((event, index) => {
        return <Eventcard  key={index} eventname={event.eventname} eventlocation={event.eventlocation} eventtime={event.eventtime} />

    })
    return (
    <div>
        <Typography variant="h3">
            Comedy Events for {dt.toDateString()}
        </Typography>
        <DateSelect currentDate={currentDate} setCurrentDate={setCurrentDate} />
        {eventlist}
        
    </div>
    )

}





