import React from 'react';
import ServiceCard from './ServiceCard';

const OurService = () => {
    const cardData = [
        {
            title: "Express and Standard Delivary",
            description:
                "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
        },
        {
            title: "Nationwide Delivery",
            description:
                "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
        },
        {
            title: "Fullfilment Solution",
            description:
                "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
        },
        {
            title: "Cash on Home Delivary",
            description:
                "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
        },
        {
            title: "Parcel Return",
            description:
                "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
        },
        {
            title: "Corporate Service",
            description:
                "Customized corporate services which includes warehouse and inventory management support.",
        },
    ];
    return (
        <div className='my-6 bg-secondary p-6 rounded-2xl'>
            <h2 className='text-center text-[#ffffff] mt-3 text-2xl font-bold'>Our Service</h2>
            <p className='text-[#ffffff] text-center mt-2'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business <br /> shipments — we deliver on time, every time.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 place-items-center '>
                {
                    cardData.map(card=><ServiceCard card={card}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default OurService;