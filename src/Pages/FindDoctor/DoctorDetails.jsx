import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useDoctors from '../../Hooks/useDoctors';
import SectionTitle from '../../Shared/SectionTitle';
import image from '../../assets/images/doctor-img01.png'
import { FaStar } from 'react-icons/fa';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Feedback from './Feedback';

const DoctorDetails = () => {

    const [showFeedbackForm, setShowFeedbackForm] = useState(false);

    // const [loading,setLoading]=useState(true);

    // if(loading){
    //     const [doctor,doctorsDataLoading]=useDoctors();
    //     console.log(doctor);
    //     setLoading(false);
    // }


    // const [doctor, setDoctor] = useState([]);
    // const [doctorsDataLoading, setDoctorsDataLoading] = useState(true);

    // useEffect( ()=>{
    //     fetch('doctorData.json')
    //     .then(res=>res.json())
    //     .then(data=> {
    //         setDoctor(data)
    //         setDoctorsDataLoading(false)
    //     })
    // } ,[])
    // console.log(doctor);




    // if (doctorsDataLoading) {
    //     return   <span className="loading loading-bars loading-lg"></span>;
    // }

    const { id } = useParams();
    console.log(id);




    return (
        <section>
            <div className='container flex justify-between'>

                {/* left side */}
                <div>

                    {/* upper */}
                    <div className='flex gap-8 content-center items-center'>
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <p className='bg-green-200 w-32 mb-4 text-center rounded-lg p-4'>Surgeon</p>
                            <p className='text-2xl font-bold mb-2'>Dr.Jewel Rana</p>
                            <div className='flex gap-2'>
                                <FaStar className='text-yellow-300 mt-1 text-xl'></FaStar>
                                <p className='font-bold'>4.5</p>
                                <p>(2)</p>
                            </div>

                            <p className='mt-8'>Specialization in Surgeon</p>

                        </div>
                    </div>


                    {/* about feedback */}


                    <div className='mt-16'>
                        <Tabs>

                            <TabList className='border-b-2 border-b-black'>
                                <Tab style={{ backgroundColor: 'rgb(187 247 208 / var(--tw-bg-opacity))', border: 'none', outline: 'none' }} >About</Tab>

                                <Tab style={{ backgroundColor: 'rgb(187 247 208 / var(--tw-bg-opacity))', borderBottom: '5px green solid', border: 'none', outline: 'none' }}>Feedback</Tab>
                                <hr />
                            </TabList>


                            <TabPanel className='  mt-12 '>
                                <div>
                                    <h2 className='text-2xl font-semibold'> About of <span className='text-blue-600 text-2xl'>Dr.Jewel Rana</span></h2>
                                    <p className='text-justify leading-[30px] mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi, adipisci itaque nulla harum officiis debitis totam natus fuga incidunt ducimus ea explicabo possimus magni cumque repellendus aperiam. Necessitatibus, itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus officia saepe qui explicabo! Ipsum rerum voluptatibus repellat, temporibus fuga neque. Iusto, doloribus, sit modi totam quod in nesciunt minus unde qui ducimus alias obcaecati expedita nulla placeat amet corporis. Impedit.</p>
                                </div>


                                <div>
                                    <h2 className='text-2xl font-semibold mt-8'>  Experience </h2>
                                    <div className='mt-8 grid grid-cols-1 md:grid-cols-2  gap-8'>

                                        <div className="card w-96 shadow-xl">
                                            <div className="card-body">
                                                <h2 className="card-title">2017-2019</h2>
                                                <div className='mt-2'>
                                                    <p className='font-bold'>Asssociate Professor</p>
                                                    <p>Dhaka Medical College</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card w-96 shadow-xl">
                                            <div className="card-body">
                                                <h2 className="card-title">2017-2019</h2>
                                                <div className='mt-2'>
                                                    <p className='font-bold'>Asssociate Professor</p>
                                                    <p>Dhaka Medical College</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card w-96 shadow-xl">
                                            <div className="card-body">
                                                <h2 className="card-title">2017-2019</h2>
                                                <div className='mt-2'>
                                                    <p className='font-bold'>Asssociate Professor</p>
                                                    <p>Dhaka Medical College</p>
                                                </div>
                                            </div>
                                        </div>





                                    </div>





                                </div>






                            </TabPanel>






                            <TabPanel className='  mt-12 '>

                                <div>
                                    <h2 className='text-2xl font-semibold mt-8'>  All Reviews (2) </h2>


                                    {/* reviews start */}
                                    <div className='flex justify-between mt-8'>
                                        <div className='flex gap-4   '>
                                            <img className='h-12 w-12 rounded-full' src={image} alt="" />
                                            <div>
                                                <p>Jewel Rana</p>
                                                <p>June 27, 2023</p>
                                                <p className='text-[16px] text-gray-600 mt-4 '>Excellent service</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-4'>
                                            <FaStar></FaStar>
                                            <FaStar></FaStar>
                                            <FaStar></FaStar>
                                            <FaStar></FaStar>
                                        </div>
                                    </div>
                                    <div className='flex justify-between mt-8'>
                                        <div className='flex gap-4   '>
                                            <img className='h-12 w-12 rounded-full' src={image} alt="" />
                                            <div>
                                                <p>Jewel Rana</p>
                                                <p>June 27, 2023</p>
                                                <p className='text-[16px] text-gray-600 mt-4 '>Excellent service</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-4'>
                                            <FaStar></FaStar>
                                            <FaStar></FaStar>
                                            <FaStar></FaStar>

                                        </div>
                                    </div>
                                    {/* reviews end */}


                                    {
                                        !showFeedbackForm &&
                                        <button className="btn w-full mt-16 text-xl  btn-success outline-none border-none text-white " onClick={() => setShowFeedbackForm(true)}>Give Feedback</button>

                                    }

                                    {
                                        showFeedbackForm &&
                                        <Feedback></Feedback>
                                    }








                                </div>






                            </TabPanel>


                        </Tabs>
                    </div>







                    {/*  
<button className="btn" onClick={()=>window.my_modal_1.showModal()}>open modal</button>

<dialog id="my_modal_1 " className="modal  ">
  <form method="dialog" className="modal-box bg-white">
   
    <h3 className="font-bold text-lg"> How would you rate the overall experience?</h3>


    <h3 className="font-bold text-lg mt-4"> Share your experience</h3>
    <textarea className="textarea textarea-accent bg-white w-full mt-4" placeholder="Bio"></textarea>

    
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal  
      <button className="btn btn-success ">Close</button>
    </div>
  </form>
</dialog>

 */}



                </div>


                {/* right side */}
                <div>
                    <div className="card w-96 bg-white  text-primary-content">
                        <div className="card-body text-black">

                            <div className='flex justify-between'>
                                <p className='text-xl'>Ticket Price</p>
                                <p className='text-xl font-bold ml-24'>700 BDT</p>
                            </div>
                            <div>
                                <p className='font-semibold my-4'>Available Time Slot :</p>

                                <div className='flex justify-between'>
                                    <p className='mb-2'>Sunday</p>
                                    <p className=' ml-24'>4:30 pm - 9:30 pm</p>
                                </div>

                                <div className='flex justify-between'>
                                    <p className='mb-2'>Sunday</p>
                                    <p className=' ml-24'>4:30 pm - 9:30 pm</p>
                                </div>

                                <div className='flex justify-between'>
                                    <p className='mb-2'>Sunday</p>
                                    <p className=' ml-24'>4:30 pm - 9:30 pm</p>
                                </div>



                            </div>




                            <div className="card-actions  w-full">
                                <button className="btn w-full   btn-success outline-none border-none text-white">Book Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>





            </div>


        </section>
    );
};

export default DoctorDetails;