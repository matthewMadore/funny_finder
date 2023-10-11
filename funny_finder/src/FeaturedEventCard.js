import { Card, CardContent, Typography, Link, Paper } from '@mui/material';
import * as React from 'react';
import EventTypeIcon from './EventTypeIcon';
import useTheme from '@mui/material/styles/useTheme';



export default function FeaturedEventCard ({featuredEvent}) {
    const theme = useTheme();

	return (
        <Paper sx={{ mb: 4 }} elevation={3} >
	<Card width="25vw" variant="outlined"  sx={{ m: 0.5, border: 0 }} >
			<CardContent> 
			<EventTypeIcon type={featuredEvent.type}/>
			  <Typography variant="h5" color="text.secondary" gutterBottom>
        {featuredEvent.name}
              </Typography>
              <Typography variant="h5" color="text.secondary" gutterBottom>
        {featuredEvent.date}
              </Typography>
			  <Typography variant="body1" color="text.secondary" gutterBottom>
			  <Link href={'http://maps.google.com/?q=' + featuredEvent.location.replace(/ /g, '+')}>{featuredEvent.location}</Link>
              </Typography>
			  <Typography variant="body2" color="text.secondary" gutterBottom>
        {featuredEvent.time}
              </Typography>
			  <a href={featuredEvent.eventurl} target="_blank">
			Tickets
		</a>
		

			</CardContent>
			</Card>
            </Paper>
	)
}
