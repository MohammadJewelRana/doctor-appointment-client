import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FindUser } from "../Utils/FindUser";
import { useStartDate } from "dates-picker/dist/context/InitialParametersContext";
import { useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateBasicInformation = () => {

    const x = FindUser();
    //   console.log(x);
    const [specificUser, userRole] = x;
    //   console.log(specificUser);
    //   console.log(specificUser._id);

    const [expert, setExpert] = useState('')
    // console.log(specialization);


    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        fetch(`http://localhost:5000/users/update/${specificUser._id}`, {
            method: "put",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Users information updated successfully",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                }
            });
    };

    const { user, loading } = useContext(AuthContext);
    //   console.log(user);

    return (
        <div>
            <div className="card   bg-white border text-primary-content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <div className="form-control  mb-4">
                            <input
                                type="text"
                                {...register("name", { required: true, maxLength: 100 })}
                                defaultValue={specificUser.name}
                                placeholder="Enter your Name"
                                className=" py-2 px-4  border-b-4 bg-white  outline-none      text-black  text-xl  "
                            />
                            {errors.name && (
                                <span className="text-red-600 mt-2">
                                    Name field is required
                                </span>
                            )}
                        </div>

                        <div className="form-control  mb-4">
                            <input
                                type="email"
                                {...register("email", { required: true, maxLength: 100 })}
                                placeholder="Enter your Email"
                                defaultValue={specificUser.email}
                                readOnly
                                className=" py-2 px-4  border-b-4 bg-white  outline-none      text-black  text-xl  "
                            />
                            {errors.email && (
                                <span className="text-red-600 mt-2">
                                    Email field is required
                                </span>
                            )}
                        </div>
                        <div className="form-control  mb-4">
                            <input
                                type="password"
                                {...register("password", { required: true, maxLength: 100 })}
                                placeholder="Enter your Password"
                                defaultValue={specificUser.password}
                                className=" py-2 px-4  border-b-4 bg-white  outline-none      text-black  text-xl  "
                            />
                            {errors.password && (
                                <span className="text-red-600 mt-2">
                                    password field is required
                                </span>
                            )}
                        </div>

                        <div className="form-control  mb-4">
                            <input
                                type="text"
                                {...register("contact", { maxLength: 100 })}
                                placeholder="Enter your contact number"
                                defaultValue={specificUser.contact}
                                className=" py-2 px-4  border-b-4 bg-white  outline-none      text-black  text-xl  "
                            />

                            {errors.contact && (
                                <span className="text-red-600 mt-2">
                                    contact field is required
                                </span>
                            )}
                        </div>
 
 {
    userRole ==='doctor' &&
    
    <div className="form-control  mb-4">
    <input
        type="number"
        {...register("price", { maxLength: 100 })}
        placeholder="Ticket Price"
        defaultValue={specificUser.price}
        className=" py-2 px-4  border-b-4 bg-white  outline-none      text-black  text-xl  "
    />

    {errors.price && (
        <span className="text-red-600 mt-2">
            price field is required
        </span>
    )}
</div>

 }


                        {userRole === "doctor" &&

                            <div className="flex justify-between border-b-4">
                                <div className="form-control  mb-4 text-black  text-xl ">
                                    {/* <p> Select anyone  </p> */}
                                    {
                                        specificUser?.specialization ?
                                            <p className="pl-4 text-[12px] lg:text-[16px] md:text-[12px]"> {specificUser.specialization}</p>
                                            :
                                            <>
                                                {
                                                    expert ?
                                                        <p className="pl-4 "> {expert} </p> :
                                                        <p className="pl-4">None  </p>
                                                }
                                            </>
                                    }
                                    {/* <p> Select anyone  </p> */}
                                </div>

                                <div className="md:flex  mr-4">
                                    <div>
                                        <p className="font-bold text-black ml-8">Specialization </p>
                                    </div>
                                    <div>
                                        <select
                                            {...register("specialization")}
                                            onChange={(e) => setExpert(e.target.value)}

                                            className="bg-white md:ml-4 text-gray-500 "
                                        >
                                            <option value="None" selected disabled>Select Specialization</option>
                                            <option value="Cardiology">Cardiology</option>
                                            <option value="Dermatology">Dermatology</option>
                                            <option value="Endocrinology">Endocrinology</option>
                                            <option value="Gastroenterology">Gastroenterology</option>
                                            <option value="Hematology">Hematology</option>
                                            <option value="Neurology">Neurology</option>
                                            <option value="Oncology">Oncology</option>
                                            <option value="Pediatrics">Pediatrics</option>
                                            <option value="Psychiatry">Psychiatry</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        }











                        <div className=" flex  justify-between md:gap-12 my-8 ">
                            {/* doctor or patient */}
                            <div className="flex mr-4">
                                <div>
                                    <p className="font-bold text-black">Blood Group </p>
                                </div>
                                <div>
                                    <select
                                        {...register("blood")}
                                        defaultValue={specificUser.blood}
                                        className="bg-white md:ml-4 text-gray-500 "
                                    >
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>
                            </div>

                            {/* gender */}
                            <div className="flex mr-4 ">
                                <div>
                                    <p className="font-bold text-black">Gender </p>
                                </div>
                                <div>
                                    <select
                                        {...register("gender")}
                                        defaultValue={specificUser.gender}
                                        className="bg-white md:ml-4 text-gray-500 "
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {userRole === "doctor" && (
                            <div className="form-control  mb-4">
                                <textarea
                                    {...register("bio")}
                                    placeholder="Enter Your BIO"
                                    defaultValue={specificUser.bio}
                                    className="  border  bg-white  mt-4  w-full p-6 rounded-lg text-black text-[16px] "
                                ></textarea>

                                {errors.bio && (
                                    <span className="text-red-600 mt-2">
                                        Bio field is required
                                    </span>
                                )}
                            </div>
                        )}


                        {
                            loading ?


                                <input
                                    type="submit"
                                    value="Update"

                                    className="border bg-blue-600 py-2 text-white  mt-8 rounded-lg cursor-pointer hover:bg-blue-500 transition-all loading loading-dots loading-lg"
                                />

                                :
                                <>
                                    <input
                                        type="submit"
                                        value="Update"

                                        className="border bg-blue-600 py-2 text-white  mt-8 rounded-lg cursor-pointer hover:bg-blue-500 transition-all"
                                    />

                                </>
                        }


                        <br />
                        <hr />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBasicInformation;
