import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <section>
            <div className='mx-auto lg:w-[470px] '>
                <h1 className='heading text-center  '> {heading}</h1>
              
                <p className='text-center mt-4'> {subHeading}</p>
            </div>
        </section>
    );
};

export default SectionTitle;