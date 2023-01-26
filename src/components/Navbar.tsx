import { NavLink } from "react-router-dom";
import React from "react";

const Navbar: React.FunctionComponent = () => {
  const handleClick = () => {
    const element = document.getElementById("mobile-menu") as HTMLElement;

    if (element.classList.contains("block")) {
      element.classList.remove("block");
      element.classList.add("hidden");
    } else {
      element.classList.remove("hidden");
      element.classList.add("block");
    }
  };

  return (
    <>
      <nav className="bg-gray-800 mb-5 sticky top-0">
        <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="navbar-collapse-button inline-flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={handleClick}
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    }
                    aria-current="page"
                  >
                    Homepage
                  </NavLink>

                  <NavLink
                    to="/example-1"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Example Page 1
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavLink
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Homepage
            </NavLink>

            <NavLink
              to="/example-1"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Example Page 1
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
