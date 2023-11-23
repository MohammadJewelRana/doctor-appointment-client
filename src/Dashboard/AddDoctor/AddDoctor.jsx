import React, { useState } from 'react';
import DashboardComponentTitle from '../DashboardComponentTitle';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';



const AddDoctor = () => {
    const [inputs, setInputs] = useState([{ designation: '', institute: '', yearFrom: '', yearTo: ' ' }]);


    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const updatedInputs = [...inputs];
        updatedInputs[index][name] = value;
        setInputs(updatedInputs);
    };

    const handleAddField = () => {
        setInputs([...inputs, { designation: ' ', institute: ' ', yearFrom: ' ', yearTo: ' ' }]);
    };

    const handleRemoveField = (index) => {
        const updatedInputs = [...inputs];
        updatedInputs.splice(index, 1);
        setInputs(updatedInputs);
    };

    const yearOptions = Array.from({ length: 10 }, (_, i) => {
        const year = new Date().getFullYear() + i;
        return { value: year, label: year.toString() };
    });

    // console.log(inputs);

    const experience = [];
    for (let i = 0; i < inputs.length - 1; i++) {
        // console.log(inputs[i]);
        experience.push(inputs[i])
    }

    // console.log('ex:: ', experience);



    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data);
        const { name, email, phone, price, specialization, message } = data;
        const newData = { name, email, phone, price, specialization, message, experience: experience };
        // console.log('newData :: ', newData);


        fetch('http://localhost:5000/doctors', {
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
                    toast("Successfully added doctor!!!")
                    reset();
                }

            })


    }





    return (
        <div>
            <DashboardComponentTitle title={'Add Doctors'}></DashboardComponentTitle>


            <div className="card w-full mt-8  border-2">
                <div className="card-body text-center -p-12">


                    <form onSubmit={handleSubmit(onSubmit)} >





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


                        <div className="form-control mt-4 ">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input type="text"
                                {...register("email", { required: true, maxLength: 100 })}
                                placeholder="Enter your Email"
                                className="input input-bordered bg-white border border-sky-300 text-black" />
                            {errors.email && <span className='text-red-600 mt-2'>Email field is required</span>}
                        </div>

                        <div className="form-control mt-4 ">
                            <label className="label">
                                <span className="label-text text-black">Phone</span>
                            </label>
                            <input type="text"
                                {...register("phone", { required: true, maxLength: 100 })}
                                placeholder="Enter your Phone number"
                                className="input input-bordered bg-white border border-sky-300 text-black" />
                            {errors.phone && <span className='text-red-600 mt-2'>Phone number field is required</span>}
                        </div>


                        <div className="form-control mt-4 ">
                            <label className="label">
                                <span className="label-text text-black">Price</span>
                            </label>
                            <input type="number"
                                {...register("price", { required: true, maxLength: 100 })}
                                placeholder="Enter ticket price"
                                className="input input-bordered bg-white border border-sky-300 text-black" />
                            {errors.price && <span className='text-red-600 mt-2'> this field is required</span>}
                        </div>


                        <div className="form-control mt-4 ">
                            <label className="label">
                                <span className="label-text text-black">Specialization</span>
                            </label>


                            <select className="select select-accent w-full  w-full bg-white text-black"
                                {...register("specialization", { required: true, maxLength: 100 })}
                                placeholder="Enter ticket price"
                                onSelect={(e) => setSpecialization(e.target.value)}
                            >
                                <option > Surgeon</option>
                                <option>Dentist</option>
                                <option>Cardiologist</option>
                                <option  >  Dermatologist </option>
                                <option  > Orthopedic   </option>
                                <option  >  Gynecologist </option>
                                <option  >  Neurologist </option>
                                <option  >  Pediatrician </option>

                            </select>
                            {errors.specialization && <span className='text-red-600 mt-2'> this field is required</span>}
                        </div>





                        {/* experience  */}
                        <div className="form-control mt-4 ">
                            <label className="label">
                                <span className="label-text text-black"> Experience</span>
                            </label>


                            {
                                inputs.map((input, index) =>
                                    < div className='flex gap-8'>


                                        <input
                                            {...register("designation", { required: true, maxLength: 100 })}
                                            type="text"
                                            name="designation"
                                            placeholder="Designation"
                                            value={input.name}
                                            onChange={(event) => handleChange(index, event)}
                                            className="input input-bordered bg-white border border-sky-300 text-black"
                                        />

                                        <input
                                            {...register("institute", { required: true, maxLength: 100 })}
                                            type="text"
                                            name="institute"
                                            placeholder="institute"
                                            value={input.email}
                                            onChange={(event) => handleChange(index, event)}
                                            className="input input-bordered bg-white border border-sky-300 text-black"
                                        />

                                        <select
                                            name="yearFrom"

                                            value={input.year}
                                            onChange={(event) => handleChange(index, event)}
                                            className="input input-bordered bg-white border border-sky-300 text-black"
                                        >
                                            <option value="">From Year</option>
                                            {yearOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>


                                        <select
                                            name="yearTo"

                                            value={input.year}
                                            onChange={(event) => handleChange(index, event)}
                                            className="input input-bordered bg-white border border-sky-300 text-black"
                                        >
                                            <option value="">To Year</option>
                                            {yearOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>




                                        {index > 0 && (
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveField(index)}
                                                className=" bg-red-500 text-white rounded-md btn btn-xs "
                                            >
                                                Remove
                                            </button>
                                        )}

                                    </div>

                                )

                            }


                            <button
                                type="button"
                                onClick={handleAddField}
                                className="px-4 py-2 bg-green-500 text-white rounded-md w-[200px] ml-auto mt-4 mr-10"
                            >
                                Add Field
                            </button>


                        </div>










                        {/* time  */}
                        {/*                         
                        <div className="form-control mt-4 ">
                            <label className="label">
                                <span className="label-text text-black"> Time Slot</span>
                            </label>


                            {
                                inputs.map((input, index) =>
                                    < div className='flex gap-8'>


                                        <input
                                            type="text"
                                            name="designation"
                                            placeholder="Designation"
                                            value={input.name}
                                            onChange={(event) => handleChange(index, event)}
                                            className="input input-bordered bg-white border border-sky-300 text-black"
                                        />



                                        <select
                                            name="yearTo"

                                            value={input.year}
                                            onChange={(event) => handleChange(index, event)}
                                            className="input input-bordered bg-white border border-sky-300 text-black"
                                        >
                                            <option value="">To Year</option>
                                            {yearOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>


                                        <select className="select select-accent w-full max-w-xs bg-white "
                                        
                                        onSelect={(event)=>setDay(event.target.value)}
                                        >
                                            <option  > Saturday</option>
                                            <option>Sunday</option>
                                            <option>Monday</option>
                                            <option>Tuesday</option>
                                            <option>Wednesday</option>
                                            <option>Thursday</option>
                                            <option>Friday</option>


                                        </select>




                                        {index > 0 && (
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveField(index)}
                                                className=" bg-red-500 text-white rounded-md btn btn-xs "
                                            >
                                                Remove
                                            </button>
                                        )}

                                    </div>

                                )

                            }


                            <button
                                type="button"
                                onClick={handleAddField}
                                className="px-4 py-2 bg-green-500 text-white rounded-md w-[200px] ml-auto mt-4 mr-10"
                            >
                                Add Field
                            </button>


                        </div>
  */}











                        {/* about start */}
                        <div className="form-control mt-4 ">
                            <label className="label">
                                <span className="label-text text-black"> About Doctor</span>
                            </label>

                            <textarea
                                {...register("message", { required: true })}
                                placeholder='Enter Your Message'
                                className="textarea border-sky-300 bg-white   border w-full p-6 rounded-lg text-black text-xl h-48"
                            ></textarea>
                            {errors.message && <span className='text-red-600 mt-2'>Message field is required</span>}
                        </div>





                        {/* time slot */}




                        <input type="submit" className="btn btn-accent w-full text-2xl mb-8 mt-8" />




                    </form>





                </div>
            </div >
            <ToastContainer></ToastContainer>

        </div >
    );
};

export default AddDoctor;