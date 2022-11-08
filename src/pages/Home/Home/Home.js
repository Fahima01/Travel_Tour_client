import React from 'react';
import Destinations from '../Destination/Destination';
import HeroSection from '../Hero_Section/HeroSection';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <HeroSection></HeroSection>
            <Destinations></Destinations>
        </div>
    );
};

export default Home;