import { Link } from "react-router-dom";
import logo from "../../src/assets/images/logo.png"
import { useState } from "react"
import { BiMenuAltRight } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
const Navbar = () => {
    const menu =
        <>
            <li><a href="/">Home</a></li>
            <li><a href="">OurPortfolio</a></li>
            <li><a href="/#team">Our Team</a></li>
            <li><a href="/#contact">Contact Us</a></li>
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

                {/*//? Mobile */}
                <div className="relative lg:hidden ">
                    <div onClick={() => setToggle(!toggle)} className="text-5xl">
                        {
                            toggle ?
                                <AiOutlineClose />
                                :
                                <BiMenuAltRight />
                        }
                    </div>
                    <div className={`list-none absolute right-0  bg-white shadow-2xl px-10  py-5 text-xl space-y-4 font-medium rounded-xl ${toggle ? "block" : "hidden"}`}>
                        {menu}
                        <Link to="/login">Login</Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Navbar;