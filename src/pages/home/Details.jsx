import React from "react";

const Details = () => {
  return (
    <div className="flex h-[35rem] justify-around items-center bg-[#F5F5F3] max-md:flex-col max-md:p-[1rem] max-md:h-auto">
      <div className="w-[35rem] max-md:w-auto max-md:p-[1rem]">
        <h4 className="text-4xl text-black">
          But what exactly do we do you may ask?
        </h4>
        <p className="mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
        <p className="mt-7">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing
        </p>
        <button className="btn bg-transparent mt-5">
          Click Here for Details
        </button>
      </div>
      <div className="">
        <img
          src="https://i.ibb.co/NVmyrZ0/Group-2.png"
          className="h-[30rem] w-[30rem]"
        />
      </div>
    </div>
  );
};

export default Details;
