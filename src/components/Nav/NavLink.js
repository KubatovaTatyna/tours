import { Link } from "react-router-dom";

const NavLink = () => {
    return ( 
        <div className="NavLink">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/tours'>Tours</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/contacts'>Contact</Link></li>
            </ul>
        </div>
     );
}
 
export default NavLink;