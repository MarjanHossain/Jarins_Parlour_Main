
const BookingListCard = ({ serviceListInfo }) => {

    const { img, title, details, style, button } = serviceListInfo;
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">

            <div className="border-2  lg:px-5 px-2 lg:py-10 py-5 lg:space-y-4 space-y-2  bg-white rounded-2xl shadow-2xl ">

                <div className=" flex items-center justify-between   ">
                    <img src={img} alt="" className="w-16 h-16" />
                    <div>

                        <button className={`px-12  py-3  font-semibold text-xl rounded-lg ${style}`} >{button}</button>
                    </div>
                </div>
                {/* //? Text */}
                <h1 className="text-lg font-semibold">{title}</h1>
                <p >{details}</p>
            </div>
        </div>
    );
};

export default BookingListCard;