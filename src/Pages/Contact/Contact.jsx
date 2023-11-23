import React from 'react';
import { Parallax } from 'react-parallax';
import img from '../../assets/images/contact.jpeg'
import { useForm } from "react-hook-form";
import SectionTitle from '../../Shared/SectionTitle';
import { ToastContainer, toast } from 'react-toastify';
 

const Contact = () => {


 

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        const {name,email,message}=data;
        const newData={name,email,message, status:'unread'};

        fetch('http://localhost:5000/message', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                if (data.insertedId) {
                    toast("Successfully send a message!!!")
                    reset();
                }
            })


    }



    return (
        <div className=' '>
            <Parallax bgImage={img} strength={500}>
                <div className='h-96 flex justify-center items-center'>
                    <h1 className='text-center text-6xl font-bold bg-green-100   py-2 w-full '>Contact us</h1>
                </div>
            </Parallax>

            <div className="    container  mb-32">
                <SectionTitle heading={'Contact Forms'} subHeading={'World class care for everyone Our health system offers unmatched expert health care'}></SectionTitle>


                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='mb-6'>
                        <label htmlFor="name" className="block mb-2 text-xl ml-2">Name :</label>
                        <input type='text'
                            className='bg-white border w-full p-6 rounded-lg text-black text-xl'
                            {...register("name", { required: true })}
                            placeholder='Enter Your Name'
                        />
                        {errors.name && <span className='mt-4 text-red-600'>This field is required</span>}
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="name" className="block mb-2 text-xl ml-2">Email :</label>
                        <input type='email'
                            className='bg-white border w-full p-6 rounded-lg text-black text-xl'
                            {...register("email", { required: true })}
                            placeholder='Enter Your Email'
                        />
                        {errors.email && <span className='mt-4 text-red-600'>This field is required</span>}
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="name" className="block mb-2 text-xl ml-2">Message :</label>
                        <textarea
                            {...register("message", { required: true })}
                            placeholder='Enter Your Message'
                            className="textarea  bg-white  border w-full p-6 rounded-lg text-black text-xl h-48"
                        ></textarea>
                        {errors.message && <span className='mt-4 text-red-600'>This field is required</span>}
                    </div>



                    <input type="submit" className="btn btn-accent w-full text-2xl mb-8" />
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Contact;