import React, { useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';

import DoctorCard from './DoctorCard';

const Doctors = () => {

    



    const doctors = [
        {
            id: 1,
            name: "Dr. John Smith",
            specification: "Cardiologist",
            avgRating: 4.5,
            totalRating: 120,
            photo: "https://example.com/doctors/john_smith.jpg",
            totalPatients: 300,
            hospital: "ABC Hospital"
        },
        {
            id: 2,
            name: "Dr. Emily Johnson",
            specification: "Dermatologist",
            avgRating: 4.8,
            totalRating: 90,
            photo: "https://example.com/doctors/emily_johnson.jpg",
            totalPatients: 200,
            hospital: "XYZ Medical Center"
        },
        {
            id: 3,
            name: "Dr. David Lee",
            specification: "Orthopedic Surgeon",
            avgRating: 4.2,
            totalRating: 80,
            photo: "https://example.com/doctors/david_lee.jpg",
            totalPatients: 150,
            hospital: "123 Hospital"
        },
        {
            id: 4,
            name: "Dr. Sarah Thompson",
            specification: "Pediatrician",
            avgRating: 4.6,
            totalRating: 100,
            photo: "https://example.com/doctors/sarah_thompson.jpg",
            totalPatients: 250,
            hospital: "City Children's Hospital"
        },
        {
            id: 5,
            name: "Dr. Michael Anderson",
            specification: "Neurologist",
            avgRating: 4.3,
            totalRating: 70,
            photo: "https://example.com/doctors/michael_anderson.jpg",
            totalPatients: 180,
            hospital: "Neurocare Medical Center"
        },
        {
            id: 6,
            name: "Dr. Jessica Lee",
            specification: "Gynecologist",
            avgRating: 4.7,
            totalRating: 150,
            photo: "https://example.com/doctors/jessica_lee.jpg",
            totalPatients: 300,
            hospital: "Women's Health Clinic"
        },
        {
            id: 7,
            name: "Dr. Robert Johnson",
            specification: "Ophthalmologist",
            avgRating: 4.4,
            totalRating: 110,
            photo: "https://example.com/doctors/robert_johnson.jpg",
            totalPatients: 220,
            hospital: "Clear Vision Eye Center"
        },
        {
            id: 8,
            name: "Dr. Lisa Wilson",
            specification: "Psychiatrist",
            avgRating: 4.9,
            totalRating: 200,
            photo: "https://example.com/doctors/lisa_wilson.jpg",
            totalPatients: 400,
            hospital: "MindCare Psychiatric Clinic"
        },
        {
            id: 9,
            name: "Dr. Mark Roberts",
            specification: "General Surgeon",
            avgRating: 4.1,
            totalRating: 60,
            photo: "https://example.com/doctors/mark_roberts.jpg",
            totalPatients: 120,
            hospital: "Central Hospital"
        }
    ]

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