import React from "react";

const Content = () => {
  return (
    <div className="bg-[#F5F5F3] p-10 pb-7">
      <h1 className="text-4xl text-black flex justify-center p-10">
        Our Latest Projects
      </h1>
      <div className="flex justify-around items-center">
        <div>
          <img src="https://i.ibb.co/0GtDkcj/Our-Bathrooms.png" />
          <h3 className="flex justify-center mt-5 mb-5 text-black">
            Image 1 - Bathroom
          </h3>
          <hr className="pb-5 border-black" />
        </div>
        <div>
          <img src="https://i.ibb.co/Kz1K16b/colour.jpg" />
          <h3 className="flex justify-center mt-5 mb-5 text-black">
            Image 2 - Color
          </h3>
          <hr className="pb-5 border-black" />
        </div>
        <div>
          <img src="https://i.ibb.co/GJMwMQF/Handles.png" />
          <h3 className="flex justify-center mt-5 mb-5 text-black">
            Image 3 - Handles
          </h3>
          <hr className="pb-5 border-black" />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn bg-transparent hover:bg-slate-200">
          Know More About
        </button>
      </div>
    </div>
  );
};

export default Content;
