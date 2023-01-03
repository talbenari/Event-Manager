import EventDetails from "./pages/EventDetails";
import EventForm from "./components/EventForm";
import EventsList from "./components/EventsList";
import { NavLink, Route, Routes } from "react-router-dom";
import './App.css';
import { useContext } from "react";
import { EventList } from "./App";

function Layout() {

    const { events } = useContext(EventList);

    return (
        <div>
            <div id='navBar'>
                <NavLink to='/EventList'><p className="links">Event List {`(${events.length})`}</p></NavLink>
                <NavLink to='/'><p className="links">Home Page</p></NavLink>
            </div>
            <Routes>
                <Route path='/' element={<EventForm />} />
                <Route path='/EventDetails/:index' element={<EventDetails />} />
                <Route path='/EventList' element={<EventsList />} />

            </Routes>
        </div>
    );
}

export default Layout;