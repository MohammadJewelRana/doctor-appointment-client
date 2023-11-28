import React, { useEffect, useState } from 'react';
import img1 from '../../assets/images/doctor-img01.png'

const Appointments = () => {
    const data = [
        { id: 1, image: img1, name: 'John Doe', gender: 'Male', payment: 'Credit Card', price: '$100', date: '2023-12-01' },
        { id: 2, image: img1, name: 'Jane Doe', gender: 'Female', payment: 'PayPal', price: '$120', date: '2023-12-02' },
        { id: 3, image: img1, name: 'Sam Smith', gender: 'Male', payment: 'Cash', price: '$80', date: '2023-12-03' },
        // Add more data as needed
    ];

    const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallDevice(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <div>
            <h1 className='text-center font-bold text-2xl   '>Appointments</h1>
            <div className='border-b-4 border-black mb-8 w-12 mx-auto mt-1'></div>

            {isSmallDevice ? (
                <div className="grid grid-cols-1 gap-4 px-4">
                    {data.map((row) => (
                        <div key={row.id} className="bg-white rounded-md overflow-hidden shadow-md">
                            <img src={row.image} alt={row.name} className="w-full h-48  p-4" />
                            {/* <div className="p-4  ">
                <h2 className="text-xl font-semibold mb-2 text-center">{row.name}</h2>
                <p className='text-center'><strong>Gender:</strong> {row.gender}</p>
                <p><strong>Payment:</strong> {row.payment}</p>
                <p><strong>Price:</strong> {row.price}</p>
                <p><strong>Date:</strong> {row.date}</p>
              </div> */}
                            <div className='my-4'>
                                <table className='mx-auto'>
                                     
                                    <tbody>
                                      <tr className=''>
                                        <td className=' font-bold'>Name</td>
                                        <td className='pl-8 '>{row.name}</td>
                                      </tr>
                                      <tr className=''>
                                        <td className='font-bold '>Gender</td>
                                        <td className='pl-8 '>{row.gender}</td>
                                      </tr>
                                      <tr className=''>
                                        <td className=' font-bold'>Payment</td>
                                        <td className='pl-8 '>{row.payment}</td>
                                      </tr>
                                      <tr className=''>
                                        <td className='font-bold '>Price</td>
                                        <td className='pl-8 '>{row.price}</td>
                                      </tr>
                                      <tr className=''>
                                        <td className='font-bold '>Date</td>
                                        <td className='pl-8 '>{row.date}</td>
                                      </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="overflow-x-auto md:mr-12   md:-ml-36 lg:ml-4">
                    <table className="    border-gray-300  ">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className=" px-6 py-4">Image</th>
                                <th className=" px-6 py-4">Name</th>
                                <th className=" px-6 py-4">Gender</th>
                                <th className=" px-6 py-4">Payment</th>
                                <th className=" px-6 py-4">Price</th>
                                <th className=" px-6 py-4">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr key={row.id} className="hover:bg-gray-100">
                                    <td className="  border-b-2 px-6 py-4">
                                        <img src={row.image} alt={row.name} className="w-12 h-12 object-cover rounded-full" />
                                    </td>
                                    <td className="border-b-2 px-6 py-4">{row.name}</td>
                                    <td className="border-b-2 px-6 py-4">{row.gender}</td>
                                    <td className="border-b-2 px-6 py-4">{row.payment}</td>
                                    <td className="border-b-2 px-6 py-4">{row.price}</td>
                                    <td className="border-b-2 px-6 py-4">{row.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                
            )}
        </div>


    );
};

export default Appointments;