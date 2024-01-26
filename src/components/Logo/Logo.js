import logo from '../../images/logo.jpg';
import './Logo.css';

const Logo = () => {
    return ( <div className="Logo mr-5">
        <img src={logo} alt="logo" className='logo'/>
    </div> );
}
 
export default Logo;