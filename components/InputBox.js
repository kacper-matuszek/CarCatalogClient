import '../styles/InputBox.scss';

const InputBox = props => {
    const handleChange = e => {
        props.handleChange(props.name, e.target.value);
    }

    return(
     <div className="inWrapper">
        <label for={props.name} className="inLabel">{props.labelValue}</label>
        <input type="text" id={props.name} name={props.name} onChange={handleChange} />
    </div>
    )
};

export default InputBox;

