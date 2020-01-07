import PropTypes from 'prop-types';
import '../styles/Navbar.scss'
import Link from 'next/link'

const NavLink = props => (
    <Link href="/list/[id]" as={`/list/${props.id}`} >
        <a>{props.children}</a>
    </Link>
)

const Navbar = (props) => (
<div id="nav">
    <a href="#" className="closeBtn" onClick={() => closeNav()}>
        &times;
    </a>
    <div className="overlay-content">
        <Link href="/" as={"/home"}>
            <a>Home</a>
        </Link>
        <NavLink id="catalog">Catalogs</NavLink>
        <NavLink id="car">Cars</NavLink>
        <NavLink id="create-catalog">Create a Catalog</NavLink>
        <NavLink id="create-car">Create a Car</NavLink>
    </div>
</div>
);

function closeNav() {
    document.getElementById('nav').style.width = "0%";
    document.getElementById('menu').style.opacity = '1';
}

export default Navbar;