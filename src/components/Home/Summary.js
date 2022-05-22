import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import { MdOutlineRateReview } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { BsTools } from 'react-icons/bs';
import './style.css'

const summary =
    [{
        icon: BsPeopleFill,
        text: '100+ customers'
    },{
        icon: MdOutlineRateReview,
        text: '33K+ Reviews'
    },{
        icon: GiReceiveMoney,
        text: '120M+ Annual revenue'
    },{
        icon: BsTools,
        text: ' 50+ tools'
    }]



const Summary = () => {
    return (
        <div className='flex flex-wrap items-center gap-10 my-10 justify-center  '>
            {
                summary.map((item,index)=>  <div key={index} className='flex flex-col justify-center items-center text-center w-[150px] h-[150px] boxShadow rounded-xl text-neutral' >
                    < item.icon size={45} />
                    <h1 className='text-neutral font-bold'>{ item.text}</h1>
                    </div>)
           }
        </div>
    );
};

export default Summary;