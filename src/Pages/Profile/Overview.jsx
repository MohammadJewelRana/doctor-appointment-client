import React from "react";
import img1 from "../../assets/images/doctor-img01.png";
import { FaStar } from "react-icons/fa";

const Overview = () => {
  return (
    <div className=" ">
      <div className="flex gap-8 content-center items-center px-8">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <p className="bg-green-200 w-32 mb-4 text-center rounded-lg py-1 md:p-4">
            Surgeon
          </p>
          <p className="md:text-2xl font-bold mb-2">Dr.Jewel Rana</p>
          <div className="flex gap-2">
            <FaStar className="text-yellow-300 mt-1 text-[10px] md:text-xl"></FaStar>
            <p className="font-bold text-[10px] md:text-xl">4.5</p>
            <p className="text-[10px] md:text-xl">(2)</p>
          </div>

          <p className="md:mt-8 md:text-[14px] mt-2 text-[10px]">Specialization in Surgeon</p>
        </div>
      </div>

 <div className="max-w-[670px]">
 <div className="px-8 mt-16">
        <h2 className="text-2xl font-semibold">
          {" "}
          About of <span className="text-blue-600 text-2xl">Dr.Jewel Rana</span>
        </h2>
        <p className="text-justify leading-[30px] mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi,
          adipisci itaque nulla harum officiis debitis totam natus fuga incidunt
          ducimus ea explicabo possimus magni cumque repellendus aperiam.
          Necessitatibus, itaque. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Natus officia saepe qui explicabo! Ipsum rerum
          voluptatibus repellat, temporibus fuga neque. Iusto, doloribus, sit
          modi totam quod in nesciunt minus unde qui ducimus alias obcaecati
          expedita nulla placeat amet corporis. Impedit.
        </p>
      </div>

      <div className=" ">
        <h2 className="text-2xl font-semibold mt-8 px-8"> Experience </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2  gap-8 px-8   ">
          <div className="card  shadow-xl  ">
            <div className="card-body">
              <h2 className="card-title">2017-2019</h2>
              <div className="mt-2">
                <p className="font-bold">Asssociate Professor</p>
                <p>Dhaka Medical College</p>
              </div>
            </div>
          </div>
          <div className="card   shadow-xl ">
            <div className="card-body">
              <h2 className="card-title">2017-2019</h2>
              <div className="mt-2">
                <p className="font-bold">Asssociate Professor</p>
                <p>Dhaka Medical College</p>
              </div>
            </div>
          </div>
          <div className="card   shadow-xl">
            <div className="card-body">
              <h2 className="card-title">2017-2019</h2>
              <div className="mt-2">
                <p className="font-bold">Asssociate Professor</p>
                <p>Dhaka Medical College</p>
              </div>
            </div>
          </div>
        </div>
      </div>
 </div>


    </div>
  );
};

export default Overview;
