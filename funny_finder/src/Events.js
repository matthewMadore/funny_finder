import Eventcard from './Eventcard';
import DateSelect from './DateSelect';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { getDate } from './helpers/getDate';
import FeaturedEventCard from './FeaturedEventCard';
import VideoPlayer from './VideoEmbed';


export default function Events () {

    
   const [events, setEvents ] = React.useState([])
   const [currentDate, setCurrentDate] = React.useState(getDate());
   const [isOpen, setIsOpen] = React.useState(false)
   const [displayEvents, setDisplayEvents] = React.useState([])
   const displayDate =new Date(currentDate)
   const featuredEvent = {"name":"Dan Soder Live Taping","location":"Helium Comedy Club","time":"10:00 PM","date":"11/15/2023","day":null,"eventurl":"https://portland.heliumcomedy.com/events/82732","type":"comedian"}
const embedId = 'K0sRDBeX4EQ?si=rW8NEI8XGmouJPrQ'

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
    console.log(events)
  }, []);

  useEffect(() => {
    const fetchTmEvents = async () => {
      try {
        const response = await fetch('/api/ticketmaster-events');
        const json = await response.json();
  
        if (response.ok) {
          setEvents(json);
          console.log(json);
        }
      } catch (error) {
        console.error('Error fetching Ticketmaster events:', error);
      }
    };
  
    fetchTmEvents();
  }, []);

 
  
  
  function filterEvents() {
    const currentDayOfWeek = displayDate.getDay()
    const formattedDate =  new Date(currentDate).toLocaleDateString(); // Call toLocaleDateString as a function
  setDisplayEvents(events.filter(event => (event.date === formattedDate) | (event.day === currentDayOfWeek) ))

  }
  

  useEffect(() => {
    filterEvents()
  }, [currentDate, events]);


  const eventlist = displayEvents.map((event, index) => (
    <Eventcard key={index} eventname={event.name} eventlocation={event.location} eventtime={event.time} eventurl={event.eventurl} type={event.type} />
  ));

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: '4', textAlign: 'center', padding: '20px' }}>
        <Typography variant="h3">
          Comedy Events for {displayDate.toLocaleDateString()}
        </Typography>
        <DateSelect currentDate={currentDate} setCurrentDate={setCurrentDate} />
        {eventlist}
      </div>
      <div style={{ flex: '1', padding: '20px' }}>
        <Typography variant="h5">
          Featured Event
        </Typography>
        <FeaturedEventCard featuredEvent={featuredEvent} />
        <VideoPlayer embedId={embedId} />
      </div>
    </div>
  );
}





