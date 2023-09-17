import credit from "../../assets/icons/credit-card 1.png"
import paypal from "../../assets/icons/paypal.png"

const Book = () => {
    return (
        <section className="lg:w-1/2 lg:space-y-10 space-y-5"
            data-aos="fade-up"
            data-aos-duration="3000"
        >
            <h1 className="lg:hidden block text-center text-lg  text-gray">Booking</h1>
            {/* //? Input */}
            <div className="input2 space-y-5 ">
                <input type="text" placeholder="Your Name" />
                <input type="email" name="email" id="" placeholder="Your Email" />
                <input type="text" placeholder="Your Treatment " />
            </div>

            {/* //? Payment */}
            <div className="">
                <h2 className="py-3 text-gray">Pay with</h2>

                <div className="flex gap-6">
                    {/* //? Credit Card */}
                    <div>
                        <label htmlFor="creditCard" className="flex items-center icon gap-3 ">
                            <input type="checkbox" id="creditCard" className="form-checkbox h-5 w-5 rounded-full" />
                            <div className="flex">
                                <img src={credit} alt="" />
                                <span className="ml-2 text-gray">Credit Card</span>
                            </div>
                        </label>
                    </div>
                    {/*//? Paypal */}
                    <div>
                        <label htmlFor="Paypal" className="flex items-center icon gap-3 ">
                            <input type="checkbox" id="Paypal" className="form-checkbox h-5 w-5 rounded-full" />
                            <div className="flex">
                                <img src={paypal} alt="" />
                                <div className="ml-2 text-gray">Paypal</div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            {/* //? Card */}
            <div className="input2 space-y-4">
                <input type="text" placeholder="Card Number" />
                <div className=" lg:flex gap-3  ">
                    <input type="number" name="" id="" placeholder="MM/YY" />
                    <input type="number" name="" id="" placeholder="CVC" />
                </div>
            </div>

            {/* //? Button */}
            <div className="lg:flex  lg:justify-between items-center ">
                <p className="text-lg font-semibold">Your Service  charged will be <span className="text-xl font-bold">$1000</span></p>
                <div className="flex justify-center pt-5">
                    <button className="btn">Pay</button>
                </div>
            </div>

        </section>
    );
};

export default Book;