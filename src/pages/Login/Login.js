import React from 'react';

const Login = () => {
    return (
        <div className='max-w-screen-xl mx-auto h-screen justify-items-center align-middle'>
            <form >
                <div className='flex gap-5'>
                    <div className='w-1/2'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your E-mail</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                    </div>


                    <div className='w-1/2'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Password</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                    </div>
                </div>
                <button className="btn btn-accent w-full my-8">Button</button>
            </form>
        </div>
    );
};

export default Login;