import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/express-delivery.png"
import heroImg from "../../assets/signin-01.png";
import SocialLogin from '../../Components/SocialLogin';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignIn = () => {
    const navigate = useNavigate();
    const { user, signIn } = useAuth();
    const [type, setType] = useState("password");
    const [IsShow, setIsShow] = useState(false);


    const handleShow = () => {
        setType("text")
    }

    const handleHide = () => {
        setType("password")
    }

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
            .then(res => {
                const loggedUser = res.user;
                navigate("/")
                Swal.fire({
                    title: 'Success!',
                    text: 'Sign In Successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
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
        <section className='flex items-center justify-center min-h-[calc(100vh-100px)]'>
            <div>
                <Link to="/" className='text-center my-10'>
                    <div className='flex flex-col items-center relative'>
                        <img src={logo} alt="Logo" className='w-11' />
                        <p className='brandTitle text-xl font-bold text-primary'>Pathan</p>
                    </div>

                </Link>
                <div className='flex gap-14 flex-col lg:flex-row items-center justify-center'>
                    <div className='lg:w-2/4'>
                        <img src={heroImg} alt="Hero" />
                    </div>
                    <div>
                        <h1 className='text-center mb-10 brandTitle text-primary text-3xl'>Sign In</h1>
                        <form onSubmit={handleForm}>
                    <div className='w-full'>

                        <div className='flex flex-col gap-2 w-full'>
                            <label>Email</label>

                            <input type="email"
                                defaultValue={user ? user.email : ""}
                                required={user ? false : true}
                                disabled={user ? true : false}
                                name='email'
                                className='bg-secondary bg-opacity-30 placeholder:text-white py-3 rounded px-4 outline-secondary disabled:opacity-50 disabled:cursor-not-allowed lg:w-96' placeholder='example@123.com' />
                        </div>
                    </div>

                    <div className='w-full mt-5'>
                        <div className=' flex flex-col gap-2 w-full relative'>
                            <label>Password</label>
                            <input type={type}
                                required={user ? false : true}
                                disabled={user ? true : false}
                                name='password'
                                className='bg-secondary bg-opacity-30 placeholder:text-white py-3 rounded px-4 outline-secondary disabled:opacity-50 disabled:cursor-not-allowed lg:w-96' placeholder='Password' />
                            <div className='absolute top-[58%] right-3 cursor-pointer' onClick={() => setIsShow(!IsShow)}>
                                {
                                    IsShow ? <FaEyeSlash className='h-5 w-5 text-primary' onClick={handleHide} /> : <FaEye className='h-5 w-5 text-primary' onClick={handleShow} />
                                }
                            </div>

                        </div>
                    </div>


                    <input type="submit" value="Sign In" className='myBtn my-5' />

                </form>

                        <div className='mt-5'>
                            <h1 className='font-medium'>New To Pathan? <Link className='font-semibold text-secondary underline' to="/signUp">Sign Up</Link></h1>
                        </div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;