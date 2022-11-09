import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

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
                            <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="login" style={{ border: 'none' }} className="btn bg-emerald-500 " />
                    </div>
                </form>
                <p className='mt-5 text-center'>Or Sign Up with</p>
                <div className='flex justify-center text-center mx-auto my-3'>
                    <button type="submit" className="btn mr-2 rounded-full bg-slate-100 border-0"> <FaLinkedinIn className='text-xl text-blue-700' > </FaLinkedinIn></button>
                    <button type="submit" className="btn mr-2 rounded-full bg-slate-100 border-0"> <FcGoogle className='text-xl'></FcGoogle></button>

                    <button type="submit" className="btn mr-2 rounded-full bg-slate-100 border-0"> <FaFacebookF className='text-xl text-blue-900'></FaFacebookF>  </button>
                </div>
                <p className='text-center'>Already have an account? <Link className='font-bold text-lg text-pink-600' to='/login'>Login</Link> here</p>
            </div>
        </div>
    );
};

export default Signup;
