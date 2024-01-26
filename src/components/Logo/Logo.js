import logo from '../../images/logo.jpg';
import './Logo.css';

const Logo = () => {
    return ( <div className="Logo mr-auto">
        <img src={logo} alt="logo" className='logo'/>
    </div> );
}
 
export default Logo;