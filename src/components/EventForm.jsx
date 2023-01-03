import { useContext } from "react";
import { useForm } from "react-hook-form"
import { EventList } from "../App";


function EventForm() {
    const { events, setEvents } = useContext(EventList);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        reset();
        setEvents([...events, {
            Name: data.Name,
            Date: data.Date,
            Time: data.Time,
            Description: data.Description
        }])
    }

    return (
        <div id="wrapper">
            <h1>Event Manager</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Event's Name:</label>
                <input {...register("Name", { required: true })} />
                {errors.Name && <p className="error">Event's name is required.</p>}
                <label>Date:</label>
                <input type='date' {...register("Date", { required: true })} />
                {errors.Date && <p className="error">Date is required.</p>}
                <label>Time:</label>
                <input type='time' {...register("Time", { required: true })} />
                {errors.Date && <p className="error">Time is required.</p>}
                <label>Description:</label>
                <input {...register("Description", { required: true }, { pattern: /\d+/ })} />
                {errors.Description && <p className="error">Description is required.</p>}
                <input type="submit" id="submit" value='submit' />
            </form>
        </div>
    );
}

export default EventForm;