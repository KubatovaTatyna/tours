import './Feedback.css';
import person1 from '../../images/person1.jpg'
import Blockqoute from './Blockqoute/Blockqoute';

const Feedback = () => {
  return (<div className="Feedback">
  <div className="feedbackHeader">
    <span>NETWORK</span>
    <h1>Our Clients</h1>
  </div>
    <div className='blockqouteContainer'>
      <Blockqoute person={person1} name="Jane Cooper" work="CEO, ABC Corporation"/>
      <Blockqoute person={person1} name='Alan Jackson' work='CEO, Travelers Community'/>
      <Blockqoute person={person1} name='Jane Cooper' work='CEO, Go Travel'/>
    </div>
  </div>);
}

export default Feedback;