import React from 'react';
import Banner from './Banner';
import Summary from './Summary';
import Products from './Products';
import ShowReview from './ShowReview';
import Countdown from './Countdown';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Summary></Summary>
            <Products></Products>
            <Countdown></Countdown>
            <ShowReview></ShowReview>
        </>
    );
};

export default Home;