import React from 'react';
import { GoGlobe } from 'react-icons/go';
import { MdSupportAgent } from 'react-icons/md';
import { FaDollyFlatbed } from 'react-icons/fa';

const Facility = () => {
    return (
        <div class="flex gap-5 my-40">
            <div className='w-1/2'>
                <div className="card w-full bg-black-100 shadow-xl image-full">
                    <figure><img src="https://media.istockphoto.com/id/1160947136/photo/couple-relax-on-the-beach-enjoy-beautiful-sea-on-the-tropical-island.jpg?s=612x612&w=0&k=20&c=WJWEH22TFinjI0edzblfH-Nw0cdBfPX5LV8EMvs8Quo=" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-5xl font-bold py-7">Discover Special Deals!</h2>
                        <p className='text-xl'>Make sure to check out these special
                            promotions</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-accent">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-1/2 h-80'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-5xl">We give best <span className='text-emerald-400'>Deals!</span></h2>
                        <p className='text-xl text-zinc-500 my-5'>Enjoy our top class tour packeges with amazing discount prices!!</p>
                        <div className="card-actions justify-start">
                            <div className='flex gap-4 my-4'>
                                <i> <GoGlobe className='text-5xl text-emerald-400'></GoGlobe> </i>
                                <div>
                                    <p className='text-3xl font-semibold ' >700 Destinations</p>
                                    <p>Our expert team handpicked all destinations in this site</p>
                                </div>
                            </div>
                            <div className='flex gap-4 my-4'>
                                <i> <FaDollyFlatbed className='text-5xl text-emerald-400'></FaDollyFlatbed> </i>
                                <div>
                                    <p className='text-3xl font-semibold' >Best Price Gurantee</p>
                                    <p>Price match within 48 hours of order confirmation</p>
                                </div>
                            </div>
                            <div className='flex gap-4 my-4'>
                                <i> <MdSupportAgent className='text-5xl text-emerald-400'></MdSupportAgent> </i>
                                <div>
                                    <p className='text-3xl font-semibold' >Top Notch Support</p>
                                    <p>We are here to help, before, during, and even after your trip.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facility;