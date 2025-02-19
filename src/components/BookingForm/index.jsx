
import styles from './styles.module.css';
import { useState } from 'react';
export default function BookingForm({ setData, setActiveComponent }) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [guests, setGuests] = useState('');
    const [time, setTime] = useState('');
    const [occasion, setOccasion] = useState('');
    const data = {
        name,
        date,
        guests,
        time,
        occasion
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setData(data);
        setActiveComponent('confirmation');
    }
    return (
        <>
            <h1>Book Now</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    value={name}
                    required
                />

                <label htmlFor="res-date">Choose date</label>
                <input
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    id="res-date"
                    value={date}
                    required
                />

                <label htmlFor="guests">Number of guests</label>
                <input
                    onChange={(e) => setGuests(e.target.value)}
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    required
                />

                <label htmlFor="res-time">Choose time</label>
                <select
                    onChange={(e) => setTime(e.target.value)}
                    id="res-time"
                    value={time}
                    required
                >
                    <option value="">Select a time</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                </select>

                <label htmlFor="occasion">Occasion</label>
                <select
                    onChange={(e) => setOccasion(e.target.value)}
                    id="occasion"
                    value={occasion}
                    required
                >
                    <option value="">Select an occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>

                <input type="submit" value="Make Your Reservation" />
            </form>
        </>
    )
}