import React from 'react';

const EventDetails = ({ event }) => {
    if (!event) return <p>Выберите событие, чтобы увидеть подробности.</p>;

    return (
        <div className="event-details">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            {event.image && (
                <div className="event-image-container">
                    <img src={event.image} alt={event.title} className="event-image" />
                </div>
            )}
        </div>
    );
};

export default EventDetails;