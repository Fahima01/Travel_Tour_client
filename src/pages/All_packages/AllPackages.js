import React, { useEffect, useState } from 'react';
import SinglePackageCard from './SinglePackageCard';


const AllPackages = () => {
    const [allPackages, setAllPackages] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/allpackages')
            .then(res => res.json())
            .then(data => setAllPackages(data))

    }, [])
    return (
        <div className='mx-auto text-center mt-32 h-auto justify-center items-center'>
            <div >
                <h1 className='text-5xl font-bold mb-6'>Top <span className='text-emerald-400'> Destination</span> Packages</h1>
                <p className='w-2/5 text-center mx-auto text-lg text-zinc-400 mb-8'>Explore our top destinations voted by more than 100,000+ customers around the world.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    allPackages.map(singlePackage => <SinglePackageCard
                        key={singlePackage._id}
                        singlePackage={singlePackage}

                    ></SinglePackageCard>)
                }

            </div>

        </div>
    );
};

export default AllPackages;