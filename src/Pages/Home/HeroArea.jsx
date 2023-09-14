import face from "../../../src/assets/images/Touching-face.png"
const HeroArea = () => {
    return (
        <section data-aos="zoom-in-left"
            data-aos-duration="3000">
            <div className="lg:flex justify-around items-center pt-10 lg:0 ">
                {/* Header section */}
                <div className="lg:space-y-8 space-y-5">
                    <div className="text-primary font-bold lg:text-5xl text-3xl   ">
                        BEAUTY SALON <br />
                        FOR EVERY WOMEN
                    </div>
                    <p className="text-[#666] tracking-wider ">
                        Lorem ipsum dolor sit amet, consectetur <br className="hidden lg:block" />  adipiscing elit. Purus commodo ipsum duis <br className="hidden lg:block" />  laoreet maecenas. Feugiat
                    </p>


                    <button className="btn">Get an Appointment</button>
                </div>

                {/* //? Image Part */}

                <div className="pt-4 lg:pt-0">
                    <img src={face} className="lg:w-[484px] lg:h-[478px]" alt="" />
                </div>
            </div>
        </section>
    );
};

export default HeroArea;