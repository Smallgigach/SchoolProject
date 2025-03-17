import React, { useState } from 'react';
import Timeline from './components/TimeLine.js';
import EventDetails from './components/EventDetails.js';
import './styles.css';

const App = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <div className="app">
            <h1>История операционных систем</h1>
            <Timeline onEventClick={setSelectedEvent} />
            <EventDetails event={selectedEvent} />
        </div>
    );
};

export default App;