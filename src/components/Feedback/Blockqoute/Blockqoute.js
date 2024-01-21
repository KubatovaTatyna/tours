import './Blockqoute.css';

const Blockqoute = ({ photo, name, text }) => {
    return (<div className="Blockqoute">
        <div className='blockqouteCard'>
            <div className='qoute'>{text}</div>
            <div className='person'>
                <div className='personPhoto'><img src={photo} alt='alt' /></div>
                <div>
                    <h6>{name}</h6>
                </div>
            </div>
        </div>
    </div>);
}

export default Blockqoute;