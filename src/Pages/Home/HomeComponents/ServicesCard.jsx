import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesCard = ({ servicesData, index }) => {

    // console.log(servicesData);
    const { service, description, backgroundColor, textColor } = servicesData;

    return (


        <div className="card w-96   shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{service}</h2>
                <p> {description}</p>
                {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}

                <div className='flex justify-between mt-8'>

                    <Link to='/' className='w-[44px] h-[44px] flex items-center justify-center text-[18px] font-[600] bg-blue-600 rounded-full text-white hover:bg-blue-400 '>
                        <FaArrowRight className='  '></FaArrowRight>
                        
                        </Link>


                    <span className='w-[44px] h-[44px] flex items-center justify-center text-[18px] font-[600]'
                        style={{
                            background: `${backgroundColor}`,
                            color: `${textColor}`,
                            borderRadius: '6px 0 0 6px',
                        }}
                    >{index + 1}</span>
                </div>



            </div>
        </div>



    );
};

export default ServicesCard;