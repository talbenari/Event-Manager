import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { EventList } from "../App";



function EventsList() {

    const { events, setEvents } = useContext(EventList);

    function deleteEvent(i) {
        setEvents(events.filter(item => events[i] !== item))
    } 
    
    return (
        <div id="EventsList">
            {events.map((data, index) => {
                return (
                    <ul id="eventUL" key={index}>
                        <li key='Name'><span>Event's Name:</span> {data.Name}</li>
                        <li key='Date'><span>Date:</span> {data.Date}</li>
                        <li key='Time'><span>Time:</span> {data.Time}</li>
                        <li key='Description'><span>Description:</span> {data.Description}</li>
                        <button id="deleteButton" onClick={() => deleteEvent(index)}>Delete</button>
                        <NavLink to={`/EventDetails/${index}`}><button id="detailsButton">Event Details</button></NavLink>
                    </ul>
                )
            })}
        </div>
    );
}

export default EventsList;