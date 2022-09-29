import React from "react";
import icon_fb from "../image/icon-fb.png";
import icon_ig from "../image/icon-ig.png";
import icon_telegram from "../image/icon-telegram.png";
import icon_twitter from "../image/icon-twitter.png";
import profile from "../image/profile.jpg";
import BulletPoints from "../image/BulletPoints.png";
import "../index.css";

const Nav2 = () => {
  return (
    <>
      <div className="sm:w-full w-[375px] ">
        <div className="bg-[#ef4444]  Relative h-[109px] sm:h-36 ">
          <div className=" text-[2.5rem] font-semibold text-white text-center  sm:h-24 sm:absolute sm:top-[2.6rem] sm:left-[10rem]  sm:text-black ">
            My Profile
          </div>
        </div>

        {/* กล่องใหญ่ */}
        <div className="sm:w-full sm:flex justify-around ">
          {/* กล่อง 1 */}
          <div className="sm:w-[475px] sm:mt-[90px] ml-[21px]  ">
            <h3 className="font-normal text-2xl ">Hi!</h3>
            <h1 className="font-semibold text-[40px] mt-4">
              I’m Mohammad Reza. a Frontend developer.
            </h1>
            <h3 className="text-lg mt-12  ">
              Frontend developer based in tehran, Iran. I am coding with a clean
              and beautiful problem solving in mind.
            </h3>

            <div className="flex mt-6 ">
              <div className=" self-center">
                <div className="text-lg text-[#22222280] ">Follow me</div>
              </div>

              {/* icon*/}
              <div className="flex">
                <div className="p-2">
                  <a href="https://www.facebook.com">
                    <img src={icon_fb} alt="facebook"></img>
                  </a>
                </div>

                <div className="p-2">
                  <a href="https://www.facebook.com">
                    <img src={icon_ig} alt="twitter"></img>
                  </a>
                </div>

                <div className="p-2">
                  <a href="https://www.facebook.com">
                    <img src={icon_telegram} alt="instagram"></img>
                  </a>
                </div>

                <div className="p-2">
                  <a href="https://www.facebook.com">
                    <img src={icon_twitter} alt="telegram"></img>
                  </a>
                </div>
              </div>
            </div>

            {/* ปุ่ม */}
            <div className="mt-16 flex sm:w-full justify-center  ">
              <div>
                <button className="bg-[#FF2950] hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mr-4">
                  Send Request
                </button>
              </div>
              <div>
                <button className="bg-transparent border-solid border-2 border-[#FF9B70] hover:bg-blue-700 text-[#22222280] font-bold py-4 px-4 rounded ml-4">
                  Download CV
                </button>
              </div>
            </div>
            {/* ปุ่ม */}
          </div>

          {/* กล่อง 2 */}
          <div className="none">
            <div className="w-[375px] flex mt-32 relative  justify-center mr-44  ">
              <div>
                <img
                  src={profile}
                  alt="img_profile"
                  className="rounded-full z-30 relative w-[375px] h-[375px]  "
                ></img>
                <img
                  src={BulletPoints}
                  alt="img_profile"
                  className=" z-0 absolute bottom-16 right-1/2"
                ></img>
                <img
                  src={BulletPoints}
                  alt="img_profile"
                  className=" z-0 absolute top-0 left-1/2"
                ></img>
              </div>
            </div>
          </div>
          {/* End กล่อง2 */}
        </div>
      </div>
    </>
  );
};

export default Nav2;
