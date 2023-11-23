import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle';

import icon1 from '../../../assets/images/icon01.png'
import icon2 from '../../../assets/images/icon02.png'
import icon3 from '../../../assets/images/icon03.png'
import { FaArrowCircleRight, FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FindServices = () => {
    return (
        <div >
            <SectionTitle heading={'Providing the best medical services'} subHeading={'World class care for everyone Our health system offers unmatched expert health care'}></SectionTitle>

            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-[30px] lg:mt-[55px]'>

                <div className="card w-96   shadow-xl">
                    <figure><img src={icon1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="  text-center text-2xl font-bold">Find a Doctor</h2>
                        <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, placeat.</p>

                        <div className="card-actions justify-center">
                            <Link to='/ '>  <FaArrowCircleRight className='bg-blue-600 text-white rounded-full text-2xl '></FaArrowCircleRight> </Link>
                        </div>
                    </div>
                </div>

                <div className="card w-96   shadow-xl">
                    <figure><img src={icon2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="  text-center text-2xl font-bold">Find a  Location</h2>
                        <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, placeat.</p>

                        <div className="card-actions justify-center">
                            <Link to='/ '>  <FaArrowCircleRight className='bg-blue-600 text-white rounded-full text-2xl '></FaArrowCircleRight> </Link>
                        </div>
                    </div>
                </div>

                <div className="card w-96   shadow-xl">
                    <figure><img src={icon3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="  text-center text-2xl font-bold">Book Appointment</h2>
                        <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, placeat.</p>

                        <div className="card-actions justify-center">
                            <Link to='/ '>  <FaArrowCircleRight className='bg-blue-600 text-white rounded-full text-2xl '></FaArrowCircleRight> </Link>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default FindServices;