import React from 'react';
import NotfoundGif from '../../images/notfound.gif'

const Notfound = () => {
    return (
        <div className='flex items-center justify-center h-[80vh] w-full'>
            <img src={NotfoundGif} alt="notfound-gif" />
        </div>
    );
};

export default Notfound;