import './App.css';
import Events from './Events';
import Navbar from './Navbar';
import { ThemeProvider, createTheme } from '@mui/material/legacy/styles';
import { HashRouter, Route } from 'react-router-dom';
import * as React from 'react';



const events = [{"eventname": "Open Mic Night", "eventlocation": "Old Salty Bar", "eventtime": "7:30 pm", "date":"10/4/2023", "eventurl": "https://oldsaltys.com/"}, {"eventname": "Joe List", "eventlocation": "Helium Comedy Club", "eventtime": "7:00 pm", "date":"10/4/2023", "eventurl": "https://portland.heliumcomedy.com/"}, {"eventname": "Joe List", "eventlocation": "Helium Comedy Club", "eventtime": "10:00 pm", "date":"10/5/2023", "eventurl": "https://portland.heliumcomedy.com/"}, {"eventname": "Improv Night", "eventlocation": "Portland Improv", "eventtime": "9:00 pm", "date":"10/5/2023", "eventurl": "https://www.curiouscomedy.org/"}  ]


const theme = createTheme({
  palette: {
    primary: {
        main: '#DC143C'
    },
    secondary: {
      main: '#E33E7F'
    }
  }
});

function App() {
  return (
    <div className='App'>
    <HashRouter>
     <ThemeProvider theme={theme}>
    <Navbar />
     <div class='right-container'>
      <Events events={events}/>
     </div>
     </ThemeProvider>
     </HashRouter>
    </div>
  );
}

export default App;