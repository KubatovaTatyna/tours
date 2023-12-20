import './Blockqoute.css';

const Blockqoute = ({ person, name, work }) => {
    return (<div className="Blockqoute">
        <div className='blockqouteCard'>
            <div className='qoute'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem. consectetur adipiscing elit. nibh lectus feugiat nunc </div>
            <div className='person'>
                <div><img src={person} alt='alt' /></div>
                <div>
                    <h3>{name}</h3>
                    <span>{work}</span>
                </div>
            </div>
        </div>
    </div>);
}

export default Blockqoute;