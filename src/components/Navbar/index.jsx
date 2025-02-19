import styles from './styles.module.css';
import { Link } from "react-router-dom";
import logo from '../../assets/Logo.svg';
export default function Navbar() {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.logo}>

                    <Link to="/">
                        <img src={logo} alt="Little Lemon Logo" />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home
                        </Link>
                    </li>
                    <li><a href="http://localhost:3000/#">About</a></li>
                    <li><a href="http://localhost:3000/#">Menu</a></li>
                    <li>
                        <Link to="/booking">Reservations
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}