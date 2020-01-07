import '../styles/MainBar.scss'
import Menu from './MenuButton'

const MenuBar = props => {
    return (
        <div className="Bar">
            <h3>{props.title}</h3>
            <Menu />
        </div>
    );
}

export default MenuBar;
