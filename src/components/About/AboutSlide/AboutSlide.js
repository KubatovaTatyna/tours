import './AboutSlide.css'
const AboutSlide = ({ slide }) => {
    return (
        <div className='AboutSlide'>
            <img src={slide} alt='alt' />
            <div className='slideText'>
                <p>Name</p>
                <span>HORSEMAN</span>
            </div>
        </div>);
}

export default AboutSlide;