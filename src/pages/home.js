import Feedback from "../components/Feedback/Feedback";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SliderComponent from "../components/Slider/SliderComponent";
// import Hotels from "../components/Hotels/Hotels";
import home from "../data/home";
import tours from "../data/tours";
import Activities from "../components/Activities/Activities";

const Home = () => {

    return (<div className="Home">
        <Header header={home.header}
            backgroundImage={home.mainBackground}
        />
        <Activities
            section={tours.tours}
            header={home.activitiesHeader}
            smallHeader={home.activitiesSmallText} />
        <SliderComponent
            section={home.ourTeam}
            header={home.ourTeamHeader}
            smallHeader={home.ourTeamSmallText} />
        {/* <OurTeam  ourTeam={home.ourTeam}/> */}
        {/* <Hotels /> */}
        <div className="activites">
            <h1 className="text-center mt-5">Activities</h1>
            <SliderComponent
                section={home.gallery} />
        </div>
        <Feedback />
        <Footer />
    </div>);
}

export default Home;