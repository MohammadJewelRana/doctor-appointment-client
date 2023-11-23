import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';

import DoctorCard from './DoctorCard';

const Doctors = () => {

    const [doctors,setDoctors]=useState([]);
    useEffect( ()=>{
        fetch('doctorData.json')
        .then(res=>res.json())
        .then(data=>setDoctor(data))
    } ,[])

    const [doctor,setDoctor]=useState(doctors);
    const [show,setShow]=useState(false);



    return (
        <section id='doctor' name='doctor'>

            <div className="container">
                <SectionTitle
                    heading={'Our Great Doctors'} subHeading={'World class care for everyone Our health system offers unmatched expert health care'}></SectionTitle>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        doctor.slice(0,6).map(doctorData => <DoctorCard
                            key={doctorData.id}
                            doctorData={doctorData}
                        ></DoctorCard>)
                    }
                </div>

                <div className=' flex justify-center'>
                    <button  className=" p-4  btn-success mt-12 bg-blue-600   text-white text-2xl   rounded-full px-12 py-6  ">Show All</button>
                </div>

            </div>
 


        </section>
    );
};

export default Doctors;