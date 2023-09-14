import Footer from "../../shared/Footer";
import Contact from "./Contact";
import HeroArea from "./HeroArea";
import Service from "./Service/Service";
import ServiceScreen from "./ServiceScreen";
import Testimonial from "./Testimonial/Testimonial";
const Home = () => {

    return (
        <div >
            <div className="lg:px-20 lg:space-y-20 px-4 space-y-10 pb-20">
                <HeroArea />
                <Service />
                <ServiceScreen />
                <Testimonial />
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default Home;