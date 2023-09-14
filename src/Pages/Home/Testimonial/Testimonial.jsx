import { testimonialData } from "../../../assets/Data";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
    return (
        <section data-aos="flip-right" data-aos-duration="3000" id="team">
            <h1 className="text-center  lg:text-4xl text-3xl  font-semibold">Testimonials</h1>

            <div className='lg:flex gap-20 lg:pt-16 pt-8'>
                {
                    testimonialData.map((testimonialInfo, i) => <TestimonialCard
                        key={i}
                        testimonialInfo={testimonialInfo}

                    ></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;