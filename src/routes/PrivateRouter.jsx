import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    }
    if(user){
        return children;
    }
   
    return <Navigate state={{from : location}} to='/login' replace></Navigate>
};

export default PrivateRouter;