import React, { createContext } from 'react';
import './App.css';
import ContextAction from './components/ContextAction';
import Layout from './Layout';

export const EventList = createContext();

function App() {
  const {events, setEvents} = ContextAction();
  const List = {events, setEvents};

  return (
    <div className="App">
      <EventList.Provider value={List}>
        <Layout/>
      </EventList.Provider>
    </div>
  );
}

export default App;
