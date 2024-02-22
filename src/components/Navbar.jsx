import React from "react";
import logo from "../assets/jessica-smith-high-resolution-logo-transparent.png";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-300 pl-5 pr-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
              <ul className="p-2">
                <li>
                  <a>Why Started?</a>
                </li>
                <li>
                  <a>Know More</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <a className="hover:cursor-pointer text-xl">
          <img src={logo} className="h-12 w-50" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details>
              <summary>About</summary>
              <ul className="p-2">
                <li>
                  <a>Know More</a>
                </li>
                <li>
                  <a>Why Started?</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Contact us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
