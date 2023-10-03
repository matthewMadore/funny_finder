import { Card, CardContent, Typography } from '@mui/material';
import * as React from 'react';

export default function EventCard ({eventname,eventlocation, eventtime}) {
	return <Card width="25vw" variant="outlined">
			<CardContent> 
			  <Typography variant="h5" color="text.secondary" gutterBottom>
        {eventname}
              </Typography>
			  <Typography variant="body1" color="text.secondary" gutterBottom>
        {eventlocation}
              </Typography>
			  <Typography variant="body2" color="text.secondary" gutterBottom>
        {eventtime}
              </Typography>

			</CardContent>
			</Card>
}