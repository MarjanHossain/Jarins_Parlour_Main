import { serviceData } from "../../../assets/Data";
import ServiceCard from "./ServiceCard";
const Service = () => {

    return (
        <section className="lg:space-y-16 space-y-8"
            data-aos="zoom-in-down"
            data-aos-duration="3000"
        >
            <h1 className="lg:text-4xl text-3xl text-center text-primary font-semibold">Our Awesome <span className="text-secondary">Services</span></h1>

            {/* //? Service Card */}
            <div className="lg:flex gap-10 ">
                {
                    serviceData.map((serviceInfo, i) => <ServiceCard
                        serviceInfo={serviceInfo}
                        key={i}
                    ></ServiceCard>)
                }
            </div>
            {/* Btn */}
            <div className="flex justify-center ">
                <button className="btn">Explore more</button>
            </div>
        </section>
    );
};

export default Service;