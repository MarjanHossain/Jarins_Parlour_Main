import { Link, Outlet } from "react-router-dom";
import booking from "../../assets/icons/BookingList.png"
import book from "../../assets/icons/book.png"
import review from "../../assets/icons/review.png"
const Booking = () => {
    return (
        <section className=" flex"
            data-aos="fade-right"
            data-aos-duration="3000"
        >
            <div className=" lg:ps-20 icon lg:w-1/5 h-screen lg:space-y-6  space-y-4 hover text-lg font-medium lg:pt-5    ">
                {/*//? Book */}

                <Link to="book" className=" flex gap-2 ">
                    <img src={book} alt="" />
                    <h2>Book</h2>
                </Link  >

                {/*//? Booking List */}

                <Link to="bookingList" className=" flex gap-2" >
                    <img src={booking} alt="" />
                    <h2>Booking List</h2>
                </Link>

                {/*//? Review */}

                <Link to="review" className=" flex gap-2" >
                    <img src={review} alt="" />
                    <h2>Review</h2>
                </Link>

            </div>

            {/*//? Outlet */}
            <div className="bg-[#F4F7FC] px-2 lg:px-10 w-full lg:pt-5 pt-3" >
                <Outlet />
            </div>


        </section>
    );
};

export default Booking;