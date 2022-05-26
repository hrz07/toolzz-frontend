import React from 'react';
import light from '../../images/light.jpeg'

const Countdown = () => {
    return (
        <div className=" my-10">
            <div className="hero min-h-[500px] bg-indigo-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={light} className="max-w-sm rounded-lg" />
                    <div className="w-[450px]">
                        <h1>OFER OF THE DAY</h1>  
                        <h1 className="text-5xl font-bold">BOUDIN PORKBELL</h1>

                        <h1 className="text-rose-600 font-bold text-7xl">7x Value</h1>
                        <h1 className="text-xl font-bold">Only <span className='text-3xl font-bold'>$150</span> </h1>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;