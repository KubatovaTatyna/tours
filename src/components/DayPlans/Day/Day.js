import season from '../../../images/season.svg';
import './Day.css'

const Day = ({day}) => {
    return (<div className="Day mt-5 mb-5">
        <div className='backdrop'></div>
        <div className="day-header">
            <img src={season} alt='season' className='seasonImg'/>
            <span className='day-head'>{day.dayHeader}</span>
        </div>
        <div className='day-body'>
            <p>{day.dayAbout}</p>
        </div>
    </div>);
}

export default Day;