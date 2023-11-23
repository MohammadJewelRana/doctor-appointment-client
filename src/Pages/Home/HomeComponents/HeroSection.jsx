import React from 'react';
import heroimage1 from '../../../assets/images/hero-img01.png'
import heroimage2 from '../../../assets/images/hero-img02.png'
import heroimage3 from '../../../assets/images/hero-img03.png'

const HeroSection = () => {
    return (
        <>
            <section className=' pt-[60px] 2xl:h-[800px] '>
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                        {/* hero content */}
                        {/* left side */}
                        <div>
                            <div className='lg:w-[570px]'>
                                <h1 className='text-[36px] leading-[56px] font-[800] md:text-[60px] md:leading-[70px]' >We help patients live a healthy, longer life</h1>
                                <p className='mt-12 font-[400] text-[18px] '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolorum corporis natus beatae error necessitatibus quod. Nesciunt neque veritatis est!</p>
                                <button className="btn btn-info mt-4 text-white">Request an Appointment</button>
                            </div>

                            {/* hero counter */}
                            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                                <div>
                                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] border-b-8 border-b-yellow-500 border-[30%] mb-2'>30+</h2>
                                    <p>Years of Experience</p>
                                </div>
                                <div>
                                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] border-b-8 border-b-red-500 border-[30%] mb-2'>15+</h2>
                                    <p>Clinic Location</p>
                                </div>
                                <div>
                                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] border-b-8 border-b-green-500 border-[30%] mb-2'>100%</h2>
                                    <p>Patient satisfaction</p>
                                </div>
                            </div>
                        </div>

                        {/* right side */}
                        <div className='flex gap-[30px] justify-end'>
                            <div>
                                <img className='w-full' src={heroimage1} alt="" />
                            </div>
                            <div className='mt-[30px]'>
                                <img className='w-full mb-[30px]' src={heroimage2} alt="" />
                                <img className='w-full' src={heroimage3} alt="" />
                            </div>
                        </div>


                    </div>







                </div>





            </section>
        </>

    );
};

export default HeroSection;