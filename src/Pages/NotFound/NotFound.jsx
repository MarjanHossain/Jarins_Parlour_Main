import sad from "../../../src/assets/images/Shakib Khan.png"
const NotFound = () => {
    return (
        <section className=" lg:px-20 px-4 lg:pt-10 ">

            <div className="lg:flex">
                {/* left side */}
                <div>
                    <h1 className="lg:text-5xl text-3xl pt-8 lg:pt-0 font-semibold text-red-700">404 - Page Not Found</h1>

                    <div className="lg:pt-20 pt-10 lg:text-xl text-lg font-semibold text-gray-600 hidden lg:block ">
                        <p className="">Oops! It seems the page you're looking for is playing  <br className="hidden lg:block" /> hide and seek. We're not sure where it's hiding, <br /> but we're on the case! In the meantime, feel free to explore some of our other awesome pages.</p>
                        <br />
                        <p>
                            And remember, even the best websites have their little  <br /> adventures. Hang in there, we'll track it down
                        </p>

                    </div>
                    {/* Image Side */}
                </div>
                <div>
                    <img src={sad} alt="" />
                </div>

            </div>

        </section>
    );
};

export default NotFound;