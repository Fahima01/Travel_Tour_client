import React, { useContext, useEffect, useState } from 'react';
import { FaStar, FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Review from '../Home/Home/Shared/Review/Review';




const PackageDetails = () => {
    const { _id, title, discription, des_title, img, discount, price, } = useLoaderData()

    const { user } = useContext(AuthContext)
    const notify = () =>
        toast.success("Your Review added!!", {
            position: "top-center",
        });
    const hanldeAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const rating = form.rating.value;
        const review = form.review.value;
        const name = form.name.value;

        const email = user?.email || 'unregistered';

        const userReview = {
            packageId: _id,
            PackageName: title,
            email,
            review,
            rating,
            name
        }

        fetch('https://b6a11-service-review-server-side-fahima01-fahima01.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    form.reset();
                }

            })
            .catch(er => console.error(er));


    }




    return (
        <div className='h-auto bg-cyan-900 pt-2 pb-12'>
            <div className="w-2/3 mx-auto bg-slate-100 p-10 rounded-md">
                <h2 className='text-4xl font-bold py-3'>Package Name: <span className='text-emerald-500' >{title}</span ></h2>
                <div className='flex mr-2 text-yellow-400 items-center gap-2 py-5 '>
                    <p className='text-black font-semibold text-lg mr-3'>Rating:  </p>
                    <i> <FaStar></FaStar>  </i>
                    <i> <FaStar></FaStar>  </i>
                    <i> <FaStar></FaStar>  </i>
                    <i> <FaStar></FaStar>  </i>
                    <i> <FaStar></FaStar>  </i>
                    <p className='text-xl font-semibold text-red-600'>Discount: {discount}%</p>
                </div>
                <img className='w-full h-96' src={img} alt="" />
                <h1 className='text-4xl font-bold py-5' >{des_title}</h1>
                <p className='text-xl'>{discription}</p>

                <div className='flex mx-auto w-full justify-between py-4 mt-5'>
                    <p className='text-xl italic cursor-pointer font-semibold text-white bg-pink-600 py-3 px-6 rounded-xl mb-3 duration-300'>Price:${price}</p>


                    <button className="btn  btn-accent rounded-xl ">Book now</button>
                </div>
            </div>

            <div className="w-2/3 mx-auto bg-slate-100 mt-9 p-10 rounded-md">
                <h2 className='text-2xl font-bold mb-5'>Leave a review of our service:</h2>
                <form onSubmit={hanldeAddReview}>

                    <input type="text" placeholder="Your email" className="input input-bordered text-gray-500  w-full max-w-xs" name="email" defaultValue={user?.email} readOnly />
                    <input name='name' type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs ml-3" defaultValue={user?.displayName
                    } />
                    <select name='rating' className="select w-full max-w-xs input-bordered  mt-4 ">
                        <option disabled selected>Your rating</option>
                        <option>1 star</option>
                        <option> 2 star</option>
                        <option>3 star </option>
                        <option> 4 star</option>
                        <option>5 star </option>
                    </select>

                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text">Your review</span>
                        </label>
                        <textarea name="review" className="textarea textarea-bordered h-24" placeholder="Write your thought"></textarea>
                    </div>
                    {
                        user?.email ?
                            <>
                                <button onClick={notify}>
                                    <input type="submit" value="Submit" className="btn btn-accent mt-4 " />
                                </button>
                            </>
                            :
                            <Link to='/login'>
                                <button className="btn btn-accent mt-4 " >
                                    Submit
                                </button>
                            </Link>
                    }
                    <ToastContainer />

                </form>

            </div>
            <div className='w-4/5 h-screen mx-auto bg-slate-100 p-10 rounded-md' >
                <Review></Review>

            </div>
        </div>
    );
};

export default PackageDetails;