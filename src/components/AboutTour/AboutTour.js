import './AboutTour.css'

const AboutTour = ({ tourHeader, aboutTour}) => {
    return ( <div className="AboutTour">
        <h1>{tourHeader}</h1>
        <p>{aboutTour}</p>
    </div> );
}
 
export default AboutTour;