import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/Authprovider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className="flex flex-row space-x-4">
            <div className="w-12 h-12 rounded-full animate-spin
    border border-solid border-yellow-500 border-t-transparent"></div></div>
    }

    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;