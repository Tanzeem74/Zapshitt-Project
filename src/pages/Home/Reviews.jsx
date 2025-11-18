import React, { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import customerImg from '../../assets/customer-top.png';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromise }) => {
    const data = use(reviewsPromise);
    console.log(data);
    return (
        <div className='my-24'>
            <div className=' flex flex-col justify-center items-center space-y-2'>
                <img src={customerImg} className='h-[100px] w-[200px]' alt="" />
                <h2 className='text-2xl font-bold'>What our customer saying</h2>
                <p className='text-gray-500 text-center'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>
            </div>
            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    scale:0.75,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination,Autoplay]}
                className="mySwiper mt-20"
            >
                {
                    data.map(review => <SwiperSlide key={review.id}>
                        <ReviewCard review={review}></ReviewCard>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Reviews;