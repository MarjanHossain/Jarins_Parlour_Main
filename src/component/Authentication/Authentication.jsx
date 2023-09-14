import facebook from "../../../src/assets/icons/facebook-2.png"
import google from "../../../src/assets/icons/google.png"
const Authentication = () => {
    return (
        //? Facebook & Google Authentication//
        <div className="space-y-3 lg:space-y-4">
            {/* //? Facebook Authentication */}
            <div className="authentication ">
                <div className="  "><img src={facebook} alt=""
                    className="bg-blue-600 px-2 py-1 rounded-full " /></div>
                <div className="flex-1 text-center">Continue with Facebook</div>
            </div>

            {/* //? Google */}
            <div className="authentication ">
                <div className="icon"><img src={google} alt="" /></div>
                <div className="flex-1 text-center">Continue with Google</div>
            </div>
        </div>
    );
};

export default Authentication;