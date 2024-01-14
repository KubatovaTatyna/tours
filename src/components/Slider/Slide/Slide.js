import './Slide.css';

const Slide = ({ item }) => {
    return (
        <div className='slide' key={item.itemId}>
            <img className={`d-block w-100 slide-image ` + item.class} src={item.image} alt={item.title} />
            <div className='slide-text'>
                <h3>{item.name}</h3>
                <p>{item.title}</p>
            </div>
        </div>
    );
}

export default Slide;