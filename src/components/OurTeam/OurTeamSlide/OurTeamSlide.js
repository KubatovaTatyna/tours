import './OurTeamSlide.css'
const OurTeamSlide = ({ slide, person }) => {
    return (
        <div className='OurTeamSlide'>
            <img src={slide} alt='alt' />
            <div className='slideText'>
                <p>{person.name}</p>
                <span>{person.position}</span>
            </div>
        </div>);
}

export default OurTeamSlide;