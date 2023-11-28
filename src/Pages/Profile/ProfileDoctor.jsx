import React from "react";
import { useForm } from "react-hook-form";
import profilePhoto from "../../assets/images/doctor-img01.png";
import { Link } from "react-router-dom";
import UpdateBasicInformation from "../../Shared/UpdateBasicInformation";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const ProfileDoctor = () => {
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

  return (
    <div className="md:mr-8 md:-ml-8 mx-4">
      <div role="alert" className="alert alert-warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>
          To get approval please completing profile. We will review manually and
          approve within 3 days{" "}
        </span>
      </div>
      <h1 className="text-center font-bold text-2xl  mt-8 ">
        Profile Information
      </h1>
      <div className="border-b-4 border-black mb-8 w-12 mx-auto mt-1"></div>

      <div>
 <UpdateBasicInformation></UpdateBasicInformation>

 
      </div>
    </div>
  );
};

export default ProfileDoctor;
