import { useState } from "react";

function ContextAction() {
    const [events, setEvents] = useState([]);
    return {
        events,
        setEvents
    }
}

export default ContextAction;