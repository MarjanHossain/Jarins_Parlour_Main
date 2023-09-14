
const ServiceCard = ({ serviceInfo }) => {
    const { img, title, price, details, style } = serviceInfo;
    return (
        <div className={` ${style} text-center lg:px-5 lg:py-5 px-3 py-3  space-y-2 rounded-2xl border  mb-5 lg:mb-0 `}>
            <div className="flex justify-center">
                <img src={img} className="w-12 h-12" alt="" />
            </div>
            <h1 className="text-primary font-semibold text-xl">{title}</h1>
            <h2 className="text-secondary font-semibold">{price}</h2>
            <p className="text-gray">{details}</p>
        </div>
    );
};

export default ServiceCard;