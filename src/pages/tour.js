import AboutTour from "../components/AboutTour/AboutTour";
import DayPlans from "../components/DayPlans/DayPlans";
import Details from "../components/Details/Details";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import Price from "../components/Price/Price";
import PriceInlcudesContainer from "../components/PriceInclude/PriceIncludesContainer";

const Tour = () => {
    return ( <div className="Tour">
        <Header />
        <AboutTour />
        <Details />
        <DayPlans />
        <Price />
        <PriceInlcudesContainer />
        <Footer />
    </div> );
}
 
export default Tour;