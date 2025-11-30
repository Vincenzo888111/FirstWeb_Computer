import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ notification }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50 shadow-xl p-4">
      {/* MAIN CONTAINER */}
      <div className="flex justify-between items-center gap-4">
        {/* Logo */}
        <span className="text-sky-400 font-bold text-3xl md:text-4xl">
          Computer.
        </span>

        {/* NAVIGATION */}

        {/* Icons */}
        <div className="flex items-center gap-5 text-2xl text-black">
          <nav className="text-2xl font-bold flex items-end relative">
            {/* === Menu icon (mobile only) === */}
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              <i className="fa-solid fa-bars text-left  hover:text-sky-500"></i>
            </button>

            {/* === Desktop menu === */}
            <ul className="hidden md:flex gap-6 font-medium ml-6">
              <li>
                <a href="#Home" className="link">
                  Home
                </a>
              </li>
              <li className="relative group">
                <span className=" link group-hover:text-black group-hover:drop-shadow-none ">
                  Phone
                </span>

                <ul className="absolute hidden mt-0 group-hover:block top-7 left-0 bg-white shadow-lg rounded-md border border-gray-200 py-2 w-32 z-50">
                  <li className="text-[20px] px-3 py-2 text-black hover:text-sky-400 transform hover:scale-110  cursor-pointer">
                    <a href="#iphone">iPhone</a>
                  </li>
                  <li className="text-[20px] px-3 py-2 text-black hover:text-sky-400 transform hover:scale-110 cursor-pointer">
                    <a href="#">More...</a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <span className=" link group-hover:text-black group-hover:drop-shadow-none  ">
                  Laptop
                </span>
                <ul className="absolute hidden mt-0 group-hover:block top-7 left-0 bg-white  shadow-lg rounded-md border border-gray-200 py-2 w-[150px] z-50">
                  <li className="text-[20px] mt-0 px-3 py-2 text-black hover:text-sky-400 transform hover:scale-110 cursor-pointer">
                    <a href="#tuff">ASUS TUFF</a>
                  </li>
                  <li className="text-[20px] p-3 py-2 text-black hover:text-sky-400 transform hover:scale-110 cursor-pointer">
                    <a href="#rog">ROG</a>
                  </li>
                  <li className="text-[20px] px-3 py-2 text-black hover:text-sky-400  transform hover:scale-110 cursor-pointer">
                    <a href="#mac" >Mac</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#desktop" className="link">
                  Desktop
                </a>
              </li>
              <li>
                <a href="#Accesories" className="link">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#contact" className="link">
                  Contact
                </a>
              </li>
            </ul>

            {/* === Mobile dropdown menu === */}
            {open && (
              <ul className="flex flex-col gap-4 bg-white p-6 text-lg shadow-md md:hidden absolute top-full left-0 w-48">
                <li>
                  <a className="hover:text-blue-600" href="#Home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600" href="#iphone">
                    Phone
                  </a>
                </li>
                <li className="text-[17px]  text-black hover:text-blue-600  cursor-pointer">
                  <a href="#tuff">ASUS TUFF</a>
                </li>
                <li className="text-[18px]  text-black hover:text-blue-600  cursor-pointer">
                  <a href="#rog">ROG</a>
                </li>
                <li className="text-[18px]  text-black hover:text-blue-600  cursor-pointer">
                  <a href="#mac">Mac</a>
                </li>
                <li>
                  <a className="hover:text-blue-600" href="#desktop">
                    Desktop
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600" href="#Accesories">
                    Accessories
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            )}
          </nav>
          {/* Cart */}
          <Link to="/payment" className="relative">
            <i className="fa-solid fa-cart-shopping hover:text-sky-500"></i>
            {notification > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
                {notification}
              </span>
            )}
          </Link>

          {/* User */}
          <Link to="/login">
            <i className="fa-regular fa-user hover:text-sky-500"></i>
          </Link>
        </div>

        {/* Search bar (desktop only) */}
        <div className="relative hidden md:flex w-full max-w-md mx-auto">
          <input
            type="Search"
            placeholder="Search computer..."
            className="w-full px-4 py-2 pr-16 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button className="absolute w-20 right-0 top-1/2 -translate-y-1/2 bg-sky-600 text-white p-2 rounded-md hover:bg-sky-700 transition">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
