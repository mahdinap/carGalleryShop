import styles from "./categories.module.css"

import Sedan from "../icons/Sedan"
import SUV from "../icons/Suv"
import HatchBack from "../icons/Hatchback"
import Sport from "../icons/Sport"

export default function Categories(){
    return(
        <div className={styles.container}>
            
        <div className={styles.container.div}>
        <p>Sedan</p>
        <Sedan/>
        </div>

        <div className={styles.container.div}>
        <p>SUV</p>
        <SUV/>
        </div>
        <div className={styles.container.div}>
        <p>HatchBack</p>
        <HatchBack/>
        </div>
        <div className={styles.container.div}>
        <p>Sport</p>
        <Sport/>
        </div>
        </div>
    )
}