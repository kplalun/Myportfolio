import React from "react";
import "../index.css";
import image1 from "../image/Image1.png";
import image2 from "../image/Image2.png";
import image3 from "../image/Image3.png";
import image4 from "../image/Image4.png";
import image5 from "../image/Image5.png";
import image6 from "../image/Image6.png";
import "../index.css";

const Section2 = () => {
  return (
    <>
      <div className="sm:w-full sm:mt-[125px] w-[375px]  ">
        <div className="flex justify-between ml-[100px] mr-[100px] relative">
          <h1 className="font-semibold text-5xl sm:mt-[100px] relative mt-[36px]">Portfolio</h1>
          <a href="#" className="none text-sm font-normal sm:mt-[100px] text-[#22222280] ">
            See More
          </a>
        </div>

        <div className=" flex-col ">
          <div className="row1 flex justify-center mt-[64px] ">
            <div className="m-[6px] ">
              <img src={image1}></img>
            </div>
            <div className="m-[6px]">
              <img src={image2}></img>
            </div>
            <div className="none m-[6px]">
              <img src={image3}></img>
            </div>
          </div>

          <div className="row2 flex justify-center m-[6px] ">
            <div className="m-[6px]">
              <img src={image4}></img>
            </div>
            <div className="m-[6px]">
              <img src={image5}></img>
            </div>

            <div className="none m-[6px]">
              <img src={image6}></img>
            </div>
          </div>
          <a href="#" className="show text-sm font-normal sm:mt-[100px] text-[#22222280] ">
            See More
          </a>
        </div>
      </div>
    </>
  );
};

export default Section2;
