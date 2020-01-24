import Engine from "./EngineDetails"
import '../../../styles/details/CarDetails.scss'

const CarDetails = (props) => {
    return (
        <div className="sceletonModel modelBackground">
            <div className="headerModel">
                <div>
                    <img src="../../../static/images/26227.jpg" />
                </div>
                <div>
                    <h2 className="Banner">{props.car.manufacturer} {props.car.model}</h2>
                    <div className="infoModel">
                        <div className="section">
                            <label>Mileage: </label>
                            <span>{props.car.mileage} KM</span>
                        </div>
                        <div className="section">
                            <label>VIN: </label>
                            <span>{props.car.vin}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="headerModel">
                <div className="sceletonModel">
                    <div className="sceletonBanner">
                        <h2 className="Banner">General</h2>
                    </div>
                    <div className="infoModel">
                        <div className="section">
                            <label>Category: </label>
                            <span>{props.car.category.name}</span>
                        </div>
                        <div className="section">
                            <label>Type: </label>
                            <span>{props.car.type}</span>
                        </div>
                        <div className="section">
                            <label>Color: </label>
                            <span>{props.car.color}</span>
                        </div>
                        <div className="section">
                            <label>Gearbox: </label>
                            <span>{props.car.gearBox}</span>
                        </div>
                        <div className="section">
                            <label>Drive Type: </label>
                            <span>{props.car.driveType}</span>
                        </div>
                    </div>
                </div>
                <div className="sceletonModel">
                    <div className="sceletonBanner">
                        <h2 className="Banner">
                            Engine
                        </h2>
                    </div>
                    <Engine engine={props.car.engine} />
                </div>
            </div>
        </div>
    )
}

export default CarDetails;