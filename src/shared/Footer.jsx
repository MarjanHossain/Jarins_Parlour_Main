import location from "../../src/assets/icons/map-pin-2-fill.png"
import instagram from "../../src/assets/icons/instagram.png"
import facebook from "../../src/assets/icons/facebook.png"
import youtube from "../../src/assets/icons/youtube.png"
import linkedin from "../../src/assets/icons/linkedin.png"
import { AiOutlineCopyright } from "react-icons/ai"
const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (
        <section className="bg-primary text-white hover"
            data-aos="flip-up"
            data-aos-duration="3000">

            {/* //! Footer */}

            <div className="lg:px-20 px-4  lg:flex justify-between
             lg:pt-20 pt-10 lg:pb-32 pb-20  grid grid-cols-2 gap-10 lg:gap-0 ">

                {/*//?======== Location========== */}
                <div className="flex lg:gap-3 gap-1 ">
                    <div className="lg:w-6 lg:h-6"><img src={location} alt="" /></div>
                    <h2>
                        H#000 (0th Floor), Road #00,<br className="lg:block hidden" />
                        New DOHS, Mohakhali, Dhaka, Bangladesh
                    </h2>
                </div>

                {/* //?============ Company============ */}

                <div >
                    <h1 className="text-xl font-semibold">Company</h1>
                    <ul className="lg:pt-5 pt-3 lg:space-y-3 space-y-1">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="/#team">Our Team</a></li>
                        <li><a href="#">Terms Condition</a></li>
                        <li><a href="#">Submit Listing</a></li>
                    </ul>
                </div>


                {/* //?========= Quick Links=========== */}
                <div >
                    <h1 className="text-xl font-semibold">Company</h1>
                    <ul className="lg:pt-5 pt-3 space-y-3">
                        <li><a href="#">Quick Links</a></li>
                        <li><a href="#">Rentals</a></li>
                        <li><a href="#">Sales</a></li>
                        <li><a href="/#contact">Contact</a></li>
                        <li><a href="#">Our blog</a></li>
                    </ul>
                </div>

                {/* //?========== About Us========= */}
                <div className="space-y-4">
                    <h1 className="text-xl font-semibold">About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur <br className="lg:block hidden" />
                        adipiscing elit. Purus commodo ipsum <br className="lg:block hidden" />
                        duis laoreet maecenas. Feugiat
                    </p>
                    {/* //? icon */}
                    <div className="w-6 h-6 flex gap-6 ">
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={youtube} alt="" />
                    </div>
                </div>
            </div>
            {/* //? Copy Rights */}
            <div className="flex items-center gap-1 justify-center">
                <span className="text-lg"><AiOutlineCopyright /></span>
                <p><small>All Rights Reserved MH {currentYear}</small></p>
            </div>

        </section>
    );
};

export default Footer;