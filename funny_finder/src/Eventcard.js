import { Card, CardContent, Typography, Link, Icon } from '@mui/material';
import * as React from 'react';
import EventTypeIcon from './EventTypeIcon';
import MapIcon from './icons/MapIcon';
import IconButton from '@mui/material/IconButton';



export default function EventCard ({eventname,eventlocation, eventtime, eventurl, type}) {
	const openInNewTab = (url) => {
		window.open(url, "_blank", "noreferrer");}
		const mapLink = 'http://maps.google.com/?q=' + eventlocation.replace(/ /g, '+')
	
	return (
	<Card  variant="outlined"  sx={{ m: 0.5, maxWidth: 700 }} >
			<CardContent> 
			<EventTypeIcon type={type}/>
			  <Typography variant="h5" color="text.secondary" gutterBottom>
        {eventname}
              </Typography>
			  <Typography variant="body1" color="text.secondary" gutterBottom>
			  {eventlocation}
			  <IconButton size="small" onClick={() => {openInNewTab(mapLink)}}>
			  <MapIcon />
			  </IconButton>
              </Typography>
			  <Typography variant="body2" color="text.secondary" gutterBottom>
        {eventtime}
              </Typography>
			  <a href={eventurl} target="_blank">
			Event Site
		</a>
		

			</CardContent>
			</Card>
	)
}