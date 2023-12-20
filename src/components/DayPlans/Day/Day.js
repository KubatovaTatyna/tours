import season from '../../../images/season.svg';
import './Day.css'

const Day = () => {
    return (<div className="Day mt-5 mb-5">
        <div className='backdrop'></div>
        <div className="day-header">
            <img src={season} alt='season' />
            <span className='day-head'>Day 1</span>
        </div>
        <div className='day-body'>
            <p>International airport Manas – Bishkek – South shore of IssykKul lake – Karakol. Our private vehicle which picks you up in the airport will steal you from the capital city, Bishkek due east. Through seven hours driving with some food and eagle performance stops on the way you will arrive to Karakol town where you settle and get breath after your long jorney.</p>
        </div>
    </div>);
}

export default Day;