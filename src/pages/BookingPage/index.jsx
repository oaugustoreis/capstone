import BookingForm from "../../components/BookingForm"
import styles from "./Booking.module.css"
import { useState } from 'react';
import Confirmation from '../../components/Confirmation';
export default function Booking() {
    const [data, setData] = useState('');
    const [activeComponent, setActiveComponent] = useState('booking');
    const renderComponent = () => {
        switch (activeComponent) {
            case 'confirmation':
                return <Confirmation data={data} />;
            case 'booking':
                return <BookingForm setData={setData} setActiveComponent={setActiveComponent} />;
            default:
                return <BookingForm setData={setData} setActiveComponent={setActiveComponent} />;
        }
    };
    return (
        <>
            <div className={styles.booking}>
                
                {renderComponent()}
            </div>
        </>
    )
}