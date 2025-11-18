import React from 'react';
import Banner from './Banner';
import HowitWorks from './HowitWorks';
import OurService from './OurService';
import Brands from './Brands';
import Reviews from './Reviews';

const reviewsPromise = fetch('/reviews.json')
    .then(res => res.json())
const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <HowitWorks></HowitWorks>
            <OurService></OurService>
            <Brands></Brands>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;