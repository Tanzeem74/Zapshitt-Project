import React from 'react';
import { FiTruck } from 'react-icons/fi';
import WorkCard from './WorkCard';

const HowitWorks = () => {
    const cardData = [
        {
            icon: <FiTruck />,
            title: "Booking Pick & Drop",
            description:
                "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            icon: <FiTruck />,
            title: "Cash On Delivery",
            description:
                "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            icon: <FiTruck />,
            title: "Delivery Hub",
            description:
                "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            icon: <FiTruck />,
            title: "Booking SME & Corporate",
            description:
                "From personal packages to business shipments — we deliver on time, every time.",
        },
    ];
    return (
        <div className='my-6'>
            <h4 className='text-black font-semibold px-4 text-2xl'>How it works</h4>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-4 mt-3'>
                {cardData.map((card, index) => (
                    <WorkCard key={index} 
                        icon={card.icon}
                        title={card.title}
                        description={card.description}/>
                ))}
            </div>
        </div>
    );
};

export default HowitWorks;