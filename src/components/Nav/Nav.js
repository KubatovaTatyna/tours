import NavLink from "./NavLink";
import './Nav.css';
import Logo from '../Logo/Logo';

const Nav = () => {
    return ( <nav className="Nav">
        <Logo />
        <NavLink />
    </nav> );
}
 
export default Nav;