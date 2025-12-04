import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ notification = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-3xl md:text-4xl font-bold text-sky-500 hover:text-sky-600 transition"
            >
              Computer.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <ul className="flex items-center space-x-8 text-lg font-medium">
              <li>
                <a
                  href="#Home"
                  className="text-gray-800 hover:text-sky-500 transition"
                >
                  Home
                </a>
              </li>

              {/* Phone Dropdown */}
              <li className="relative group">
                <span className="cursor-pointer text-gray-800 hover:text-sky-500 transition">
                  Phone
                </span>
                <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <li>
                    <a
                      href="#iphone"
                      className="block px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-500 transition"
                    >
                      iPhone
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-500 transition"
                    >
                      More...
                    </a>
                  </li>
                </ul>
              </li>

              {/* Laptop Dropdown */}
              <li className="relative group">
                <span className="cursor-pointer text-gray-800 hover:text-sky-500 transition">
                  Laptop
                </span>
                <ul className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <li>
                    <a
                      href="#tuf"
                      className="block px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-500 transition"
                    >
                      ASUS TUF
                    </a>
                  </li>
                  <li>
                    <a
                      href="#rog"
                      className="block px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-500 transition"
                    >
                      ROG
                    </a>
                  </li>
                  <li>
                    <a
                      href="#mac"
                      className="block px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-500 transition"
                    >
                      Mac
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="#desktop"
                  className="text-gray-800 hover:text-sky-500 transition"
                >
                  Desktop
                </a>
              </li>
              <li>
                <a
                  href="#Accesories"
                  className="text-gray-800 hover:text-sky-500 transition"
                >
                  Accessories
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-800 hover:text-sky-500 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Side: Search + Icons */}
          <div className="flex items-center gap-4">
            {/* Desktop Search Bar */}
            <div className="hidden lg:block relative">
              <input
                type="text"
                placeholder="Search computer..."
                className="w-64 pl-4 pr-12 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-sky-500 hover:bg-sky-600 text-white p-2.5 rounded-full transition">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>

            {/* Cart & User Icons */}
            <div className="flex items-center gap-5 text-xl">
              {/* Cart */}
              <Link to="/payment" className="relative group">
                <i className="fa-solid fa-cart-shopping text-gray-700 group-hover:text-sky-500 transition"></i>
                {notification > 0 && (
                  <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {notification}
                  </span>
                )}
              </Link>

              {/* User */}
              <Link to="/login">
                <i className="fa-regular fa-user text-gray-700 hover:text-sky-500 transition"></i>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-2xl text-gray-700 hover:text-sky-500 transition"
              >
                <i
                  className={
                    mobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
                  }
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-in Menu */}
          <div className="fixed top-16 left-0 right-0 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden">
            <div className="px-6 py-6 space-y-4">
              <a
                href="#Home"
                className="block text-lg font-medium text-gray-800 hover:text-sky-500 transition py-2"
              >
                Home
              </a>
              <a
                href="#iphone"
                className="block text-lg font-medium text-gray-800 hover:text-sky-500 transition py-2"
              >
                Phone
              </a>

              <div className="pl-4 space-y-2 border-l-2 border-sky-200">
                <a
                  href="#tuf"
                  className="block text-gray-700 hover:text-sky-500 transition py-1"
                >
                  ASUS TUF
                </a>
                <a
                  href="#rog"
                  className="block text-gray-700 hover:text-sky-500 transition py-1"
                >
                  ROG
                </a>
                <a
                  href="#mac"
                  className="block text-gray-700 hover:text-sky-500 transition py-1"
                >
                  Mac
                </a>
              </div>

              <a
                href="#desktop"
                className="block text-lg font-medium text-gray-800 hover:text-sky-500 transition py-2"
              >
                Desktop
              </a>
              <a
                href="#Accesories"
                className="block text-lg font-medium text-gray-800 hover:text-sky-500 transition py-2"
              >
                Accessories
              </a>
              <a
                href="#contact"
                className="block text-lg font-medium text-gray-800 hover:text-sky-500 transition py-2"
              >
                Contact
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
