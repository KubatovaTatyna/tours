import { Link } from "react-router-dom";

const NavLink = () => {
    return ( 
        <div className="NavLink">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><a href='#about'>About us</a></li>
                <li><a href='#footer'>Contact</a></li>
            </ul>
        </div>
     );
}
 
export default NavLink;