
import styles from "./styles.module.css";
import img from "../../assets/Logo.svg";
export default function About() {
    return (
        <div className={styles.container}>
            <img src={img} alt="" />
            <p >
                Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
            </p>
            <p >
                To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
            </p>
        </div>
    )
}