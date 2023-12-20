import About from "../components/About/About";
import Activities from "../components/Activities/Activities";
import Feedback from "../components/Feedback/Feedback";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hotels from "../components/Hotels/Hotels";

const Home = () => {
    return ( <div className="Home">
        <Header />
        <Activities />
        <About />
        <Hotels />
        <Feedback />
        <Footer />
    </div> );
}
 
export default Home;