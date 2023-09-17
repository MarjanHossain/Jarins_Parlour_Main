
import orderList from "../../assets/icons/BookingList.png"
import addService from "../../assets/icons/plus 1.png"
import makeAdmin from "../../assets/icons/makeAdmin.png"
import manageService from "../../assets/icons/manageService.png"

import { Link, Outlet } from 'react-router-dom';

const Service = () => {
    return (
        <section className=" flex pt-7 lg:pt-0"
            data-aos="fade-right"
            data-aos-duration="3000"
        >
            <div className=" lg:ps-20 icon lg:w-2/6 h-screen lg:space-y-6  space-y-4 hover text-lg font-medium lg:pt-5  ">
                {/*//? Order List */}
                <Link to="orderList" className="flex gap-2">
                    <img src={orderList} alt="" />
                    <h2>Order List</h2>
                </Link  >
                {/*//? Add Service */}
                <Link to="addService" className="flex gap-2">
                    <img src={addService} alt="" />
                    <h2>Add Service</h2>
                </Link  >



                {/*//? Make Admin */}
                <Link to="makeAdmin" className="flex gap-2 items-center">
                    <img src={makeAdmin} alt="" />
                    <h2>Make Admin</h2>
                </Link>
                {/*//? Review */}
                <Link to="manageService" className="flex gap-2">
                    <img src={manageService} alt="" />
                    <h2>Manage Service</h2>
                </Link>
            </div>

            {/*//? Outlet */}
            <div className="bg-[#F4F7FC] px-3 lg:px-10 w-full lg:pt-5 pt-3" >
                <Outlet />
            </div>


        </section>
    );
};

export default Service;