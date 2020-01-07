import Link from "next/link"

const Car = props => {
    return (
        <div className="containerDetails">
            <div>
                <Link>
                    <a>
                        <div>
                            <img src="../../static/images/26227.jpg" />
                        </div>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="#">
                    <a>
                        <h2>{props.car.manufacturer} {props.car.model}</h2>
                    </a>
                </Link>
                <div className="details">
                    <Link href="#">
                        <a>
                            <div className="configuration">
                                <div className="sceletonSection">
                                    <div className="section">
                                        <label>Engine: </label>
                                        <span>{props.car.engine.capacity} cm3</span>
                                    </div>
                                    <div className="section">
                                        <label>Horse Power: </label>
                                        <span>{props.car.engine.horsePower} KM</span>
                                    </div>
                                    <div className="section">
                                        <label>Color: </label>
                                        <span>{props.car.color}</span>
                                    </div>
                                </div>
                                <div className="sceletonSection">
                                    <div className="section">
                                        <label>Fuel: </label>
                                        <span>{props.car.engine.fuel}</span>
                                    </div>
                                    <div className="section">
                                        <label>Amount Cylinders: </label>
                                        <span>{props.car.engine.amountCylinders}</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Car