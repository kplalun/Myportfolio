import icon_fb from "../image/icon-fb.png";
import icon_ig from "../image/icon-ig.png";
import icon_telegram from "../image/icon-telegram.png";
import icon_twitter from "../image/icon-twitter.png";
import profile from "../image/profile.jpg";
import BulletPoints from "../image/BulletPoints.png";

function Nav() {
  return (
    <>
     
      <div className="bg-[#ef4444] h-36 Relative w-full ">
        <div className="h-24 absolute top-[2.6rem] left-[10rem] text-[2.5rem] font-semibold text-white">
          My Profile
        </div>
      </div>

      <div className="w-full flex justify-around ml-44 ">

        {/* box1 */}
        <div className=" w-[475px] mt-32 bg-blue-700">
          <h3 className="font-normal text-2xl ">Hi!</h3>
          <h1 className="font-semibold text-4xl mt-4">I’m Mohammad Reza. a Frontend developer.</h1>
          {/* <h1 className="font-semibold text-4xl"> </h1> */}
          <h3 className="text-lg mt-12 ">
            Frontend developer based in tehran, Iran. I am coding with a clean
            and beautiful problem solving in mind.
          </h3>

          <div className="flex mt-6">
            <div className="text-lg text-[#22222280]">Follow me </div>

            {/* icon*/}
            <div className="flex ">
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
          {/* End icon */}
          <div className="mt-16">
            <button className="bg-[#FF2950] hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mr-4">
              Send Request
            </button>
            <button className="bg-transparent border-solid border-2 border-[#FF9B70] hover:bg-blue-700 text-[#22222280] font-bold py-4 px-4 rounded ml-4">
              Download CV
            </button>
          </div>
        </div>

        {/* box2 */}
        <div className="w-[475px] flex mt-32 relative  justify-center mr-44  bg-orange-700">
        
        <div><img src={profile} alt="img_profile" className="rounded-full z-30 relative w-[406px] h-[406px]  "></img>
          <img src={BulletPoints} alt="img_profile" className=" z-0 absolute bottom-16 right-1/2"></img>
          <img src={BulletPoints} alt="img_profile" className=" z-0 absolute top-0 left-1/2"></img>
          </div>
        </div>
        

    
      </div>
      
    </>
  );
}
export default Nav;

