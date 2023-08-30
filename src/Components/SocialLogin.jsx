import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const { googleIn } = useAuth();

    const handleGoogle = () => {
        googleIn()
            .then(res => {
                const loggedUser = res.user;
                const newData = {
                    email: loggedUser.email,
                    name: loggedUser.displayName,
                    photo: loggedUser.photoURL
                }

                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newData)
                })
                    .then(res => res.json())
                    .then((data) => {
                        console.log(data);
                        navigate("/")
                        Swal.fire({
                            title: 'Success!',
                            text: 'Sign In Successful',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })

                    })

            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })

            })
    }
    return (
        <div className='my-5'>
        <div className="divider">Or Sing In With</div>
        <div className='text-center'>
            <button className='myBtn w-full lg:w-72 inline-flex items-center justify-center gap-2' onClick={handleGoogle}>
                <FaGoogle className='w-6 h-6' />
                Google
            </button>
        </div>
    </div>
    );
};

export default SocialLogin;