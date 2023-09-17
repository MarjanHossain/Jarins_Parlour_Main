
const Review = () => {
    return (
        <section className="lg:w-1/2 lg:ps-10"
            data-aos="fade-left"
            data-aos-duration="3000"
        >
            <div className="input2 lg:space-y-6 space-y-3 ">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Company’s name, Designation" />
                <textarea name="" id="" cols="10" rows="5" placeholder="Description"></textarea>
            </div>
            <div className="lg:pt-10">
                <input className="btn " type="submit" value="Submit" />
            </div>
        </section>
    );
};

export default Review;