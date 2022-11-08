import React, { useEffect, useState } from 'react';
import HotelCard from './HotelCard';

const HotelRooms = () => {
    const [hotels, setHotels] = useState([])

    useEffect(() => {
        fetch('hotels.json')
            .then(res => res.json())
            .then(data => setHotels(data))

    }, [])

    return (
        <div>
            <div className='mx-auto text-center mt-32 h-auto justify-center items-center'>
                <div >
                    <h1 className='text-5xl font-bold mb-6'>Top <span className='text-emerald-400'> Hotels</span></h1>
                    <p className='w-2/5 text-center mx-auto text-lg text-zinc-400 mb-8'>Explore our top destinations voted by more than 100,000+ customers around the world.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        hotels.map(hotel => <HotelCard
                            key={hotel.id}
                            hotel={hotel}
                        ></HotelCard>)

                    }

                </div>
            </div>

        </div>
    );
};

export default HotelRooms;