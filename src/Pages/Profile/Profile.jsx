import React, { useContext, useState } from "react";
import profile from "../../assets/images/icon03.png";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useAllUser from "../../Hooks/useAllUser";
import { FindUser } from "../../Utils/FindUser";
import MyBookings from "./MyBookings";
import Settings from "./Settings";
import Overview from "./Overview";
import Appointments from "./Appointments";
import ProfileDoctor from "./ProfileDoctor";
import Swal from "sweetalert2";
import UpdateBasicInformation from "../../Shared/UpdateBasicInformation";

const Profile = () => {

    const { user, logout, loading } = useContext(AuthContext);

    const [state, setState] = useState('');
    const [profileList, setProfileList] = useState('')
    // console.log(user);

    // const [allUsers,allUsersLoading,refetch]=useAllUser();
    // // // console.log(allUsers);
    // if(allUsersLoading){
    //     return <span className="loading loading-spinner text-secondary"></span>;
    // }
    // if(loading){
    //     return <span className="loading loading-spinner text-secondary"></span>;
    // }


    // const findUser=allUsers.find(data=>data?.email=== user?.email)
    // // console.log(findUser);
    // const userRole=findUser?.role;
    // console.log(userRole);

    const x = FindUser();
    // // console.log(x);
    const [specificUser, userRole] = x;
    // // console.log(userRole);
    // // console.log(user);

    let componentToRender;

    if (profileList === 'overview') {
        componentToRender = <Overview />;
    } else if (profileList === 'appointments') {
        componentToRender = <Appointments />;
    } else if (profileList === 'profile') {
        componentToRender = <ProfileDoctor />;
    } else {
        componentToRender = <Overview />;
    }

    const navigate = useNavigate()
    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                logout()
                    .then(() => {
                        Swal.fire({
                            title: "Logout!",
                            text: "Successfully logged out",
                            icon: "success"
                        });
                        navigate('/')

                    })
                    .catch(error => console.log(error))


            }
        });

    }
    // const handleLogout = () => {
    //     logout()
    //         .then(() => {
    //             toast('Successfully logout');
    //         })
    //         .catch(error => console.log(error))
    // }



    return (

        <div className="flex">
            <section className=" mx-auto">
                {/* main  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 ">
                    {/* left */}

                    {/* 
                    <div className="  p-16 rounded-lg    ">
                        {
                            userRole === 'patient' ?
                                <>
                                    <div className=" flex">
                                        <img
                                            src={user?.photoURL}
                                            className="rounded-full mx-auto mb-12 border-blue-600 h-20 w-20"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-4xl text-center font-bold">{user?.displayName}</h1>
                                        <p className="text-center text-xl mt-2"> {user?.email}</p>
                                    </div>
                                </>
                                :
                                <>

                                    <div className="flex flex-col gap-4 ">
                                        <button onClick={() => setProfileList('overview')}
                                            className="px-4 py-2 border rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-300 "
                                        >
                                            Overview
                                        </button>
                                        <button
                                            onClick={() => setProfileList('appointments')}
                                            className="px-4 py-2 border rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-300"
                                        >
                                            Appointments
                                        </button>
                                        <button
                                            onClick={() => setProfileList('profile')}
                                            className="px-4 py-2 border rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-300"
                                        >
                                            Profile
                                        </button>
                                    </div>

                                </>
                        }



                        <div className="flex flex-col gap-4 mt-24">
                            <button  onClick={handleLogout}  className="border bg-black text-white py-2 px-12 rounded-lg text-xl cursor-pointer">
                                Logout
                            </button>
                            <button className="border bg-red-600 text-white py-2 px-12 rounded-lg text-xl cursor-pointer">
                                Delete Account
                            </button>
                        </div>
                    </div> */}


                    <div className="  p-16 rounded-lg    ">
                       
                                <>
                                    <div className=" flex">
                                        <img
                                            src={user?.photoURL}
                                            className="rounded-full mx-auto mb-12 border-blue-600 h-20 w-20"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-4xl text-center font-bold">{specificUser?.name}</h1>
                                        <p className="text-center text-xl mt-4"> {specificUser?.email}</p>
                                    </div>
                                </>
                               
                               {
                                userRole==='doctor' &&
                                <>

                                <div className="flex flex-col gap-4  mt-12">
                                    <button onClick={() => setProfileList('overview')}
                                        className="px-4 py-2 border rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-300 "
                                    >
                                        Overview
                                    </button>
                                    <button
                                        onClick={() => setProfileList('appointments')}
                                        className="px-4 py-2 border rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-300"
                                    >
                                        Appointments
                                    </button>
                                    <button
                                        onClick={() => setProfileList('profile')}
                                        className="px-4 py-2 border rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-300"
                                    >
                                        Profile
                                    </button>
                                </div>

                            </>
           


                               }
                               


                        <div className="flex flex-col gap-4 mt-24">
                            <button onClick={handleLogout} className="border bg-black text-white py-2 px-12 rounded-lg text-xl cursor-pointer">
                                Logout
                            </button>
                            <button className="border bg-red-600 text-white py-2 px-12 rounded-lg text-xl cursor-pointer">
                                Delete Account
                            </button>
                        </div>
                    </div>



                    {/* right  */}
                    <div>
                        {
                            userRole === 'patient' ?
                                <>
                                    <div className="  ">

                                        {" "}
                                        <button onClick={() => setState('bookings')} className="border bg-blue-600 text-white py-2 px-12 rounded-lg text-xl cursor-pointer">
                                            My Bookings
                                        </button>


                                        <button onClick={() => setState('settings')} className="border md:mt-2   lg:ml-4 ml-4 bg-gray-600 text-white py-2 px-12 rounded-lg text-xl cursor-pointer">
                                            {" "}
                                            Profile Settings
                                        </button>

                                    </div>

                                </>
                                :
                                <>

                                </>
                        }

                       
                        {
                            userRole === 'patient' ?
                                <>
                                    {
                                        state === 'settings' ?

                                            // <><Settings></Settings></>
                                            <div
                                             className="mt-8">
                                                <p className="text-center text-2xl font-bold">Profile Information</p>
                                                <div className="border-b-4 border-red-600
                                                 w-12 mx-auto mb-4"></div>
                                                
                                                
                                                  <UpdateBasicInformation></UpdateBasicInformation></div>
                                            :
                                            <> <MyBookings></MyBookings></>
                                    }
                                </>
                                :
                                <>
                                    {/* {
                                        profileList !== 'overview' ?
                                            <> <Overview></Overview></>
                                            :
                                            <> <Appointments></Appointments></>
                                    } */}
                                    {
                                        componentToRender
                                    }



                                </>

                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;
