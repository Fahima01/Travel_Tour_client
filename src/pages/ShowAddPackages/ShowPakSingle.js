import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ShowPakSingle = ({ addpackage }) => {

    const { PackageName, price, description, destination, image } = addpackage

    return (
        <div className="card gap-10 w-50 h-full bg-base-100 shadow-xl">
            <figure>

                <PhotoProvider>
                    <PhotoView src={image}>
                        <img className='h-80 w-full cursor-pointer' src={image} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-center text-3xl  justify-evenly font-bold">
                    {PackageName}


                </h2>
                <p className='font-bold text-fuchsia-500 text-xl'>Destination: {destination}</p>
                <div className="card-actions justify-evenly">
                    <p>{description}</p>
                    <div className="badge bg-emerald-400 border-0 text-lg p-5 cursor-pointer">Price: ${price}</div>
                </div>
            </div>
        </div>
    );
};

export default ShowPakSingle;