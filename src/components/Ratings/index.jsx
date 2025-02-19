import React from "react";
import styles from "./styles.module.css";
import Stars from "../Stars";
function Ratings() {
    return (
        <>
            <div className={styles.container} >
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div>
                            <p>@leon</p>
                            <Stars rating={5} />
                        </div>
                        <div>
                            <p>
                                "I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!"
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div>
                            <p>@julia</p>
                            <Stars rating={5} />
                        </div>
                        <div>
                            <p>
                                "I went to the restaurant with my family and we were very pleased with everything. The food was wonderful and the atmosphere was very cozy. I highly recommend it!"
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div>
                            <p>@gabi</p>
                            <Stars rating={5} />
                        </div>
                        <div>
                            <p>
                                "I have been to many restaurants, but this one certainly stood out. The quality of the ingredients and the preparation of the dishes were impeccable. Not to mention the presentation, which was beautiful. It was an amazing dining experience!
                                "
                            </p>
                        </div>
                    </div>

                </div>
            </div >
        </>
    );
}

export default Ratings;
