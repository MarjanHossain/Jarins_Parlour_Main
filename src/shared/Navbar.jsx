import { Link, useNavigate } from "react-router-dom";
import logo from "../../src/assets/images/logo.png"
import { useState } from "react"
import { BiMenuAltRight } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
const Navbar = () => {
    const navigate = useNavigate();
    const handleAchorLink = async (e, hashroute) => {
        e.preventDefault();
        await navigate('/');
        window.location.hash = hashroute;
    }
    const menu =
        <>
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">OurPortfolio</a></li>
            <li><a href="#team"
                onClick={(e) => handleAchorLink(e, 'team')}
            >Our Team</a></li>
            <li><a href="#contact"
                onClick={(e) => handleAchorLink(e, 'contact')}
            >Contact Us</a></li>
            <li><Link to="/admin/orderList">Admin</Link></li>
            <li><Link to="/booking/book">Booking</Link></li>
        </>

    const [toggle, setToggle] = useState(false)

    return (
        <section className="lg:mx-20 lg:py-10 px-4 py-2 ">
            <div className="flex justify-between" >
                <Link to="/" >
                    <img src={logo} alt="" className="w-32 h-12" />
                </Link>

                {/* //? Desktop */}
                <ul className="lg:flex items-center gap-10  text-[#474747] font-semibold text-lg hover hidden ">
                    {menu}
                    <Link to="/login" className="btn"> Login</Link>
                </ul>

                {/*//?====== Mobile======= */}
                <div className="relative lg:hidden ">
                    <div onClick={() => setToggle(!toggle)} className="text-5xl">
                        {
                            toggle ?
                                <AiOutlineClose />
                                :
                                <BiMenuAltRight />
                        }
                    </div>
                    <div className={`list-none absolute right-0  bg-cyan-200 z-10 shadow-2xl px-10  py-5 text-xl space-y-4  font-semibold rounded-xl ${toggle ? "block" : "hidden"}`}>
                        {menu}
                        <div><Link to="/login">Login</Link></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Navbar;