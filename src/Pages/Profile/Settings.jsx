import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import profilePhoto from "../../assets/images/doctor-img01.png";
import { Link } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';
import { FindUser } from '../../Utils/FindUser';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const Settings = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    
      const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("image", data.photo[0]);
        console.log(data);
        // fetch(img_hosting_url, {
        //   method: "post",
        //   body: formData,
        // })
        //   .then((res) => res.json())
        //   .then((imgResponse) => {
        //     console.log(imgResponse);
        //     if (imgResponse.success) {
        //       const imgURL = imgResponse.data.display_url;
        //       // console.log(imgURL);
        //       // console.log(data);
        //       const { name, email, password, gender, role } = data;
    
        //       const newData = {
        //         name,
        //         email,
        //         password,
        //         gender,
        //         role,
        //         image: imgURL,
        //       };
        //       // console.log(newData)
    
        //       createAccount(data.email, data.password).then((res) => {
        //         const user = res.user;
        //         // console.log(user);
        //         fetch(" http://localhost:5000/users", {
        //           method: "POST",
        //           headers: {
        //             "content-type": "application/json",
        //           },
        //           body: JSON.stringify(newData),
        //         })
        //           .then((res) => res.json())
        //           .then((data) => {
        //             console.log(data);
        //             if (data.insertedId) {
        //               reset();
        //               toast("Successfully registered!!!");
        //               Swal.fire({
        //                 title: "Success!",
        //                 text: "User registration successfully",
        //                 icon: "success",
        //                 confirmButtonText: "Ok",
        //               });
    
        //               navigate("/login");
        //             } else {
        //               navigate("/registration");
        //             }
        //           })
        //           .catch((error) => console.log(error));
        //         toast("Error!!");
        //         navigate("/registration");
        //       });
        //     }
        //   });
      };
      const {user}=useContext(AuthContext);
    //   console.log(user);
      const x = FindUser();
    //   console.log(x);
      const [specificUser,userRole]=x;
      console.log(specificUser);


    return (
        <div>
             
             <div className='mt-12 md:mr-4'>
        <div className="card   bg-white border text-primary-content">
          <div className="card-body">
           
              

            <div className="form-control  mb-4">
              <input
                type="text"
                {...register("name", { required: true, maxLength: 100 })}
                placeholder="Enter your Name"
                value={specificUser.name}
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
                value={specificUser.email}
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
                value={specificUser.password}
                className=" py-2 px-4  border-b-4 bg-white  outline-none      text-black  text-xl  "
              />
              {errors.password && (
                <span className="text-red-600 mt-2">
                  password field is required
                </span>
              )}
            </div>

            <div className="flex justify-between md:gap-12 my-8 ">
              {/* doctor or patient */}
            

              {/* gender */}
              <div className="flex mr-4">
                <div>
                  <p className="font-bold text-black">Gender </p>
                </div>
                <div>
                  <select
                    {...register("gender")}
                    value={ specificUser.gender}
                    className="bg-white md:ml-4 text-gray-500 "
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

 
     
     

            <input
              type="submit"
              value="Update"
              className="border bg-blue-600 py-2 text-white  mt-8 rounded-lg cursor-pointer hover:bg-blue-500 transition-all"
            />

            <br />
            <hr />
          </div>
        </div>
      </div>


        </div>
    );
};

export default Settings;