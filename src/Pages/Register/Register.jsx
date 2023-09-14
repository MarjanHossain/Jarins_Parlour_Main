import Authentication from "../../component/Authentication/Authentication";

const Register = () => {
    return (
        <section className="lg:w-2/5 mx-auto px-4 pt-10 lg:pt-0"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
        >
            <div className=" border p-10 shadow-2xl shadow-purple-600 rounded-xl ">
                {/* Form */}
                <div className="space-y-6">
                    <h1 className="lg:text-3xl text-xl font-semibold">Create an account</h1>
                    {/* input */}
                    <div className="lg:pt-10 pt-8 lg:space-y-8 space-y-5 inputForm">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="email" name="" id="" placeholder="Username or Email" />
                        <input type="password" name="" id="" placeholder=" Password" />
                        <input type="password" name="" id="" placeholder="Confirm Passowrd" />
                    </div>
                    <button className="btn w-full ">Create an account</button>
                    <p className="text-center">Already have an account? <span className="text-secondary">Login</span></p>
                </div>

            </div>
            {/*//? OR */}
            <div className="lg:px-14 px-6 lg:py-8 py-6 space-y-3 ">
                <div className="flex items-center gap-2 ">

                    <div className="border-b border-gray-400 w-full "></div>
                    <div>Or</div>
                    <div className="border-b border-gray-400 w-full   "></div>
                </div>

                {/* //?Authentication  */}
                <Authentication />
            </div>


        </section>
    );
};

export default Register;