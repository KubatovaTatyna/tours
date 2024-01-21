import './Feedback.css';
// import person1 from '../../images/person1.jpg'
import Blockqoute from './Blockqoute/Blockqoute';

const Feedback = ({feedback}) => {
  const blockqoute = feedback.map(e => {
    return (
      <Blockqoute photo={e.photo} name={e.name} text={e.text} />
    )
  })
  return (<div className="Feedback">
  <div className="feedbackHeader">
    <span>NETWORK</span>
    <h1>Our Clients</h1>
  </div>
    <div className='blockqouteContainer'>
      {blockqoute}
    </div>
  </div>);
}

export default Feedback;