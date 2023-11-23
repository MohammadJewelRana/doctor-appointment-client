import React, { useEffect, useState } from 'react';
import findDoctor from '../../assets/images/find.jpg'
import { Parallax } from 'react-parallax';
import Doctors from '../Home/HomeComponents/Doctors';
import DoctorCard from '../Home/HomeComponents/DoctorCard';
import Testimonial from '../Home/HomeComponents/Testimonial';
import useDoctors from '../../Hooks/useDoctors';


const FindDoctor = () => {



    const [doctor, doctorsDataLoading] = useDoctors();
    // console.log('new',doctor);

    if (doctorsDataLoading) {
        return <div className='mx-auto'>
        <span className="loading loading-bars loading-lg"></span>
    </div>
    
    }


    return (
        <div>
            <Parallax bgImage={findDoctor} strength={500}>
                <div className='h-[600px] flex justify-center items-center'>
                    <div className='w-full  bg-green-100'>
                        <h1 className='text-center text-6xl font-bold    py-2  '>Find a Doctor</h1>

                        <div className='flex justify-center mt-8 mb-8'>
                            <input type="search" className='  bg-white p-4 rounded-l-lg border border-none outline-none w-96 ' />
                            <input type="submit" className='cursor-pointer  btn-success rounded-r-lg w-[80px] text-white text-xl' value='Search' />
                        </div>
                    </div>
                </div>

            </Parallax>

 

            <div className='container mt-24'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        doctor.map(doctorData => <DoctorCard
                            key={doctorData.id}
                            doctorData={doctorData}
                        ></DoctorCard>)
                    }
                </div>
            </div>

            <Testimonial></Testimonial>


        </div>
    );
};

export default FindDoctor;