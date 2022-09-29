import React from "react";
import Vector1 from "../image/Vector1.png";
import Vector2 from "../image/Vector2.png";
import Squircle from "../image/Squircle.png";


const Footer = () => {
  return (
    <div className="sm:w-full w-[375px] bg-[#F1F1F1]  ">
      <div className="flex sm:flex-row sm:justify-around sm:items-center h-[170px] flex-col justify-between items-center   ">
        <div className="sm:mt-0 mt-[36px]">kp.lalun@gmail.com</div>
        <div>© Copyright 2022 | pokdeng</div>
        <div>
          <div className="flex">
            <div className="mr-[12px]">
              <a href="https://www.instragram.com">
                <img src={Vector1} alt="instragram"></img>
              </a>
            </div>

            <div>
              <a href="https://www.telegram.com">
                <img src={Vector2} alt="telegram"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
