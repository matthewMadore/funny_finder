import './App.css';
import Events from './Events';
import Navbar from './Navbar';
import { ThemeProvider, createTheme } from '@mui/material/legacy/styles';
import { HashRouter, Route, Routes } from 'react-router-dom';
import * as React from 'react';
import ContactUs from './ContactUs';





const theme = createTheme({
  typography: {
    fontFamily: 'Oswald',
  },
  palette: {
    primary: {
        main: '#F15025'
    },
    secondary: {
      main: '#CED0CE'
    }
  }
});

function App() {
  return (
    <div className='App' >
    <HashRouter>
     <ThemeProvider theme={theme}>
    <Navbar />
     <div class='container-lg'>
      <Routes>
     <Route path="/" element={<Events/>}/>
     <Route path="/contactus" element={<ContactUs/>}/>
     </Routes>
     </div>
     </ThemeProvider>
     </HashRouter>
    </div>
  );
}

export default App;