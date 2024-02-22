import React from "react";
import logo from "../assets/jessica-smith-high-resolution-logo-transparent.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#EEEAE5]">
      <div className="grid grid-cols-5">
        <img src="https://i.ibb.co/8K302mW/DSC05699-websize-2-1-1024x683.jpg" />
        <img src="https://i.ibb.co/tZrGxG0/computer-workspace-with-decorations-198103-27.jpg" />
        <img src="https://i.ibb.co/ZW08Q1j/laptop-near-paper-cup-with-felt-pens-letter-computer-mouse-23-2148036868.jpg" />
        <img src="https://i.ibb.co/nMjfp9Z/zero-waste-accessories-pink-204757-627.jpg" />
        <img src="https://i.ibb.co/JyW52HD/flat-lay-top-view-office-table-desk-workspace-background-1150-6856.jpg" />
      </div>
      <div className="flex justify-between items-center m-10 max-sm:flex-col">
        <div>
          <a className="hover:cursor-pointer text-xl">
            <img src={logo} className="h-12 w-50" />
          </a>
        </div>
        <div className="flex justify-between items-center w-[29rem] max-sm:flex-col">
          <h3>ABOUT US</h3>
          <h3>PORTFOLIO</h3>
          <h3>SERVICES</h3>
          <h3>LET'S CHAT</h3>
        </div>
        <div className="flex m-5">
          <FaFacebookF className="mr-3" />
          <FaInstagram className="mr-3" />
          <FaXTwitter className="mr-3" />
          <FaLinkedinIn />
        </div>
      </div>
      <div>
        <hr className="border-black m-10 mt-0" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="m-auto">Copyright © 2024 - All right reserved</p>
        <div className="flex justify-around items-center w-[46rem] mt-10 mb-10 max-sm:flex-col">
          <h6 className="">Contact us</h6>
          <h4 className="link link-hover">example@gmail.com</h4>
          <h4 className="link link-hover">+64 958 248 966</h4>
          <h4 className="link link-hover">Social media</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
