import React, { useContext, useState } from 'react';
// import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import SocialLogin from './SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registration = () => {
    //password hide and show
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show)
    }


    const navigate = useNavigate();
    const { user, createAccount, updateUserProfile } = useContext(AuthContext);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        // console.log(data);

        if (data.confirmPassword != data.password) {
            toast("Password and confirm password doesn't match");
            return;
        }

        // createAccount(data.email, data.password)
        //     .then(res => {
        //         const user = res.user;
        //         // console.log(user);
        //         toast("Successfully registered!!!")
        //         navigate('/login');
        //     })
        //     .catch((error) => {
        //         // console.log(error);
        //         toast("  Registration Failed!!!");
        //     })

        createAccount(data.email, data.password)
            .then(res => {
                const user = res.user;
                // console.log(user);
                updateUserProfile(data.name)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, role: 'customer', password: data.password };
                        // console.log('User profile info updated', saveUser);


                        fetch(' http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                // console.log(data);
             
                                if (data.insertedId) {
                                    reset();
                                    toast("Successfully registered!!!")
                                    navigate('/login');
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })

    }






    return (
        <div>
            {/* <Helmet>
                <title>Registration | CosmetiCraft</title>
            </Helmet> */}


            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="hero min-h-screen  ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold mt-16">Register now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat u  aut repudiandae et a id nisi.</p>
                        </div>


                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-800 border  ">
                            <div className="card-body">


                                <div className="form-control  ">
                                    <label className="label">
                                        <span className="label-text text-black">Name</span>
                                    </label>
                                    <input type="text"
                                        {...register("name", { required: true, maxLength: 100 })}
                                        placeholder="Enter your Name"
                                        className="input input-bordered bg-white border border-sky-300 text-black" />
                                    {errors.name && <span className='text-red-600 mt-2'>Name field is required</span>}
                                </div>

                                <div className="form-control  ">
                                    <label className="label">
                                        <span className="label-text text-black">Email</span>
                                    </label>
                                    <input type="text"
                                        {...register("email", { required: true, maxLength: 100 })}
                                        placeholder="Enter your Email"
                                        className="input input-bordered bg-white border border-sky-300 text-black" />
                                    {errors.email && <span className='text-red-600 mt-2'>Email field is required</span>}
                                </div>












                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black">Password</span>
                                    </label>
                                    <div className='w-full rounded-md border-sky-300 flex  justify-between border'>
                                        <input type={show ? "text" : "password"} required
                                            {...register("password", {
                                                required: true,
                                                maxLength: 20,
                                                minLength: 6,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/

                                            })}
                                            placeholder="password" className="input    bg-white border  text-black" />
                                        <button  ><FaEye className=' mr-4' onClick={handleShow}>{show ? "Hide" : "Show"}</FaEye></button>


                                    </div>
                                    <p>
                                        {errors.password?.type === 'required' && <p className='text-red-600 mt-2' > Password is required</p>}
                                        {errors.password?.type === 'minLength' && <p className='text-red-600 mt-2' > Password must be 6 character</p>}
                                        {errors.password?.type === 'maxLength' && <p className='text-red-600 mt-2' > Password should not be greater than 20 character   </p>}
                                        {errors.password?.type === 'pattern' && <p className='text-red-600 mt-2' > Password  must have one uppercase one lowercase one number and one special characters  </p>}
                                    </p>

                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black">Confirm Password</span>
                                    </label>
                                    <div className='w-full rounded-md border-sky-300 flex  justify-between border'>
                                        <input type={show ? "text" : "password"} required
                                            {...register("confirmPassword", {
                                                required: true,
                                                maxLength: 20,
                                                minLength: 6,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/

                                            })}
                                            placeholder="confirm password" className="input    bg-white border  text-black" />
                                        <button  ><FaEye className=' mr-4' onClick={handleShow}>{show ? "Hide" : "Show"}</FaEye></button>


                                    </div>
                                    <p>
                                        {errors.confirmPassword?.type === 'required' && <p className='text-red-600 mt-2' > Password is required</p>}
                                        {errors.confirmPassword?.type === 'minLength' && <p className='text-red-600 mt-2' > Password must be 6 character</p>}
                                        {errors.confirmPassword?.type === 'maxLength' && <p className='text-red-600 mt-2' > Password should not be greater than 20 character   </p>}
                                        {errors.confirmPassword?.type === 'pattern' && <p className='text-red-600 mt-2' > Password  must have one uppercase one lowercase one number and one special characters  </p>}
                                    </p>

                                </div>



                                <div className="form-control mt-6">
                                    <button className="btn btn-primary"><input type="submit" value='Register' /></button>

                                </div>
                                <br />
                                <hr />


                                <SocialLogin></SocialLogin>


                                <div className='mx-auto mt-2'>
                                    <p><small>Already have an account?</small>
                                        <Link to='/login' className='text-blue-600 ml-2'>Login Now</Link></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>


            <ToastContainer />

        </div>
    );
};

export default Registration;