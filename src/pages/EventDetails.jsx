import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { EventList } from "../App";

function EventDetails() {
    const params = useParams();
    const { events, setEvents } = useContext(EventList);
    const [change, setChange] = useState();
    const index = params.index;
    const [render, setRender] = useState(false);
    function edit(key) {
        events[index][key] = change;
        setEvents(events);
        setRender(!render);
    }

    console.log("rendered")

    return (
        <div id="EventDetails">
            <ul id="details" key={params.index}>
                <li id="detailsLi" key='Name'><span>Event's Name:</span> {events[index].Name}</li>
                <li id="detailsLi" key='Date'><span>Date:</span> {events[index].Date}</li>
                <li id="detailsLi" key='Time'><span>Time:</span> {events[index].Time}</li>
                <li id="detailsLi" key='Description'><span>Description:</span> {events[index].Description}</li>
                <div><input type="text" onChange={e => setChange(e.target.value)} /></div>
            </ul>
            <div id="details">
                <button className="editButton" onClick={() => edit("Name")}>change Event Name</button>
                <button className="editButton" onClick={() => edit("Date")}>Change Event Date</button>
                <button className="editButton" onClick={() => edit("Time")}>Change Event Time</button>
                <button className="editButton" onClick={() => edit("Description")}>Change Event Description</button>
            </div>
        </div>
    );
}

export default EventDetails;