import React from 'react';
import serviceIcon from '../../assets/service.png';

const ServiceCard = ({card}) => {
    return (
        <div
            className="
        bg-white 
        rounded-[30px] 
        p-10 
        max-w-xl 
        mx-auto 
        text-center 
        shadow 
        w-[360px]
        h-[420px]
        hover:bg-primary
      "
        >
            {/* Icon circle */}
            <div className="flex justify-center mb-6">
                <div className="bg-[#F3F6FF] p-6 rounded-full">
                    <img
                        src={serviceIcon}
                        alt="parcel-icon"
                        className="w-20 h-20"
                    />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-[#0C3A40] text-2xl font-semibold mb-4">
                {card.title}
            </h2>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed text-[16px]">
                {card.description}
            </p>
        </div>
    );
};

export default ServiceCard;