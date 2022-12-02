import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/Authprovider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className="flex flex-row space-x-4">
            <div className="w-10 h-10 rounded-full animate-spin align-middle
    border border-solid border-green-600 border-t-transparent"></div></div>
    }

    if (user && user.uid) {
        return children
    }
    return <Navigate to='/packagesDetails' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;