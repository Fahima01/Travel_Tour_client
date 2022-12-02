import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from './DestinationCard';

const Destinations = () => {
    const [packages, setPackages] = useState([]);


    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-fahima01-fahima01.vercel.app/packages')
            .then(res => res.json())
            .then(data => setPackages(data))

    }, [])
    return (
        <div className='mx-auto text-center mt-32 h-auto justify-center items-center'>
            <div >
                <h1 className='text-5xl font-bold mb-6'>Top <span className='text-emerald-400'> Destination</span> Packages</h1>
                <p className='w-2/5 text-center mx-auto text-lg text-zinc-400 mb-8'>Explore our top destinations voted by more than 100,000+ customers around the world.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    packages.map(pakage => <DestinationCard
                        key={pakage._id}
                        pakage={pakage}
                    ></DestinationCard>)

                }

            </div>
            <Link to={'/packages'}>
                <button className="btn btn-accent rounded-lg mt-10">See All</button>
            </Link>
        </div>
    );
};

export default Destinations;