
const Contact = () => {
    return (
        <section id="contact" className=" lg:space-y-16 space-y-8" data-aos="zoom-out-left" data-aos-duration="3000">
            {/* Header */}
            <h1 className="lg:text-4xl text-3xl font-semibold text-[#2D2D2D] text-center ">
                Let us handle your <br />
                project, professionally.
            </h1>

            {/* Form Area */}
            <form action="" className="lg:w-2/3 mx-auto input  lg:space-y-10 space-y-7  shadow-2xl shadow-pink-200 rounded-xl  px-2 lg:px-5 lg:py-10 py:5">
                <div className=" lg:flex gap-4 space-y-4 lg:space-y-0">
                    <input type="text" name="" id="" placeholder="Full Name" />
                    <input type="text" name="" id="" placeholder="Last Name" />
                </div>
                <div className="lg:flex gap-4 space-y-4 lg:space-y-0">
                    <input type="email" name="" id="" placeholder="Email Address" />
                    <input type="number" name="" id="" placeholder="Phone Number" />
                </div>
                <div >
                    <textarea name="message" id="" cols="30" rows="7" placeholder="Your message" />
                </div>
            </form>

            {/* //? Btn  */}
            <div className="flex justify-center">
                <button className="btn">Send Message</button>
            </div>
        </section>
    );
};

export default Contact;