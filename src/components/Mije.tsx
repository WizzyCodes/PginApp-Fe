import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const mije = () => {
  return (
    <div className="font-Outfit">
      <div className="w-full h-[4rem] flex justify-center items-center fixed shadow-lg bg-[white]">
        <div className="w-[80%] h-full  flex justify-between">
          <div className="w-[300px] h-full flex items-center justify-start">
            <img
              className=""
              src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/f92d5f2f7d56636846861c458c0d0b6c.svg"
              alt=""
            />
          </div>
          <div className="w-[300px] h-full  flex justify-end items-center ">
            <div className="w-[260px] h-[50px]  flex gap-1 items-center justify-end">
              <p className="uppercase text-[14px] font-semibold text-[#C0C0C0]  font-Outfit ">
                site language: pidgin
              </p>
              <RiArrowDropDownLine className="text-[30px] text-[#C0C0C0] " />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[550px]  flex justify-center items-end">
        <div className="w-[75%] h-[70%] ml-[30px] flex">
          <div className="w-[50%] h-[100%] ]">
            <img
              className="w-full h-full"
              src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/08ec8d0260c55c054e1b97bcbc96ea0f.svg"
              alt=""
            />
          </div>
          <div className="w-[50%] h-[100%] flex justify-center  flex-col">
            <div className="w-[100%] h-[280px]  text-center">
              <h2 className="text-[30px] text-center text-[#4B4B4B] font-semibold">
                The free, fun, and effective way to learn a language!
              </h2>
              <button className="px-[100px] py-[10px] mt-[30px] text-white bg-[#58CC02] rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mije;
