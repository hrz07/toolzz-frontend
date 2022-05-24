import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import Loading from '../Loading/Loading';
import auth from '../../Firebase.init';



const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin,adminLoading] = useAdmin(user)
    const location = useLocation()

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!admin) {
        return <Navigate to='/' state={{from: location}} replace />
    }
    return children;
};

export default RequireAdmin;