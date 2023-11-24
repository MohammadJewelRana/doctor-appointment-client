import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';
import Home from '../Pages/Home/Home/Home';
import Services from '../Pages/Home/Home/Services';
import Contact from '../Pages/Contact/Contact';
import FindDoctor from '../Pages/FindDoctor/FindDoctor';
import DoctorDetails from '../Pages/FindDoctor/DoctorDetails';
import Profile from '../Pages/Profile/Profile';
import Login from '../Pages/LoginReg/Login';
import Registration from '../Pages/LoginReg/Registration';
import DashboardHome from '../Dashboard/DashboardHome';
import User from '../Dashboard/Users/User';
import Dashboard from '../Dashboard/Dasboard/Dashboard';
import AddDoctor from '../Dashboard/AddDoctor/AddDoctor';
import Inbox from '../Dashboard/Inbox/Inbox';
import MyBookings from '../Pages/Profile/MyBookings';
import Settings from '../Pages/Profile/Settings';
 
// import Doctor from '../Pages/Home/Doctors/Doctor';

const Router = createBrowserRouter([
    {
        path: "/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/find',
                element:<FindDoctor></FindDoctor>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/doctor/:id',
                element:<DoctorDetails></DoctorDetails>
            },
 
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            },

            {
                path:'/profile',
                element:<Profile></Profile>,
                // children:[
                //     {
                //         path:'/profile',
                //         element:<MyBookings></MyBookings>
                //     },
                //     {
                //         path:'/profile/settings',
                //         element:<Settings></Settings>
                //     }
                // ]
        
        
            },
        ]

    },


    // {
    //     path:'/profile',
    //     element:<Profile></Profile>,
    //     children:[
    //         {
    //             path:'/profile/myBookings',
    //             element:<MyBookings></MyBookings>
    //         }
    //     ]


    // },


    {
        path:'/dashboard',
        element:<DashboardHome></DashboardHome>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
    
            {

                path:'/dashboard/users',
                element:<User></User>
            },
            {

                path:'/dashboard/addDoctors',
                element:<AddDoctor></AddDoctor>
            },
            {

                path:'/dashboard/inbox',
                element:<Inbox></Inbox>
            }
        ]
    }
])



export default Router;