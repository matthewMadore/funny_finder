import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography align="left" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FunnyFinder
          </Typography>
          <Button href="#/events/" color="inherit">Events</Button>
          <Typography align="right" variant="body1" component="div" sx={{ flexGrow: 1 }}>
            All the funny. All in one place
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}