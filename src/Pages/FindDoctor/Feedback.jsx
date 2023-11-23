import React from 'react';
import { useState } from 'react';
import { Controller, useForm } from "react-hook-form";


const Feedback = () => {
    const [hoveredRating, setHoveredRating] = useState(0);
 
    const {reset, setValue, getValues, control, register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        // const rating = getValues('rating');
        console.log(data);
        reset();
       
    }


    return (
        <div className='mt-12'>



            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='mb-6 block   text-xl ml-2'>
                    <h1>How would you rate the overall experience?</h1>
                    <Controller
                        name="rating"
                        control={control}
                        defaultValue={0}
                        render={({ field }) => (
                            <div className="flex items-center space-x-2">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <label key={value} className={`flex items-center cursor-pointer ${value <= (hoveredRating || field.value) ? 'text-yellow-500' : 'text-gray-500'
                                        }`}
                                        onMouseEnter={() => setHoveredRating(value)}
                                        onMouseLeave={() => setHoveredRating(0)}
                                    >
                                        <input
                                            type="radio"
                                            value={value}
                                            {...field}
                                            onChange={() => setValue('rating', value)}
                                            checked={parseInt(field.value, 10) === value}
                                            className="sr-only text-2xl "
                                        />
                                        <span className="text-2xl">&#9733;</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    />

                </div>

                <div className='mb-6'>
                    <label htmlFor="name" className="block mb-2 text-xl ml-2">Share your feedback or suggestions*</label>
                    <textarea
                        {...register("message", { required: true })}
                        placeholder='Enter Your Message'
                        className="textarea  bg-white  border border-sky-600 w-full p-6 rounded-lg text-black text-xl "
                    ></textarea>
                    {errors.message && <span className='mt-4 text-red-600'>This field is required</span>}
                </div>


                <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Submit
                </button>
            </form>



        </div>
    );
};

export default Feedback;