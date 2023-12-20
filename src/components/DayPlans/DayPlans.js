import Day from "./Day/Day";
import './DayPlans.css'

const DayPlans = () => {
    return ( <div className="DayPlans">
        <div className="plans-container">
            <h1 className="text-center m-5">Day plans</h1>
            <Day />
            <Day />
            <Day />
        </div>
    </div> );
}
 
export default DayPlans;