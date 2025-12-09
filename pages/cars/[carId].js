import {useRouter} from "next/router"
import carsData from "../../data/carData"
export default function carDetail(){

    const router=useRouter()
    const {carId}=router.query
    const carDetails=carsData[carId-1]
    console.log(carDetails);
    
    return(
        <>
        
        </>
    )
}