import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle';

import faq from '../../../assets/images/faq-img.png'
import { Link } from 'react-router-dom';

const Faq = () => {



    const faqs = [
        {
            id: 1,
            question: "How can I schedule a medical appointment?",
            answer: "You can schedule a medical appointment by calling our clinic's reception desk or using our online appointment booking system on our website."
        },
        {
            id: 2,
            question: "What information do I need to provide when scheduling an appointment?",
            answer: "When scheduling an appointment, you'll need to provide your name, contact information, reason for the appointment, preferred date and time, and any relevant medical history or referral documents."
        },
        {
            id: 3,
            question: "Can I reschedule or cancel my appointment?",
            answer: "Yes, you can reschedule or cancel your appointment by contacting our clinic's reception desk at least 24 hours in advance. This allows us to accommodate other patients who may need the appointment slot."
        },
        {
            id: 4,
            question: "Do I need a referral from my primary care physician to make an appointment with a specialist?",
            answer: "It depends on your insurance policy and the specific requirements of the specialist you wish to see. Some specialists may require a referral, while others may allow direct appointments. It's best to check with your insurance provider or contact the specialist's office for guidance."
        },
 

    ]




    return (
        <section className=''>
            <div className="container">
                <SectionTitle heading={"FAQ's"} subHeading={'World class care for everyone Our health system offers unmatched expert health care'}></SectionTitle>


                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
                    {/* about image */}
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10  ">
                        <img className='h-[600px]' src={faq} alt="" />
                    </div>


                    <div className="w-full lg:w-1/2 xl:w-[670px] ">
                        <h2 className='heading'>Most questions by our beloved patients </h2>


                        {
                            faqs.map(faqsData => <div className="collapse collapse-plus border mt-8 ">
                                <input type="radio" name="my-accordion-3" checked="checked" />
                                <div className="collapse-title text-2xl font-bold ">
                                    {faqsData.question}
                                </div>
                                <div className="collapse-content">
                                    <p className='text-xl'>{faqsData.answer}</p>
                                </div>
                            </div>)
                        }

 




                    </div>
                </div>
            </div>





        </section>
    );
};

export default Faq;