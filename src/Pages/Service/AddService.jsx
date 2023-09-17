import upload from "../../assets/icons/upload.png"
const AddService = () => {
    return (
        <section
            data-aos="fade-down"
            data-aos-duration="3000">
            <h1 className="lg:hidden text-gray text-center py-3">Add service</h1>

            <div className="lg:flex gap-14 top-5 lg:top-0">
                {/* //? Input Area */}
                <div className="input2 text-lg lg:space-y-8 space-y-5 lg:w-1/2">
                    <div className="lg:space-y-3 space-y-2">
                        <h1>Service Title</h1>
                        <input type="text" placeholder="Enter title" />
                    </div>
                    <div className="lg:space-y-3 space-y-2">
                        <h1>Service Area</h1>
                        <textarea name="Service-Area" id="" cols="30" rows="5" placeholder="Enter Designation"></textarea>
                    </div>
                </div>
                {/* //? Upload Button */}
                <div className="space-y-4">
                    <h1 className="text-lg ">Image</h1>
                    <button className="flex gap-2 bg-red-500 bg-opacity-20 border border-red-600 px-5 py-2 rounded-lg  ">
                        <img src={upload} alt="" />
                        <p className="text-red-700">Upload image</p>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AddService;