import About from "../components/About/About";
import Activities from "../components/Activities/Activities";
import Feedback from "../components/Feedback/Feedback";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import home from "../data/home";

const Home = () => {
    return ( <div className="Home">
        <Header header={home.header}/>
        <Activities />
        <About />
        <Feedback />
        <Footer />
    </div> );
}
 
export default Home;