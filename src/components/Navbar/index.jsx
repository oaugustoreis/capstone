import styles from './styles.module.css';
import logo from '../../assets/Logo.svg';
export default function Navbar() {
    return (
        <>
            <nav className={styles.nav}>
            <img src={logo} alt="logo" />
                <ul>
                    <li><a href="http://localhost:3000/#">Home</a></li>
                    <li><a href="http://localhost:3000/#">About</a></li>
                    <li><a href="http://localhost:3000/#">Menu</a></li>
                    <li><a href="http://localhost:3000/#">Reservations</a></li>
                </ul>
            </nav>
        </>
    )
}