import React from 'react';
import bannerImg from '../../images/bannar.webp'
import banner from '../../images/banner.jpeg'
const Banner = () => {
    return (
        <div className="hero min-h-[75vh] bg-indigo-100  bg-center bg-cover bg-no-repeat object-cover">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="max-w-sm rounded-lg" alt='bannerImage' />
                <div className='w-1/2'>
                    <h1 className=" ">FIND AUTO PARTS FAST</h1>
                    <h1 className="text-5xl font-bold">BEST QUALITY</h1>
                    <h1 className="text-5xl font-bold text-primary">FOR BEST PRICE</h1>
                    <h1>This is our most comprehensive vehicle parts company.</h1>
                    <button className="btn btn-primary">BUY NOW</button>
                </div>
    </div> 
        </div>
    );
};

export default Banner;