import React from 'react';
import aboutImg from '../../../assets/images/about.png'
import { Link } from 'react-router-dom';
import videoIcon from '../../../assets/images/video-icon.png'
import featureImg from '../../../assets/images/feature-img.png'



const Feature = () => {
    return (
        <section >
            <div className="container mt-24">

                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">


                    <div className="w-full lg:w-1/2 xl:w-[670px] ">
                        <h2 className='heading'>Get Virtual Treatment Anytime </h2>

                        <ol className='text-2xl leading-[60px]' type=''>
                            <li>*** Schedule the appointment directly</li>
                            <li>*** Search your physician here and contact their office</li>
                            <li>*** Search your physician here and contact their office</li>
                            <li>*** Search your physician here and contact their office</li>
                        </ol>

                        <Link><button className=" p-4  btn-success mt-12 bg-blue-600   text-white text-2xl   rounded-full px-12 py-6">Learn More</button></Link>
                    </div>


                    {/* about image */}
                    <div className=" relative   ml-[100px]  ">
                        <img className='h-[500px]' src={featureImg} alt="" />

                        <div className='h-[110px] w-[230px] bg-white rounded-lg border  absolute -mt-[270px] -ml-[120px] '>
                            <div className='flex justify-between m-4'>
                                <p>Tue,24. 10.00am</p>
                                <div className='h-[30px] w-[30px] bg-yellow-600  rounded-lg'>
                                    <img className='mx-auto mt-1' src={videoIcon} alt="" />
                                </div>

                            </div>
                            <span className='border m-4 p-2 rounded-2xl bg-sky-300'>Consultation</span>
                        </div>
                    </div>
                </div>


            </div>

        </section>
    );
};

export default Feature;