import React from "react";

function Navbar() {
  return (
    <>
      <div className="relative w-full text-white bg-black rounded-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span className="font-bold">LOGIN</span>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-100 hover:text-gray-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-100 hover:text-gray-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-100 hover:text-gray-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
           <input 
          type="serach"
          placeholder="Search"        
          id="serach"
          name="logo"
          className="text-center"
           />
          <button type="search " className="m-2 border-solid border-green-400 rounded-sm text-white bg-cyan-500 hover:bg-cyan-600 ...">
           <a href="www.google.com" className="m-1">Search</a>
          </button>

          <button type="search " className="m-2 border-solid border-green-400 rounded-sm text-white bg-cyan-500 hover:bg-cyan-600 ...">
           <a href="www.google.com" className="m-1">SignUP</a>
          </button>
          <button type="search " className="m-2 border-solid border-green-400 rounded-sm text-white bg-cyan-500 hover:bg-cyan-600 ...">
           <a href="www.google.com" className="m-1">LogIn</a>
          </button>
          </div>
          <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
