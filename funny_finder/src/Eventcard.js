import { Card, CardContent, Typography } from '@mui/material';
import * as React from 'react';
import EventTypeIcon from './EventTypeIcon';


export default function EventCard ({eventname,eventlocation, eventtime, eventurl, type}) {
	return (
	<Card width="25vw" variant="outlined"  sx={{ m: 0.5 }} >
			<CardContent> 
			<EventTypeIcon type={type}/>
			  <Typography variant="h5" color="text.secondary" gutterBottom>
        {eventname}
              </Typography>
			  <Typography variant="body1" color="text.secondary" gutterBottom>
        {eventlocation}
              </Typography>
			  <Typography variant="body2" color="text.secondary" gutterBottom>
        {eventtime}
              </Typography>
			  <a href={eventurl} target="_blank">
			Tickets
		</a>
		

			</CardContent>
			</Card>
	)
}