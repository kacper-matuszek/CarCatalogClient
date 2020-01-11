import Link from 'next/link'

const CarLink = props => (
    <Link href="/cars/[car]" as={`/cars/${props.car}`}>
        <a>{props.children}</a>
    </Link>
)
const Car = props => {
    return (
        <div className="containerDetails">
            <div>
                <CarLink car={props.car.id}>
                    <div>
                        <img src="../../static/images/26227.jpg" />
                    </div>
                </CarLink>
            </div>
            <div>
                <CarLink car={props.car.id}>
                    <h2>{props.car.manufacturer} {props.car.model}</h2>
                </CarLink>
                <div className="details">
                    <CarLink car={props.car.id}>
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
                    </CarLink>
                </div>
            </div>
        </div>
    );
}

export default Car;