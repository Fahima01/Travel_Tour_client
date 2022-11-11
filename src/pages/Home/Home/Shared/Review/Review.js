import React, { useState, useEffect } from 'react';
import ReviewRow from '../../../../Package/ReviewRow';
const Review = ({ id }) => {
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?/packageId=${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
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