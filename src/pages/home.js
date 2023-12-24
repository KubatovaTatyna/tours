import Feedback from "../components/Feedback/Feedback";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SliderComponent from "../components/Slider/SliderComponent";
import home from "../data/home";
import tours from "../data/tours";

const Home = () => {
    return ( <div className="Home">
        <Header header={home.header}/>
        {/* <Activities /> */}
        {/* <About aboutUs={home.ourTeam}/> */}
        {/* <OurTeam ourTeam={home.ourTeam}/> */}
        <SliderComponent section={tours.tours}/>
        <SliderComponent section={home.ourTeam}/>
        <Feedback />
        <Footer />
    </div> );
}
 
export default Home;