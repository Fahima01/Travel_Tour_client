import React, { useContext } from 'react';
import { FaStar, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../context/Authprovider';

const ReviewRow = ({ rev }) => {

    const { user } = useContext(AuthContext)
    const { review, rating, email, PackageName } = rev

    return (
        <div >
            <tr>
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                    </th>
                    <td>
                        <div className="flex items-center">
                            <div className="avatar">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        {user?.photoURL ?
                                            <div >
                                                <div>
                                                    <img src={user?.photoURL} alt='' />
                                                </div>
                                            </div>
                                            :
                                            <FaUser></FaUser>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{user?.displayName}</div>
                                <div className="text-sm opacity-50">{email}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='font-bold'> Review:</p>
                        <p className='font-semibold'>  {review}</p>
                        <br />

                    </td>
                    <td className='text-sm'> <strong>Package Name:</strong>   {PackageName}</td>
                    <th>
                        <div className='flex gap-3'>
                            <div className="text-sm flex items-center">
                                <p className='mr-3'> <strong>Rating:</strong>  </p>
                                <FaStar className='text-yellow-500'></FaStar>
                                <p>{rating}</p>
                            </div>
                        </div>
                    </th>
                </tr>
                <br />
            </tr>
        </div>
    );
};

export default ReviewRow;