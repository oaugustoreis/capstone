import React from 'react';
import styles from './styles.module.css';
import img from '../../assets/Logo.svg';
export default function Footer({ rating }) {

    return (
        <div className={styles.footer}>
            <div>
                <div className={styles.logo}>
                    <img src={img} alt="" />
                </div>
                <div>
                    <ul>
                        <h3>Little Lemon</h3>
                        <li><a href="http://localhost:3000/#">Home</a></li>
                        <li><a href="http://localhost:3000/#">Menu</a></li>
                        <li><a href="http://localhost:3000/#">Reservations</a></li>
                        <li><a href="http://localhost:3000/#">login</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h3>Contact</h3>
                        <li>Little Lemon
                            331 E Chicago
                            LaSalle Street Chicago,
                            Illinois 60602
                            USA</li>
                        <li>+55 11 9999-9999</li>
                        <li>contact@littlelemon.com</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h3>Social Media</h3>
                        <li><a href="http://localhost:3000/#">Facebook</a></li>
                        <li><a href="http://localhost:3000/#">Instagram</a></li>
                        <li><a href="http://localhost:3000/#">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}