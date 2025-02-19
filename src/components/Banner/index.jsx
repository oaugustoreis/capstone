import React from "react";
import styles from "./styles.module.css";
function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <div>
                    <h1>Little Lemon</h1>
                    <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <button className={styles.button}>Reserve a table</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
