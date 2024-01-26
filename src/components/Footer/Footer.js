import './Footer.css';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import whatsapp from '../../images/whatsapp.svg';
import email from '../../images/email.png';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';


const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (<div className='Footer' id='footer'>
        <hr />
        <Logo />
        <div className='container d-flex text-center justify-content-center'>
            <Link to='https://www.facebook.com/ramilya.djumaeva?mibextid=ZbWKwL' className='mr-5'>
                <img src={facebook} alt='facebook' />
            </Link>
            <Link to='https://www.instagram.com/nomads_trail.kg?igsh=NnViNzdlbHhwYzFq' className='mr-5 ml-5'>
                <img src={instagram} alt='instagram' />
            </Link>
            <Link to='https://wa.me/qr/2EMERQTYOWUID1' className='mr-5 ml-5'>
                <img src={whatsapp} alt='whatsapp' />
            </Link>
            {/* <Link to='#' className='mr-5 ml-5'>
                <img src={email} alt='email'/>
            </Link> */}
            <button onClick={() => window.location = 'mailto:nomadstrailkg@outlook.com'}>
                <img src={email} alt='email' />
            </button>
        </div>
        <div>Copyright {year}</div>
    </div>);
}

export default Footer;