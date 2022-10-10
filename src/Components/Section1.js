import React from "react";
import Colla from "../image/Colla.png";
import Communicative from "../image/Communicative.png";
import Professional from "../image/Professional.png";
import star from "../image/star.png";

const Section1 = () => {
  return (
    <>
      <div className="sm:w-full w-[500px] ">
        <div className=" text-center sm:mt-[90px] mt-[50px] ">
          <h1 className="font-semibold sm:text-5xl text-3xl">Why Hire Me?</h1>
        </div>


        <div className="flex justify-around flex-col sm:flex-row  items-center ">
          <div className="w-[240px] text-center mt-[70px] ">
            <div className="w-[100px] h-[100px] rounded-full  bg-[#2222221A] inline-block">
              <img src={Colla} alt="" className="pt-[30px] pl-[15px]" />
            </div>
            <h1>Communicative</h1>
            <h1>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </h1>
          </div>

          <div className="w-[240px] text-center justify-center items-center mt-[70px]">
            <div className="w-[100px] h-[100px] rounded-full  bg-[#2222221A] inline-block">
              <img src={Communicative} alt="" className="pt-[25px] pl-[25px]" />
            </div>
            <h1>Communicative</h1>
            <h1>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </h1>
          </div>

          <div className="w-[240px] text-center justify-center items-center mt-[70px] ">
            <div className="w-[100px] h-[100px] rounded-full bg-[#2222221A] inline-block">
              <img src={Professional} alt="" className="pt-[25px] pl-[30px]" />
            </div>
            <h1>Communicative</h1>
            <h1>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </h1>
          </div>

          <div className="w-[240px] text-center justify-center items-center mt-[70px]">
            <div className="w-[100px] h-[100px] rounded-full  bg-[#2222221A] inline-block">
              <img src={star} alt="" className="pt-[25px] pl-[25px]" />
            </div>
            <h1>Communicative</h1>
            <h1>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
