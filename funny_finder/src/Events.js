import Eventcard from './Eventcard';
import * as React from 'react';


export default function Events ({events}) {

    const eventlist = events.map((event, index) => {
        return <Eventcard key={index} eventname={event.eventname} eventlocation={event.eventlocation} eventtime={event.eventtime} />

    })
    return (
    <div>
        {eventlist}
    </div>
    )

}





