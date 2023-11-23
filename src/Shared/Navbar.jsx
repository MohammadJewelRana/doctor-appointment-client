import React, { useContext } from 'react';

import logo from '../../public/favicon.ico'
import { Link, NavLink } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';
import { AuthContext } from '../Provider/AuthProvider';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import LoadingPage from '../Components/LoadingPage';



const Navbar = () => {


    const { user, logout,loading } = useContext(AuthContext);

    // console.log(user);

    // if(loading){

    //     return <LoadingPage></LoadingPage>

    // }



    const handleLogout = () => {
        logout()
            .then(() => {
                toast('Successfully logout');
            })
            .catch(error => console.log(error))
    }





    const navLinks = <>
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-600    border-b-2   border-b-blue-700 " : ""} > Home </NavLink>

        <NavLink to="/find" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-600  border-b-2 border-b-blue-700   " : ""} > Find a doctor </NavLink>

        <NavLink to="/find" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-600  border-b-2 border-b-blue-700   " : ""} > My Bookings </NavLink>

        <HashLink smooth to='/#service' > Services </HashLink>

        <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-600  border-b-2 border-b-blue-700   " : ""} > Contact </NavLink>

    </>






    return (

        <div className="navbar  header    ">
            {/* start */}
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-300 rounded-box w-52">


                    {navLinks}


                    </ul>

                    <a className="btn btn-ghost text-black normal-case text-xl">MediCare</a>

                </div>
            </div>

            {/* center */}
            <div className="navbar-center   ">
                <ul className='flex mr-4 gap-8' >

                {navLinks}
                     


                </ul>
            </div>


            {/* end */}
            <div className="navbar-end   ">
                {
                    user &&
                    <>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-8">
                                <div className="w-10 rounded-full">
                                    <img title={user? user?.displayName  : 'No logged in user'} src={user?.photoURL} />
                                </div>
                            </label>

                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-100 rounded-box w-52">
                                <li>
                                    <Link to='/profile' className="justify-between"> Profile<span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><a>Settings</a></li>

                                {
                                    user &&
                                    <li>     <Link to='/login'>  <button onClick={handleLogout} className=" hover:text-red-600  mr-8">Logout</button></Link> </li> 
 
                                }



                                {/* <li><a>Logout</a></li> */}
                            </ul>
                        </div></>
                }


                {
                    user ?
                       <></>

                        :

                        <Link to='/login' >  <button className="btn btn-info mr-8">Login</button></Link>
                }




            </div>
            <ToastContainer />
        </div>



    );
};

export default Navbar;