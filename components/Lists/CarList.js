import Car from "../Models/Car"
import '../../styles/list/Cars.scss'

const CarList = props => {
    return (
        <div className="sceletonList">
             <div className="list">
                 {props.cars.map((car, index) => <Car car={car} key={index} /> )}
             </div>
         </div>
    )
}

export default CarList