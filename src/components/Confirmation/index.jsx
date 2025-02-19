import styles from "./Confirmation.module.css"
export default function Confirmation({ data }) {
    return (
        <>
            <div className={styles.confirmation}>
                <h1>Thank you for your reservation!</h1>
                <h3>We look forward to seeing you at Little Lemon.
                </h3>
                <div className={styles.details}>
                    <h2>Reservation Details:</h2>
                    <p>Name: <strong>{data.name}</strong> </p>
                    <p>Occasion: <strong>{data.occasion}</strong></p>
                    <p>Guests: <strong>{data.guests}</strong></p>
                    <p>Time: <strong>{data.time}</strong></p>
                    <p>Date: <strong>{data.date}</strong></p>
                </div>
            </div>
        </>
    )
}