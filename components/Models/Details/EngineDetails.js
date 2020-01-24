
const Engine = props => {
    return (
        <div className="infoModel">
            <div className="section">
                <label>Code engine: </label>
                <span>{props.engine.code}</span>
            </div>
            <div className="section">
                <label>Capacity</label>
                <span>{parseFloat(props.engine.capacity).toFixed(2)} cm3</span>
            </div>
            <div className="section">
                <label>Fuel: </label>
                <span>{props.engine.fuel}</span>
            </div>
            <div className="section">
                <label>Horse Power: </label>
                <span>{props.engine.horsePower} KM </span>
            </div>
            <div className="section">
                <label>Amount Cylinders: </label>
                <span>{props.engine.amountCylinders}</span>
            </div>
         </div>
    )
}

export default Engine;