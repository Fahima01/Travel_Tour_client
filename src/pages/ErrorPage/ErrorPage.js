import React from 'react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-8xl font-bold">404 PAGE</h1>
                    <p className="py-6 text-3xl">Opps page is not found!!</p>
                    <Link to='/'>
                        <button className="btn btn-accent">Go back Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;