import React from 'react';
import styles from './styles.module.css';
export default function Stars({ rating }) {

    return (
        <div className={styles.stars}>
            {[...Array(rating)].map((_, index) => (
                <span key={index} className="fa fa-star checked"></span>
            ))}
        </div>
    );
}