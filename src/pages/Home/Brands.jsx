import React from 'react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../assets/brands/amazon.png';
import moonstar from '../../assets/brands/moonstar.png';
import star from '../../assets/brands/star.png';
import start_people from '../../assets/brands/start_people.png';
import casio from '../../assets/brands/casio.png';
import randstad from '../../assets/brands/randstad.png';
import amazonVec from '../../assets/brands/amazon_vector.png';

const brandLogos = [amazon, moonstar, star, start_people, casio, randstad, amazonVec];

const Brands = () => {
    return (
        <div>
            <h1 className='text-center text-secondary text-2xl font-bold'>We have Thousand of sales team</h1>
            <Swiper
                loop={true}
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper my-8"
            >

                {
                    brandLogos.map((brandLogo, index) => <SwiperSlide key={index}>
                        <img src={brandLogo} alt="" />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Brands;