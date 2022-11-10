import React from 'react';
import { Link } from 'react-router-dom';

const SinglePackageCard = ({ singlePackage }) => {
    const { _id, img, title, price, discount } = singlePackage


    return (
        <div className="card gap-10 w-50 h-full bg-base-100 shadow-xl">
            <figure><img className='h-80 w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-center font-bold">
                    {title}


                </h2>
                <p>Discount: {discount}%</p>
                <div className="card-actions justify-evenly">
                    <Link to={`/packagesDetails/${_id}`}>
                        <button className="btn btn-outline rounded-lg">See Details</button>
                    </Link>
                    <div className="badge bg-emerald-400 border-0 text-lg p-5 cursor-pointer">Price: ${price}</div>
                </div>
            </div>
        </div>
    );
};

export default SinglePackageCard;