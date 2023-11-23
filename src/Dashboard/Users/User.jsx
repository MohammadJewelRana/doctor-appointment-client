import React from 'react';

import useAllUser from '../../Hooks/useAllUser';
import UserTable from './UserTable';
import DashboardComponentTitle from '../DashboardComponentTitle';

const User = () => {
 


  const [allUsers, allUsersLoading, refetch] = useAllUser();
  console.log(allUsers);


  return (
    <>

      <DashboardComponentTitle title={'All Users'}></DashboardComponentTitle>

      <div className="card w-full mt-8  border-2">
        <div className="card-body text-center -p-12">


          <div className="overflow-x-auto lg:w-[100%]  ">


            <div className="sm:hidden">
              {allUsers.map((user) => (
                <div key={user.id} className="bg-white rounded-lg shadow-md p-4 mb-4 text-left">
                  <div className="font-semibold text-lg mb-2">Name: {user.name}</div>

                  <div className="text-gray-600 mb-2">
                    <span className="font-semibold">Email:  {user.email}</span>
                  </div>
                  <div className="text-gray-600 mb-2">
                    <span className="font-semibold">Password: {user.password}</span>
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold">Role: {user.role}</span>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <button className="px-2 py-1 bg-blue-500 text-white rounded-md">Edit</button>
                    <button className="px-2 py-1 bg-red-500 text-white rounded-md ml-2">Delete</button>
                  </div>

                </div>
              ))}
            </div>





            <div className="overflow-x-auto hidden sm:block">
              <table className="table    ">
                {/* head */}
                <thead className='text-white  text-[15px] bg-blue-900 '>
                  <tr>
                    <th>SI</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Role</th>
                    <th>Action</th>

                  </tr>
                </thead>
                <tbody>



                  {
                    allUsers.map((userData, index) => <UserTable
                      key={userData._id}
                      userData={userData}
                      refetch={refetch}
                      index={index}
                    ></UserTable>)
                  }

                </tbody>
              </table>
            </div>

          </div>





        </div>
      </div>


    </>
  );
};

export default User;