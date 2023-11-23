import React, { useContext, useState } from 'react';
// import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import SocialLogin from './SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import profilePhoto from '../../assets/images/portfolio-02.jpg'
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const Registration = () => {
    //password hide and show
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show)
    }


    const navigate = useNavigate();
    const { user, createAccount, updateUserProfile } = useContext(AuthContext);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.photo[0]);

        // console.log(data);


        fetch(img_hosting_url, {
            method: 'post',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    // console.log(imgURL);
                    // console.log(data);
                    const { name, email, password, gender, role } = data;

                    const newData = { name, email, password, gender, role, image: imgURL };
                    // console.log(newData);


                    createAccount(data.email, data.password)
                        .then(res => {
                            const user = res.user;
                            // console.log(user);
                            fetch(' http://localhost:5000/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(newData)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data);
                                    if (data.insertedId) {
                                        reset();
                                        toast("Successfully registered!!!")
                                        Swal.fire({
                                            title: 'Success!',
                                            text: 'User registration successfully',
                                            icon: 'success',
                                            confirmButtonText: 'Ok'
                                        })

                                        navigate('/login');
                                    }
                                    else {
                                        navigate('/registration')
                                    }

                                })
                                .catch(error => console.log(error))
                            toast('Error!!')
                            navigate('/registration')


                        })


                }
            })





        // createAccount(data.email, data.password)
        //     .then(res => {
        //         const user = res.user;
        //         // console.log(user);
        //         updateUserProfile(data.name)
        //             .then(() => {
        //                 const saveUser = { name: data.name, email: data.email, role: data.role, password: data.password,gender:data.gender };
        //                 // console.log('User profile info updated', saveUser);


        //                 fetch(' http://localhost:5000/users', {
        //                     method: 'POST',
        //                     headers: {
        //                         'content-type': 'application/json'
        //                     },
        //                     body: JSON.stringify(saveUser)
        //                 })
        //                     .then(res => res.json())
        //                     .then(data => {
        //                         // console.log(data);

        //                         if (data.insertedId) {
        //                             reset();
        //                             toast("Successfully registered!!!")
        //                             navigate('/login');
        //                         }
        //                     })
        //             })
        //             .catch(error => console.log(error))
        //     })

    }






    return (
        <div>
            {/* <Helmet>
                <title>Registration | CosmetiCraft</title>
            </Helmet> */}


            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="hero     ">
                    <div className="hero-content flex-col   md:w-full ">

                        <div className="card bg-white flex-shrink-0  md:w-3/5  shadow-2xl bg-base-800 border    ">
                            <div className="card-body ">

                                <h1 className='text-4xl font-bold  '>Create an <span className='text-blue-600 '>account</span></h1>
                                <div className='border w-24 border-blue-600 mb-6'> </div>

                                <div className="form-control  mb-4">
                                    <input type="text"
                                        {...register("name", { required: true, maxLength: 100 })}
                                        placeholder="Enter your Name"
                                        className=" py-2 px-4  border-b-4 bg-white  outline-none      text-black  text-xl  " />
                                    {errors.name && <span className='text-red-600 mt-2'>Name field is required</span>}
                                </div>

                                <div className="form-control  mb-4">
                                    <input type="email"
                                        {...register("email", { required: true, maxLength: 100 })}
                                        placeholder="Enter your Email"
                                        className=" py-2 px-4  border-b-4 bg-white  outline-none      text-black  text-xl  " />
                                    {errors.email && <span className='text-red-600 mt-2'>Email field is required</span>}
                                </div>
                                <div className="form-control  mb-4">
                                    <input type="password"
                                        {...register("password", { required: true, maxLength: 100 })}
                                        placeholder="Enter your Password"
                                        className=" py-2 px-4  border-b-4 bg-white  outline-none      text-black  text-xl  " />
                                    {errors.password && <span className='text-red-600 mt-2'>password field is required</span>}
                                </div>

                                <div className='flex justify-between md:gap-12 my-8 '>
                                    {/* doctor or patient */}
                                    <div className=' flex mb-4'>
                                        <div>
                                            <p className='font-bold text-[14px] md:text-[16px]'>Are you a : </p>
                                        </div>
                                        <div>
                                            <select {...register("role")}
                                                className='bg-white md:ml-4 text-gray-500 ' >
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
                                            <select {...register("gender")} className='bg-white md:ml-4 text-gray-500 '>
                                                <option value="male"  >Male</option>
                                                <option value="female">Female</option>
                                                <option value="other"  >Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>



                                <div>
                                    <div className='flex relative items-center'>
                                        <figure>
                                            <img src={profilePhoto} className='rounded-full h-12 w-12' alt="" />
                                        </figure>
                                        <input type="file"
                                            {...register("photo",)}
                                            className='  px-6 cursor-pointer   ' />
                                    </div>
                                    {/* <div>
    <label className='bg-gray-400 w-52 text-center cursor-pointer p-2 rounded-lg absolute -m-12 ml-16'>
        Upload Photo
    </label>
</div> */}
                                </div>










                                <input type="submit" value='Sign Up' className='border bg-blue-600 py-2 text-white  mt-8 rounded-lg cursor-pointer hover:bg-blue-500 transition-all' />


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