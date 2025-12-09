import carsData from "../../data/carData"
import Card from "../modules/card"
import Styles from "./cars.module.css"

function Cars(){
    return(
        <div className={Styles.container}>
        {carsData.map((car)=>{
            return(
                <Card key={car.id} {...car}/>
            )
        })}
        </div>
    )
}
export default Cars