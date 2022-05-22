import React from 'react';
import bannerImg from '../../images/bannar.webp'
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-[#dcfce7]">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} class="max-w-sm rounded-lg" alt='bannerImage' />
                <div className='w-1/2'>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;