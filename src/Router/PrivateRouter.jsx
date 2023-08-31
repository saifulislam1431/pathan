import React from 'react';
import Swal from 'sweetalert2';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loading from '../Pages/Loading/Loading';

const PrivateRouter = ({children}) => {
    const {user } = useAuth();
    const location = useLocation()
    // if(loading){
    //     return <Loading></Loading>
    // }
    if(!user){
        Swal.fire({
            title: 'Alert!',
            text: "You have to sign in first",
            icon: 'error',
            confirmButtonText: 'Cool'
          })
          return <Navigate to="/signIn" state={{from : location}} replace/>
    }
    if(user){
        return children;
    }

};

export default PrivateRouter;