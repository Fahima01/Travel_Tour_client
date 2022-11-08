import React from 'react';

const HotelCard = ({ hotel }) => {
    const { price, title, discount, img } = hotel

    return (
        <div className="card w-50 h-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body h-60">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Discount: {discount}%</p>
                <div className="card-actions justify-evenly">
                    <div className="badge badge-outline p-2 cursor-pointer">View Package</div>
                    <div className="badge bg-emerald-400 border-0 text-lg p-4 cursor-pointer">Price: ${price}</div>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;