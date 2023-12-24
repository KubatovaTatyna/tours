import AboutTour from "../components/AboutTour/AboutTour";
import DayPlans from "../components/DayPlans/DayPlans";
import Details from "../components/Details/Details";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import Price from "../components/Price/Price";
import PriceInlcudesContainer from "../components/PriceInclude/PriceIncludesContainer";
import { useParams } from "react-router-dom";
import tours, { getTour } from "../data/tours";

const Tour = () => {
    const params = useParams();
    const tour = getTour(params.tourId);

    return ( <div className="Tour">
        <Header header={tour.name} backgroundImage={tours.mainBackground}/>
        <AboutTour />
        <Details />
        <DayPlans />
        <Price />
        <PriceInlcudesContainer />
        <Footer />
    </div> );
}
 
export default Tour;