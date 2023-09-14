import { Link } from "react-router-dom";
import Authentication from "../../component/Authentication/Authentication";

const Login = () => {
    return (
        <section className="px-2 lg:px-0 pt-20 lg:pt-0" >
            <h1 className="text-center font-bold text-3xl lg:4xl">
                Login With
            </h1>
            {/*// ? Authentication */}

            <div className="lg:w-1/3 mx-auto lg:pt-20 pt-12">
                <Authentication />

                <p className="pt-3 text-center">Don’t have an account? <Link to="/register" className="text-secondary"> Create an account</Link></p>
            </div>

        </section>
    );
};

export default Login;