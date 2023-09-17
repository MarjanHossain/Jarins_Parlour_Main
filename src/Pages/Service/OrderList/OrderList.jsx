import { OrderData } from "../../../assets/Data";
import OrderListCard from "./OrderListCard";

const OrderList = () => {


    return (
        <section
            data-aos="fade-up"
            data-aos-duration="3000">
            <h1 className="lg:hidden text-gray text-center">Order List</h1>

            <div className="grid grid-cols-5 text-lg lg:font-semibold text-gray bg-gray-200 py-2 ps-2 ">
                {
                    OrderData.map((header, i) => <div
                        key={i}
                    >
                        {header.heading}
                    </div>)
                }
            </div>

            <div className="">
                {
                    OrderData.map((orderInfo, i) => <OrderListCard
                        key={i}
                        orderInfo={orderInfo}
                    ></OrderListCard>)
                }
            </div>
        </section>
    );
};

export default OrderList;