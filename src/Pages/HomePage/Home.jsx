import About from "../AboutPage/About";
import Services from "../ServicesPage/Services";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;