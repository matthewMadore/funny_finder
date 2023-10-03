import './App.css';
import Events from './Events';
import * as React from 'react';
const events = [{"eventname": "Open Mic Night", "eventlocation": "Old Salty Bar", "eventtime": "7:30 pm"}, {"eventname": "Joe List", "eventlocation": "Helium Comedy Club", "eventtime": "7:00 pm"}, {"eventname": "Joe List", "eventlocation": "Helium Comedy Club", "eventtime": "10:00 pm"}, {"eventname": "Improv Night", "eventlocation": "Portland Improv", "eventtime": "9:00 pm"}  ]

function App() {
  return (
    <div className='App'>
     <div class='right-container'>
      <Events events={events}/>
     </div>
    </div>
  );
}

export default App;
