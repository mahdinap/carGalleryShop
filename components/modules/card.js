import styles from "./card.module.css"
import Location from "../icons/Location"
function Card(props){
    const {id,name,model,year,distance,location,price,image,category,description}=props
    return(
        <div className={styles.container}>
            <img className={styles.image} src={image} />
            <h4 className={styles.title}>{name}</h4>
            <p className={styles.detail}>{`${year} | ${distance}km`}</p>
            <div className={styles.footer}>
                <p className={styles.price}>${price}</p>
                <div className={styles.location}>
                <p className={styles.location.p}>{location}</p>
                <Location/>
                </div>
                
            </div>


        </div>
    )
}
export default Card