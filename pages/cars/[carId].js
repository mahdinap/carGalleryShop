import {useRouter} from "next/router"
import carsData from "../../data/carData"
import CarDetail from "../../components/templates/cardetail"

export default function CarDetailsPage(){

    const router=useRouter()
    const {carId}=router.query
    const carDetails=carsData[carId-1]
   
    
    return(
        <>
        <CarDetail {...carDetails}/>
        </>
    )
}