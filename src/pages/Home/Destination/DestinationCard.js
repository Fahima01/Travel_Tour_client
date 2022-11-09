import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DestinationCard = ({ pakage }) => {
    const { _id, img, title, price, discount, staying } = pakage
    return (
        <div >
            <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                <div className='h-96 w-full'>
                    <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={img} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via via-transparent to-black group-hover:from-black/70 group-hover:via-black-60 group-hover:to-black/70"></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%] group-hover:translate-y-0 transition-all duration-500'>
                        <h1 className='text-3xl font-bold text-white  group-hover:opacity-100 transition-opacity' >{title}</h1>
                        <p className='text-lg italic text-white mb-3 duration-300'>{staying}</p>
                        <div className='flex mx-auto w-full justify-evenly'>
                            <p className='text-xl italic text-white mb-3 duration-300'>Price:${price}</p>
                            <div className='flex mr-2 text-yellow-400'>
                                <i> <FaStar></FaStar>  </i>
                                <i> <FaStar></FaStar>  </i>
                                <i> <FaStar></FaStar>  </i>
                                <i> <FaStar></FaStar>  </i>
                                <i> <FaStar></FaStar>  </i>
                            </div>
                        </div>
                        <Link to={`/packagesDetails/${_id}`}>
                            <button className="btn btn-accent rounded-full">See Details</button>
                        </Link>

                    </div>
                </div>


            </div>






















            {/* <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default DestinationCard;