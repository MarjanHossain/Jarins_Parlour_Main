
const OrderListCard = ({ orderInfo, header }) => {
    const { service, email, payment, status, style, icon, name } = orderInfo;


    return (
        <section>


            <div className="grid grid-cols-5 lg:space-y-14 space-y-2 lg:text-lg text-sm">
                <p className="lg:pt-14 ">{name}</p>
                <p>{email}</p>
                <p className="text-gray">{service}</p>
                <p >{payment}</p>
                <p className={`${style}`}>{status}</p>
            </div>
        </section>
    );
};

export default OrderListCard;