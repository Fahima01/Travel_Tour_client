import React, { useContext, useState } from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { Link, Navigate, } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../context/Authprovider';
import { GoogleAuthProvider } from 'firebase/auth';


const Signup = () => {
    const { createUser, googleSignIn } = useContext(AuthContext)
    const [user, setUser] = useState({})
    const [error, setError] = useState(null);
    const provider = new GoogleAuthProvider()

    const handleGoogleSignin = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user
                console.log(user)

            })
            .catch(err => console.error(err))
    }

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Password should be 6 characters or more.')
            return;
        }




        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);
                form.reset();
                Navigate('/login')

            })


            .catch(err => console.error(err))

    }
    return (
        <div className='h-auto bg-cyan-900 pt-10 pb-12'>
            <div className='w-1/3 mx-auto bg-slate-200 p-10 rounded-md'>
                <form onSubmit={handleSignup} className="card-body">
                    <h1 className="text-4xl text-center font-bold">Sign Up Now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <p>At least 6 charecter</p>
                            <a href="/" className="text-red-500">{error}</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="login" style={{ border: 'none' }} className="btn bg-emerald-500 " />
                    </div>
                </form>
                <p className='mt-5 text-center'>Or Sign Up with</p>
                <div className='flex justify-center text-center mx-auto my-3'>
                    {/* <button type="submit" className="btn mr-2 rounded-full bg-slate-100 border-0"> <FaLinkedinIn className='text-xl text-blue-700' > </FaLinkedinIn></button> */}
                    <button onClick={handleGoogleSignin} type="submit" className="btn btn-outline btn-success text-lg font-bold text-green-700 mr-2 rounded-lg w-full"> <FcGoogle className='text-xl mr-3'></FcGoogle> Google </button>

                    {/* <button type="submit" className="btn mr-2 rounded-full bg-slate-100 border-0"> <FaFacebookF className='text-xl text-blue-900'></FaFacebookF>  </button> */}
                </div>
                <p className='text-center'>Already have an account? <Link className='font-bold text-lg text-pink-600' to='/login'>Login</Link> here</p>
            </div>
        </div>
    );
};

export default Signup;
