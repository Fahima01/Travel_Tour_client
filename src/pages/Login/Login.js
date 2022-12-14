import React from 'react';
import { json, Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider';

const Login = () => {

    const { login, loading } = useContext(AuthContext)


    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;


                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                form.reset();

                //get jwt token
                fetch('https://b6a11-service-review-server-side-fahima01-fahima01.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('tour-Token', data.token)
                        navigate(from, { replace: true })
                    })


            })

            .catch(err => console.error(err))
    }

    if (loading) {
        return <div class="flex flex-row space-x-4">

            <div class="w-12 h-12 rounded-full animate-spin
    border border-solid border-yellow-500 border-t-transparent"></div></div>
    };

    return (
        <div className='h-auto bg-cyan-900 pt-10 pb-12'>
            <div className='w-1/3 mx-auto bg-slate-200 p-10 rounded-md'>
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-4xl text-center font-bold">Login now!</h1>
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
                <p className='text-center'>New to <span>Travel Tour</span>? <Link className='font-bold text-lg text-pink-600' to='/signup'>Sign Up</Link> here</p>
            </div>
        </div>
        // ----------------------

    );
};

export default Login;