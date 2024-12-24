import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const mije = () => {
  return (
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
            <RiArrowDropDownLine className="text-[30px] text-[#C0C0C0] font-[din-round]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default mije;
