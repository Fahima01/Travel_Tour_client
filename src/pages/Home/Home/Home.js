import React from 'react';
import Destinations from '../Destination/Destinations';
import HeroSection from '../Hero_Section/HeroSection';
import HotelRooms from '../Hotel_rooms/HotelRooms';
import Facility from './Facility/Facility';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <HeroSection></HeroSection>
            <Destinations></Destinations>
            <HotelRooms></HotelRooms>
            <Facility></Facility>
        </div>
    );
};

export default Home;