
const MakeAdmin = () => {
    return (
        <section>
            <h1 className="lg:hidden text-gray py-5 text-center">Make admin</h1>
            <div className="lg:flex gap-8   ">

                {/* //? Input */}
                <div className="lg:space-y-2 space-y-2 input2 lg:w-1/2">
                    <h1 className="text-lg font-semibold ps-1">Email</h1>
                    <input type="email" name="" id="" placeholder="Example@gmail.com" />
                </div>
                {/* //? Button */}
                <div className="pt-9">
                    <button className="btn "> Submit</button>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;