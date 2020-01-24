import '../styles/InputBox.scss';

const InputBox = props => (
    <div className="inWrapper">
        <label for={props.key} className="inLabel">{props.labelValue}</label>
        <input type="text" id={props.key} name={props.key}/>
    </div>
);

export default InputBox;

