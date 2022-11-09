import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Package = () => {
    const packages = useLoaderData()
    return (
        <div>
            <h3 className='text-4xl'>{packages.title}</h3>
        </div>
    );
};

export default Package;