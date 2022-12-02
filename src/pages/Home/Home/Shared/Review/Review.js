import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../../../context/Authprovider';
import ReviewRow from '../../../../Package/ReviewRow';
const Review = ({ id }) => {
    const [reviews, setReviews] = useState([])
    const { logOut } = useContext(AuthContext)


    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-fahima01-fahima01.vercel.app/reviews?/packageId=${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('tour-Token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
            })
    }, [id])

    return (
        <div className=' bg-stone-200'>

            <div className=" w-2/3 p-5 mx-auto justify-center items-center">
                <table className="table w-full justify-center items-center  mx-auto ">
                    <thead>

                    </thead>
                    <tbody>

                        {
                            reviews.map(rev => <ReviewRow
                                key={rev._id}
                                rev={rev}
                            ></ReviewRow>)
                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Review;

//20223456Ag_