import Feedback from "../components/Feedback/Feedback";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SliderComponent from "../components/Slider/SliderComponent";
import Hotels from "../components/Hotels/Hotels";
import home from "../data/home";
import tours from "../data/tours";

const Home = () => {
    return (<div className="Home">
        <Header header={home.header}
        backgroundImage={home.mainBackground}
         />
        <SliderComponent
            section={tours.tours}
            header={home.activitiesHeader} 
            smallHeader={home.activitiesSmallText}/>
        <SliderComponent
            section={home.ourTeam}
            header={home.ourTeamHeader}
            smallHeader={home.ourTeamSmallText} />
        <Hotels />
        <Feedback />
        <Footer />
    </div>);
}

export default Home;