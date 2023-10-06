import './App.css';
import Events from './Events';
import Navbar from './Navbar';
import { ThemeProvider, createTheme } from '@mui/material/legacy/styles';
import { HashRouter, Route, Routes } from 'react-router-dom';
import * as React from 'react';
import ContactUs from './ContactUs';





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
    <div className='App' >
    <HashRouter>
     <ThemeProvider theme={theme}>
    <Navbar />
     <div class='right-container'>
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