import React from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  ChatBubbleBottomCenterTextIcon,
  PlusIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { NavLink, useLocation } from "react-router-dom";

const SideNavbar = () => {
  const location = useLocation();
  return (
    <>
      <div exit={{ opacity: 0 }} className="flex flex-col items-center text-center justify-evenly shadow-xl bg-white max-h-screen min-h-screen rounded-tr-[50px]">
        <div>
          <NavLink to='/'>
            <img
              src={require(`../assets/logo/logo.png`)}
              alt=""
              className="h-28"
            />
          </NavLink>
        </div>

        <NavLink to="/" className="cursor-logo">
          {location.pathname === "/" ? (
            <div className="flex items-center">
              <div className="bg-[#7f5ed2] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
                <HomeIcon className="h-12 w-12 text-[#734cd5] bg-[#ffffff85] rounded-full p-2" />
                <h1 className="pt-1 text-white font-semibold">Home</h1>
              </div>
              <div className="relative right-3">
                <div className="h-5 w-5 bg-[#7f5ed2] rounded-sm rotate-45"></div>
              </div>
            </div>
          ) : (
            <div className="bg-white hover:border-2 hover:border-[#7f5ed2a1] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
              <HomeIcon className="h-12 w-12 text-blue-500 bg-[#3b83f636] rounded-full p-2" />
              <h1 className="pt-1 text-black font-semibold">Home</h1>
            </div>
          )}
        </NavLink>

        <NavLink to="/search">
          {location.pathname === "/search" ? (
            <div className="flex items-center">
              <div className="bg-[#7f5ed2] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
                <MagnifyingGlassIcon className="h-12 w-12 text-[#734cd5] bg-[#ffffff85] rounded-full p-2" />
                <h1 className="pt-1 text-white font-semibold">Search</h1>
              </div>
              <div className="relative right-3">
                <div className="h-5 w-5 bg-[#7f5ed2] rounded-sm rotate-45"></div>
              </div>
            </div>
          ) : (
            <div className="hover:border-2 hover:border-[#7f5ed2a1] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
              <MagnifyingGlassIcon className="h-12 w-12 text-pink-500 bg-[#ec489a23] rounded-full p-2" />
              <h1 className="pt-1 font-semibold">Search</h1>
            </div>
          )}
        </NavLink>

        <NavLink to="/create" >
          {location.pathname === "/create" ? (
            <div className="flex items-center">
              <div className="bg-[#7f5ed2] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
                <PlusIcon className="h-12 w-12 text-[#734cd5] bg-[#ffffff85] rounded-full p-2" />
                <h1 className="pt-1 text-white font-semibold">Create</h1>
              </div>
              <div className="relative right-3">
                <div className="h-5 w-5 bg-[#7f5ed2] rounded-sm rotate-45"></div>
              </div>
            </div>
          ) : (
            <div className="hover:border-2 hover:border-[#7f5ed2a1] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
              <PlusIcon className="h-12 w-12 text-orange-500 bg-[#f9751629] rounded-full p-2" />
              <h1 className="pt-1 font-semibold">Create</h1>
            </div>
          )}
        </NavLink>

        <NavLink to="/messages">
          {location.pathname === "/messages" ? (
            <div className="flex items-center">
              <div className="bg-[#7f5ed2] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
                <ChatBubbleBottomCenterTextIcon className="h-12 w-12 text-[#734cd5] bg-[#ffffff85] rounded-full p-2" />
                <h1 className="pt-1 text-white font-semibold">Messages</h1>
              </div>
              <div className="relative right-3">
                <div className="h-5 w-5 bg-[#7f5ed2] rounded-sm rotate-45"></div>
              </div>
            </div>
          ) : (
            <div className="hover:border-2 hover:border-[#7f5ed2a1] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
              <ChatBubbleBottomCenterTextIcon className="h-12 w-12 text-green-500 bg-[#22c55e3c] rounded-full p-2" />
              <h1 className="pt-1 font-semibold">Messages</h1>
            </div>
          )}
        </NavLink>

        <NavLink to="/settings" >
          {location.pathname === "/settings" ? (
            <div className="flex items-center">
              <div className="bg-[#7f5ed2] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
                <Cog6ToothIcon className="h-12 w-12 text-[#734cd5] bg-[#ffffff85] rounded-full p-2" />
                <h1 className="pt-1 text-white font-semibold">Settings</h1>
              </div>
              <div className="relative right-3">
                <div className="h-5 w-5 bg-[#7f5ed2] rounded-sm rotate-45"></div>
              </div>
            </div>
          ) : (
            <div className="hover:border-2 hover:border-[#7f5ed2a1] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
              <Cog6ToothIcon className="h-12 w-12 text-gray-600 bg-[#4b556329] rounded-full p-2" />
              <h1 className="pt-1 font-semibold">Settings</h1>
            </div>
          )}
        </NavLink>
      </div>
    </>
  );
};

export default SideNavbar;
