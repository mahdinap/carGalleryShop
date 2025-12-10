import styles from "./cardetail.module.css"
import Company from "../icons/Company"
import Model from "../icons/Model"
import Calender from "../icons/Calender"
import Road from "../icons/Road"
import Location from "../icons/Location"
import Money from "../icons/Money"

function CarDetail(props){

    const {id,name,model,year,distance,location,price,image,category,description}=props

    return(
        <div className={styles.container}>
            <img src={image} className={styles.image}/>
            <h3 className={styles.header}>{name} {model}</h3>

            <div className={styles.details}>
                <div><Company/><p className={styles.details.p}>Company</p><span>{name}</span></div>
                <div><Model/><p className={styles.details.p}>Model</p><span>{model}</span></div>
                <div><Calender/><p className={styles.details.p}>First registration</p><span>{year}</span></div>
                <div><Road/><p className={styles.details.p}>KMS driven</p><span>{distance}</span></div>
            </div>
            <div className={styles.details}>
                <div>
                    <Location/><p className={styles.details.p}>Location</p><span className={styles.details.span}>{location}</span>
                    </div></div>
            <div className={styles.details}>
                <p className={styles.descriptionTitle}>Extra Information</p>
                <p className={styles.descriptionText }>{description}</p>
            </div>
            <div className={styles.details}>
                <div className={styles.price}>
                    <Money/><p className={styles.price.p}>PRICE:</p><span className={styles.price.span}>{price}</span></div>
                    </div>
            <button className={styles.button}>BUY</button>


        </div>
    )
}
export default CarDetail