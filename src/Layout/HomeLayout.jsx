import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { AuthContext } from '../Provider/AuthProvider';
import LoadingPage from '../Components/LoadingPage';
import Header from '../Shared/Header';

const HomeLayout = () => {


    const {loading}=useContext(AuthContext);
    
    if(loading){

        return <LoadingPage></LoadingPage>

    }




    return (
        <div>
            <Header></Header>

            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default HomeLayout;