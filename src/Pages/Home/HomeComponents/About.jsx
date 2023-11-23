import React from 'react';
import aboutImg from '../../../assets/images/about.png'
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <section >
            <div className="container mt-24">

                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
                    {/* about image */}
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10  ">
                        <img className='h-[600px]' src={aboutImg} alt="" />
                    </div>
                    

                <div className="w-full lg:w-1/2 xl:w-[670px] ">
                    <h2 className='heading'>Proud be one of the nations best </h2>
                    <p className='mt-12 text-3xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, deserunt. Optio saepe accusantium tempore atque alias vel quidem maxime neque.</p>


                    <p className='mt-[30px] text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum corrupti, numquam cupiditate sapiente quas nulla animi. Quis, nam quibusdam.</p>

                    <Link><button className=" p-4  btn-success mt-12 bg-blue-600   text-white text-2xl   rounded-full px-12 py-6">Learn More</button></Link>
                </div>
                </div>
 

            </div>

        </section>
    );
};

export default About;