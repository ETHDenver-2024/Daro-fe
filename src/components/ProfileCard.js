import React from "react";
import cp from "../assets/profile/seattle.jpeg";
import { UserIcon } from "@heroicons/react/24/solid";
import logo from "../assets/profile/temp.png";

function PurpleButton(props) {
  const buttonStyle = {
    backgroundColor: "#9155D8",
    color: "#FFFFFF", // Text color
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <button style={buttonStyle} className="relative h-12 top-4 flex items-center hover:ease-in duration-300">
      <UserIcon className="h-5 w-5 whitespace-normal" />
      <p class="text-sm pl-2 text-wrap">{props.ButtonText}</p>
    </button>
  );
}

const Flip = () => {
  return (
    <div className="relative flex justify-center items-center top-[-55px]">
      <div className="w-32 h-32">
        <div className="inset-0 flex justify-center items-center rounded-full ">
          <div className="w-32 h-32 rounded-full shadow-lg hover:scale-x-[-1] ease-in-out duration-1000 hover:duration-1000 hover:ease-in-out border-[6px] border-white">
            <img
              src={logo}
              alt="Coin"
              className="w-full h-full rounded-full shadow-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProfileCard = () => {
  var profileName = "Vaibhav Vemula";
  return (
    <div className="w-11/12 mx-auto rounded-3xl ">
      <div class="box-border shadow-lg bg-white rounded-2xl">
        <div class="flex items-center justify-center flex-col ">
          <div class="h-[235px] w-[345px]">
            <img src={cp} alt="" className="rounded-t-lg h-36 w-full" />
            <Flip />
          </div>

          <h1 class="text-center text-xl text-black">{profileName}</h1>
          <h1 className="text-center text-base pt-1 text-gray-500">
            @vaibhaaaavvv
          </h1>
        </div>

        <div className="flex items-center justify-evenly pt-4 ">
          <div className="flex flex-col text-black basis-1/3">
            <h1 className="text-base">Posts</h1>
            <h1 className="text-base">14</h1>
          </div>

          <div className="flex flex-col text-black basis-1/3">
            <h1 className="text-base">Followers</h1>
            <h1 className="text-base">636</h1>
          </div>

          <div className="flex flex-col text-black basis-1/3">
            <h1 className="text-base">Following</h1>
            <h1 className="text-base">1088</h1>
          </div>
        </div>

        <div className="flex justify-center ">
          <PurpleButton ButtonText={"Profile"} />
        </div>
      </div>
    </div>
  );
};
