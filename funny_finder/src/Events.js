import Eventcard from './Eventcard';
import DatePicker from './DatePicker';
import * as React from 'react';
import { useState, useEffect } from 'react';



export default function Events ({events}) {

   const [currentDate, setCurrentDate] = React.useState(getDate());
   const [isOpen, setIsOpen] = React.useState(false)

function getDate () { 
    var today = new Date(),
 
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
 
    return date
  };
 

  useEffect(() => {
   
}, [currentDate]);

    const eventlist = events.map((event, index) => {
        return <Eventcard  key={index} eventname={event.eventname} eventlocation={event.eventlocation} eventtime={event.eventtime} />

    })
    return (
    <div>
        <button onClick={() => setIsOpen(true)}> change date </button>
        <DatePicker open={isOpen} currentDate={currentDate} setCurrentDate={setCurrentDate} onClose={() => {setIsOpen(false)}}/>
        {eventlist}
    </div>
    )

}





