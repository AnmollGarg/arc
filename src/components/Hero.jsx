import React from "react";

const Hero = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex items-center p-[1rem] max-md:flex-col">
        <div className="">
          <img
            src="https://i.ibb.co/sH2dRZv/Group-1.png"
            className="h-[35rem] max-md:h-[30rem] max-sm:h-[25rem]"
          />
        </div>
        <div className="m-auto w-[34rem] max-lg:w-[28rem] max-lg:p-[1rem] max-sm:w-auto">
          <h4 className="text-5xl leading-[4rem] text-black">
            We create strategic Webflow websites for passionate entrepreneurs
          </h4>
          <button className="btn hover:bg-slate-300 ml-32 mt-8 bg-transparent max-lg:m-auto">
            WORK WITH US
          </button>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Hero;
