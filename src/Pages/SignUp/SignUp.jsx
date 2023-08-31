import React, { useState } from 'react';
import heroImg from "../../assets/signin-01.png";
import logo from "../../assets/express-delivery.png"
import SocialLogin from '../../Components/SocialLogin';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { HiArrowSmallRight } from 'react-icons/hi2';
const token = import.meta.env.VITE_IMAGE_TOKEN;
const SignUp = () => {
    const navigate = useNavigate();
    const { user, signUp, updateUser } = useAuth();
    const [type, setType] = useState("password");
    const [IsShow, setIsShow] = useState(false);
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");


    const hosting_url = `https://api.imgbb.com/1/upload?key=${token}`


    const handleShow = () => {
        setType("text")
    }

    const handleHide = () => {
        setType("password")
    }

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const image = form.image.files;
        const formData = new FormData();
        formData.append("image", image[0])


        if (!user) {
            if (password.length < 6) {
                setError("Password must be six characters in length")
            }
            if (password !== confirmPassword) {
                return setError("Password doesn't match")
            }
            fetch(hosting_url, {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setUrl(data.data.display_url)
                        signUp(email, password)
                            .then(res => {
                                const data = {
                                    name, email, number, url
                                }
    
                                const loggedUser = res.user;
                                updateUser(loggedUser, name, url)
                                    .then(() => {
                                        fetch("https://pathan-server.vercel.app/users", {
                                            method: "POST",
                                            headers: {
                                                "content-type": "application/json"
                                            },
                                            body: JSON.stringify(data)
                                        })
                                            .then(res => res.json())
                                            .then(data => {
                                                if (data.insertedId) {
                                                    navigate("/")
                                                    Swal.fire({
                                                        title: 'Success!',
                                                        text: 'Sign Up Successful',
                                                        icon: 'success',
                                                        confirmButtonText: 'Ok'
                                                    })
                                                }
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
                })


        }
        if(user){
            navigate("/restPage/nineStep")
        }
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
                        <h1 className='text-center mb-10 brandTitle text-primary text-3xl'>Sign Up</h1>
                        <form onSubmit={handleForm}>
                    <div className='flex w-full gap-4 items-center'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label>Your Name</label>
                            <input type="text"
                                defaultValue={user ? user.displayName : ""}
                                required={user ? false : true}
                                disabled={user ? true : false}
                                name='name'
                                className='bg-secondary bg-opacity-30 placeholder:text-white py-3 rounded px-4 outline-secondary disabled:opacity-50 disabled:cursor-not-allowed' placeholder='e.g,John Doe' />
                        </div>

                        <div className='flex flex-col gap-2 w-1/2'>
                            <label>Email</label>

                            <input type="email"
                                defaultValue={user ? user.email : ""}
                                required={user ? false : true}
                                disabled={user ? true : false}
                                name='email'
                                className='bg-secondary bg-opacity-30 placeholder:text-white py-3 rounded px-4 outline-secondary disabled:opacity-50 disabled:cursor-not-allowed' placeholder='example@123.com' />
                        </div>
                    </div>

                    <div className='flex w-full gap-4 items-center mt-5'>

                        <div className='flex flex-col gap-2 w-1/2'>
                            <label>Phone</label>
                            <input type="number"
                                required={user ? false : true}
                                disabled={user ? true : false}
                                name='number'
                                className='bg-secondary bg-opacity-30 placeholder:text-white py-3 rounded px-4 outline-secondary disabled:opacity-50 disabled:cursor-not-allowed' placeholder='+88012345568' />
                        </div>

                        <div className='flex flex-col gap-2 w-1/2'>
                            <label>Picture</label>
                            <input type="file"
                                required={user ? false : true}
                                disabled={user ? true : false}
                                name='image'
                                className="file-input file-input-bordered file-input-primary w-full disabled:opacity-50 disabled:cursor-not-allowed" />
                        </div>
                    </div>

                    <div className='flex w-full gap-4 items-center mt-5'>

                        <div className='flex flex-col gap-2 w-1/2 relative'>
                            <label>Password</label>
                            <input type={type}
                                required={user ? false : true}
                                disabled={user ? true : false}
                                name='password'
                                className='bg-secondary bg-opacity-30 placeholder:text-white py-3 rounded px-4 outline-secondary disabled:opacity-50 disabled:cursor-not-allowed' placeholder='Password' />
                            <div className='absolute top-[58%] right-3 cursor-pointer' onClick={() => setIsShow(!IsShow)}>
                                {
                                    IsShow ? <FaEyeSlash className='h-5 w-5 text-primary' onClick={handleHide} /> : <FaEye className='h-5 w-5 text-primary' onClick={handleShow} />
                                }
                            </div>

                        </div>

                        <div className='flex flex-col gap-2 w-1/2'>
                            <label>Confirm Password</label>
                            <input type={type}
                                required={user ? false : true}
                                disabled={user ? true : false}
                                name='confirmPassword'
                                className="bg-secondary bg-opacity-30 placeholder:text-white py-3 rounded px-4 outline-secondary disabled:opacity-50 disabled:cursor-not-allowed" placeholder='Confirm Password' />

                        </div>
                    </div>

                    <p role="alert" className='text-error font-medium'>{error}</p>

                    <div className='flex items-end justify-end mt-11'>
                        <button className='myBtn'>Sign Up <HiArrowSmallRight className='w-6 h-6' /></button>
                    </div>

                </form>

                        <div className='mt-5'>
                            <h1 className='font-medium'>Already have an account? <Link className='font-semibold text-secondary underline' to="/signIn">Sign In</Link></h1>
                        </div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;