import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import ServicesCard from './ServicesCard';

const ServiceSection = () => {

    const services= [
        {
            id: 1,
            service: "Cancer Care",
            description: "Comprehensive care for cancer patients, including diagnosis, treatment, and supportive services.",
            backgroundColor: "#FDEDEC",
            textColor: "#B03A2E"
          },
          {
            id: 2,
            service: "Labor and Delivery",
            description: "Expert care and assistance during the process of childbirth, ensuring the well-being of both the mother and baby.",
            backgroundColor: "#EBF5FB",
            textColor: "#2980B9"
          },
          {
            id: 3,
            service: "Mental Health",
            description: "Professional support and treatment for individuals dealing with mental health conditions, promoting overall well-being and emotional health.",
            backgroundColor: "#F2F3F4",
            textColor: "#34495E"
          },
          {
            id: 4,
            service: "Cardiovascular Care",
            description: "Specialized care for individuals with heart and vascular diseases, including diagnosis, treatment, and rehabilitation.",
            backgroundColor: "#F9EBEA",
            textColor: "#C0392B"
          },
          {
            id: 5,
            service: "Orthopedic Care",
            description: "Comprehensive care for musculoskeletal conditions, including joint replacements, fracture management, and physical therapy.",
            backgroundColor: "#E8F8F5",
            textColor: "#16A085"
          },
          {
            id: 6,
            service: "Neurological Care",
            description: "Specialized care for neurological disorders and conditions, including stroke, epilepsy, Parkinson's disease, and brain tumors.",
            backgroundColor: "#FDF2E9",
            textColor: "#D35400"
          }
      ]
      




    return (
        <section id='service'>
            <div className="container">
                <SectionTitle heading={'Our Medical Services'}  subHeading={'World class care for everyone Our health system offers unmatched expert health care'}></SectionTitle>
                

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                    services.map((servicesData,index)=><ServicesCard
                    key={servicesData.id}
                    servicesData={servicesData}
                    index={index}
                    ></ServicesCard>)
                    
                    }
                </div>



            </div>
            




        </section>
    );
};

export default ServiceSection;