import React from 'react';
import aboutImg from '../../../assets/images/about.png'
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar } from 'react-icons/fa';

const DoctorCard = ({doctorData}) => {

    // console.log(doctorData);
    const {_id,name,specification,hospital,photo,avgRating,totalRating,totalPatients}=doctorData;
   
   
    return (
        <div className="card w-96  shadow-xl">
        <figure><img src={aboutImg} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>

            <div className='flex justify-between mb-4 mt-2'>
                <div className='h-auto w-auto bg-green-300 text-center p-2 rounded-md'>
                    <p className=''>{specification}</p>
                </div>
                <div className='flex gap-2 justify-center mt-3'>
                    <FaStar className='text-yellow-400  mt-1'></FaStar>
                    <span>{avgRating}</span>
                    <span>({ totalRating})</span>
                </div>

            </div>
            <div className='flex justify-between'>
                <div>
                    <p className='font-bold'>+{totalPatients} Patients</p>
                    <p>{ hospital}</p>
                </div>
                <div>
                    <Link to={`/doctor/${_id}`} className='w-[54px] h-[54px] flex items-center justify-center text-[18px] font-[600] bg-blue-600 rounded-full text-white hover:bg-blue-400 '>
                        <FaArrowRight className=' '></FaArrowRight>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default DoctorCard;