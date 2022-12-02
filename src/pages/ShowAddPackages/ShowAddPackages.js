import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/Authprovider';
import ShowPakSingle from './ShowPakSingle';

const ShowAddPackages = () => {
    const [addpackages, setAddpackages] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/userPackage`)
            .then(res => res.json())
            .then(data => setAddpackages(data))

    }, [])
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <div class="flex flex-row space-x-4">

            <div class="w-8 h-8 rounded-full animate-spin mx-auto
    border-4 border-solid border-green-500 border-t-transparent"></div></div>
    };
    return (
        <div className='mx-auto text-center mt-32 h-auto justify-center items-center'>
            <div >
                <h1 className='text-5xl font-bold mb-6'>Top <span className='text-emerald-400'> New Destinations</span> Add {addpackages.length}</h1>
                <p className='w-2/5 text-center mx-auto text-lg text-zinc-400 mb-8'>Explore our top destinations voted by more than 100,000+ customers around the world.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    addpackages.map(addpackage => <ShowPakSingle
                        key={addpackage._id}
                        addpackage={addpackage}

                    >
                    </ShowPakSingle>)
                }
            </div>

        </div>
    );
};

export default ShowAddPackages;