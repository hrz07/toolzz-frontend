import React from 'react';
import me from '../../images/me.jpg'

const Portfolio = () => {
    return (
        <div className='min-h-[90vh]'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={me} className="max-w-sm rounded-lg shadow-2xl" alt='myImage' />
                    <div className='w-[420px]'>
                        <h1 className="text-2xl font-bold">Hello, I am</h1>
                        <h1 className="text-5xl font-bold text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Rashedul Islam Hridoy</h1>
                        
                        <p className="py-6"> <span className='font-bold'>CAREER OBJECTIVES</span> <br/>  To obtain a responsible and challenging Web Developer’s position where my education
                            and hard work will have valuable application.</p>
                        <p className="py-6"> <span className="font-bold">SKILLS</span>  <br/> Frontend: Javascript, ES6, HTML5, CSS3, React.js, Tailwind, Bootstrap <br /> Backend: Express.js, MongoDB, Rest API, Firebase   </p>
                        <a href='https://drive.google.com/file/d/1tVVZrubhYHxOWtBLTxQcnQPh10phPkL1/view' target="_blank" className="btn btn-primary">My Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;