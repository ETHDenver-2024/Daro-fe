import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

const NavBar = () => {

  const location = useLocation();
  return (
    <>
      <div className="text-5xl sticky z-10 bg-slate-200 h-20 w-[96%] mx-auto border-b-2 border-gray-300">
        <div className="flex justify-evenly items-center h-full">
          <div className="flex justify-between items-center w-full">
            {location.pathname === "/search" ? (
              <div class="relative items-center w-96 h-12 rounded-3xl focus-within:shadow-lg overflow-hidden">
                
                
              </div>
            ) : (
              <div class="relative flex items-center w-96 h-12 rounded-3xl focus-within:shadow-lg bg-white overflow-hidden">
                <div class="grid place-items-center h-full w-12 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <input
                  class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="Search..."
                />
              </div>
            )}
            {/* <div class="relative flex items-center w-96 h-12 rounded-3xl focus-within:shadow-lg bg-white overflow-hidden">
              <div class="grid place-items-center h-full w-12 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search..."
              />
            </div> */}
            <div className="flex items-center">
              <BellIcon className="h-14 w-14 p-3 text-[#7f5ed2] rounded-full" />
              <img
                src={require("../assets/profile/temp.png")}
                alt=""
                className="h-14 mr-6 ml-4 w-14 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
