import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function ContactUs() {
    return (
       
       <Card sx={{ maxWidth: 600, m: 1 }}>
      <CardMedia
        component="img"
        alt="funnyfinderlogo"
        height="100"
        image="/images/fflogo.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Get in Touch
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Want your open mic or event listed on FunnyFinder? Interested in promoting an event? Please contact our team. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button href = "mailto: caspian.alderman@gmail.com" size="small">Email FunnyFinder</Button>
      </CardActions>
    </Card>
    
    )
}