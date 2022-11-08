import React from 'react';
import img1 from '../../../assets/hero-right.jpg';

const HeroSection = () => {
    return (
        <div className=" hero min-h-screen mt-6">
            <div className="hero-content flex-col lg:flex-row-reverse mx-auto w-full">
                <div className='w-1/3'>
                    <img className='rounded-xl md:w-full ' src={img1} alt='' />
                </div>
                <div className='w-2/3'>
                    <h1 className="lg:text-8xl md:text-6xl sm:text-5xl  mr-0 font-bold w-2/3">Find Next Place <br></br>
                        To <span className='text-emerald-400'> Visit!</span></h1>

                    <p className="py-6 w-2/3">Discover amzaing places at exclusive deals.
                        Eat, Shop, Visit interesting places around the world.</p>
                    <button className=" px-4 py-2 shadow-xl font-bold text-xl border border-green-500 rounded-full  text-green-500 ">Book With us!</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;