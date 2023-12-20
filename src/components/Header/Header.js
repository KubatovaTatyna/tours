import Nav from "../Nav/Nav";
import backgroundImage from '../../images/headerBackground.jpg';
import './Header.css'

const Header = ({header}) => {
    fetch('')
    const headerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        height:'100vh',
        width:'100vw'
    };

    return (
        <div className="Header">
            <header style={headerStyle} className='parallax'>
                <Nav />
                <div className="parallax-content">
                    <span className="small-header-text">EXPLORE</span>
                    <h1 className="main-header-text">{header}</h1>
                </div>
            </header>

        </div>);
}

export default Header;