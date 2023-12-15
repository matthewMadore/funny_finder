import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import useIsMobile from './helpers/useIsMobile';




function Navbar() {
  
const isMobile = useIsMobile()
  
  if (isMobile) return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FunnyFinder
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
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
          <Button href="#/" color="inherit">Events</Button>
          <Button align="right" href="#/contactus/" color="inherit">Contact Us</Button>
          <Typography align="right" variant="body1" component="div" sx={{ flexGrow: 1 }}>
            All the funny. All in one place
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Navbar;