import React from "react";

const Poster = () => {
  return (
    <div>
      <div className="carousel w-full mb-0">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="bg-[#353A32] w-screen h-[25rem] flex justify-center items-center">
            <div className=" w-[54rem]">
              <h4 className="flex justify-center m-3">Love From Clients</h4>
              <p className="flex justify-center m-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem is that it has more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here making it look readable English desktop publishing
                packages and web page editors now use Lorem Ipsum as their
                default model text, and a search will uncover many web sites
                still in their infancy.
              </p>
              <h4 className="flex justify-center m-3">Warm Regards</h4>
              <h4 className="flex justify-center m-3">Smith's Company</h4>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-[4rem] right-[4rem] top-1/2 max-lg:top-[88%]">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="bg-[#353A32] w-screen h-[25rem] flex justify-center items-center">
            <div className=" w-[54rem]">
              <h4 className="flex justify-center m-3">Love From Patients</h4>
              <p className="flex justify-center m-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem is that it has more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here making it look readable English desktop publishing
                packages and web page editors now use Lorem Ipsum as their
                default model text, and a search will uncover many web sites
                still in their infancy.
              </p>
              <h4 className="flex justify-center m-3">Warm Regards</h4>
              <h4 className="flex justify-center m-3">Smith's Company</h4>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-[4rem] right-[4rem] top-1/2 max-lg:top-[88%]">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="bg-[#353A32] w-screen h-[25rem] flex justify-center items-center">
            <div className=" w-[54rem]">
              <h4 className="flex justify-center m-3">Love From Employee</h4>
              <p className="flex justify-center m-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem is that it has more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here making it look readable English desktop publishing
                packages and web page editors now use Lorem Ipsum as their
                default model text, and a search will uncover many web sites
                still in their infancy.
              </p>
              <h4 className="flex justify-center m-3">Warm Regards</h4>
              <h4 className="flex justify-center m-3">Smith's Company</h4>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-[4rem] right-[4rem] top-1/2 max-lg:top-[88%]">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="bg-[#353A32] w-screen h-[25rem] flex justify-center items-center">
            <div className=" w-[54rem]">
              <h4 className="flex justify-center m-3">Love From Everyone</h4>
              <p className="flex justify-center m-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem is that it has more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here making it look readable English desktop publishing
                packages and web page editors now use Lorem Ipsum as their
                default model text, and a search will uncover many web sites
                still in their infancy.
              </p>
              <h4 className="flex justify-center m-3">Warm Regards</h4>
              <h4 className="flex justify-center m-3">Smith's Company</h4>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-[4rem] right-[4rem] top-1/2 max-lg:top-[88%]">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
