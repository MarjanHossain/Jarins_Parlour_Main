import React from 'react';
import star from "../../../assets/icons/star.png"
const TestimonialCard = ({ testimonialInfo }) => {
    const { name, img, post, details, style } = testimonialInfo;
    return (
        <div className={`mb-5 lg:mb-0 lg:space-y-5 space-y-4 px-5 py-5 ${style}  hover:text-white rounded-xl shadow-2xl`}>
            {/*// ? header part */}
            <div className="flex items-center gap-3">
                <img src={img} alt="" className="h-16 w-16" />
                <div>
                    <h1 className="text-xl font-semibold">{name}</h1>
                    <h2 className=" font-semibold ">{post}</h2>
                </div>
            </div>
            {/* details part */}
            <p className="text-gray ">
                {details}
            </p>
            {/*//? star icon */}
            <div className="flex gap-3">
                <img src={star} alt="" className="h-6 w-6" />
                <img src={star} alt="" className="h-6 w-6" />
                <img src={star} alt="" className="h-6 w-6" />
                <img src={star} alt="" className="h-6 w-6" />
                <img src={star} alt="" className="h-6 w-6" />
            </div>
        </div>
    );
};

export default TestimonialCard;