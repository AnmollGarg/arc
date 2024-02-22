import React from "react";

const Categories = () => {
  return (
    <div className="background">
      <div className="m-auto w-[43rem] flex justify-between pt-10 pb-10 max-md:hidden">
        <div class="border flex justify-center items-center">
          First Categories
        </div>
        <div className="border flex justify-center items-center">
          Second Categories
        </div>
        <div className="border flex justify-center items-center">
          Third Categories
        </div>
      </div>
      {/* <div className="carousel rounded-box md:hidden">
        <div className="flex justify-center carousel-item w-full">
          <div class="border flex justify-center items-center">
            First Categories
          </div>
        </div>
        <div className="flex justify-center carousel-item w-full">
          <div className="border flex justify-center items-center">
            Second Categories
          </div>
        </div>
        <div className="flex justify-center carousel-item w-full">
          <div className="border flex justify-center items-center">
            Third Categories
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Categories;
