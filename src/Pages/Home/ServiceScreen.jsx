import screen from "../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png"
const ServiceScreen = () => {
    return (
        <section className="lg:flex gap-32 items-center"
            data-aos="zoom-in-left"
            data-aos-duration="3000"
        >
            {/* //? Image Area */}
            <div>
                <img src={screen} alt="" className="lg:w-[580px] lg:h-[381px]" />
            </div>

            {/* //? header area */}
            <div className="lg:space-y-10 space-y-6 pt-10 lg:pt-0">
                <h1 className="text-[#2D2D2D] lg:text-4xl text-3xl font-semibold ">Let us handle your <br /> screen  <span className="text-secondary">Professionally</span>.</h1>

                <p className="text-gray">With well written codes, we build amazing apps for all <br className="hidden lg:block" /> platforms, mobile and web apps in general ipsum. <br className="hidden lg:block" />Lorem ipsum dolor sit amet, consectetur adipiscing <br className="hidden lg:block" /> elit. Purus commodo ipsum.</p>

                {/*//? service & customer Number */}
                <div className="services flex gap-20 lg:pt-10">
                    <div>
                        <h1>500+</h1>
                        <p>Happy Customer</p>
                    </div>
                    <div>
                        <h1>16+</h1>
                        <p>Total Service</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceScreen;