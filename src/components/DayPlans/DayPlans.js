import Day from "./Day/Day";
import './DayPlans.css'

const DayPlans = ({dayPlans}) => {
    const day = dayPlans.map(e => {
        return <Day day={e}/>
    })
    return ( <div className="DayPlans">
        <div className="plans-container">
            <h1 className="text-center m-5">Itinerary</h1>
            <div className="days-container">{day}</div>
        </div>
    </div> );
}
 
export default DayPlans;