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
                <div className="hero  my-24 ">
                    <div className="hero-content flex-col lg:flex-row-reverse w-full">

                        <div className="card bg-white flex-shrink-0  w-3/5  shadow-2xl bg-base-800 border  ">
                            <div className="card-body">

                                <h1 className='text-4xl font-bold  '>Create an <span className='text-blue-600 '>account</span></h1>
                                <div className='border w-24 border-blue-600 mb-6'> </div>

                                <div className="form-control  mb-4">
                                    <input type="text"
                                        {...register("name", { required: true, maxLength: 100 })}
                                        placeholder="Enter your Name"
                                        className=" py-2   border-b-4 bg-white  outline-none      text-black  text-xl  " />
                                    {errors.name && <span className='text-red-600 mt-2'>Name field is required</span>}
                                </div>

                                <div className="form-control  mb-4">
                                    <input type="email"
                                        {...register("email", { required: true, maxLength: 100 })}
                                        placeholder="Enter your Email"
                                        className=" py-2   border-b-4 bg-white  outline-none      text-black  text-xl  " />
                                    {errors.email && <span className='text-red-600 mt-2'>Email field is required</span>}
                                </div>
                                <div className="form-control  mb-4">
                                    <input type="password"
                                        {...register("password", { required: true, maxLength: 100 })}
                                        placeholder="Enter your Password"
                                        className=" py-2   border-b-4 bg-white  outline-none      text-black  text-xl  " />
                                    {errors.password && <span className='text-red-600 mt-2'>password field is required</span>}
                                </div>

                                <div className='flex justify-between gap-12'>
                                    {/* doctor or patient */}
                                    <div className=' flex '>
                                        <div>
                                            <p className='font-bold'>Are you a : </p>
                                        </div>
                                        <div>
                                            <select {...register("role")}
                                                className='bg-white ml-4 text-gray-500 ' >
                                                <option value="patient"  >Patient</option>
                                                <option value="doctor">Doctor</option>
                                            </select>
                                        </div>

                                    </div>

                                    {/* gender */}
                                    <div className='flex mr-4'>
                                        <div>
                                            <p className='font-bold'>Gender :</p>
                                        </div>
                                        <div>
                                            <select {...register("gender")} className='bg-white ml-4 text-gray-500 '>
                                            <option value="male"  >Male</option>
                                                <option value="female">Female</option>
                                                <option value="other"  >Other</option>
                                            </select>
                                        </div>
                                    </div>
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
                                    <button className="btn btn-primary bg-blue-600 border-none"><input type="submit" value='Register' /></button>

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