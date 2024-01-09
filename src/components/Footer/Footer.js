import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (<div className='Footer'>
        <hr />
        <div>Copyright {year}</div>
    </div>);
}

export default Footer;