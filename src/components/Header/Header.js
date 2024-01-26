import Nav from "../Nav/Nav";
import './Header.css'

const Header = ({ header, backgroundImage }) => {

    return (
        <div className="Header">
            <header className='header'>
                <img src={backgroundImage} alt='background img' className="parallax-background" />
                <div className="header-content">
                    <Nav />
                    <div className="parallax-content">
                        <span className="small-header-text">EXPLORE</span>
                        <h1 className="main-header-text">{header}</h1>
                    </div>
                </div>
            </header>

        </div>);
}

export default Header;