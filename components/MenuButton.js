import PropTypes from 'prop-types';
import '../styles/MenuButton.scss'

const Menu = (props) => (
    <div id="menu" onClick={() => openNav()}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

function openNav() {
    document.getElementById('nav').style.width = "25%";
    document.getElementById('menu').style.opacity = '0';
}

export default Menu;